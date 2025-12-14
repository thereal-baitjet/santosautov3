import React, { useState } from 'react';

// Iconic view of Manhattan from the Hudson County cliffs (Blvd East/Weehawken style)
// High resolution night shot for premium feel
const DEFAULT_HERO_IMAGE = "https://images.unsplash.com/photo-1518129066606-44439c6560da?q=80&w=2600&auto=format&fit=crop"; 

const Hero: React.FC = () => {
  const [bgImage, setBgImage] = useState(DEFAULT_HERO_IMAGE);
  const [showInput, setShowInput] = useState(false);

  return (
    <div 
      className="relative h-screen w-full overflow-hidden flex items-center justify-center parallax-bg transition-all duration-700 ease-in-out"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Enhanced Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-hudson-dark/30 via-hudson-dark/50 to-hudson-dark/90"></div>
      
      {/* Radial shine effect to highlight the center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(11,17,32,0.8)_100%)]"></div>
      
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto mt-20">
        <h2 className="text-gold-400 font-sans font-bold tracking-[0.3em] text-sm md:text-base mb-6 animate-fade-in-up">
          EST. UNION CITY, NJ
        </h2>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-8 leading-tight drop-shadow-2xl animate-fade-in-up delay-100">
          The Silicon <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">Valley</span> <br />
          <span className="italic font-light text-4xl md:text-6xl text-gold-400 opacity-90 block mt-2">of Hudson County</span>
        </h1>
        <p className="font-sans text-gray-200 text-lg md:text-2xl max-w-3xl mx-auto mb-12 font-light leading-relaxed drop-shadow-md animate-fade-in-up delay-200">
          Got an App Idea? We turn the Gold Coast into the Code Coast. From Union City to Jersey City, we build venture-ready software with <span className="text-white font-medium border-b border-gold-500/50">Strict NDAs</span> and scalable AI solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-300">
          <a href="#contact" className="px-10 py-5 bg-gold-500 text-hudson-dark font-bold uppercase tracking-widest text-sm hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(197,160,40,0.4)] border border-gold-400">
            Evaluate My App
          </a>
          <a href="#services" className="px-10 py-5 bg-black/40 backdrop-blur-md border border-white/30 text-white font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-hudson-dark transition-all duration-300">
            For Professionals
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gold-400 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      {/* Manual Jumbotron Input Control */}
      <div className="absolute bottom-6 right-6 z-30 group">
        {!showInput ? (
          <button 
            onClick={() => setShowInput(true)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/60 backdrop-blur-md border border-white/10 hover:border-gold-400/50 transition-all duration-300"
            title="Customize Background"
          >
            <svg className="w-4 h-4 text-white/50 group-hover:text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
        ) : (
          <div className="bg-black/80 backdrop-blur-xl p-4 rounded-lg border border-gold-500/30 shadow-2xl animate-fade-in w-72">
             <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] uppercase tracking-widest text-gold-400 font-bold">Custom Jumbotron</span>
                <button onClick={() => setShowInput(false)} className="text-gray-400 hover:text-white">&times;</button>
             </div>
             <input 
               type="text" 
               placeholder="Paste image URL here..."
               value={bgImage === DEFAULT_HERO_IMAGE ? '' : bgImage}
               onChange={(e) => setBgImage(e.target.value || DEFAULT_HERO_IMAGE)}
               className="w-full bg-white/10 border border-white/20 text-xs p-2 text-white focus:outline-none focus:border-gold-500 rounded placeholder-gray-500"
             />
             <p className="text-[10px] text-gray-500 mt-2 italic">Works best with high-res landscape URLs.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;