import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const h = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const socials = [
    { name: 'GitHub', url: 'https://github.com/krinakhunt12', icon: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /> },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/krinakhunt', icon: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></> },
    { name: 'Email', url: 'mailto:krinakhunt12@gmail.com', icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></> },
  ];

  const navLinks = [
    { name: 'Home', path: '/' }, { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' }, { name: 'Projects', path: '/projects' },
    { name: 'Blogs', path: '/blogs' }, { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border)' }}>
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">

            {/* Brand */}
            <div className="md:col-span-5">
              <Link to="/" className="inline-block group no-underline hover:no-underline mb-4">
                <h2 className="text-xl md:text-2xl font-bold tracking-tight">
                  Krina <span style={{ color: 'var(--accent-1)' }}>Khunt</span>
                </h2>
                <p className="text-xs font-medium uppercase tracking-widest opacity-60 mt-1" style={{ color: 'var(--text-secondary)' }}>Full Stack Developer</p>
                <div className="h-0.5 w-0 group-hover:w-12 rounded-full mt-2 transition-all duration-300" style={{ backgroundColor: 'var(--accent-1)' }} />
              </Link>
              <p className="text-sm max-w-xs leading-relaxed opacity-70" style={{ color: 'var(--text-secondary)' }}>
                Building modern web applications with clean code and thoughtful design. Open to collaborations and new opportunities.
              </p>
              <div className="flex gap-3 mt-6">
                {socials.map(s => (
                  <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center w-9 h-9 rounded-lg border transition-all duration-200"
                    style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent-1)'; (e.currentTarget as HTMLElement).style.color = 'var(--accent-1)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
                    aria-label={s.name}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{s.icon}</svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="md:col-span-3">
              <h3 className="text-[10px] font-bold uppercase tracking-widest opacity-50 mb-5" style={{ color: 'var(--text-secondary)' }}>Navigation</h3>
              <nav className="flex flex-col gap-3">
                {navLinks.map(link => (
                  <Link key={link.name} to={link.path}
                    className="text-sm font-medium opacity-65 hover:opacity-100 w-fit no-underline hover:no-underline transition-all duration-200"
                    style={{ color: 'var(--text-secondary)' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Availability card */}
            <div className="md:col-span-4">
              <h3 className="text-[10px] font-bold uppercase tracking-widest opacity-50 mb-5" style={{ color: 'var(--text-secondary)' }}>Status</h3>
              <div className="p-5 rounded-xl border" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-secondary)' }}>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" style={{ boxShadow: '0 0 0 3px rgba(16,185,129,0.2)' }} />
                  <span className="text-xs font-bold uppercase tracking-wider">Available for Work</span>
                </div>
                <p className="text-xs opacity-60 leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>Open to full-time positions and freelance projects. Let's build something great together.</p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider no-underline hover:no-underline" style={{ color: 'var(--accent-1)' }}>
                  Get in touch
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t" style={{ borderColor: 'var(--border)' }}>
          <p className="text-xs opacity-50 order-2 sm:order-1" style={{ color: 'var(--text-secondary)' }}>
            © {new Date().getFullYear()} Krina Khunt. All rights reserved.
          </p>
          <button type="button" onClick={scrollToTop}
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider transition-all duration-200 rounded order-1 sm:order-2"
            style={{ color: 'var(--text-secondary)', opacity: showTop ? 1 : 0.3, pointerEvents: showTop ? 'auto' : 'none' }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'}
          >
            Back to top
            <span className="flex items-center justify-center w-7 h-7 rounded-full border" style={{ borderColor: 'var(--border)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="18 15 12 9 6 15"/></svg>
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
