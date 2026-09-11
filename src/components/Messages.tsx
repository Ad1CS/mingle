import React from 'react';
import { Link } from 'react-router-dom';

export default function Messages() {
  return (
    <div className="bg-background text-on-background font-body-md antialiased overflow-hidden">
      <div className="flex h-screen max-w-container-max mx-auto bg-surface relative">
        {/* Desktop SideNav */}
        <nav className="hidden lg:flex flex-col h-full py-8 px-6 w-64 border-r border-outline-variant bg-surface dark:bg-surface flex-shrink-0 z-10">
          <div className="mb-12">
            <h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">Mingle</h1>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">Premium Social</p>
          </div>
          <div className="flex-grow space-y-2">
            <Link to="/discover" className="flex items-center space-x-3 p-3 rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-high transition-colors font-body-md text-body-md group">
              <span className="material-symbols-outlined" data-icon="explore">explore</span>
              <span>Discover</span>
            </Link>
            <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-high transition-colors font-body-md text-body-md group">
              <span className="material-symbols-outlined" data-icon="favorite">favorite</span>
              <span>Matches</span>
            </a>
            <Link to="/messages" className="flex items-center space-x-3 p-3 rounded-lg text-primary dark:text-primary-fixed font-bold bg-surface-container-low dark:bg-surface-container-high font-body-md text-body-md translate-x-1 transition-transform shadow-sm">
              <span className="material-symbols-outlined" data-icon="forum" style={{fontVariationSettings: "'FILL' 1"}}>forum</span>
              <span>Messages</span>
            </Link>
            <Link to="/meetups" className="flex items-center space-x-3 p-3 rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-high transition-colors font-body-md text-body-md group">
              <span className="material-symbols-outlined" data-icon="event">event</span>
              <span>Meetups</span>
            </Link>
            <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-high transition-colors font-body-md text-body-md group">
              <span className="material-symbols-outlined" data-icon="star">star</span>
              <span>Favorites</span>
            </a>
            <Link to="/profile/edit" className="flex items-center space-x-3 p-3 rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-high transition-colors font-body-md text-body-md group">
              <span className="material-symbols-outlined" data-icon="person">person</span>
              <span>Profile</span>
            </Link>
          </div>
          <div className="mt-auto space-y-6 pt-6 border-t border-outline-variant">
            <button className="w-full bg-secondary text-on-secondary font-label-caps text-label-caps py-3 rounded-xl hover:shadow-lg transition-shadow tracking-wider">Upgrade to Gold</button>
            <div className="space-y-2">
              <a href="#" className="flex items-center space-x-3 p-2 rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-high transition-colors font-body-md text-body-md text-sm">
                <span className="material-symbols-outlined text-[20px]" data-icon="settings">settings</span>
                <span>Settings</span>
              </a>
              <a href="#" className="flex items-center space-x-3 p-2 rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-high transition-colors font-body-md text-body-md text-sm">
                <span className="material-symbols-outlined text-[20px]" data-icon="help">help</span>
                <span>Help</span>
              </a>
            </div>
          </div>
        </nav>
        
        {/* Main Content Area */}
        <main className="flex-grow flex w-full h-full pb-[80px] lg:pb-0">
          
          {/* Chat List Column */}
          <div className="w-full lg:w-[360px] flex flex-col h-full border-r border-outline-variant bg-surface relative z-0 flex-shrink-0">
            <div className="p-6 border-b border-outline-variant/50 sticky top-0 bg-surface/95 backdrop-blur-sm z-10">
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-4">Messages</h2>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
                <input type="text" placeholder="Search conversations..." className="w-full pl-10 pr-4 py-3 rounded-xl border border-outline-variant/50 bg-surface-container-low focus:border-primary focus:ring-0 font-body-md text-body-md transition-colors placeholder:text-on-surface-variant/70" />
              </div>
            </div>
            
            <div className="overflow-y-auto flex-grow scrollbar-hide">
              {/* Active Chat Item */}
              <div className="flex items-center p-4 mx-2 mt-2 rounded-xl bg-surface-container cursor-pointer transition-colors border border-outline-variant/30 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQre672MwGEZCg6lHcmZiyFscciTkUqJsMZEfzeNxEbc844YMjvcsByhCKW7hmHsjjJkzZXVONT7YTcC6yu22hx5xMSo88j_xHWGlHqV25KSRX7yV9ujeDUsXu_6B-BvyFdmUQoVq3C55lBxyxgspKSitnPjzehMqofqI4lDKjkhq4I3qblPFFh6fya4okX41JmqWfm6ELjPHWGD8x_cipsbnr2PBjo9P-mZlecnsx9uVw90EZIVJN3w" alt="Sofia" className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-surface rounded-full"></div>
                </div>
                <div className="ml-4 flex-grow min-w-0">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-body-lg text-body-lg text-on-surface font-semibold truncate">Sofia</h3>
                    <span className="text-xs text-on-surface-variant">10:42 AM</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface truncate pr-2">See you Sunday!</p>
                </div>
              </div>
              
              {/* Inactive Chat Items */}
              <div className="flex items-center p-4 mx-2 mt-1 rounded-xl hover:bg-surface-container-low cursor-pointer transition-colors border border-transparent">
                <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-surface-container-high">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD315eXr0VsRR5eq16rKYEmLFQawLmEz2skFNQ0fU4qwSRnhZpP0CUzLUWFl3s_U91YQ-EfufJCHVHG9VpOcWBmi9_0JS8W-tbBlY1j4r1_D48iNOtpwtj787C5qhCJdrp5GrTggKwVihqF3yo53D8kQcRsrGazwuUikDAoDFULWPDeg-fqlAOzGJjIey9OzpkmC3ecpFlQg52f39wrw4UAhi-NVhs6pIRFCBvl2UZB3Hs9x3l9jZewIQ" alt="Julian" className="w-full h-full object-cover" />
                </div>
                <div className="ml-4 flex-grow min-w-0">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-body-lg text-body-lg text-on-surface font-medium truncate">Julian</h3>
                    <span className="text-xs text-on-surface-variant">Yesterday</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant truncate pr-2">That sounds perfect, looking forward to it.</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 mx-2 mt-1 rounded-xl hover:bg-surface-container-low cursor-pointer transition-colors border border-transparent">
                <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-surface-container-high">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmKOEBimFcz0PshzprbaVOvwU35DhSF6Mgh03gZ8p65fnlQ7ukxXwf1Lo81DykwgHpks90EP7Txs3IoxqUkadMyQIhWhTurBgsl8VsWQoVWNntrubsHmwxKogrfyArgJYvYdf2o_D00XGx8AKqtlVzHclEE8SmIrr0xVtnVf-ozsQ8_mvtLFjHn0Jvzm06Hy7ic9WNXiSVf5sYlCfnyqbIQ1zPO-anWHevFXpkfj7uScp-ecrz9-rAZg" alt="Elena" className="w-full h-full object-cover" />
                </div>
                <div className="ml-4 flex-grow min-w-0">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-body-lg text-body-lg text-on-surface font-medium truncate">Elena</h3>
                    <span className="text-xs text-primary font-medium">Tue</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant truncate pr-2 font-medium">Are we still on for the gallery opening?</p>
                </div>
                <div className="w-5 h-5 bg-primary text-on-primary rounded-full flex items-center justify-center text-[10px] font-bold ml-2 shadow-sm">1</div>
              </div>
            </div>
          </div>
          
          {/* Active Conversation Column */}
          <div className="hidden lg:flex flex-col h-full flex-grow bg-surface relative">
            {/* Chat Header */}
            <div className="h-[88px] px-8 border-b border-outline-variant/50 flex items-center justify-between bg-surface/95 backdrop-blur-sm sticky top-0 z-20">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-outline-variant/30 shadow-sm">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXfctPWUi3qWdGXEDdTcOgmegPgkJr31kz7woGdoqYg8B5RXLNm6oXOA6zRKD2va9cZLp32l517dvpcCKfgXrNtxuAe_iyP0xetMrqIw09rnjOR9Ryapa_bYZzmVG4FvZ8ZeoOE_GolOSM93Uif0e5UHHMTA6pytC4enRDhQOX8iKW0uQMWhAXGKYcJnBi5h9MGJtzYsYHmULHkJT2FBR_iGNjDW5rGx6GnJNVLg5IsWKbV7Nf0cwQ4Q" alt="Sofia" className="w-full h-full object-cover" />
                </div>
                <div className="ml-4">
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">Sofia</h2>
                  <p className="text-xs text-on-surface-variant flex items-center mt-0.5">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> Active Now
                  </p>
                </div>
              </div>
              <div className="flex space-x-3">
                <button className="w-10 h-10 rounded-full hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors">
                  <span className="material-symbols-outlined" data-icon="videocam">videocam</span>
                </button>
                <button className="w-10 h-10 rounded-full hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors">
                  <span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
                </button>
                <button className="px-4 py-2 border border-outline-variant rounded-full text-on-surface font-label-caps text-label-caps hover:bg-surface-container-low transition-colors tracking-wider ml-2">
                  View Profile
                </button>
              </div>
            </div>
            
            {/* Chat Canvas */}
            <div className="flex-grow overflow-y-auto px-8 py-6 space-y-6 flex flex-col scrollbar-hide bg-surface-container-lowest">
              <div className="text-center my-4">
                <span className="text-xs text-on-surface-variant bg-surface-container-low px-3 py-1 rounded-full">Today, 9:30 AM</span>
              </div>
              
              {/* Received Message */}
              <div className="flex items-end self-start max-w-[70%]">
                <div className="w-8 h-8 rounded-full overflow-hidden mr-3 mb-1 flex-shrink-0">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEqqKI5Yef8QACKvr1tzB7Dmat6lovWDmse1GmYCOH4XP1fAPal24bGV0J6aBXQ5LbRRfbKk-GYGIJww99i-bu0sow8wyH19vQ0MOj-kq1SgWh4_dgZJ2bmlQLI87vlpKserxuuC5zdBg2MqcW9w8DIJu3lM7twc9DmLZyuguwBm2_oGCVU6NAskS-Q8wH2bPApyLR3Ara4Z9WMBTd3LNNRHhWCSvHAPWKrCPZTucfBx9Vn_BFFORszg" alt="Sofia" className="w-full h-full object-cover" />
                </div>
                <div className="bg-surface-container-low text-on-surface px-5 py-3.5 rounded-2xl rounded-bl-sm font-body-md text-body-md shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                  Hey! Are we still on for the museum exhibit this weekend? I got the tickets.
                </div>
              </div>
              
              {/* Sent Message */}
              <div className="flex items-end self-end max-w-[70%]">
                <div className="bg-primary text-on-primary px-5 py-3.5 rounded-2xl rounded-br-sm font-body-md text-body-md shadow-[0_4px_12px_rgba(183,16,42,0.15)]">
                  Absolutely! I was just thinking about that. What time should we meet?
                </div>
              </div>
              
              {/* Received Message */}
              <div className="flex items-end self-start max-w-[70%] mt-2">
                <div className="w-8 h-8 rounded-full overflow-hidden mr-3 mb-1 flex-shrink-0 opacity-0"></div>
                <div className="bg-surface-container-low text-on-surface px-5 py-3.5 rounded-2xl rounded-bl-sm font-body-md text-body-md shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                  How about 1 PM? We could grab a coffee beforehand.
                </div>
              </div>
              
              {/* Sent Message */}
              <div className="flex items-end self-end max-w-[70%] mt-2">
                <div className="bg-primary text-on-primary px-5 py-3.5 rounded-2xl rounded-br-sm font-body-md text-body-md shadow-[0_4px_12px_rgba(183,16,42,0.15)] flex flex-col items-end">
                  <span>1 PM works perfectly. Let's do the café near the entrance.</span>
                  <span className="text-[10px] text-on-primary/80 mt-1 flex items-center">
                    <span className="material-symbols-outlined text-[12px] mr-1" data-icon="done_all">done_all</span> 10:40 AM
                  </span>
                </div>
              </div>
              
              {/* Received Message */}
              <div className="flex items-end self-start max-w-[70%] mt-2">
                <div className="w-8 h-8 rounded-full overflow-hidden mr-3 mb-1 flex-shrink-0">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXz9lumhoWB6z87gIpJJjNvzBHZT2iCU_BLVAm6sNR1Dz781MlW83HPUWtgvHNpIJF0nep39HnkOM76IEraoFHi7DldkZXeNRip4oekuCXcUExW09i7VF0QZ536ej_ijVDTMpMm0p_aUljsOhwpV4QpUNepB9wuoKMYrcxaGY53P2qICnLDicztKwbZKohk7WN72mpTaQHfi165B_zOOcYLI8sz5EG9Q-t_9QLk2mP8pQ35NeF-bAAvw" alt="Sofia" className="w-full h-full object-cover" />
                </div>
                <div className="bg-surface-container-low text-on-surface px-5 py-3.5 rounded-2xl rounded-bl-sm font-body-md text-body-md shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                  Great! See you Sunday! 😊
                </div>
              </div>
            </div>
            
            {/* Input Area */}
            <div className="p-6 border-t border-outline-variant/30 bg-surface z-20">
              {/* Plan Meetup Button */}
              <div className="mb-4">
                <Link to="/meetups" className="w-full py-3 px-4 border border-outline-variant/50 rounded-xl flex items-center justify-center space-x-2 text-on-surface-variant hover:bg-surface-container-low hover:border-outline-variant transition-all group shadow-sm bg-surface">
                  <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform" data-icon="calendar_month">calendar_month</span>
                  <span className="font-label-caps text-label-caps tracking-widest text-on-surface">Plan a Meetup</span>
                </Link>
              </div>
              
              {/* Text Input Box */}
              <div className="flex items-end bg-surface-container-low border border-outline-variant/30 rounded-2xl focus-within:border-primary/50 focus-within:shadow-[0_4px_20px_rgba(183,16,42,0.05)] transition-all p-2 shadow-sm">
                <div className="flex space-x-1 pb-1 px-2">
                  <button className="p-2 text-on-surface-variant hover:text-primary rounded-full hover:bg-surface-container transition-colors">
                    <span className="material-symbols-outlined" data-icon="add_circle">add_circle</span>
                  </button>
                  <button className="p-2 text-on-surface-variant hover:text-primary rounded-full hover:bg-surface-container transition-colors">
                    <span className="material-symbols-outlined" data-icon="image">image</span>
                  </button>
                  <button className="p-2 text-on-surface-variant hover:text-primary rounded-full hover:bg-surface-container transition-colors">
                    <span className="material-symbols-outlined" data-icon="gif_box">gif_box</span>
                  </button>
                </div>
                <textarea className="flex-grow bg-transparent border-none focus:ring-0 resize-none max-h-32 min-h-[44px] py-3 px-2 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/60" placeholder="Type a message..." rows={1}></textarea>
                <div className="flex space-x-1 pb-1 px-2">
                  <button className="p-2 text-on-surface-variant hover:text-primary rounded-full hover:bg-surface-container transition-colors">
                    <span className="material-symbols-outlined" data-icon="mood">mood</span>
                  </button>
                  <button className="p-3 bg-primary text-on-primary rounded-xl hover:bg-primary/90 transition-colors shadow-md ml-2 group">
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform" data-icon="send">send</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Chat Placeholder */}
          <div className="lg:hidden flex-grow flex items-center justify-center bg-surface-container-low text-on-surface-variant font-body-md p-8 text-center">
            Select a conversation from the list to start messaging.
          </div>
        </main>
        
        {/* Mobile Bottom Nav */}
        <nav className="fixed bottom-0 left-0 w-full z-50 flex lg:hidden justify-around items-center px-4 pb-safe pt-2 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] bg-surface dark:bg-surface rounded-t-xl h-[80px]">
          <Link to="/discover" className="flex flex-col items-center justify-center text-on-surface-variant dark:text-on-surface-variant p-2 w-16">
            <span className="material-symbols-outlined mb-1" data-icon="favorite">favorite</span>
            <span className="font-label-caps text-[10px] tracking-wide">Discover</span>
          </Link>
          <a href="#" className="flex flex-col items-center justify-center text-on-surface-variant dark:text-on-surface-variant p-2 w-16">
            <span className="material-symbols-outlined mb-1" data-icon="search">search</span>
            <span className="font-label-caps text-[10px] tracking-wide">Explore</span>
          </a>
          <Link to="/messages" className="flex flex-col items-center justify-center bg-primary-container dark:bg-primary-container text-on-primary-container rounded-xl p-2 w-16 scale-90 transition-transform duration-150 shadow-md">
            <span className="material-symbols-outlined mb-1" data-icon="chat_bubble" style={{fontVariationSettings: "'FILL' 1"}}>chat_bubble</span>
            <span className="font-label-caps text-[10px] tracking-wide">Messages</span>
          </Link>
          <a href="#" className="flex flex-col items-center justify-center text-on-surface-variant dark:text-on-surface-variant p-2 w-16">
            <span className="material-symbols-outlined mb-1" data-icon="people">people</span>
            <span className="font-label-caps text-[10px] tracking-wide">Matches</span>
          </a>
          <Link to="/profile/edit" className="flex flex-col items-center justify-center text-on-surface-variant dark:text-on-surface-variant p-2 w-16">
            <span className="material-symbols-outlined mb-1" data-icon="account_circle">account_circle</span>
            <span className="font-label-caps text-[10px] tracking-wide">Profile</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}
