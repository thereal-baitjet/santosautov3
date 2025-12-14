import React from 'react';
import { PageView } from '../types';

interface FooterProps {
  onNavigate: (view: PageView) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <span className="font-serif font-bold text-xl tracking-widest uppercase cursor-pointer" onClick={() => onNavigate('HOME')}>
            Santos<span className="text-gold-400">Automation</span>
          </span>
          <p className="text-xs text-gray-500 mt-2">© {new Date().getFullYear()} Santos Automation. All rights reserved.</p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex space-x-6">
            <button onClick={() => onNavigate('PRIVACY')} className="text-gray-500 hover:text-white transition-colors text-sm uppercase tracking-wider">
              Privacy Policy
            </button>
            <button onClick={() => onNavigate('TERMS')} className="text-gray-500 hover:text-white transition-colors text-sm uppercase tracking-wider">
              Terms of Service
            </button>
            <a href="https://goldinthehudson.com" target="_blank" rel="noopener noreferrer" className="text-gold-500 hover:text-white transition-colors text-sm uppercase tracking-wider">
              Gold In The Hudson
            </a>
          </div>

          <div className="flex items-center space-x-4 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6 mt-4 md:mt-0">
             <a 
               href="https://instagram.com/mr.j.c.santos" 
               target="_blank" 
               rel="noopener noreferrer"
               className="group flex items-center gap-2 text-gray-400 hover:text-pink-500 transition-colors duration-300"
               title="Follow on Instagram"
             >
               <div className="p-2 rounded-full border border-white/10 group-hover:border-pink-500/50 bg-white/5 group-hover:bg-pink-500/10 transition-all">
                 <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                 </svg>
               </div>
               <span className="text-xs uppercase tracking-widest font-bold">@mr.j.c.santos</span>
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;