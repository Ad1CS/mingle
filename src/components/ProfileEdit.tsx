import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { apiFetch } from '../lib/api';
import PhotoManager from './PhotoManager';

interface ProfileData {
  id: string;
  email: string;
  display_name: string;
  bio: string;
  occupation: string;
  education: string;
  gender: string;
  pronouns: string;
  relationship_intention: string;
  city: string;
  primary_photo_url?: string;
}

export default function ProfileEdit() {

  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    async function loadProfile() {
      try {
        const data = await apiFetch('/me/profile/');
        setProfile(data);
      } catch (err: any) {
        setError(err.message || 'Failed to load profile');
      } finally {
        setLoading(false);
      }
    }
    loadProfile();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (!profile) return;
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    setSuccess('');
    try {
      const data = await apiFetch('/me/profile/', {
        method: 'PATCH',
        body: JSON.stringify({
          display_name: profile?.display_name,
          bio: profile?.bio,
          occupation: profile?.occupation,
          education: profile?.education,
          gender: profile?.gender,
          pronouns: profile?.pronouns,
          relationship_intention: profile?.relationship_intention,
          city: profile?.city,
        })
      });
      setProfile(data);
      setSuccess('Profile updated successfully!');
    } catch (err: any) {
      setError(err.message || 'Failed to update profile');
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background text-on-surface">
        <div className="flex flex-col items-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p className="mt-4 font-label-caps text-label-caps text-on-surface-variant">Loading Profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md antialiased pb-20">
      <header className="sticky top-0 z-50 flex justify-between items-center px-4 py-4 md:px-8 bg-surface border-b border-outline-variant">
        <div className="flex items-center gap-4">
          <Link to="/discover" className="text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h1 className="font-headline-sm text-headline-sm font-bold text-primary">Edit Profile</h1>
        </div>
        <button onClick={handleLogout} className="text-on-surface-variant hover:text-primary transition-colors text-sm font-bold flex items-center gap-1">
          <span className="material-symbols-outlined text-[18px]">logout</span>
          Logout
        </button>
      </header>

      <main className="max-w-2xl mx-auto p-4 md:p-8">
        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6 font-body-md">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-green-50 text-green-700 p-4 rounded-xl mb-6 font-body-md">
            {success}
          </div>
        )}

        <div className="mb-6">
          <PhotoManager
            onPhotosUpdated={(url) => {
              if (profile) {
                setProfile({ ...profile, primary_photo_url: url });
              }
            }}
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-surface p-6 rounded-2xl shadow-sm border border-outline-variant">
            <h2 className="font-headline-sm text-lg font-bold mb-4">Basic Info</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-on-surface mb-1">Display Name</label>
                <input type="text" name="display_name" value={profile?.display_name || ''} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-on-surface mb-1">City</label>
                <input type="text" name="city" value={profile?.city || ''} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-on-surface mb-1">Bio</label>
                <textarea name="bio" value={profile?.bio || ''} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" />
              </div>
            </div>
          </div>

          <div className="bg-surface p-6 rounded-2xl shadow-sm border border-outline-variant">
            <h2 className="font-headline-sm text-lg font-bold mb-4">Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-on-surface mb-1">Occupation</label>
                <input type="text" name="occupation" value={profile?.occupation || ''} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-on-surface mb-1">Education</label>
                <input type="text" name="education" value={profile?.education || ''} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-on-surface mb-1">Gender</label>
                <select name="gender" value={profile?.gender || ''} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors">
                  <option value="">Select...</option>
                  <option value="M">Man</option>
                  <option value="F">Woman</option>
                  <option value="NB">Non-binary</option>
                  <option value="O">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-on-surface mb-1">Pronouns</label>
                <input type="text" name="pronouns" value={profile?.pronouns || ''} onChange={handleChange} placeholder="e.g. they/them" className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-on-surface mb-1">Relationship Intention</label>
                <select name="relationship_intention" value={profile?.relationship_intention || ''} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors">
                  <option value="">Select...</option>
                  <option value="long_term">Long-term partner</option>
                  <option value="short_term">Short-term fun</option>
                  <option value="friends">New friends</option>
                  <option value="figuring_out">Still figuring it out</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <button type="submit" disabled={saving} className="bg-primary text-on-primary px-8 py-3 rounded-xl font-bold hover:bg-primary-container disabled:opacity-70 transition-colors">
              {saving ? 'Saving...' : 'Save Profile'}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
