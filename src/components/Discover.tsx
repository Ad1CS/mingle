import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { apiFetch } from '../lib/api';

interface DiscoveryProfile {
  id: string;
  display_name: string;
  age: number;
  city: string;
  bio: string;
  occupation: string;
  education: string;
  gender: string;
  pronouns: string;
  relationship_intention: string;
  verified: boolean;
  profile_completion: number;
  demo: boolean;
}

interface DiscoveryResponse {
  results: DiscoveryProfile[];
  next_cursor: string | null;
}

const avatarColors = [
  'bg-[#CFE8DF] text-[#174D3B]',
  'bg-[#F6D6C9] text-[#6A2C20]',
  'bg-[#D9D8F0] text-[#373167]',
  'bg-[#F3E2A9] text-[#5A470B]',
  'bg-[#CCE1F2] text-[#204A68]',
  'bg-[#E7D2E8] text-[#59305B]',
];

function initials(name: string) {
  return name
    .split(' ')
    .map(part => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function ProfileSkeleton() {
  return (
    <div className="overflow-hidden rounded-lg border border-outline-variant bg-surface">
      <div className="h-44 animate-pulse bg-surface-container-high" />
      <div className="space-y-3 p-5">
        <div className="h-6 w-2/3 animate-pulse rounded bg-surface-container-high" />
        <div className="h-4 w-1/3 animate-pulse rounded bg-surface-container-high" />
        <div className="h-16 animate-pulse rounded bg-surface-container-low" />
      </div>
    </div>
  );
}

export default function Discover() {
  const [profiles, setProfiles] = useState<DiscoveryProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadProfiles = useCallback(async () => {
    setLoading(true);
    setError('');

    try {
      const data = await apiFetch('/discover/') as DiscoveryResponse;
      setProfiles(data.results);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not load profiles');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadProfiles();
  }, [loadProfiles]);

  return (
    <div className="min-h-screen bg-[#F8F7F5] text-on-background font-body-md">
      <header className="sticky top-0 z-40 border-b border-outline-variant bg-surface">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
          <Link to="/discover" className="font-headline-sm text-headline-sm font-bold text-primary">
            Mingle
          </Link>
          <nav className="hidden items-center gap-2 md:flex" aria-label="Primary navigation">
            <Link to="/discover" className="rounded-lg bg-surface-container-low px-4 py-2 font-bold text-primary">
              Discover
            </Link>
            <Link to="/messages" className="rounded-lg px-4 py-2 text-on-surface-variant hover:bg-surface-container-low">
              Messages
            </Link>
            <Link to="/meetups" className="rounded-lg px-4 py-2 text-on-surface-variant hover:bg-surface-container-low">
              Meetups
            </Link>
            <Link to="/profile/edit" className="rounded-lg px-4 py-2 text-on-surface-variant hover:bg-surface-container-low">
              Profile
            </Link>
          </nav>
          <button
            type="button"
            onClick={() => void loadProfiles()}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-outline-variant bg-surface text-on-surface-variant hover:bg-surface-container-low"
            title="Refresh profiles"
            aria-label="Refresh profiles"
          >
            <span className="material-symbols-outlined">refresh</span>
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 pb-28 pt-8 lg:px-8 lg:pb-12">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 font-label-caps text-label-caps uppercase text-primary">Discover</p>
            <h1 className="font-headline-md text-headline-md font-bold text-on-surface">Meet someone new</h1>
          </div>
          {!loading && !error && profiles.length > 0 && (
            <p className="text-sm text-on-surface-variant">{profiles.length} profiles</p>
          )}
        </div>

        {loading && (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3" aria-label="Loading profiles">
            {Array.from({ length: 6 }, (_, index) => <ProfileSkeleton key={index} />)}
          </div>
        )}

        {!loading && error && (
          <section className="flex min-h-[420px] flex-col items-center justify-center border-y border-outline-variant text-center">
            <span className="material-symbols-outlined mb-4 text-[42px] text-on-surface-variant">cloud_off</span>
            <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">Profiles could not load</h2>
            <p className="mt-2 max-w-md text-on-surface-variant">{error}</p>
            <button
              type="button"
              onClick={() => void loadProfiles()}
              className="mt-6 rounded-lg bg-primary px-5 py-3 font-bold text-on-primary"
            >
              Try again
            </button>
          </section>
        )}

        {!loading && !error && profiles.length === 0 && (
          <section className="flex min-h-[420px] flex-col items-center justify-center border-y border-outline-variant text-center">
            <span className="material-symbols-outlined mb-4 text-[42px] text-on-surface-variant">explore_off</span>
            <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">No profiles available</h2>
            <p className="mt-2 max-w-md text-on-surface-variant">Check back after more people complete their profiles.</p>
          </section>
        )}

        {!loading && !error && profiles.length > 0 && (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {profiles.map((profile, index) => (
              <article
                key={profile.id}
                className="overflow-hidden rounded-lg border border-outline-variant bg-surface shadow-[0_8px_24px_rgba(33,31,28,0.06)]"
              >
                <div className={`relative flex h-44 items-center justify-center ${avatarColors[index % avatarColors.length]}`}>
                  <span className="text-5xl font-bold" aria-hidden="true">{initials(profile.display_name)}</span>
                  {profile.demo && (
                    <span className="absolute left-3 top-3 rounded bg-surface px-2 py-1 text-xs font-bold uppercase text-on-surface">
                      Demo
                    </span>
                  )}
                  {profile.verified && (
                    <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-surface text-primary" title="Verified profile">
                      <span className="material-symbols-outlined text-[20px]">verified</span>
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                      {profile.display_name}, {profile.age}
                    </h2>
                    <span className="shrink-0 text-sm text-on-surface-variant">{profile.city}</span>
                  </div>
                  <p className="mt-1 font-medium text-primary">{profile.occupation}</p>
                  <p className="mt-4 min-h-20 text-sm leading-6 text-on-surface-variant">{profile.bio}</p>
                  <div className="mt-5 border-t border-outline-variant pt-4">
                    <p className="text-xs font-bold uppercase text-on-surface-variant">Looking for</p>
                    <p className="mt-1 text-sm text-on-surface">{profile.relationship_intention}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      <nav className="fixed bottom-0 left-0 z-50 flex h-20 w-full items-center justify-around border-t border-outline-variant bg-surface px-3 md:hidden" aria-label="Mobile navigation">
        <Link to="/discover" className="flex min-w-16 flex-col items-center rounded-lg bg-primary-container p-2 text-on-primary-container">
          <span className="material-symbols-outlined">explore</span>
          <span className="mt-1 text-[10px] font-bold">Discover</span>
        </Link>
        <Link to="/messages" className="flex min-w-16 flex-col items-center rounded-lg p-2 text-on-surface-variant">
          <span className="material-symbols-outlined">chat_bubble</span>
          <span className="mt-1 text-[10px] font-bold">Messages</span>
        </Link>
        <Link to="/meetups" className="flex min-w-16 flex-col items-center rounded-lg p-2 text-on-surface-variant">
          <span className="material-symbols-outlined">event</span>
          <span className="mt-1 text-[10px] font-bold">Meetups</span>
        </Link>
        <Link to="/profile/edit" className="flex min-w-16 flex-col items-center rounded-lg p-2 text-on-surface-variant">
          <span className="material-symbols-outlined">person</span>
          <span className="mt-1 text-[10px] font-bold">Profile</span>
        </Link>
      </nav>
    </div>
  );
}

