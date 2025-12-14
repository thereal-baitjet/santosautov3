import React from 'react';
import { ServiceCardProps } from '../types';

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, ctaText, onClick }) => (
  <div className="group relative p-10 border border-white/10 bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-all duration-500 hover:-translate-y-2 hover:border-gold-500/30">
    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold-500/20 to-transparent rounded-bl-full transition-all opacity-50 group-hover:opacity-100"></div>
    <div className="mb-8 text-gold-400 transform group-hover:scale-110 transition-transform duration-500 origin-left">
      {icon}
    </div>
    <h3 className="text-3xl font-serif font-bold text-white mb-6 group-hover:text-gold-100 transition-colors">{title}</h3>
    <p className="text-gray-400 mb-10 font-light leading-relaxed min-h-[100px] text-lg">{description}</p>
    <button 
      onClick={onClick}
      className="text-white text-xs font-bold uppercase tracking-[0.2em] border-b border-gold-500/50 pb-2 hover:text-gold-400 hover:border-gold-400 transition-all"
    >
      {ctaText} &nbsp;&rarr;
    </button>
  </div>
);

const Services: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-32 relative bg-hudson-dark">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{ 
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
        backgroundSize: '40px 40px' 
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-10">
          <div className="max-w-2xl">
            <h2 className="text-gold-400 font-sans font-bold tracking-[0.2em] text-sm mb-4">OUR EXPERTISE</h2>
            <h3 className="text-5xl md:text-6xl font-serif font-bold text-white leading-none">
              Innovation <br/>Infrastructure
            </h3>
          </div>
          <div className="mt-8 md:mt-0">
             <p className="text-gray-400 max-w-sm text-right font-light">
               We provide the backbone for Union City's next generation of startups.
             </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <ServiceCard
            title="App Evaluation & Strategy"
            description="Got the next big idea for Union City or the Gold Coast? We provide confidential NDAs and custom evaluation deals. We analyze market viability, technical feasibility, and create a roadmap."
            ctaText="Start Evaluation"
            onClick={scrollToContact}
            icon={
              <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            }
          />
          <ServiceCard
            title="Enterprise AI Integration"
            description="For local professionals and businesses. We seamlessly integrate Generative AI into your workflows to automate processes and unlock new value right here in Hudson County."
            ctaText="Consult with Us"
            onClick={scrollToContact}
            icon={
              <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Services;