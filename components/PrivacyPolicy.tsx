import React, { useEffect } from 'react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-gray-300">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">Privacy Policy</h1>
      <p className="text-gold-400 uppercase tracking-widest text-sm mb-12">Last Updated: October 26, 2023</p>

      <div className="space-y-10">
        <section>
          <h2 className="text-2xl text-white font-bold mb-4">1. Introduction</h2>
          <p className="leading-relaxed">
            Santos Automation ("we," "our," or "us") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our AI feasibility tools. We are based in Union City, New Jersey, and are committed to protecting the proprietary concepts of our local community.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-white font-bold mb-4">2. Information We Collect</h2>
          <p className="leading-relaxed mb-4">
            We collect information that you voluntarily provide to us when you express interest in obtaining information about us or our products and services, when you participate in activities on the website (such as the AI Feasibility Check), or otherwise when you contact us.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-400">
            <li><strong>Personal Data:</strong> Name, email address, and phone number.</li>
            <li><strong>Proprietary Concepts:</strong> App ideas, business descriptions, and technical requirements submitted for analysis.</li>
            <li><strong>Technical Data:</strong> IP address, browser type, and device information automatically collected by our servers.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl text-white font-bold mb-4">3. Use of AI Technologies</h2>
          <p className="leading-relaxed">
            We utilize Google's Gemini API and other generative AI technologies to analyze the feasibility of your app ideas. By submitting your idea, you acknowledge that the text is processed by these third-party services solely for the purpose of generating a viability score and recommendation. We do not claim ownership of your ideas submitted for this preliminary check.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-white font-bold mb-4">4. Data Protection & NDAs</h2>
          <p className="leading-relaxed">
            While we implement security measures to maintain the safety of your personal information, the "Instant Feasibility Check" on this public website is a preliminary tool. For full intellectual property protection, we strictly recommend signing a Non-Disclosure Agreement (NDA) before sharing detailed schematics or code. We provide standard NDAs upon request.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-white font-bold mb-4">5. Contact Us</h2>
          <p className="leading-relaxed">
            If you have questions or comments about this policy, or to request the deletion of your data, please contact us at:<br/><br/>
            <strong className="text-white">Santos Automation</strong><br/>
            Union City, NJ<br/>
            Email: baitjet@gmail.com
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;