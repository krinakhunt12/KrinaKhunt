
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setTimeout(() => setIsSent(false), 5000);
    }, 2000);
  };

  const contactDetails = [
    {
      label: 'Email',
      value: 'krinakhunt12@gmail.com',
      url: 'mailto:krinakhunt12@gmail.com',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
    },
    {
      label: 'LinkedIn',
      value: 'Krina Khunt',
      url: 'https://www.linkedin.com/in/krina-khunt-232732267',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
    },
    {
      label: 'GitHub',
      value: '@krinakhunt12',
      url: 'https://github.com/krinakhunt12',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Column: Let's Connect Info */}
          <div className="space-y-10 reveal">
            <div className="space-y-4">
              <h3 className="mono text-xs uppercase tracking-[0.4em] font-black" style={{ color: 'var(--accent-1)' }}>Get in Touch</h3>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter">LET'S <br /><span className="gradient-text">CONNECT</span></h2>
              <p className="text-lg max-w-sm opacity-60 leading-relaxed">
                Currently building innovative solutions at Codesmiths Technologies Pvt Ltd. Let's discuss your next big idea.
              </p>
            </div>

            <div className="space-y-4">
              {contactDetails.map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 group interactive p-3 rounded-2xl transition-all duration-300 hover:bg-white/5 border border-transparent hover:border-white/10"
                >
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
                    <div style={{ color: 'var(--accent-1)' }}>{item.icon}</div>
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-widest font-black opacity-40 mb-0.5">{item.label}</div>
                    <div className="text-lg font-bold group-hover:text-[var(--accent-1)] transition-colors">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="p-8 md:p-12 rounded-[3rem] border relative overflow-hidden shadow-2xl" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
              {isSent && (
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-8 space-y-4 animate-[fadeIn_0.5s_ease-out]" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                  <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--accent-1)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-black"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <h4 className="text-xl font-black">Transmission Sent!</h4>
                  <p className="opacity-60 text-sm">Thank you for identifying yourself. Krina Khunt will reach out soon.</p>
                  <button onClick={() => setIsSent(false)} className="mt-4 text-xs font-black uppercase tracking-widest border-b border-white/20 pb-1 hover:border-white transition-all">Send another</button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="space-y-8">
                  <div className="relative group">
                    <label className="block text-[10px] uppercase tracking-[0.2em] font-black opacity-50 mb-1">Identify Yourself</label>
                    <input type="text" required className="w-full bg-transparent border-b border-white/10 py-2 outline-none transition-all duration-300 focus:border-[var(--accent-1)] interactive" />
                  </div>

                  <div className="relative group">
                    <label className="block text-[10px] uppercase tracking-[0.2em] font-black opacity-50 mb-1">Email Frequency</label>
                    <input type="email" required className="w-full bg-transparent border-b border-white/10 py-2 outline-none transition-all duration-300 focus:border-[var(--accent-1)] interactive" />
                  </div>

                  <div className="relative group">
                    <label className="block text-[10px] uppercase tracking-[0.2em] font-black opacity-50 mb-1">Transmission Details</label>
                    <textarea required rows={4} className="w-full bg-transparent border-b border-white/10 py-2 outline-none transition-all duration-300 focus:border-[var(--accent-1)] resize-none interactive"></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-black uppercase tracking-[0.3em] text-[11px] transition-all duration-500 interactive group flex items-center justify-center gap-3"
                  style={{ backgroundColor: 'var(--accent-1)', color: 'var(--bg-primary)' }}
                >
                  <span>{isSubmitting ? 'Transmitting...' : 'Send Signal'}</span>
                  {!isSubmitting && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
