
import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleMobileNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    // Small delay to allow menu to close before scrolling
    setTimeout(() => {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-180 ease-out ${isScrolled ? 'py-3' : 'py-6 bg-transparent'}`}
        style={{
          backgroundColor: isScrolled ? 'var(--nav-bg)' : 'transparent',
          borderBottom: isScrolled ? '1px solid var(--border)' : 'none'
        }}
      >
        <div className="container max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center">
            {/* Brand Name with right margin for breathing room */}
            <a href="#home" className="group interactive flex flex-col items-start min-w-max mr-8 lg:mr-12">
              <span className="text-xl md:text-2xl font-semibold leading-none tracking-tighter uppercase">Krina</span>
              <span className="text-xs md:text-sm font-semibold tracking-[0.3em] opacity-50 uppercase leading-none mt-1">Khunt</span>
            </a>

            {/* Vertical Separator - with responsive horizontal margins */}
            <div className="hidden md:block w-[3px] h-10 rounded-full mr-8 lg:mr-12" style={{ backgroundColor: 'var(--accent-1)' }} />

            {/* Navigation Menu */}
            <div className="hidden md:flex items-center gap-6 lg:gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={`nav-link text-[9px] lg:text-[11px] font-semibold tracking-[0.2em] uppercase interactive relative group ${activeSection === link.id ? 'active' : ''}`}
                  style={{ color: activeSection === link.id ? 'var(--accent-1)' : 'var(--text-secondary)' }}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 transition-[width] duration-180 ${activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`} style={{ backgroundColor: 'var(--accent-1)' }} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            {/* Hamburger Menu Icon - only visible on mobile (below md) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden interactive p-2 rounded-lg border"
              style={{ borderColor: 'var(--border)' }}
              aria-label="Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ animation: 'fadeIn 0.3s ease-out' }}
          />

          {/* Mobile Menu Drawer */}
          <div
            className="fixed top-0 right-0 h-full w-[85vw] max-w-sm z-[70] md:hidden flex flex-col"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderLeft: '1px solid var(--border)',
              animation: 'slideInRight 0.3s ease-out'
            }}
          >
            {/* Mobile Menu Header */}
            <div className="p-6 border-b flex items-center justify-between" style={{ borderColor: 'var(--border)' }}>
              <div className="flex flex-col">
                <span className="text-xl font-semibold leading-none tracking-tighter uppercase">Krina</span>
                <span className="text-xs font-semibold tracking-[0.3em] opacity-50 uppercase leading-none mt-1">Khunt</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg border interactive"
                style={{ borderColor: 'var(--border)' }}
                aria-label="Close menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="flex-1 p-6 space-y-2">
              {navLinks.map((link, index) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileNavClick(link.href);
                  }}
                  className="block p-4 rounded-xl border transition-all duration-200 interactive"
                  style={{
                    backgroundColor: activeSection === link.id ? 'var(--accent-1)' : 'transparent',
                    borderColor: activeSection === link.id ? 'var(--accent-1)' : 'var(--border)',
                    color: activeSection === link.id ? 'var(--bg-primary)' : 'var(--text-primary)',
                    animationDelay: `${index * 50}ms`,
                    animation: 'slideInRight 0.3s ease-out'
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em]">{link.name}</span>
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
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </div>
                </a>
              ))}
            </nav>

            {/* Mobile Menu Footer */}
            <div className="p-6 border-t" style={{ borderColor: 'var(--border)' }}>
              <p className="text-xs font-semibold uppercase tracking-widest opacity-40 text-center">
                Full Stack Developer
              </p>
            </div>
          </div>
        </>
      )}

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideInRight {
          from { 
            transform: translateX(100%);
            opacity: 0;
          }
          to { 
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
