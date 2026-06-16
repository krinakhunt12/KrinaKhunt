import React, { useState, useRef, useEffect } from 'react';
import toast from 'react-hot-toast';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); observer.disconnect(); } }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const inquiryOptions = ['Project Collaboration', 'Job Opportunity', 'General Question', 'For Freelance Services'];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedInquiry) { toast.error('Please select an inquiry type'); return; }
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    formData.append('access_key', import.meta.env.VITE_CONTACT_KEY);
    formData.append('inquiry_type', selectedInquiry);
    formData.append('subject', `New inquiry: ${selectedInquiry}`);
    formData.append('from_name', formData.get('name') as string || 'Portfolio Contact Form');
    try {
      const response = await fetch(import.meta.env.VITE_CONTACT_API, { method: 'POST', body: formData });
      const data = await response.json();
      if (data.success) { toast.success('Message sent successfully!'); setSelectedInquiry(''); (e.target as HTMLFormElement).reset(); }
      else toast.error('Failed to send message. Please try again.');
    } catch { toast.error('Something went wrong. Please check your connection.'); }
    finally { setIsSubmitting(false); }
  };

  const contactDetails = [
    { label: 'Email', value: 'krinakhunt12@gmail.com', url: 'mailto:krinakhunt12@gmail.com', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg> },
    { label: 'LinkedIn', value: 'Krina Khunt', url: 'https://www.linkedin.com/in/krinakhunt', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg> },
    { label: 'GitHub', value: '@krinakhunt12', url: 'https://github.com/krinakhunt12', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg> },
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-12 md:py-16 px-6 md:px-6 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full blur-3xl -z-10" style={{ background: 'radial-gradient(ellipse, var(--accent-1), transparent)', opacity: 0.04 }} />

      <div className="container max-w-6xl mx-auto px-2 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-stretch">

          {/* Left */}
          <div className="flex flex-col space-y-8" style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateX(0)' : 'translateX(-40px)', transition: 'opacity 0.8s ease, transform 0.8s ease' }}>
            <div className="space-y-3">
              <p className="text-sm md:text-base max-w-md opacity-60 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Where curiosity meets execution and ideas become real. Let's discuss your next big idea.
              </p>
            </div>

            <div className="space-y-3">
              {contactDetails.map((item, idx) => (
                <a key={idx} href={item.url} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border group"
                  style={{ borderColor: 'var(--border)', transition: 'border-color 0.2s, transform 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent-1)'; (e.currentTarget as HTMLElement).style.transform = 'translateX(6px)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.transform = 'translateX(0)'; }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center border" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)', color: 'var(--accent-1)' }}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-widest font-semibold opacity-40 mb-0.5">{item.label}</div>
                    <div className="text-sm md:text-base font-bold" style={{ color: 'var(--text-primary)' }}>{item.value}</div>
                  </div>
                  <div className="ml-auto opacity-30 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--accent-1)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability indicator */}
            <div className="flex items-center gap-3 p-5 rounded-xl border" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-secondary)' }}>
              <div className="w-3 h-3 rounded-full bg-emerald-500" style={{ boxShadow: '0 0 0 4px rgba(16,185,129,0.2)', animation: 'pulse 2s infinite' }} />
              <div>
                <div className="text-xs font-bold uppercase tracking-wider">Currently Available</div>
                <div className="text-[10px] opacity-50 mt-0.5">Open to full-time roles & freelance projects</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateX(0)' : 'translateX(40px)', transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s' }}>
            <div className="p-7 md:p-10 rounded-2xl border" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-secondary)' }}>
              <h3 className="text-lg font-bold mb-8 uppercase tracking-wider">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                {[{ label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Doe' }, { label: 'Email Address', name: 'email', type: 'email', placeholder: 'hello@example.com' }].map(field => (
                  <div key={field.name}>
                    <label className="block text-[9px] uppercase tracking-[0.2em] font-semibold opacity-50 mb-2">{field.label}</label>
                    <input type={field.type} name={field.name} placeholder={field.placeholder} required
                      className="w-full bg-transparent border-b py-2 outline-none text-sm"
                      style={{ borderColor: 'var(--border)', color: 'var(--text-primary)', transition: 'border-color 0.2s' }}
                      onFocus={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent-1)'}
                      onBlur={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'}
                    />
                  </div>
                ))}

                {/* Inquiry dropdown */}
                <div>
                  <label className="block text-[9px] uppercase tracking-[0.2em] font-semibold opacity-50 mb-2">Inquiry Type</label>
                  <div className="relative">
                    <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full bg-transparent border-b py-2 outline-none text-sm flex justify-between items-center cursor-pointer"
                      style={{ borderColor: isDropdownOpen ? 'var(--accent-1)' : 'var(--border)' }}>
                      <span style={{ color: selectedInquiry ? 'var(--accent-1)' : 'rgba(163,163,163,0.5)' }}>{selectedInquiry || 'Select reason'}</span>
                      <div style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s', opacity: 0.5 }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m6 9 6 6 6-6" /></svg>
                      </div>
                    </div>
                    {isDropdownOpen && (
                      <>
                        <div className="fixed inset-0 z-30" onClick={() => setIsDropdownOpen(false)} />
                        <div className="absolute top-full left-0 w-full mt-1 rounded-xl border overflow-hidden z-40" style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border)', animation: 'reveal 0.18s ease-out forwards' }}>
                          {inquiryOptions.map(option => (
                            <div key={option} onClick={() => { setSelectedInquiry(option); setIsDropdownOpen(false); }}
                              className="px-4 py-3 text-sm cursor-pointer transition-colors"
                              style={{ color: 'var(--text-primary)' }}
                              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--accent-1)'; (e.currentTarget as HTMLElement).style.color = 'var(--bg-primary)'; }}
                              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = ''; (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)'; }}
                            >{option}</div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-[9px] uppercase tracking-[0.2em] font-semibold opacity-50 mb-2">Your Message</label>
                  <textarea name="message" placeholder="Share your thoughts..." required rows={4}
                    className="w-full bg-transparent border-b py-2 outline-none resize-none text-sm"
                    style={{ borderColor: 'var(--border)', color: 'var(--text-primary)', transition: 'border-color 0.2s' }}
                    onFocus={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent-1)'}
                    onBlur={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'}
                  />
                </div>

                <button type="submit" disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-bold uppercase tracking-[0.25em] text-[11px] flex items-center justify-center gap-2 border-2"
                  style={{ backgroundColor: 'var(--accent-1)', color: 'var(--bg-primary)', borderColor: 'var(--accent-1)', opacity: isSubmitting ? 0.7 : 1, transition: 'opacity 0.2s' }}
                >
                  {isSubmitting ? (
                    <><svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg><span>Transmitting…</span></>
                  ) : (
                    <><span>Send Message</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg></>
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
