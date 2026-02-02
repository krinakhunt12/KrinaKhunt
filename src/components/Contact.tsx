
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
    <section id="contact" className="py-12 md:py-16 lg:py-20 px-4 md:px-6 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-2 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-start">

          {/* Left Column: Let's Connect Info */}
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            <div className="space-y-2 md:space-y-3 lg:space-y-4">
              <h3 className="mono text-[9px] md:text-[10px] lg:text-xs uppercase tracking-[0.4em] font-semibold" style={{ color: 'var(--accent-1)' }}>Get in Touch</h3>
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-semibold tracking-tighter leading-tight">
                LET'S <br /><span style={{ color: 'var(--accent-1)' }}>CONNECT</span>
              </h2>
              <p className="text-xs md:text-sm lg:text-lg max-w-md opacity-60 leading-relaxed">
                Where curiosity meets execution and ideas become real. Let's discuss your next big idea.
              </p>
            </div>

            <div className="space-y-3 md:space-y-4">
              {contactDetails.map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 md:gap-5 group interactive p-3 md:p-3 rounded-xl md:rounded-2xl border hover:underline"
                  style={{ borderColor: 'var(--border)' }}
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg md:rounded-xl flex items-center justify-center" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
                    <div style={{ color: 'var(--accent-1)' }}>{item.icon}</div>
                  </div>
                  <div>
                    <div className="text-[8px] md:text-[9px] uppercase tracking-widest font-semibold opacity-40 mb-0.5">{item.label}</div>
                    <div className="text-sm md:text-base lg:text-lg font-bold group-hover:text-[var(--accent-1)] transition-colors">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div>
            <div className="p-6 md:p-10 lg:p-12 rounded-2xl md:rounded-[3rem] border relative overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
              {isSent && (
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-8 space-y-4" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                  <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--accent-1)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-black"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <h4 className="text-xl font-semibold">Transmission Sent!</h4>
                  <p className="opacity-60 text-sm">Thank you for identifying yourself. Krina Khunt will reach out soon.</p>
                  <button onClick={() => setIsSent(false)} className="mt-4 text-[10px] md:text-xs font-semibold uppercase tracking-widest border-b pb-1 hover:underline" style={{ borderColor: 'var(--border)' }}>Send another</button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8 lg:space-y-10">
                <div className="space-y-8">
                  <div className="relative group">
                    <label className="block text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-semibold opacity-50 mb-1 md:mb-1">Identify Yourself</label>
                    <input type="text" required className="w-full bg-transparent border-b py-2 md:py-2 outline-none interactive text-sm md:text-base" style={{ borderColor: 'var(--border)' }} />
                  </div>

                  <div className="relative group">
                    <label className="block text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-semibold opacity-50 mb-1 md:mb-1">Email Frequency</label>
                    <input type="email" required className="w-full bg-transparent border-b py-2 md:py-2 outline-none interactive text-sm md:text-base" style={{ borderColor: 'var(--border)' }} />
                  </div>

                  <div className="relative group">
                    <label className="block text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-semibold opacity-50 mb-1 md:mb-1">Transmission Details</label>
                    <textarea required rows={4} className="w-full bg-transparent border-b py-2 md:py-2 outline-none resize-none interactive text-sm md:text-base" style={{ borderColor: 'var(--border)' }}></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 md:py-4 rounded-lg md:rounded-xl font-semibold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-[11px] interactive group flex items-center justify-center gap-2 md:gap-3 hover:underline"
                  style={{ backgroundColor: 'var(--accent-1)', color: 'var(--bg-primary)' }}
                >
                  <span>{isSubmitting ? 'Transmitting...' : 'Send Signal'}</span>
                  {!isSubmitting && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
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
