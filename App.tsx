import React, { useState, useEffect, Suspense } from 'react';
import Navbar from './components/Navbar';
import FeatureHero from './components/FeatureHero';
import Hero from './components/Hero';
import Services from './components/Services';
import AiDemo from './components/AiDemo';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { PageView } from './types';

// Lazy load legal pages to reduce initial bundle size and improve load performance
const PrivacyPolicy = React.lazy(() => import('./components/PrivacyPolicy'));
const TermsOfService = React.lazy(() => import('./components/TermsOfService'));

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<PageView>('HOME');

  const handleNavigate = (view: PageView) => {
    setCurrentView(view);
    // Ensure the page scrolls to top when switching views
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Optimize User Experience by updating the tab title based on the active view
  useEffect(() => {
    // Match the default HTML title for Home to avoid SEO jitter
    const homeTitle = 'Santos Automation | Top AI Developers & Tech Incubator in Union City, NJ';
    
    switch (currentView) {
      case 'HOME':
        document.title = homeTitle;
        break;
      case 'PRIVACY':
        document.title = 'Privacy Policy | Santos Automation';
        break;
      case 'TERMS':
        document.title = 'Terms of Service | Santos Automation';
        break;
    }
  }, [currentView]);

  return (
    <div className="min-h-screen bg-hudson-dark font-sans selection:bg-gold-500 selection:text-white flex flex-col">
      <Navbar onNavigate={handleNavigate} />
      
      <main className="flex-grow">
        {currentView === 'HOME' && (
          <>
            <FeatureHero />
            <Hero />
            <Services />
            <AiDemo />
            <Contact />
          </>
        )}
        
        {/* Suspense wrapper handles the loading state for lazily loaded components */}
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center bg-hudson-dark">
            <div className="flex flex-col items-center gap-4 text-gold-400">
              {/* Simple CSS Spinner */}
              <svg className="animate-spin h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span className="text-xs uppercase tracking-widest font-bold">Loading...</span>
            </div>
          </div>
        }>
          {currentView === 'PRIVACY' && <PrivacyPolicy />}
          {currentView === 'TERMS' && <TermsOfService />}
        </Suspense>
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;