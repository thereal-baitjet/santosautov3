import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'Evaluate my App Idea',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name || 'message']: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New Inquiry from SantosAutomation: ${formData.interest}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nInterest: ${formData.interest}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:baitjet@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-hudson-dark text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-gold-400 font-sans font-bold tracking-widest text-sm mb-4">GET IN TOUCH</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">Let's Build the Future of Hudson County</h3>
            <p className="text-gray-400 text-lg mb-8 font-light">
              Whether you are a startup founder with a disruptive idea or an established professional seeking AI integration, we have the custom deals and legal frameworks (NDAs) to protect and propel you.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-gold-400 mr-4 text-xl">✓</span>
                <p className="text-gray-300">Strict NDAs available for all evaluations.</p>
              </div>
              <div className="flex items-start">
                <span className="text-gold-400 mr-4 text-xl">✓</span>
                <p className="text-gray-300">Local Hudson County expertise.</p>
              </div>
              <div className="flex items-start">
                <span className="text-gold-400 mr-4 text-xl">✓</span>
                <p className="text-gray-300">Full-stack development & AI strategy.</p>
              </div>
            </div>

            <div className="mt-12 p-6 border border-gold-500/30 bg-gold-500/5">
              <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">Visit Our Partner Site</p>
              <a href="https://goldinthehudson.com" target="_blank" rel="noreferrer" className="text-2xl font-serif text-white hover:text-gold-400 transition-colors">
                Goldinthehudson.com &rarr;
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white text-hudson-dark p-8 md:p-12 shadow-2xl">
            <h4 className="text-2xl font-serif font-bold mb-6">Start the Conversation</h4>
            
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-100 border-b-2 border-gray-200 p-3 focus:outline-none focus:border-gold-500 transition-colors" 
                  placeholder="John Doe" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-100 border-b-2 border-gray-200 p-3 focus:outline-none focus:border-gold-500 transition-colors" 
                  placeholder="john@example.com" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2">Interest</label>
                <select 
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full bg-gray-100 border-b-2 border-gray-200 p-3 focus:outline-none focus:border-gold-500 transition-colors"
                >
                  <option>Evaluate my App Idea</option>
                  <option>Business AI Integration</option>
                  <option>Partnership Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-100 border-b-2 border-gray-200 p-3 h-32 focus:outline-none focus:border-gold-500 transition-colors resize-none" 
                  placeholder="Briefly describe your needs..."
                ></textarea>
              </div>
              
              <button type="submit" className="w-full bg-hudson-dark text-white py-4 font-bold uppercase tracking-widest hover:bg-gold-500 hover:text-hudson-dark transition-all duration-300">
                Send Request
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;