import React, { useState } from 'react';
import { evaluateAppIdea } from '../services/geminiService';
import { AnalysisStatus, AiAnalysisResponse } from '../types';

// A high-tech looking city view (Jersey City/Exchange Place vibe)
const TECH_BG = "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2600&auto=format&fit=crop";

const AiDemo: React.FC = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
    idea: ''
  });
  const [status, setStatus] = useState<AnalysisStatus>(AnalysisStatus.IDLE);
  const [result, setResult] = useState<AiAnalysisResponse | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleAnalysis = async () => {
    if (!userInfo.idea.trim()) return;
    setStatus(AnalysisStatus.LOADING);
    try {
      const data = await evaluateAppIdea(userInfo.idea);
      setResult(data);
      setStatus(AnalysisStatus.SUCCESS);
    } catch (e) {
      setStatus(AnalysisStatus.ERROR);
    }
  };

  // Check if mandatory contact fields are filled
  const isContactInfoValid = userInfo.name.trim() !== '' && userInfo.email.trim() !== '' && userInfo.phone.trim() !== '';

  const handleNDARequest = () => {
    if (!isContactInfoValid) return;

    const subject = encodeURIComponent("NDA Request + Idea Feasibility");
    const body = encodeURIComponent(
      `Name: ${userInfo.name}\nEmail: ${userInfo.email}\nPhone: ${userInfo.phone}\n\nConcept/Idea:\n${userInfo.idea}`
    );
    window.location.href = `mailto:baitjet@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="demo" className="py-32 relative overflow-hidden min-h-screen flex items-center">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0 parallax-bg" 
        style={{ backgroundImage: `url("${TECH_BG}")` }} 
      ></div>
      
      {/* Dark Overlay with blue tint for "Tech" feel */}
      <div className="absolute inset-0 bg-hudson-dark/85 mix-blend-multiply z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-hudson-dark via-transparent to-hudson-dark z-0"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-gold-400 font-sans font-bold tracking-[0.2em] text-sm mb-4">PROPRIETARY TECHNOLOGY</h2>
          <h3 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">Instant Feasibility Check</h3>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-light">
            Before we sign the NDA, test our internal AI model. Enter your concept below for a preliminary market fit score powered by Gemini.
          </p>
        </div>

        <div className="bg-black/40 backdrop-blur-md border border-white/10 p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-sm">
          <div className="space-y-6">
            
            {/* User Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-gold-400 text-xs font-bold uppercase tracking-widest mb-2">Name <span className="text-red-400">*</span></label>
                <input 
                  type="text" 
                  name="name"
                  value={userInfo.name}
                  onChange={handleInputChange}
                  placeholder="Jane Doe"
                  className="w-full bg-white/5 border border-white/20 text-white p-3 focus:outline-none focus:border-gold-500 transition-all placeholder-gray-500"
                />
              </div>
              <div>
                <label className="block text-gold-400 text-xs font-bold uppercase tracking-widest mb-2">Email <span className="text-red-400">*</span></label>
                <input 
                  type="email" 
                  name="email"
                  value={userInfo.email}
                  onChange={handleInputChange}
                  placeholder="jane@example.com"
                  className="w-full bg-white/5 border border-white/20 text-white p-3 focus:outline-none focus:border-gold-500 transition-all placeholder-gray-500"
                />
              </div>
              <div>
                <label className="block text-gold-400 text-xs font-bold uppercase tracking-widest mb-2">Phone <span className="text-red-400">*</span></label>
                <input 
                  type="tel" 
                  name="phone"
                  value={userInfo.phone}
                  onChange={handleInputChange}
                  placeholder="(201) 555-0123"
                  className="w-full bg-white/5 border border-white/20 text-white p-3 focus:outline-none focus:border-gold-500 transition-all placeholder-gray-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-gold-400 text-xs font-bold uppercase tracking-widest mb-4">Your Concept Pitch</label>
              <textarea 
                name="idea"
                value={userInfo.idea}
                onChange={handleInputChange}
                placeholder="Describe your app idea here. E.g., 'A decentralized marketplace for local artists in Hoboken using blockchain for authenticity...'"
                className="w-full h-40 bg-white/5 border border-white/20 text-white p-6 focus:outline-none focus:border-gold-500 transition-all resize-none placeholder-gray-500 text-lg font-light"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAnalysis}
                disabled={status === AnalysisStatus.LOADING || !userInfo.idea.trim()}
                className={`flex-1 py-5 font-bold uppercase tracking-widest text-sm transition-all duration-300 border ${
                  status === AnalysisStatus.LOADING 
                    ? 'bg-gray-800 border-gray-700 cursor-not-allowed text-gray-500' 
                    : 'bg-gold-500 border-gold-500 text-hudson-dark hover:bg-transparent hover:text-gold-500'
                }`}
              >
                {status === AnalysisStatus.LOADING ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Crunching Data...
                  </span>
                ) : 'Analyze Viability'}
              </button>

              <button
                onClick={handleNDARequest}
                disabled={!isContactInfoValid}
                className={`flex-1 py-5 font-bold uppercase tracking-widest text-sm transition-all duration-300 border ${
                  !isContactInfoValid
                  ? 'border-gray-700 text-gray-600 cursor-not-allowed'
                  : 'border-white text-white hover:bg-white hover:text-hudson-dark'
                }`}
              >
                { !isContactInfoValid ? 'Contact Info Required' : 'nahhhh send the NDA' }
              </button>
            </div>
          </div>

          {status === AnalysisStatus.SUCCESS && result && (
            <div className="mt-12 border-t border-white/10 pt-10 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-4 text-center md:border-r border-white/10 flex flex-col justify-center items-center">
                  <div className="relative">
                    <svg className="w-32 h-32 transform -rotate-90">
                      <circle cx="64" cy="64" r="60" stroke="currentColor" strokeWidth="2" fill="transparent" className="text-gray-700" />
                      <circle cx="64" cy="64" r="60" stroke="currentColor" strokeWidth="2" fill="transparent" className="text-gold-500" strokeDasharray={377} strokeDashoffset={377 - (377 * result.score) / 100} />
                    </svg>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                      <span className="text-4xl font-serif font-bold text-white">{result.score}</span>
                    </div>
                  </div>
                  <div className="text-gold-400 text-xs uppercase tracking-widest mt-4">Viability Score</div>
                </div>
                <div className="md:col-span-8 space-y-6 text-left">
                  <div>
                    <h4 className="text-white font-bold mb-2 uppercase tracking-wide text-sm border-l-2 border-gold-500 pl-3">Executive Summary</h4>
                    <p className="text-gray-300 text-base leading-relaxed">{result.summary}</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2 uppercase tracking-wide text-sm border-l-2 border-gold-500 pl-3">Tech Recommendation</h4>
                    <p className="text-gray-300 text-base leading-relaxed">{result.recommendation}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {status === AnalysisStatus.ERROR && (
            <div className="mt-6 p-4 bg-red-900/20 border border-red-900/50 text-red-200 text-center text-sm">
              Unable to analyze at this moment. Please try again or contact us directly.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AiDemo;