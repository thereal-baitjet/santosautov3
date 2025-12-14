import React from 'react';

// The specific image provided by the user
const FEATURE_IMAGE = "https://blogger.googleusercontent.com/img/a/AVvXsEg5pyfJAB2c5pEH47skH0-DWzpEhU26Zxg6KqAp8F1pAqqCGEatkKlBrYq7LIiYHRrBMlJTy3lYOOljOQbwo9pBCx1s9y72IVBoKSpDP5PEA84s2uIz7aF36j8EZ8VC7SFZqicEfKTFPeh25gcMZvoKDe8Nyn_yainAgdPVXITVhEIhgemHleLydK4tU_Fi=w618-h618";

const FeatureHero: React.FC = () => {
  return (
    <div 
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-hudson-dark"
    >
      {/* Background Image - Fixed position for parallax feel on desktop */}
      <div 
        className="absolute inset-0 z-0 parallax-bg"
        style={{ 
          backgroundImage: `url(${FEATURE_IMAGE})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></div>

      {/* Heavy Gradient Overlays for Readability and 'Classy' Aesthetics */}
      
      {/* 1. Base Darkening for Contrast */}
      <div className="absolute inset-0 bg-hudson-dark/30 z-0"></div>

      {/* 2. Top Gradient - Critical for Navbar Visibility */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/90 via-black/50 to-transparent z-0"></div>
      
      {/* 3. Bottom Gradient - Seamless transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-hudson-dark via-hudson-dark/80 to-transparent z-0"></div>

      {/* 4. Radial Vignette - Focuses attention on center text */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] z-0"></div>
      
      {/* Content Container */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-12 flex flex-col items-center">
        
        {/* Decorative Badge */}
        <div className="inline-block border border-gold-400/40 px-8 py-3 mb-10 backdrop-blur-md bg-black/40 rounded-sm animate-fade-in-up">
             <span className="text-gold-400 font-sans text-xs font-bold tracking-[0.4em] uppercase">Featured Showcase</span>
        </div>
        
        {/* Main Title with precise typography */}
        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] leading-tight animate-fade-in-up delay-100">
          The Gateway to <br />
          <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-gold-100 to-gold-400">Innovation</span>
        </h2>
        
        {/* Subtitle */}
        <p className="font-sans text-gray-100 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed drop-shadow-lg tracking-wide animate-fade-in-up delay-200">
          Where the Gold Coast meets the future of automation.
        </p>
        
        {/* Subtle Animated Arrow */}
        <div className="mt-24 animate-bounce delay-500 opacity-70 hover:opacity-100 transition-opacity">
          <svg className="w-8 h-8 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.8} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FeatureHero;