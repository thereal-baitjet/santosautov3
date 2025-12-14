import React, { useState, useEffect } from 'react';
import { PageView } from '../types';

interface NavbarProps {
  onNavigate: (view: PageView) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    onNavigate('HOME');
    // Allow state update to propagate before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-hudson-dark/95 backdrop-blur-md shadow-lg py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <button 
          onClick={() => {
            onNavigate('HOME');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center space-x-2 focus:outline-none"
        >
           {/* Logo Placeholder - Simulating Goldinthehudson vibes */}
           <div className="w-10 h-10 border-2 border-gold-400 rounded-none flex items-center justify-center">
              <span className="text-gold-400 font-serif font-bold text-xl">S</span>
           </div>
           <span className="text-white font-serif font-bold text-xl tracking-widest uppercase">Santos<span className="text-gold-400">Automation</span></span>
        </button>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#mission" onClick={(e) => handleNavClick(e, 'root')} className="text-gray-300 hover:text-gold-400 transition-colors uppercase text-xs tracking-widest font-semibold">Our Mission</a>
          <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-gray-300 hover:text-gold-400 transition-colors uppercase text-xs tracking-widest font-semibold">Services</a>
          <a href="#demo" onClick={(e) => handleNavClick(e, 'demo')} className="text-gray-300 hover:text-gold-400 transition-colors uppercase text-xs tracking-widest font-semibold">AI Check</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="px-6 py-2 bg-gold-500 text-hudson-dark font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors duration-300">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;