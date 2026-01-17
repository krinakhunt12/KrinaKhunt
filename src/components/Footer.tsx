
import React from 'react';

const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const socialLinks = [
    { name: 'Github', url: 'https://github.com/krinakhunt12', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/krina-khunt-232732267', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> },
    { name: 'Email', url: 'mailto:krinakhunt12@gmail.com', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> },
  ];

  return (
    <footer className="pt-24 pb-12 px-6 border-t" style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border)' }}>
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-12">

          {/* Brand/Logo Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-black uppercase tracking-tighter">
              Krina <span style={{ color: 'var(--accent-1)' }}>Khunt</span>
            </h2>
            <p className="text-xs font-bold uppercase tracking-[0.4em] opacity-40">
              Full Stack Developer
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-xs font-black uppercase tracking-[0.3em] opacity-60">
            <a href="#home" className="hover:text-[var(--accent-1)] transition-colors interactive">Home</a>
            <a href="#about" className="hover:text-[var(--accent-1)] transition-colors interactive">About</a>
            <a href="#projects" className="hover:text-[var(--accent-1)] transition-colors interactive">Works</a>
            <a href="#contact" className="hover:text-[var(--accent-1)] transition-colors interactive">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6">
            {socialLinks.map(link => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-[var(--accent-1)] hover:text-[var(--accent-1)] transition-all interactive"
                title={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Copyright & Scroll Top */}
          <div className="w-full pt-12 mt-12 border-t flex flex-col md:flex-row items-center justify-between gap-8" style={{ borderColor: 'var(--border)' }}>
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-30">
              © {new Date().getFullYear()} Krina Khunt. All Rights Reserved.
            </p>

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-3 interactive"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100 transition-opacity">Back to Top</span>
              <div className="w-10 h-10 rounded-full border flex items-center justify-center group-hover:bg-[var(--accent-1)] group-hover:border-[var(--accent-1)] transition-all duration-500" style={{ borderColor: 'var(--border)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-black transition-all"><polyline points="18 15 12 9 6 15"></polyline></svg>
              </div>
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
