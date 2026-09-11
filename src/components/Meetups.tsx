import React from 'react';
import { Link } from 'react-router-dom';

export default function Meetups() {
  return (
    <div className="bg-background text-on-background font-body-md antialiased min-h-screen flex flex-col">
      {/* TopNavBar (Desktop) */}
      <header className="hidden md:flex sticky top-0 z-50 flex justify-between items-center px-margin-desktop py-4 w-full max-w-container-max mx-auto bg-background dark:bg-background">
        <div className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">
          Mingle
        </div>
        <nav className="flex gap-8">
          <Link to="/discover" className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200">Discover</Link>
          <a href="#" className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200">Matches</a>
          <Link to="/messages" className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200">Messages</Link>
          <Link to="/meetups" className="text-primary dark:text-primary-fixed font-bold border-b-2 border-primary hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200">Meetups</Link>
          <Link to="/profile/edit" className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200">Profile</Link>
        </nav>
        <div className="flex gap-4">
          <button className="font-body-md text-body-md px-4 py-2 border border-outline text-on-surface-variant rounded-xl hover:bg-surface-container-low transition-colors">Log In</button>
          <button className="font-body-md text-body-md px-4 py-2 bg-primary text-on-primary rounded-xl hover:bg-primary-container transition-colors">Join Mingle</button>
        </div>
      </header>
      
      <div className="flex-1 flex flex-col md:flex-row w-full max-w-[1440px] mx-auto">
        {/* SideNavBar (Desktop Large) */}
        <aside className="hidden lg:flex flex-col h-full py-8 px-6 bg-surface dark:bg-surface border-r border-outline-variant w-64 min-h-[calc(100vh-80px)] sticky top-[80px]">
          <div className="mb-12">
            <div className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">Mingle</div>
            <div className="text-on-surface-variant text-sm mt-1">Premium Social</div>
          </div>
          
          <nav className="flex flex-col gap-2 flex-1">
            <Link to="/discover" className="flex items-center gap-4 p-3 rounded-xl text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined" data-icon="explore">explore</span>
              <span className="font-body-md text-body-md">Discover</span>
            </Link>
            <a href="#" className="flex items-center gap-4 p-3 rounded-xl text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined" data-icon="favorite">favorite</span>
              <span className="font-body-md text-body-md">Matches</span>
            </a>
            <Link to="/messages" className="flex items-center gap-4 p-3 rounded-xl text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined" data-icon="forum">forum</span>
              <span className="font-body-md text-body-md">Messages</span>
            </Link>
            <Link to="/meetups" className="flex items-center gap-4 p-3 rounded-xl text-primary dark:text-primary-fixed font-bold hover:bg-surface-container-low dark:hover:bg-surface-container-high transition-colors bg-surface-container-low">
              <span className="material-symbols-outlined" data-icon="event" style={{fontVariationSettings: "'FILL' 1"}}>event</span>
              <span className="font-body-md text-body-md">Meetups</span>
            </Link>
            <a href="#" className="flex items-center gap-4 p-3 rounded-xl text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined" data-icon="star">star</span>
              <span className="font-body-md text-body-md">Favorites</span>
            </a>
            <Link to="/profile/edit" className="flex items-center gap-4 p-3 rounded-xl text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined" data-icon="person">person</span>
              <span className="font-body-md text-body-md">Profile</span>
            </Link>
          </nav>
          
          <div className="mt-auto pt-8 border-t border-outline-variant flex flex-col gap-2">
            <button className="w-full py-3 bg-secondary-container text-on-secondary-container rounded-xl font-bold mb-4">Upgrade to Gold</button>
            <a href="#" className="flex items-center gap-4 p-2 text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[20px]" data-icon="settings">settings</span>
              <span className="text-sm">Settings</span>
            </a>
            <a href="#" className="flex items-center gap-4 p-2 text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[20px]" data-icon="help">help</span>
              <span className="text-sm">Help</span>
            </a>
          </div>
        </aside>
        
        {/* Main Content Canvas */}
        <main className="flex-1 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 md:py-12 pb-32 md:pb-12">
          <header className="mb-12">
            <h1 className="font-display-lg-mobile md:font-display-lg text-on-surface mb-4">Make plans, not endless chats.</h1>
            <p className="font-body-lg text-on-surface-variant max-w-2xl">Organize your social calendar. View upcoming connections and suggest new meetups with ease.</p>
          </header>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            {/* Timeline Section (Left Column) */}
            <section className="lg:col-span-7 flex flex-col gap-8">
              <h2 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary" data-icon="calendar_month">calendar_month</span>
                Upcoming Meetups
              </h2>
              
              {/* Timeline Card 1 */}
              <div className="bg-surface rounded-xl border border-surface-variant p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)] transition-shadow duration-300 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded-l-xl"></div>
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="shrink-0 w-24 h-24 rounded-full overflow-hidden border border-surface-variant">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEsqzXpxJPfVbl15YkYqKRfNp7AnSFRWiEm5jTEnQrxOHp7br6CLTBwoJn0Zf8c-UcE8nOh3Q1hrvvbgclXWdeAV7wFqv3Evm9i1LiIbV-AJmvRi0v-h_vgsLPxMXU0FBf3jtHl81IvyIOgUuIULAvyQhcXa4b2XUbsc0clqF6GiIms_3vQ0tcgrroSmAgKBlQob8DWs221MM0UBOGe9TA2ff0v433qEnLQcFMz7BWKQngBk3633gJJw" alt="Sofia" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">Coffee with Sofia</h3>
                      <span className="font-label-caps text-label-caps bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full">Confirmed</span>
                    </div>
                    <div className="flex items-center gap-2 text-on-surface-variant font-body-md mb-1">
                      <span className="material-symbols-outlined text-[18px]" data-icon="schedule">schedule</span>
                      <span>Sunday, 17:30</span>
                    </div>
                    <div className="flex items-center gap-2 text-on-surface-variant font-body-md mb-4">
                      <span className="material-symbols-outlined text-[18px]" data-icon="location_on">location_on</span>
                      <span>Café Xoho, City Center</span>
                    </div>
                    <div className="flex gap-3 mt-auto">
                      <button className="font-body-md text-body-md px-4 py-2 bg-surface text-on-surface border border-outline rounded-lg hover:bg-surface-container-low transition-colors flex-1 text-center">View Details</button>
                      <button className="font-body-md text-body-md px-4 py-2 bg-surface text-on-surface border border-outline rounded-lg hover:bg-surface-container-low transition-colors flex-1 text-center">Reschedule</button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Timeline Card 2 */}
              <div className="bg-surface rounded-xl border border-surface-variant p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)] transition-shadow duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-secondary-container rounded-l-xl"></div>
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="shrink-0 w-24 h-24 rounded-full overflow-hidden border border-surface-variant">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA72GvJavFLRKO3RLTDpbJ1S32tWmaXhCrXX8uS2-ttwZgp7wrf3PZffxfkvijXL8lRp51FZkb1ZQIetOFPLc6aKd6D6wB7gIBEcoym5p31PqV0JNRMw4fv3Btdzd-Mi7RClvKeqkefvQO2bZayxA5rn9fzorhcLuS504Rf__bzoFBQnf_AP9E8MZw3CyfFhxUsZ_ESjnl2ejZZnrP6pCclZMPdyzuyMZ1lNpdccj1Op33Fjaeef5Fm4g" alt="Marcus" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">Park Walk with Marcus</h3>
                      <span className="font-label-caps text-label-caps bg-surface-container-highest text-on-surface px-3 py-1 rounded-full">Pending</span>
                    </div>
                    <div className="flex items-center gap-2 text-on-surface-variant font-body-md mb-1">
                      <span className="material-symbols-outlined text-[18px]" data-icon="schedule">schedule</span>
                      <span>Tuesday, 18:00</span>
                    </div>
                    <div className="flex items-center gap-2 text-on-surface-variant font-body-md mb-4">
                      <span className="material-symbols-outlined text-[18px]" data-icon="location_on">location_on</span>
                      <span>Riverside Park, North Gate</span>
                    </div>
                    <div className="flex gap-3 mt-auto">
                      <button className="font-body-md text-body-md px-4 py-2 bg-primary text-on-primary rounded-lg hover:bg-primary-container transition-colors flex-1 text-center">Confirm</button>
                      <button className="font-body-md text-body-md px-4 py-2 bg-surface text-on-surface border border-outline rounded-lg hover:bg-surface-container-low transition-colors flex-1 text-center">Suggest Time</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Suggestion Section (Right Column) */}
            <section className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-surface rounded-xl border border-surface-variant p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sticky top-32">
                <h2 className="font-headline-sm text-headline-sm text-on-surface mb-2">Suggest a Meetup</h2>
                <p className="font-body-md text-on-surface-variant mb-6">Break the ice. Propose an activity with one of your recent matches.</p>
                <div className="grid grid-cols-2 gap-4">
                  {/* Category: Coffee */}
                  <button className="flex flex-col items-center justify-center p-6 bg-background rounded-xl border border-surface-variant hover:border-primary hover:bg-surface-container-low transition-all group">
                    <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center mb-3 group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
                      <span className="material-symbols-outlined text-[24px]" data-icon="local_cafe">local_cafe</span>
                    </div>
                    <span className="font-headline-sm text-headline-sm text-[16px] text-on-surface">Coffee</span>
                  </button>
                  
                  {/* Category: Drinks */}
                  <button className="flex flex-col items-center justify-center p-6 bg-background rounded-xl border border-surface-variant hover:border-primary hover:bg-surface-container-low transition-all group">
                    <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center mb-3 group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
                      <span className="material-symbols-outlined text-[24px]" data-icon="local_bar">local_bar</span>
                    </div>
                    <span className="font-headline-sm text-headline-sm text-[16px] text-on-surface">Drinks</span>
                  </button>
                  
                  {/* Category: Walk */}
                  <button className="flex flex-col items-center justify-center p-6 bg-background rounded-xl border border-surface-variant hover:border-primary hover:bg-surface-container-low transition-all group">
                    <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center mb-3 group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
                      <span className="material-symbols-outlined text-[24px]" data-icon="directions_walk">directions_walk</span>
                    </div>
                    <span className="font-headline-sm text-headline-sm text-[16px] text-on-surface">Walk</span>
                  </button>
                  
                  {/* Category: Dinner */}
                  <button className="flex flex-col items-center justify-center p-6 bg-background rounded-xl border border-surface-variant hover:border-primary hover:bg-surface-container-low transition-all group">
                    <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center mb-3 group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
                      <span className="material-symbols-outlined text-[24px]" data-icon="restaurant">restaurant</span>
                    </div>
                    <span className="font-headline-sm text-headline-sm text-[16px] text-on-surface">Dinner</span>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
      
      {/* BottomNavBar (Mobile) */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex lg:hidden justify-around items-center px-4 pb-safe pt-2 bg-surface dark:bg-surface shadow-[0_-4px_20px_rgba(0,0,0,0.05)] rounded-t-xl h-[80px]">
        <Link to="/discover" className="flex flex-col items-center justify-center text-on-surface-variant dark:text-on-surface-variant p-2 hover:bg-surface-container-high">
          <span className="material-symbols-outlined mb-1" data-icon="favorite">favorite</span>
          <span className="font-label-caps text-[10px]">Discover</span>
        </Link>
        <a href="#" className="flex flex-col items-center justify-center text-on-surface-variant dark:text-on-surface-variant p-2 hover:bg-surface-container-high">
          <span className="material-symbols-outlined mb-1" data-icon="search">search</span>
          <span className="font-label-caps text-[10px]">Explore</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center text-on-surface-variant dark:text-on-surface-variant p-2 hover:bg-surface-container-high">
          <span className="material-symbols-outlined mb-1" data-icon="people">people</span>
          <span className="font-label-caps text-[10px]">Matches</span>
        </a>
        <Link to="/messages" className="flex flex-col items-center justify-center text-on-surface-variant dark:text-on-surface-variant p-2 hover:bg-surface-container-high">
          <span className="material-symbols-outlined mb-1" data-icon="chat_bubble">chat_bubble</span>
          <span className="font-label-caps text-[10px]">Messages</span>
        </Link>
        <Link to="/meetups" className="flex flex-col items-center justify-center bg-primary-container dark:bg-primary-container text-on-primary-container rounded-xl p-2 transition-transform duration-150">
          <span className="material-symbols-outlined mb-1" data-icon="event" style={{fontVariationSettings: "'FILL' 1"}}>event</span>
          <span className="font-label-caps text-[10px]">Meetups</span>
        </Link>
        <Link to="/profile/edit" className="flex flex-col items-center justify-center text-on-surface-variant dark:text-on-surface-variant p-2 hover:bg-surface-container-high">
          <span className="material-symbols-outlined mb-1" data-icon="account_circle">account_circle</span>
          <span className="font-label-caps text-[10px]">Profile</span>
        </Link>
      </nav>
      
      {/* Footer */}
      <footer className="w-full py-12 px-margin-desktop flex flex-col md:flex-row justify-between items-center bg-surface-container-low dark:bg-surface-container-low border-t border-outline-variant mt-auto">
        <div className="font-headline-sm text-headline-sm text-primary mb-4 md:mb-0">
          Mingle
        </div>
        <div className="flex gap-6 mb-4 md:mb-0 font-body-md text-body-md text-on-surface-variant">
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms</a>
          <a href="#" className="hover:text-primary transition-colors">Safety Tips</a>
          <a href="#" className="hover:text-primary transition-colors">Contact</a>
        </div>
        <div className="font-body-md text-body-md text-secondary dark:text-secondary-fixed">
          © 2024 Mingle. Designed for Connection.
        </div>
      </footer>
    </div>
  );
}
