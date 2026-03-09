
import React, { useState, useEffect } from 'react';

const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/krinakhunt12', icon: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /> },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/krinakhunt', icon: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></> },
    { name: 'Email', url: 'mailto:krinakhunt12@gmail.com', icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></> },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Works', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const Icon = ({ children }: { children: React.ReactNode }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );

  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border)' }}
      role="contentinfo"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full blur-3xl" style={{ backgroundColor: 'var(--accent-1)' }} />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl" style={{ backgroundColor: 'var(--accent-2)' }} />
      </div>

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main footer content — grid on desktop, stack on mobile */}
        <div className="pt-14 pb-10 md:pt-16 md:pb-12 lg:pt-20 lg:pb-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 lg:gap-12">
            {/* Brand column */}
            <div className="md:col-span-5 lg:col-span-5">
              <a href="#home" className="inline-block group">
                <h2 className="text-xl md:text-2xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
                  Krina <span style={{ color: 'var(--accent-1)' }}>Khunt</span>
                </h2>
                <p className="mt-1 text-sm font-medium uppercase tracking-widest opacity-60" style={{ color: 'var(--text-secondary)' }}>
                  Full Stack Developer
                </p>
                <div className="mt-3 h-0.5 w-12 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: 'var(--accent-1)' }} />
              </a>
              <p className="mt-4 text-sm max-w-xs leading-relaxed opacity-70" style={{ color: 'var(--text-secondary)' }}>
                Building modern web applications with clean code and thoughtful design. Open to collaborations and new opportunities.
              </p>
            </div>

            {/* Quick links column */}
            <div className="md:col-span-3 lg:col-span-3">
              <h3 className="text-xs font-semibold uppercase tracking-widest opacity-50 mb-4" style={{ color: 'var(--text-secondary)' }}>
                Navigation
              </h3>
              <nav className="flex flex-col gap-3" aria-label="Footer navigation">
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium transition-colors duration-200 hover:opacity-100 opacity-70 w-fit"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Connect column */}
            <div className="md:col-span-4 lg:col-span-4">
              <h3 className="text-xs font-semibold uppercase tracking-widest opacity-50 mb-4" style={{ color: 'var(--text-secondary)' }}>
                Connect
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-10 h-10 rounded-lg border transition-all duration-200 hover:border-opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                    style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
                    aria-label={link.name}
                    title={link.name}
                  >
                    <span className="[&>svg]:w-5 [&>svg]:h-5 transition-colors duration-200 group-hover:[color:var(--accent-1)]" style={{ color: 'inherit' }}>
                      <Icon>{link.icon}</Icon>
                    </span>
                  </a>
                ))}
              </div>
              <a
                href="mailto:krinakhunt12@gmail.com"
                className="mt-4 inline-block text-sm font-medium opacity-70 hover:opacity-100 transition-opacity duration-200"
                style={{ color: 'var(--text-secondary)' }}
              >
                krinakhunt12@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t"
          style={{ borderColor: 'var(--border)' }}
        >
          <p className="text-xs opacity-50 order-2 sm:order-1" style={{ color: 'var(--text-secondary)' }}>
            © {new Date().getFullYear()} Krina Khunt. All rights reserved.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className={`flex items-center gap-2 text-xs font-medium uppercase tracking-wider transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--bg-primary)] rounded ${showScrollTop ? 'opacity-100' : 'opacity-50 pointer-events-none'}`}
            style={{ color: 'var(--text-secondary)' }}
            aria-label="Back to top"
          >
            Back to top
            <span
              className="flex items-center justify-center w-8 h-8 rounded-full border transition-colors duration-200"
              style={{ borderColor: 'var(--border)' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
