
import React, { useState, useEffect } from 'react';

const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const socialLinks = [
    { name: 'Github', url: 'https://github.com/krinakhunt12', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/krina-khunt-232732267', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> },
    { name: 'Email', url: 'mailto:krinakhunt12@gmail.com', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Works', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="pt-16 md:pt-20 lg:pt-24 pb-8 md:pb-10 lg:pb-12 px-4 md:px-6 border-t relative overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border)' }}>
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: 'var(--accent-1)', animationDuration: '4s' }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: 'var(--accent-2)', animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      <div className="container max-w-6xl mx-auto px-2 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-10 lg:space-y-12">

          {/* Brand/Logo Section with Hover Animation */}
          <div className="space-y-3 md:space-y-4 group cursor-default">
            <h2 className="text-lg md:text-xl font-bold uppercase tracking-tighter transition-all duration-300 group-hover:scale-105">
              Krina <span className="inline-block transition-all duration-300 group-hover:rotate-3" style={{ color: 'var(--accent-1)' }}>Khunt</span>
            </h2>
            <p className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.4em] opacity-40 group-hover:opacity-60 transition-opacity">
              Full Stack Developer
            </p>
            {/* Animated underline */}
            <div className="h-0.5 w-0 group-hover:w-24 mx-auto transition-all duration-500 rounded-full" style={{ backgroundColor: 'var(--accent-1)' }} />
          </div>

          {/* Quick Links with Enhanced Hover Effects */}
          <div className="flex flex-wrap justify-center gap-x-8 md:gap-x-12 gap-y-4 md:gap-y-6">
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative text-[10px] md:text-xs font-semibold uppercase tracking-[0.3em] transition-all duration-300 interactive group/link"
                style={{
                  color: hoveredLink === link.name ? 'var(--accent-1)' : 'var(--text-secondary)',
                  opacity: hoveredLink === link.name ? 1 : 0.6
                }}
              >
                {link.name}
                {/* Animated underline */}
                <span
                  className="absolute -bottom-1 left-0 h-0.5 bg-current transition-all duration-300"
                  style={{
                    width: hoveredLink === link.name ? '100%' : '0%',
                    backgroundColor: 'var(--accent-1)'
                  }}
                />
                {/* Dot indicator */}
                <span
                  className="absolute -top-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--accent-1)',
                    opacity: hoveredLink === link.name ? 1 : 0,
                    transform: hoveredLink === link.name ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(-4px)'
                  }}
                />
              </a>
            ))}
          </div>

          {/* Social Icons with Scale and Rotate Effects */}
          <div className="flex gap-4 md:gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/social relative w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-all duration-300 interactive"
                style={{
                  borderColor: 'var(--border)',
                  animationDelay: `${index * 100}ms`
                }}
                title={link.name}
              >
                {/* Background glow on hover */}
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover/social:opacity-20 transition-opacity duration-300 blur-md"
                  style={{ backgroundColor: 'var(--accent-1)' }}
                />

                {/* Icon with rotation */}
                <div className="relative z-10 transition-all duration-300 group-hover/social:scale-110 group-hover/social:rotate-12">
                  <div className="transition-colors duration-300 group-hover/social:text-[var(--accent-1)]">
                    {link.icon}
                  </div>
                </div>

                {/* Border animation */}
                <div
                  className="absolute inset-0 rounded-full border-2 opacity-0 group-hover/social:opacity-100 transition-all duration-300 scale-110 group-hover/social:scale-125"
                  style={{ borderColor: 'var(--accent-1)' }}
                />
              </a>
            ))}
          </div>

          {/* Copyright & Scroll Top */}
          <div className="w-full pt-8 md:pt-10 lg:pt-12 mt-8 md:mt-10 lg:mt-12 border-t flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8" style={{ borderColor: 'var(--border)' }}>
            <p className="text-[9px] md:text-[10px] font-semibold uppercase tracking-widest opacity-30 hover:opacity-50 transition-opacity cursor-default">
              © {new Date().getFullYear()} Krina Khunt. All Rights Reserved.
            </p>

            {/* Enhanced Back to Top Button */}
            <button
              onClick={scrollToTop}
              className={`group/btn flex items-center gap-2 md:gap-3 interactive relative transition-all duration-300 ${showScrollTop ? 'opacity-100' : 'opacity-60'}`}
            >
              <span className="text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.3em] opacity-40 group-hover/btn:opacity-100 transition-all duration-300 group-hover/btn:translate-x-1">
                Back to Top
              </span>

              {/* Animated circle button */}
              <div className="relative">
                {/* Outer ring animation */}
                <div
                  className="absolute inset-0 w-8 h-8 md:w-10 md:h-10 rounded-full border-2 opacity-0 group-hover/btn:opacity-100 transition-all duration-300 group-hover/btn:scale-125"
                  style={{ borderColor: 'var(--accent-1)' }}
                />

                {/* Main button */}
                <div
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full border flex items-center justify-center transition-all duration-300 group-hover/btn:bg-[var(--accent-1)] group-hover/btn:border-[var(--accent-1)] group-hover/btn:-translate-y-1"
                  style={{ borderColor: 'var(--border)' }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-all duration-300 group-hover/btn:text-[var(--bg-primary)] group-hover/btn:-translate-y-0.5 group-hover/btn:animate-bounce"
                  >
                    <polyline points="18 15 12 9 6 15"></polyline>
                  </svg>
                </div>

                {/* Shadow effect */}
                <div
                  className="absolute inset-0 w-8 h-8 md:w-10 md:h-10 rounded-full opacity-0 group-hover/btn:opacity-30 transition-all duration-300 blur-md translate-y-1"
                  style={{ backgroundColor: 'var(--accent-1)' }}
                />
              </div>
            </button>
          </div>

        </div>
      </div>

      {/* CSS for additional animations */}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
