import React from 'react';
import { Link } from 'react-router-dom';

export default function Meetups() {
  return (
    <div className="min-h-screen bg-background text-on-background font-body-md antialiased">
      <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-4 md:px-8 bg-surface border-b border-outline-variant">
        <Link to="/discover" className="font-headline-sm text-headline-sm font-bold text-primary">
          Mingle
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link to="/discover" className="text-on-surface-variant hover:text-primary">Discover</Link>
          <Link to="/messages" className="text-on-surface-variant hover:text-primary">Messages</Link>
          <Link to="/meetups" className="text-primary font-bold">Meetups</Link>
          <Link to="/profile/edit" className="text-on-surface-variant hover:text-primary">Profile</Link>
        </nav>
      </header>

      <main className="mx-auto flex min-h-[calc(100vh-73px)] max-w-3xl flex-col items-center justify-center px-4 text-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-surface-container">
          <span className="material-symbols-outlined text-[32px] text-on-surface-variant">event</span>
        </div>
        <h1 className="font-headline-sm text-headline-sm text-on-surface mb-2">No meetups yet</h1>
        <p className="font-body-md text-on-surface-variant max-w-md">
          Meetup planning will appear here once matches and scheduling APIs are available.
        </p>
      </main>
    </div>
  );
}
