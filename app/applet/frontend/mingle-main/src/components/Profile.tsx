import React, { useEffect, useState } from 'react';
import { useAuth } from '../api/AuthContext';
import { apiClient } from '../api/client';

export default function Profile() {
  const { user, logout } = useAuth();
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    async function loadProfile() {
      try {
        const data = await apiClient('/me/profile/');
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
      const data = await apiClient('/me/profile/', {
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

  if (loading) return <div className="p-4">Loading Profile...</div>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Your Profile</h1>
        <button onClick={logout} className="text-red-600 font-medium hover:underline">Logout</button>
      </div>

      {error && <div className="mb-4 p-3 bg-red-50 text-red-600 rounded">{error}</div>}
      {success && <div className="mb-4 p-3 bg-green-50 text-green-700 rounded">{success}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Display Name</label>
            <input type="text" name="display_name" value={profile?.display_name || ''} onChange={handleChange} className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">City</label>
            <input type="text" name="city" value={profile?.city || ''} onChange={handleChange} className="w-full p-2 border rounded" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Bio</label>
            <textarea name="bio" value={profile?.bio || ''} onChange={handleChange} rows={4} className="w-full p-2 border rounded" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Occupation</label>
            <input type="text" name="occupation" value={profile?.occupation || ''} onChange={handleChange} className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Education</label>
            <input type="text" name="education" value={profile?.education || ''} onChange={handleChange} className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Gender</label>
            <select name="gender" value={profile?.gender || ''} onChange={handleChange} className="w-full p-2 border rounded">
              <option value="">Select...</option>
              <option value="M">Man</option>
              <option value="F">Woman</option>
              <option value="NB">Non-binary</option>
              <option value="O">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Pronouns</label>
            <input type="text" name="pronouns" value={profile?.pronouns || ''} onChange={handleChange} placeholder="e.g. they/them" className="w-full p-2 border rounded" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Relationship Intention</label>
            <select name="relationship_intention" value={profile?.relationship_intention || ''} onChange={handleChange} className="w-full p-2 border rounded">
              <option value="">Select...</option>
              <option value="long_term">Long-term partner</option>
              <option value="short_term">Short-term fun</option>
              <option value="friends">New friends</option>
              <option value="figuring_out">Still figuring it out</option>
            </select>
          </div>
        </div>

        <button type="submit" disabled={saving} className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 mt-4">
          {saving ? 'Saving...' : 'Save Profile'}
        </button>
      </form>
    </div>
  );
}
