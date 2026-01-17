
import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../hooks/useTheme';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-3 shadow-2xl glass' : 'py-6 bg-transparent'}`}
      style={{
        backgroundColor: isScrolled ? (theme === 'dark' ? 'rgba(0,0,0,0.85)' : 'rgba(255,255,255,0.9)') : 'transparent',
        borderBottom: isScrolled ? '1px solid var(--border)' : 'none'
      }}
    >
      <div className="container max-w-6xl mx-auto px-4 md:px-0 flex items-center justify-between">
        <div className="flex items-center">
          {/* Brand Name with right margin for breathing room */}
          <a href="#home" className="group interactive flex flex-col items-start min-w-max mr-8 lg:mr-12">
            <span className="text-xl md:text-2xl font-black leading-none tracking-tighter uppercase">Krina</span>
            <span className="text-[9px] md:text-[10px] font-black tracking-[0.3em] opacity-50 uppercase leading-none mt-1">Khunt</span>
          </a>

          {/* Vertical Separator - with responsive horizontal margins */}
          <div className="hidden md:block w-[3px] h-10 rounded-full mr-8 lg:mr-12" style={{ backgroundColor: 'var(--accent-1)' }} />

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`text-[9px] lg:text-[11px] font-black tracking-[0.2em] uppercase transition-all duration-300 interactive relative group ${activeSection === link.id ? 'active' : ''}`}
                style={{ color: activeSection === link.id ? 'var(--accent-1)' : 'var(--text-secondary)' }}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`} style={{ backgroundColor: 'var(--accent-1)' }} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          {/* Hamburger Menu Icon - only visible on mobile (below md) */}
          <button className="md:hidden interactive p-2 rounded-lg border border-white/10" aria-label="Menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
