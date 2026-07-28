import { useState, useEffect } from 'react';
import { QuoteRequest } from '../types';
import logoImg from '../assets/images/alola_group_logo_1784447539957.jpg';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  isAdminMode: boolean;
  setIsAdminMode: (mode: boolean) => void;
  requestsCount: number;
  onOpenEstimator: () => void;
}

export default function Navbar({
  isAdminMode,
  setIsAdminMode,
  requestsCount,
  onOpenEstimator
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, toggleLang, isAr, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#e8d8c3]/95 shadow-md h-16 nav-blur border-b border-outline-variant/30'
          : 'bg-[#f3e8dc]/95 shadow-md h-20 border-b border-outline-variant/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-full flex items-center justify-between">
        {/* Brand Logo and Title */}
        <div 
          className="flex items-center gap-3 cursor-pointer select-none" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img
            alt="Al-Ola Logo"
            className="h-11 md:h-13 w-auto object-contain rounded-full hover-logo-pulse"
            src={logoImg}
            referrerPolicy="no-referrer"
          />
          <div className="h-9 w-[1px] bg-primary/20 self-center hidden sm:block" />
          <div className="flex flex-col text-right">
            <span className="font-heading font-bold text-base md:text-lg text-primary leading-tight whitespace-nowrap">
              {t('nav.brandTitle')}
            </span>
            <span className="text-[10px] md:text-xs text-outline font-body font-semibold tracking-wider uppercase leading-none mt-1">
              {t('nav.brandSubtitle')}
            </span>
          </div>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 font-body">
          <button
            onClick={() => scrollToSection('services-section')}
            className="text-on-surface-variant hover:text-luxury-gold transition-colors font-medium text-sm focus:outline-none cursor-pointer"
          >
            {t('nav.services')}
          </button>
          <button
            onClick={() => scrollToSection('packages-section')}
            className="text-on-surface-variant hover:text-luxury-gold transition-colors font-medium text-sm focus:outline-none cursor-pointer"
          >
            {t('nav.packages')}
          </button>
          <button
            onClick={() => scrollToSection('portfolio-section')}
            className="text-on-surface-variant hover:text-luxury-gold transition-colors font-medium text-sm focus:outline-none cursor-pointer"
          >
            {t('nav.projects')}
          </button>
          <button
            onClick={() => scrollToSection('about-section')}
            className="text-on-surface-variant hover:text-luxury-gold transition-colors font-medium text-sm focus:outline-none cursor-pointer"
          >
            {t('nav.about')}
          </button>
          <button
            onClick={() => scrollToSection('contact-section')}
            className="text-on-surface-variant hover:text-luxury-gold transition-colors font-medium text-sm focus:outline-none cursor-pointer"
          >
            {t('nav.contact')}
          </button>
        </div>

        {/* CTAs, Language Switcher and Admin Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 font-body">
          {/* Language Switcher Button */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/80 hover:bg-white text-primary border border-luxury-gold/40 hover:border-luxury-gold shadow-sm transition-all duration-300 font-bold text-xs sm:text-sm cursor-pointer hover:scale-105 active:scale-95"
            title={isAr ? 'Switch language to English' : 'تحويل اللغة إلى العربية'}
            aria-label="Toggle Language"
          >
            <span className="material-symbols-outlined text-base text-luxury-gold">language</span>
            <span>{isAr ? 'English' : 'العربية'}</span>
          </button>

          {/* Admin Dashboard Switcher */}
          <button
            onClick={() => setIsAdminMode(!isAdminMode)}
            className={`p-2 rounded-lg relative group transition-all duration-300 cursor-pointer ${
              isAdminMode
                ? 'bg-primary text-white shadow-md'
                : 'bg-sand-neutral text-on-surface-variant hover:bg-outline-variant/40'
            }`}
            title={isAdminMode ? t('nav.clientMode') : t('nav.adminMode')}
          >
            <span className="material-symbols-outlined text-xl align-middle">
              {isAdminMode ? 'home' : 'admin_panel_settings'}
            </span>
            {requestsCount > 0 && !isAdminMode && (
              <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[9px] w-5 h-5 rounded-full flex items-center justify-center font-bold border-2 border-white animate-pulse">
                {requestsCount}
              </span>
            )}
            <span className="absolute hidden group-hover:block bottom-full mb-2 left-1/2 -translate-x-1/2 bg-onyx-black text-white text-xs px-2 py-1 rounded whitespace-nowrap z-50">
              {isAdminMode ? t('nav.clientMode') : t('nav.adminMode')}
            </span>
          </button>

          {/* Interactive Estimator Button */}
          <button
            onClick={onOpenEstimator}
            className="hidden sm:flex items-center gap-1 bg-gradient-to-r from-gold-gradient-start to-gold-gradient-end hover:from-gold-gradient-end hover:to-gold-gradient-start text-white px-4 lg:px-5 py-2 rounded-lg font-bold text-xs md:text-sm hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">calculate</span>
            <span>{t('nav.estimator')}</span>
          </button>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-primary hover:bg-sand-neutral rounded-lg focus:outline-none"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#f3e8dc] border-b border-outline-variant shadow-xl py-6 px-4 animate-fadeIn font-body flex flex-col gap-4 z-40">
          <button
            onClick={() => scrollToSection('services-section')}
            className="text-start py-2 text-on-surface hover:text-luxury-gold transition-colors font-semibold text-base border-b border-sand-neutral"
          >
            {t('nav.services')}
          </button>
          <button
            onClick={() => scrollToSection('packages-section')}
            className="text-start py-2 text-on-surface hover:text-luxury-gold transition-colors font-semibold text-base border-b border-sand-neutral"
          >
            {t('nav.packages')}
          </button>
          <button
            onClick={() => scrollToSection('portfolio-section')}
            className="text-start py-2 text-on-surface hover:text-luxury-gold transition-colors font-semibold text-base border-b border-sand-neutral"
          >
            {t('nav.projects')}
          </button>
          <button
            onClick={() => scrollToSection('about-section')}
            className="text-start py-2 text-on-surface hover:text-luxury-gold transition-colors font-semibold text-base border-b border-sand-neutral"
          >
            {t('nav.about')}
          </button>
          <button
            onClick={() => scrollToSection('contact-section')}
            className="text-start py-2 text-on-surface hover:text-luxury-gold transition-colors font-semibold text-base border-b border-sand-neutral"
          >
            {t('nav.contact')}
          </button>
          
          <div className="flex flex-col gap-3 pt-3">
            {/* Mobile Language Switcher */}
            <button
              onClick={() => {
                toggleLang();
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-white text-primary py-3 rounded-lg font-bold text-sm text-center flex items-center justify-center gap-2 shadow border border-luxury-gold/40"
            >
              <span className="material-symbols-outlined text-base text-luxury-gold">language</span>
              <span>{isAr ? 'Switch to English' : 'التحويل إلى اللغة العربية'}</span>
            </button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenEstimator();
              }}
              className="w-full bg-gradient-to-r from-gold-gradient-start to-gold-gradient-end text-white py-3 rounded-lg font-bold text-sm text-center flex items-center justify-center gap-2 shadow"
            >
              <span className="material-symbols-outlined text-base">calculate</span>
              <span>{t('nav.estimator')}</span>
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsAdminMode(!isAdminMode);
              }}
              className="w-full bg-onyx-black text-white py-3 rounded-lg font-bold text-sm text-center flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-base">
                {isAdminMode ? 'home' : 'admin_panel_settings'}
              </span>
              <span>{isAdminMode ? t('nav.clientMode') : t('nav.adminMode')}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

