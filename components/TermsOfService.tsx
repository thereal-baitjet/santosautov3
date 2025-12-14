import React, { useEffect } from 'react';

const TermsOfService: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-gray-300">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">Terms of Service</h1>
      <p className="text-gold-400 uppercase tracking-widest text-sm mb-12">Effective Date: October 26, 2023</p>

      <div className="space-y-10">
        <section>
          <h2 className="text-2xl text-white font-bold mb-4">1. Agreement to Terms</h2>
          <p className="leading-relaxed">
            These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Santos Automation ("we," "us," or "our"), concerning your access to and use of the website. By accessing the site, you acknowledge that you have read, understood, and agreed to be bound by all of these Terms of Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-white font-bold mb-4">2. Intellectual Property Rights</h2>
          <p className="leading-relaxed mb-4">
            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") are owned or controlled by us or licensed to us.
          </p>
          <p className="leading-relaxed">
            <strong>Client Concepts:</strong> We make no claim of ownership over specific business concepts or app ideas you submit for preliminary analysis via our AI tools. However, using the public demo does not constitute a formal binding contract for development.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-white font-bold mb-4">3. AI Analysis Disclaimer</h2>
          <p className="leading-relaxed">
            The "Instant Feasibility Check" and "Viability Score" provided by our AI tools are for informational and entertainment purposes only. They do not constitute financial, legal, or business advice. Santos Automation is not responsible for business decisions made based on these automated scores.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-white font-bold mb-4">4. Governing Law</h2>
          <p className="leading-relaxed">
            These Terms shall be governed by and defined following the laws of the State of New Jersey. Santos Automation and yourself irrevocably consent that the courts of Hudson County, New Jersey shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-white font-bold mb-4">5. Modifications and Interruptions</h2>
          <p className="leading-relaxed">
            We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;