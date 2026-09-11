import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Landing() {
  const { user, loading } = useAuth();

  return (
    <div className="bg-background text-on-surface font-body-md antialiased selection:bg-primary-container selection:text-on-primary-container">
      {/* TopNavBar */}
      <nav className="sticky top-0 z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 w-full max-w-container-max mx-auto bg-background dark:bg-background glass-panel">
        <Link to="/" className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed hover:opacity-80 transition-opacity">
          Mingle
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/discover" className="text-on-surface-variant dark:text-on-surface-variant font-label-caps text-label-caps hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200">Discover</Link>
          <a href="#" className="text-on-surface-variant dark:text-on-surface-variant font-label-caps text-label-caps hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200">How It Works</a>
          <a href="#" className="text-on-surface-variant dark:text-on-surface-variant font-label-caps text-label-caps hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200">Safety</a>
          <a href="#" className="text-on-surface-variant dark:text-on-surface-variant font-label-caps text-label-caps hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200">Community</a>
        </div>
        <div className="hidden md:flex items-center gap-4">
          {!loading && (
            user ? (
              <Link to="/discover" className="bg-primary text-on-primary px-6 py-3 rounded-full font-label-caps text-label-caps hover:bg-surface-tint transition-colors shadow-sm">Go to App</Link>
            ) : (
              <>
                <Link to="/login" className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors">Log In</Link>
                <Link to="/register" className="bg-primary text-on-primary px-6 py-3 rounded-full font-label-caps text-label-caps hover:bg-surface-tint transition-colors shadow-sm">Join Mingle</Link>
              </>
            )
          )}
        </div>
        <button className="md:hidden text-on-surface p-2">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </nav>

      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex items-center px-margin-mobile md:px-margin-desktop py-20 max-w-container-max mx-auto overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
            {/* Left: Typography & CTA */}
            <div className="space-y-8 max-w-xl relative">
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary-fixed-dim rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
              <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface relative z-10">
                Meet someone <br className="hidden md:block"/>
                <span className="text-primary italic font-serif">worth meeting.</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant relative z-10">
                Discover people who match your energy. Mingle is the premium social space designed for intentional connections, sophisticated conversations, and real-world meetups.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                <Link to="/discover" className="bg-primary text-on-primary px-8 py-4 rounded-full font-label-caps text-label-caps hover:bg-surface-tint transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group">
                  Find Your Match
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
                <Link to="/discover" className="border border-outline text-on-surface px-8 py-4 rounded-full font-label-caps text-label-caps hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2">
                  Explore Mingle
                </Link>
              </div>
            </div>
            
            {/* Right: Editorial Cards */}
            <div className="relative h-[600px] w-full hidden lg:block">
              {/* Decor */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary-fixed rounded-full mix-blend-multiply filter blur-[100px] opacity-40"></div>
              
              {/* Card 1 (Back/Left) */}
              <div className="absolute top-10 left-0 w-[300px] bg-surface rounded-2xl border border-outline-variant soft-shadow overflow-hidden transform -rotate-6 scale-95 float-animation-delayed opacity-80 transition-all hover:opacity-100 hover:z-30 hover:rotate-0 hover:scale-105 duration-500">
                <div className="h-[350px] relative">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBavKKjGzuvXRgzvqFhy-iBQEUjbCl_523L-EYgDu9Gy0oE4yEQ5JpsMdT48TxE-IeS8vmLQs9XB_q1YOcIOb3Cpa2vvQ-98QPEJ9ZZiAUeX0VOXxTDS8xLR5sYxcdpNyshb-Ral0Nr2roXQ-Uut87xwg2LO5j5T6U24HXs85RPhHPe0DSslMJrWaCrSpWEj1fSGZK_ojvtda1G7B_Web9TUHhwKaZw2Zw6egDArI4BG-5was_jkqhw5A" alt="Alex" className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                    <div className="flex items-center gap-2">
                      <h3 className="font-headline-sm text-headline-sm">Alex, 27</h3>
                      <span className="material-symbols-outlined text-primary-fixed text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
                    </div>
                    <p className="font-body-md text-sm opacity-90 mt-1">Architect & Jazz Enthusiast</p>
                  </div>
                </div>
              </div>
              
              {/* Card 2 (Front/Center) */}
              <div className="absolute top-20 left-20 w-[320px] bg-surface rounded-2xl border border-outline-variant soft-shadow overflow-hidden z-20 float-animation transition-all hover:scale-[1.02] duration-300">
                <div className="h-[400px] relative">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz_SfGf_SgoSfPFIP43_GmAJB-jYvn1BqidXS6T9LDmZKiXSjqsCOEIPlJJ0Au-z_xaxND8CkdfcEqrOr-5RDumzgR1al9yjyHl7jLoJAiIL93ddx96SythTRGWsyzBTR7a372q87Ax13LFlzpNgebfEMhOPaMEkwywz_257NesIuY-H95h9bdi1SoBC6bvSPG2SKNy_BkCmtq2r8BnbbO_PT4iyR4zzuEbBuAPsldjU2HTpdcVFLJdQ" alt="Sofia" className="w-full h-full object-cover" />
                  
                  {/* UI Overlay Elements */}
                  <div className="absolute top-4 right-4 bg-surface/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="font-label-caps text-[10px] text-on-surface">Online</span>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-headline-sm text-headline-sm">Sofia, 24</h3>
                          <span className="material-symbols-outlined text-primary-fixed text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
                        </div>
                        <p className="font-body-md text-sm opacity-90 mt-1 flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">location_on</span> New York City
                        </p>
                      </div>
                      <button className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                        <span className="material-symbols-outlined text-on-primary" style={{fontVariationSettings: "'FILL' 1"}}>favorite</span>
                      </button>
                    </div>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full font-body-md text-[12px]">Photography</span>
                      <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full font-body-md text-[12px]">Matcha</span>
                      <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full font-body-md text-[12px]">Art Galleries</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Social Proof / Stats */}
        <section className="py-16 bg-surface-container-low border-y border-outline-variant">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-outline-variant">
              <div className="text-center px-4">
                <p className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary mb-2">1M+</p>
                <p className="font-label-caps text-label-caps text-on-surface-variant">Meaningful Conversations</p>
              </div>
              <div className="text-center px-4">
                <p className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary mb-2">250K</p>
                <p className="font-label-caps text-label-caps text-on-surface-variant">Successful Meetups</p>
              </div>
              <div className="text-center px-4 hidden md:block">
                <p className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary mb-2">50+</p>
                <p className="font-label-caps text-label-caps text-on-surface-variant">Cities Worldwide</p>
              </div>
              <div className="text-center px-4 hidden md:block">
                <p className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary mb-2">4.9</p>
                <p className="font-label-caps text-label-caps text-on-surface-variant">App Store Rating</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="w-full py-12 px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center bg-surface-container-low dark:bg-surface-container-low border-t border-outline-variant max-w-container-max mx-auto">
        <div className="font-headline-sm text-headline-sm text-primary mb-6 md:mb-0 font-bold">
          Mingle
        </div>
        <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
          <a href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">Terms</a>
          <a href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">Safety Tips</a>
          <a href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">Contact</a>
        </div>
        <div className="font-body-md text-body-md text-secondary dark:text-secondary-fixed text-sm">
          © 2024 Mingle. Designed for Connection.
        </div>
      </footer>
    </div>
  );
}
