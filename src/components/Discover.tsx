import React from 'react';
import { Link } from 'react-router-dom';

export default function Discover() {
  return (
    <div className="bg-background text-on-background font-body-md text-body-md flex h-screen overflow-hidden">
      {/* SideNavBar (Shared Component) */}
      <nav className="bg-surface dark:bg-surface border-r border-outline-variant hidden lg:flex flex-col h-full py-8 px-6 w-64 shrink-0 shadow-[0_4px_20px_rgba(0,0,0,0.03)] z-10">
        {/* Header */}
        <div className="mb-12 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden shrink-0 border border-outline-variant">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAO28ALmvv27sqm1KK7TQtsAp3Z8xqfdW2kFCc1aAIwoUgRcn1wFrwTFjL_84D8ch9DqIAN2vNjk7u_VFuVwDJBG-BDR12m7AVX0Pr5ODnZqqLAJMhWWQo2Tk6D5IbxIbk83twkfF8YTC7ZddT-55yih3GRVicSxv3DwZIg04X4CsuwZqX0Kic7i9ViKRbm34GBeJN0bYmid8q6JYXCLo4VQvF4X5n_HSgWwFgFGn4hXZMbXZ_pafXEyA" alt="User profile" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed leading-tight tracking-tight">Mingle</h1>
            <p className="font-label-caps text-label-caps text-on-surface-variant uppercase mt-1">Premium Social</p>
          </div>
        </div>
        
        {/* Navigation Links */}
        <div className="flex-1 flex flex-col gap-2">
          {/* Discover (Active) */}
          <Link to="/discover" className="flex items-center gap-4 px-4 py-3 rounded-lg bg-surface-container-low dark:bg-surface-container-high text-primary dark:text-primary-fixed font-bold translate-x-1 transition-transform group">
            <span className="material-symbols-outlined" data-weight="fill">explore</span>
            <span>Discover</span>
          </Link>
          <a href="#" className="flex items-center gap-4 px-4 py-3 rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-high transition-colors group">
            <span className="material-symbols-outlined">favorite</span>
            <span>Matches</span>
          </a>
          <Link to="/messages" className="flex items-center gap-4 px-4 py-3 rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-high transition-colors group">
            <span className="material-symbols-outlined">forum</span>
            <span>Messages</span>
          </Link>
          <Link to="/meetups" className="flex items-center gap-4 px-4 py-3 rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-high transition-colors group">
            <span className="material-symbols-outlined">event</span>
            <span>Meetups</span>
          </Link>
          <a href="#" className="flex items-center gap-4 px-4 py-3 rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-high transition-colors group">
            <span className="material-symbols-outlined">star</span>
            <span>Favorites</span>
          </a>
          <Link to="/profile/edit" className="flex items-center gap-4 px-4 py-3 rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-high transition-colors group">
            <span className="material-symbols-outlined">person</span>
            <span>Profile</span>
          </Link>
        </div>
        
        {/* CTA */}
        <div className="mt-8 mb-8">
          <button className="w-full bg-primary text-on-primary py-3 rounded-lg font-bold hover:bg-surface-tint transition-colors flex justify-center items-center gap-2 shadow-sm">
            <span className="material-symbols-outlined text-sm">workspace_premium</span>
            Upgrade to Gold
          </button>
        </div>
        
        {/* Footer Links */}
        <div className="flex flex-col gap-2 border-t border-outline-variant pt-6">
          <a href="#" className="flex items-center gap-4 px-4 py-2 rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined text-[20px]">settings</span>
            <span className="text-sm">Settings</span>
          </a>
          <a href="#" className="flex items-center gap-4 px-4 py-2 rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined text-[20px]">help</span>
            <span className="text-sm">Help</span>
          </a>
        </div>
      </nav>
      
      {/* Main Content Area */}
      <main className="flex-1 h-full overflow-y-auto relative bg-[#F8F7F5]">
        {/* Top App Bar for Mobile (Hidden on Desktop) */}
        <div className="lg:hidden flex items-center justify-between p-4 bg-surface sticky top-0 z-20 border-b border-outline-variant">
          <h1 className="font-headline-sm text-headline-sm font-bold text-primary">Mingle</h1>
          <button className="w-8 h-8 rounded-full overflow-hidden bg-surface-container-high">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQEII4rtlDi8tHeMiLx_OHfR6bMtocQpp_IY4p7X9cedUec7Dpv3umd4QGsOTaCExk5IW__oCRluZM9-fq-mc8_2QKYAmrJWsn9MaNefxp7ELBBP0L0C7ZURN2FKhA2J2qyHi7MphPv64TN9dOTIIbn9I4rFItQPl7HTZhSG80tso34F_y6OWxbDGYTdeGT3gkYKEDTGTkFlzWlF8TeLHO9PqZ-rI5HuteLAOmBnHZT5ICCf8qQNaniw" alt="Mobile header portrait" className="w-full h-full object-cover" />
          </button>
        </div>
        
        <div className="max-w-4xl mx-auto py-8 px-4 lg:px-8 h-full flex flex-col justify-center items-center min-h-max pb-32 lg:pb-12">
          {/* Main Profile Card (Empty State) */}
          <div className="w-full max-w-[540px] bg-white rounded-[24px] shadow-[0_12px_40px_-12px_rgba(0,0,0,0.06)] border border-[#E5E4E1] overflow-hidden flex flex-col items-center justify-center p-12 text-center aspect-[3/4]">
            <div className="w-20 h-20 bg-surface-container rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[40px] text-on-surface-variant">explore_off</span>
            </div>
            <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">No more profiles</h2>
            <p className="font-body-md text-on-surface-variant max-w-sm">
              We're out of potential matches for you right now. 
              {/* TODO: Wire this up to the Django discovery API once it exists */}
            </p>
          </div>
        </div>
      </main>
      
      {/* BottomNavBar (Shared Component) - Visible only on mobile */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex lg:hidden justify-around items-center px-4 pb-safe pt-2 bg-surface dark:bg-surface rounded-t-xl shadow-[0_-4px_20px_rgba(0,0,0,0.05)] h-20">
        <Link to="/discover" className="flex flex-col items-center justify-center bg-primary-container dark:bg-primary-container text-on-primary-container rounded-xl p-2 min-w-[64px]">
          <span className="material-symbols-outlined" data-weight="fill">favorite</span>
          <span className="font-label-caps text-[10px] mt-1">Discover</span>
        </Link>
        <a href="#" className="flex flex-col items-center justify-center text-on-surface-variant dark:text-on-surface-variant p-2 min-w-[64px] hover:bg-surface-container-high rounded-xl transition">
          <span className="material-symbols-outlined">search</span>
          <span className="font-label-caps text-[10px] mt-1">Explore</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center text-on-surface-variant dark:text-on-surface-variant p-2 min-w-[64px] hover:bg-surface-container-high rounded-xl transition">
          <span className="material-symbols-outlined">people</span>
          <span className="font-label-caps text-[10px] mt-1">Matches</span>
        </a>
        <Link to="/messages" className="flex flex-col items-center justify-center text-on-surface-variant dark:text-on-surface-variant p-2 min-w-[64px] hover:bg-surface-container-high rounded-xl transition">
          <span className="material-symbols-outlined">chat_bubble</span>
          <span className="font-label-caps text-[10px] mt-1">Messages</span>
        </Link>
        <Link to="/profile/edit" className="flex flex-col items-center justify-center text-on-surface-variant dark:text-on-surface-variant p-2 min-w-[64px] hover:bg-surface-container-high rounded-xl transition">
          <span className="material-symbols-outlined">account_circle</span>
          <span className="font-label-caps text-[10px] mt-1">Profile</span>
        </Link>
      </nav>
    </div>
  );
}
