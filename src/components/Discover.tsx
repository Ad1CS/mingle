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
          <a href="#" className="flex items-center gap-4 px-4 py-3 rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-high transition-colors group">
            <span className="material-symbols-outlined">person</span>
            <span>Profile</span>
          </a>
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
          {/* Main Profile Card */}
          <div className="w-full max-w-[540px] bg-white rounded-[24px] shadow-[0_12px_40px_-12px_rgba(0,0,0,0.06)] border border-[#E5E4E1] overflow-hidden flex flex-col relative group">
            
            {/* Image Gallery Carousel (Simulated) */}
            <div className="relative w-full aspect-[4/5] bg-surface-container-high">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBELikgKh3BSiLkBeQa1ZS8Hn12ZqBYR1bToFdktb_LESHMrfy23YSkB21kfWOlduenPtlz4jCN_OEUFAmaLmam0cgTDc_-tsgb_-op4q8J8sofuscj5z-VSqNuGHSV-YAT1UtlE1SorlRvFeyAb-y6e8gmPbvly3g9CSL0PNP4xvlzwc4VLqxz2B6TnSX7Tse1lpb8SwbqowcrgbK784BEHsypo4SwTT1TatlGq6cunv34cjCRvzQbVQ" alt="Sofia" className="w-full h-full object-cover" />
              
              {/* Top Overlay Info */}
              <div className="absolute top-0 left-0 w-full p-6 bg-gradient-to-b from-black/40 to-transparent flex justify-between items-start">
                <div className="flex items-center gap-2 bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                  <span className="material-symbols-outlined text-white text-[16px]" data-weight="fill">verified</span>
                  <span className="text-white font-label-caps text-[11px] uppercase tracking-wider">Verified</span>
                </div>
                <button className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/40 transition border border-white/10">
                  <span className="material-symbols-outlined">more_horiz</span>
                </button>
              </div>
              
              {/* Carousel Indicators */}
              <div className="absolute top-4 left-0 w-full flex justify-center gap-1.5 px-6">
                <div className="h-1 flex-1 bg-white rounded-full"></div>
                <div className="h-1 flex-1 bg-white/30 rounded-full"></div>
                <div className="h-1 flex-1 bg-white/30 rounded-full"></div>
              </div>
            </div>
            
            {/* Profile Info Content */}
            <div className="p-8 flex flex-col gap-6 bg-white relative z-10 -mt-6 rounded-t-[24px]">
              
              {/* Header */}
              <div className="flex justify-between items-end">
                <div>
                  <h2 className="font-display-lg-mobile text-display-lg-mobile lg:font-display-lg lg:text-display-lg text-on-surface flex items-baseline gap-2 leading-none mb-2">
                    Sofia <span className="text-on-surface-variant font-normal text-[28px]">24</span>
                  </h2>
                  <div className="flex items-center gap-1.5 text-on-surface-variant text-sm font-medium">
                    <span className="material-symbols-outlined text-[18px]">location_on</span>
                    Tel Aviv (2 miles away)
                  </div>
                </div>
                <button className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-primary hover:bg-primary-container transition shadow-sm">
                  <span className="material-symbols-outlined">info</span>
                </button>
              </div>
              
              <div className="w-full h-[1px] bg-[#E5E4E1]"></div>
              
              {/* Bio */}
              <div>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  "Designer, coffee addict, and amateur film photographer. Always looking for the best pasta spot in town."
                </p>
              </div>
              
              {/* Interests (Chips) */}
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 rounded-full bg-secondary-fixed/30 text-on-secondary-container font-label-caps text-label-caps uppercase tracking-wider">Photography</span>
                <span className="px-4 py-2 rounded-full bg-secondary-fixed/30 text-on-secondary-container font-label-caps text-label-caps uppercase tracking-wider">Travel</span>
                <span className="px-4 py-2 rounded-full bg-secondary-fixed/30 text-on-secondary-container font-label-caps text-label-caps uppercase tracking-wider">Pilates</span>
                <span className="px-4 py-2 rounded-full bg-surface-container text-on-surface-variant font-label-caps text-label-caps uppercase tracking-wider">+3 More</span>
              </div>
              
              {/* Prompt Area */}
              <div className="bg-surface-container-low rounded-xl p-5 border border-outline-variant/30 mt-2">
                <h4 className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-2">My perfect Sunday...</h4>
                <p className="text-on-surface font-medium text-lg leading-snug">Farmer's market in the morning, followed by a long walk and reading by the beach.</p>
              </div>
            </div>
          </div>
          
          {/* Action Controls (Desktop & Mobile) */}
          <div className="fixed lg:absolute bottom-24 lg:bottom-12 left-0 w-full flex justify-center items-center gap-6 z-20 pointer-events-none px-4">
            <div className="pointer-events-auto flex gap-6 p-4 rounded-full bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/40 items-center">
              {/* Pass */}
              <button className="w-16 h-16 rounded-full bg-white border border-[#E5E4E1] shadow-sm flex items-center justify-center text-[#5B403F] hover:bg-[#F5F3F3] hover:scale-105 transition-all duration-200 group">
                <span className="material-symbols-outlined text-[32px] group-hover:text-black transition-colors">close</span>
              </button>
              
              {/* Super Like */}
              <button className="w-14 h-14 rounded-full bg-[#E5E4E1] shadow-inner flex items-center justify-center text-blue-500 hover:bg-blue-50 hover:text-blue-600 hover:scale-110 hover:shadow-md transition-all duration-200 group">
                <span className="material-symbols-outlined text-[28px] group-hover:scale-110 transition-transform" data-weight="fill">star</span>
              </button>
              
              {/* Like */}
              <button className="w-20 h-20 rounded-full bg-primary text-white shadow-lg shadow-primary/30 flex items-center justify-center hover:bg-surface-tint hover:scale-110 hover:shadow-xl transition-all duration-200 group">
                <span className="material-symbols-outlined text-[40px] group-hover:scale-110 transition-transform" data-weight="fill">favorite</span>
              </button>
            </div>
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
        <a href="#" className="flex flex-col items-center justify-center text-on-surface-variant dark:text-on-surface-variant p-2 min-w-[64px] hover:bg-surface-container-high rounded-xl transition">
          <span className="material-symbols-outlined">account_circle</span>
          <span className="font-label-caps text-[10px] mt-1">Profile</span>
        </a>
      </nav>
    </div>
  );
}
