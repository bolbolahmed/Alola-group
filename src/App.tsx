/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Packages from './components/Packages';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import AdminPanel from './components/AdminPanel';
import Footer from './components/Footer';
import QuoteEstimator from './components/QuoteEstimator';
import { SEED_REQUESTS } from './data';
import { QuoteRequest } from './types';
import SplashIntro from './components/SplashIntro';
import logoImg from './assets/images/alola_group_logo_1784447539957.jpg';
import WhatsAppButton from './components/WhatsAppButton';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

function MainApp() {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  const [estimatorInitialTier, setEstimatorInitialTier] = useState<'economic' | 'vip' | 'altra_vip' | 'super_altra_vip' | 'luxury_1' | 'luxury_2' | 'luxury_3' | undefined>(undefined);
  const [requests, setRequests] = useState<QuoteRequest[]>([]);
  const [showSplash, setShowSplash] = useState(true);
  const { lang, isAr } = useLanguage();

  // Initialize and load requests from localStorage on component mount
  useEffect(() => {
    const saved = localStorage.getItem('alola_quote_requests');
    if (saved) {
      try {
        setRequests(JSON.parse(saved));
      } catch (err) {
        console.error('Failed to parse saved quote requests, falling back to seeds.', err);
        setRequests(SEED_REQUESTS);
        localStorage.setItem('alola_quote_requests', JSON.stringify(SEED_REQUESTS));
      }
    } else {
      setRequests(SEED_REQUESTS);
      localStorage.setItem('alola_quote_requests', JSON.stringify(SEED_REQUESTS));
    }
  }, []);

  // Save requests to localStorage when they change
  const saveRequests = (updated: QuoteRequest[]) => {
    setRequests(updated);
    localStorage.setItem('alola_quote_requests', JSON.stringify(updated));
  };

  // Add a brand new quote request (from form or estimator)
  const handleAddRequest = (newRequestData: Omit<QuoteRequest, 'id' | 'createdAt' | 'status'>) => {
    const newRequest: QuoteRequest = {
      ...newRequestData,
      id: `REQ-${Math.floor(100 + Math.random() * 900)}`,
      status: 'new',
      createdAt: new Date().toISOString(),
    };
    const updated = [newRequest, ...requests];
    saveRequests(updated);
  };

  // Update status of an inquiry inside the Admin Panel
  const handleUpdateStatus = (id: string, status: QuoteRequest['status']) => {
    const updated = requests.map(req => (req.id === id ? { ...req, status } : req));
    saveRequests(updated);
  };

  // Delete an inquiry
  const handleDeleteRequest = (id: string) => {
    const updated = requests.filter(req => req.id !== id);
    saveRequests(updated);
  };

  // Re-seed requests back to default
  const handleRestoreSeeds = () => {
    saveRequests(SEED_REQUESTS);
  };

  // Anchor smooth scroll helper
  const handleScrollToSection = (id: string) => {
    setIsAdminMode(false); // Return to client view if scrolling to section
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <div className={`min-h-screen flex flex-col bg-[#fff8f0] font-body selection:bg-luxury-gold selection:text-white ${isAr ? 'rtl' : 'ltr'}`} dir={isAr ? 'rtl' : 'ltr'}>
      
      {/* 0. Elegant Logo Splash Intro */}
      {showSplash && (
        <SplashIntro
          logoUrl={logoImg}
          onClose={() => setShowSplash(false)}
        />
      )}
      
      {/* 1. Header Navigation Bar */}
      <Navbar
        isAdminMode={isAdminMode}
        setIsAdminMode={setIsAdminMode}
        requestsCount={requests.filter(r => r.status === 'new').length}
        onOpenEstimator={() => {
          setEstimatorInitialTier(undefined);
          setIsEstimatorOpen(true);
        }}
      />

      {/* 2. Primary Layout Swapper (Customer landing vs Admin dashboard) */}
      <main className="flex-grow">
        {isAdminMode ? (
          <div className="animate-fadeIn">
            <AdminPanel
              requests={requests}
              onUpdateStatus={handleUpdateStatus}
              onDeleteRequest={handleDeleteRequest}
              onRestoreSeeds={handleRestoreSeeds}
              onExitAdmin={() => setIsAdminMode(false)}
            />
          </div>
        ) : (
          <div className="animate-fadeIn">
            {/* Hero Section */}
            <Hero
              onOpenEstimator={() => {
                setEstimatorInitialTier(undefined);
                setIsEstimatorOpen(true);
              }}
              onViewWork={() => handleScrollToSection('portfolio-section')}
            />

            {/* Numerical Credentials Banner */}
            <Stats />

            {/* Services bento section */}
            <Services />

            {/* Premium finishing packages section */}
            <Packages
              onSelectPackage={(tier) => {
                setEstimatorInitialTier(tier);
                setIsEstimatorOpen(true);
              }}
            />

            {/* Brand/About corporate fold */}
            <About />

            {/* Architectural Projects Gallery */}
            <Portfolio onOpenEstimator={() => {
              setEstimatorInitialTier(undefined);
              setIsEstimatorOpen(true);
            }} />

            {/* Testimonials fold */}
            <Testimonials />

            {/* Dynamic Contact and inquiries section */}
            <ContactForm onSubmitRequest={handleAddRequest} />
          </div>
        )}
      </main>

      {/* 3. Footer Fold */}
      <Footer onScrollTo={handleScrollToSection} />

      {/* 4. Interactive Drawer Estimator */}
      <QuoteEstimator
        isOpen={isEstimatorOpen}
        onClose={() => {
          setIsEstimatorOpen(false);
          setEstimatorInitialTier(undefined);
        }}
        onSubmitRequest={handleAddRequest}
        initialQualityTier={estimatorInitialTier}
      />

      {/* 5. Floating WhatsApp Button */}
      <WhatsAppButton />

    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}

