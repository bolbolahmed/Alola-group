import { useState, useEffect } from 'react';

interface SplashIntroProps {
  onClose: () => void;
  logoUrl: string;
}

export default function SplashIntro({ onClose, logoUrl }: SplashIntroProps) {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fill the progress bar smoothly
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 22);

    // Auto close sequence starts around 2.6 seconds
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2600);

    const closeTimer = setTimeout(() => {
      onClose();
    }, 3200);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(fadeTimer);
      clearTimeout(closeTimer);
    };
  }, [onClose]);

  const handleManualEnter = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      onClose();
    }, 400); // matching fadeout duration
  };

  return (
    <div
      id="splash-intro-overlay"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black transition-all duration-700 ease-in-out select-none ${
        isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      style={{
        background: 'radial-gradient(circle at center, #1a1505 0%, #0a0802 50%, #000000 100%)',
      }}
    >
      {/* Decorative ambient gold glow behind logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 rounded-full bg-luxury-gold/10 blur-[100px] pointer-events-none animate-pulse duration-[4000ms]" />

      <div className="relative flex flex-col items-center max-w-lg px-6 text-center z-10">
        
        {/* Logo Container with Golden Border Ring */}
        <div className="relative mb-8 group">
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-luxury-gold to-[#B8860B] opacity-75 blur-sm group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-spin-slow" 
               style={{ animationDuration: '12s' }} />
          <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border border-luxury-gold/30 bg-black flex items-center justify-center p-1">
            <img
              src={logoUrl}
              alt="Al-Ola Group Logo"
              className="w-full h-full object-contain rounded-full transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Brand Typography */}
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-luxury-gold tracking-wide leading-tight mb-3 select-text drop-shadow-[0_2px_10px_rgba(212,175,55,0.2)]">
          العلا للتشطيبات المتكاملة
        </h1>
        
        <p className="text-base md:text-lg text-stone-300 font-heading tracking-wider mb-2">
          مجموعة العلا للتصميم والديكور بالإسكندرية
        </p>
        
        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-luxury-gold to-transparent my-4" />
        
        <p className="text-sm md:text-base text-stone-400 font-body mb-8 max-w-md">
          تصميم وتنفيذ أرقى التشطيبات والديكورات السكنية والتجارية تسليم مفتاح بأعلى جودة وإتقان.
        </p>

        {/* Loading progress bar indicator */}
        <div className="w-48 h-[3px] bg-stone-900 rounded-full overflow-hidden mb-8 relative">
          <div 
            className="h-full bg-gradient-to-r from-luxury-gold to-[#B8860B] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Immediate Enter Button */}
        <button
          id="enter-website-btn"
          onClick={handleManualEnter}
          className="relative px-8 py-3 rounded-full border border-luxury-gold/50 text-luxury-gold hover:text-black font-body font-semibold tracking-wide text-sm transition-all duration-300 cursor-pointer overflow-hidden group shadow-[0_0_15px_rgba(212,175,55,0.1)] hover:shadow-[0_0_25px_rgba(212,175,55,0.35)]"
        >
          {/* Button hover backdrop animation */}
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-luxury-gold to-[#B8860B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out" />
          
          <span className="relative z-10 flex items-center justify-center gap-2">
            <span>دخول الموقع</span>
            <svg 
              className="w-4 h-4 transform group-hover:translate-x-[-4px] transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </span>
        </button>

      </div>

      {/* Elegant minimalist bottom brand statement */}
      <div className="absolute bottom-6 text-[10px] md:text-xs text-stone-600 font-mono tracking-widest uppercase">
        AL-OLA GROUP INTEGRATED FINISHING • EST 1998
      </div>
    </div>
  );
}
