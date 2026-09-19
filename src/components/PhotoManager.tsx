import React, { useEffect, useRef, useState } from 'react';
import { apiFetch, UserPhoto, PhotosResponse } from '../lib/api';

interface PhotoManagerProps {
  onPhotosUpdated?: (primaryPhotoUrl?: string) => void;
}

export default function PhotoManager({ onPhotosUpdated }: PhotoManagerProps) {
  const [photos, setPhotos] = useState<UserPhoto[]>([]);
  const [maxPhotos, setMaxPhotos] = useState<number>(6);
  const [loading, setLoading] = useState<boolean>(true);
  const [uploading, setUploading] = useState<boolean>(false);
  const [pendingPreview, setPendingPreview] = useState<{ url: string; position: number } | null>(null);
  const [actionLoadingId, setActionLoadingId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [unsupported, setUnsupported] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const activePreviewUrlRef = useRef<string | null>(null);

  // Clean up object URLs when component unmounts
  useEffect(() => {
    return () => {
      if (activePreviewUrlRef.current) {
        URL.revokeObjectURL(activePreviewUrlRef.current);
        activePreviewUrlRef.current = null;
      }
    };
  }, []);

  const loadPhotos = async () => {
    try {
      const data: PhotosResponse = await apiFetch('/me/photos/');
      const fetchedPhotos = (data.results || []).sort((a, b) => a.position - b.position);
      setPhotos(fetchedPhotos);
      if (typeof data.max_photos === 'number') {
        setMaxPhotos(Math.min(data.max_photos, 6));
      }
      setUnsupported(false);

      const primary = fetchedPhotos.find(p => p.is_primary) || fetchedPhotos[0];
      if (onPhotosUpdated && primary) {
        onPhotosUpdated(primary.image_url);
      }
    } catch (err: any) {
      if (err?.status === 404) {
        setUnsupported(true);
      } else {
        setError(err.message || 'Failed to load photos');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPhotos();
  }, []);

  const showSuccessMessage = (msg: string) => {
    setSuccess(msg);
    setTimeout(() => {
      setSuccess(prev => (prev === msg ? null : prev));
    }, 3500);
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Reset error & success
    setError(null);
    setSuccess(null);

    // Validate MIME type: JPEG, PNG, WebP only
    const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      setError('Please select a JPEG, PNG, or WebP image.');
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    if (photos.length >= maxPhotos) {
      setError(`You have reached the maximum limit of ${maxPhotos} photos.`);
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    // Create object URL for local preview
    const previewUrl = URL.createObjectURL(file);
    activePreviewUrlRef.current = previewUrl;
    const nextPosition = photos.length;
    setPendingPreview({ url: previewUrl, position: nextPosition });
    setUploading(true);

    try {
      const formData = new FormData();
      formData.append('image', file);
      formData.append('position', nextPosition.toString());
      if (photos.length === 0) {
        formData.append('is_primary', 'true');
      }

      const newPhoto: UserPhoto = await apiFetch('/me/photos/', {
        method: 'POST',
        body: formData,
      });

      // Revoke preview URL immediately after upload completes
      URL.revokeObjectURL(previewUrl);
      activePreviewUrlRef.current = null;
      setPendingPreview(null);

      // Update state with newly uploaded photo
      setPhotos(prev => {
        const nextList = [...prev.filter(p => p.id !== newPhoto.id), newPhoto].sort((a, b) => a.position - b.position);
        const primary = nextList.find(p => p.is_primary) || nextList[0];
        if (onPhotosUpdated && primary) {
          onPhotosUpdated(primary.image_url);
        }
        return nextList;
      });

      showSuccessMessage('Photo uploaded successfully!');
    } catch (err: any) {
      if (activePreviewUrlRef.current) {
        URL.revokeObjectURL(activePreviewUrlRef.current);
        activePreviewUrlRef.current = null;
      }
      setPendingPreview(null);
      if (err?.status === 404) {
        setUnsupported(true);
      } else {
        setError(err.message || 'Failed to upload photo. Please try again.');
      }
    } finally {
      setUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleSetPrimary = async (photo: UserPhoto) => {
    if (photo.is_primary || actionLoadingId) return;

    setError(null);
    setSuccess(null);
    setActionLoadingId(photo.id);

    try {
      await apiFetch(`/me/photos/${photo.id}/`, {
        method: 'PATCH',
        body: JSON.stringify({ is_primary: true }),
      });

      setPhotos(prev =>
        prev.map(p => ({
          ...p,
          is_primary: p.id === photo.id,
        }))
      );

      if (onPhotosUpdated) {
        onPhotosUpdated(photo.image_url);
      }

      showSuccessMessage('Primary photo updated.');
    } catch (err: any) {
      setError(err.message || 'Failed to update primary photo');
    } finally {
      setActionLoadingId(null);
    }
  };

  const handleMove = async (index: number, direction: 'left' | 'right') => {
    const targetIndex = direction === 'left' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= photos.length || actionLoadingId) return;

    setError(null);
    setSuccess(null);
    const currentPhoto = photos[index];
    const targetPhoto = photos[targetIndex];
    setActionLoadingId(currentPhoto.id);

    try {
      // Update position via PATCH
      await apiFetch(`/me/photos/${currentPhoto.id}/`, {
        method: 'PATCH',
        body: JSON.stringify({ position: targetPhoto.position }),
      });

      // Optimistically swap positions in UI
      setPhotos(prev => {
        const next = [...prev];
        const tempPos = currentPhoto.position;
        next[index] = { ...currentPhoto, position: targetPhoto.position };
        next[targetIndex] = { ...targetPhoto, position: tempPos };
        return next.sort((a, b) => a.position - b.position);
      });

      showSuccessMessage('Photo order updated.');
    } catch (err: any) {
      setError(err.message || 'Failed to change photo position');
      loadPhotos();
    } finally {
      setActionLoadingId(null);
    }
  };

  const handleDeleteConfirmed = async (photo: UserPhoto) => {
    setActionLoadingId(photo.id);
    setError(null);
    setSuccess(null);

    try {
      await apiFetch(`/me/photos/${photo.id}/`, {
        method: 'DELETE',
      });

      setPhotos(prev => {
        const remaining = prev.filter(p => p.id !== photo.id);
        const primary = remaining.find(p => p.is_primary) || remaining[0];
        if (onPhotosUpdated) {
          onPhotosUpdated(primary ? primary.image_url : undefined);
        }
        return remaining;
      });

      setDeletingId(null);
      showSuccessMessage('Photo deleted.');
    } catch (err: any) {
      setError(err.message || 'Failed to delete photo');
    } finally {
      setActionLoadingId(null);
    }
  };

  if (unsupported) {
    return (
      <div className="bg-surface p-6 rounded-2xl shadow-sm border border-outline-variant">
        <h2 className="font-headline-sm text-lg font-bold mb-3">Photos</h2>
        <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant text-sm text-on-surface-variant flex items-center gap-3">
          <span className="material-symbols-outlined text-base shrink-0">info</span>
          <span>Photo uploads are not enabled by the backend yet.</span>
        </div>
      </div>
    );
  }

  const slotsCount = maxPhotos;
  const isMaxReached = photos.length >= maxPhotos;

  return (
    <div className="bg-surface p-6 rounded-2xl shadow-sm border border-outline-variant">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
        <div>
          <h2 className="font-headline-sm text-lg font-bold">Photos</h2>
          <p className="text-xs text-on-surface-variant mt-0.5">
            Add up to {maxPhotos} photos. Your primary photo is shown first on your profile.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant">
            {photos.length} / {maxPhotos} slots
          </span>
        </div>
      </div>

      {error && (
        <div className="p-3 bg-red-50 text-red-700 text-sm rounded-xl mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-base">error</span>
            <span>{error}</span>
          </div>
          <button
            type="button"
            onClick={() => setError(null)}
            className="text-red-700 hover:text-red-900 text-xs font-bold px-2 py-1"
            aria-label="Dismiss error"
          >
            Dismiss
          </button>
        </div>
      )}

      {success && (
        <div className="p-3 bg-green-50 text-green-700 text-sm rounded-xl mb-4 flex items-center justify-between animate-fadeIn">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-base">check_circle</span>
            <span>{success}</span>
          </div>
          <button
            type="button"
            onClick={() => setSuccess(null)}
            className="text-green-700 hover:text-green-900 text-xs font-bold px-2 py-1"
            aria-label="Dismiss message"
          >
            Dismiss
          </button>
        </div>
      )}

      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 py-8">
          {[1, 2, 3].map(i => (
            <div
              key={i}
              className="aspect-[3/4] rounded-xl bg-surface-container animate-pulse flex items-center justify-center border border-outline-variant/40"
            >
              <span className="material-symbols-outlined text-outline-variant text-3xl">image</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
          {/* Render uploaded photos */}
          {photos.map((photo, index) => {
            const isDeleting = deletingId === photo.id;
            const isBusy = actionLoadingId === photo.id;

            return (
              <div
                key={photo.id}
                className={`group relative aspect-[3/4] rounded-xl overflow-hidden bg-surface-container-high border ${
                  photo.is_primary
                    ? 'border-primary ring-2 ring-primary ring-offset-2'
                    : 'border-outline-variant hover:border-primary/50'
                } transition-all duration-200 flex flex-col justify-between`}
              >
                {/* Photo image */}
                <img
                  src={photo.image_url}
                  alt={`Profile photo ${index + 1}`}
                  className="w-full h-full object-cover select-none"
                  loading="lazy"
                />

                {/* Primary Photo Badge */}
                {photo.is_primary && (
                  <div className="absolute top-2 left-2 z-10 flex items-center gap-1 bg-primary text-on-primary px-2 py-0.5 rounded-full text-[11px] font-bold shadow-sm">
                    <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                    <span>Primary</span>
                  </div>
                )}

                {/* Busy / Saving Spinner Overlay */}
                {isBusy && (
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center z-20">
                    <div className="h-6 w-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}

                {/* Delete Confirmation Overlay */}
                {isDeleting && (
                  <div className="absolute inset-0 bg-neutral-900/90 backdrop-blur-sm p-3 flex flex-col items-center justify-center text-center z-30 animate-fadeIn">
                    <span className="material-symbols-outlined text-red-400 text-2xl mb-1">delete</span>
                    <p className="text-white text-xs font-semibold mb-3">Delete this photo?</p>
                    <div className="flex gap-2 w-full justify-center">
                      <button
                        type="button"
                        onClick={() => setDeletingId(null)}
                        className="px-2.5 py-1 text-xs rounded-lg bg-neutral-700 text-white hover:bg-neutral-600 transition-colors"
                        title="Cancel deletion"
                        aria-label="Cancel deletion"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteConfirmed(photo)}
                        className="px-2.5 py-1 text-xs rounded-lg bg-red-600 text-white font-bold hover:bg-red-700 transition-colors"
                        title="Confirm deletion"
                        aria-label="Confirm delete photo"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}

                {/* Overlay Action Bar on Hover/Focus */}
                {!isDeleting && (
                  <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-between opacity-90 sm:opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity z-10">
                    {/* Order Controls */}
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        disabled={index === 0 || !!actionLoadingId}
                        onClick={() => handleMove(index, 'left')}
                        className="w-7 h-7 rounded-full bg-black/50 hover:bg-black/80 text-white disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                        title="Move photo earlier"
                        aria-label="Move photo earlier"
                      >
                        <span className="material-symbols-outlined text-[16px]">chevron_left</span>
                      </button>
                      <button
                        type="button"
                        disabled={index === photos.length - 1 || !!actionLoadingId}
                        onClick={() => handleMove(index, 'right')}
                        className="w-7 h-7 rounded-full bg-black/50 hover:bg-black/80 text-white disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                        title="Move photo later"
                        aria-label="Move photo later"
                      >
                        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                      </button>
                    </div>

                    {/* Make Primary & Delete Buttons */}
                    <div className="flex items-center gap-1">
                      {!photo.is_primary && (
                        <button
                          type="button"
                          disabled={!!actionLoadingId}
                          onClick={() => handleSetPrimary(photo)}
                          className="w-7 h-7 rounded-full bg-black/50 hover:bg-primary text-white flex items-center justify-center transition-colors"
                          title="Set as primary photo"
                          aria-label="Set as primary photo"
                        >
                          <span className="material-symbols-outlined text-[16px]">star</span>
                        </button>
                      )}

                      <button
                        type="button"
                        disabled={!!actionLoadingId}
                        onClick={() => setDeletingId(photo.id)}
                        className="w-7 h-7 rounded-full bg-black/50 hover:bg-red-600 text-white flex items-center justify-center transition-colors"
                        title="Delete photo"
                        aria-label="Delete photo"
                      >
                        <span className="material-symbols-outlined text-[16px]">delete</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Pending Upload Local Preview Tile */}
          {pendingPreview && (
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-surface-container-high border border-primary/60 flex flex-col items-center justify-center">
              <img
                src={pendingPreview.url}
                alt="Uploading preview"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-2 text-center text-white">
                <div className="h-7 w-7 border-2 border-white border-t-transparent rounded-full animate-spin mb-2"></div>
                <span className="text-xs font-semibold">Uploading...</span>
              </div>
            </div>
          )}

          {/* Add Photo Tile Button */}
          {!isMaxReached && !pendingPreview && (
            <button
              type="button"
              disabled={uploading}
              onClick={() => fileInputRef.current?.click()}
              className="aspect-[3/4] rounded-xl border-2 border-dashed border-outline-variant hover:border-primary hover:bg-surface-container-low transition-all duration-200 flex flex-col items-center justify-center gap-2 text-on-surface-variant hover:text-primary group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              title="Add a photo"
              aria-label="Add a photo"
            >
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center group-hover:scale-110 group-hover:bg-primary-container group-hover:text-on-primary-container transition-all">
                <span className="material-symbols-outlined text-2xl">add_a_photo</span>
              </div>
              <div className="text-center px-2">
                <span className="text-xs font-bold block">Add Photo</span>
                <span className="text-[10px] text-on-surface-variant block mt-0.5">JPEG, PNG, WebP</span>
              </div>
            </button>
          )}

          {/* Remaining Empty Slots Placeholders (Up to 6 total slots) */}
          {Array.from({
            length: Math.max(0, slotsCount - photos.length - (pendingPreview ? 1 : 0) - (!isMaxReached && !pendingPreview ? 1 : 0)),
          }).map((_, idx) => (
            <div
              key={`empty-${idx}`}
              className="aspect-[3/4] rounded-xl border border-dashed border-outline-variant/50 bg-surface-container-lowest flex flex-col items-center justify-center text-outline-variant/70"
            >
              <span className="material-symbols-outlined text-2xl">image</span>
              <span className="text-[11px] mt-1 font-medium">Slot {photos.length + (pendingPreview ? 1 : 0) + (!isMaxReached && !pendingPreview ? 1 : 0) + idx + 1}</span>
            </div>
          ))}
        </div>
      )}

      {/* Hidden real file input */}
      <input
        type="file"
        ref={fileInputRef}
        accept="image/jpeg,image/png,image/webp"
        onChange={handleFileSelect}
        className="hidden"
        disabled={uploading || isMaxReached}
        aria-label="Upload photo file input"
      />
    </div>
  );
}
