import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
        style={{
          padding: isScrolled ? '12px 0' : '24px 0',
          backgroundColor: isScrolled ? 'var(--nav-bg)' : 'transparent',
          borderBottom: isScrolled ? '1px solid var(--border)' : 'none',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        }}
      >
        <div className="container max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="group flex flex-col items-start min-w-max mr-8 lg:mr-12 no-underline hover:no-underline">
              <span className="text-xl md:text-2xl font-bold leading-none tracking-tighter uppercase" style={{ color: 'var(--text-primary)' }}>Krina</span>
              <span className="text-xs font-semibold tracking-[0.3em] uppercase leading-none mt-1" style={{ color: 'var(--text-secondary)', opacity: 0.5 }}>Khunt</span>
            </Link>

            <div className="hidden md:block w-[2px] h-9 rounded-full mr-8 lg:mr-12" style={{ backgroundColor: 'var(--accent-1)', opacity: 0.6 }} />

            <div className="hidden md:flex items-center gap-6 lg:gap-10">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path}
                  className="text-[10px] lg:text-[11px] font-bold tracking-[0.2em] uppercase relative group no-underline hover:no-underline transition-colors"
                  style={{ color: isActive(link.path) ? 'var(--accent-1)' : 'var(--text-secondary)' }}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 h-0.5 rounded-full transition-all duration-300"
                    style={{ width: isActive(link.path) ? '100%' : '0%', backgroundColor: 'var(--accent-1)' }} />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg border"
              style={{ borderColor: 'var(--border)' }} aria-label="Menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                {isMobileMenuOpen
                  ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
                  : <><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></>
                }
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <>
          <div className="fixed inset-0 z-[60] md:hidden" style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }} onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-0 right-0 h-full w-[85vw] max-w-sm z-[70] md:hidden flex flex-col"
            style={{ backgroundColor: 'var(--bg-secondary)', borderLeft: '1px solid var(--border)', animation: 'slide-in 0.3s ease-out forwards' }}>
            <div className="p-6 border-b flex items-center justify-between" style={{ borderColor: 'var(--border)' }}>
              <div>
                <span className="text-xl font-bold leading-none tracking-tighter uppercase block" style={{ color: 'var(--text-primary)' }}>Krina</span>
                <span className="text-xs font-semibold tracking-[0.3em] opacity-50 uppercase leading-none mt-1 block" style={{ color: 'var(--text-secondary)' }}>Khunt</span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-lg border" style={{ borderColor: 'var(--border)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              </button>
            </div>
            <nav className="flex-1 p-6 space-y-2">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between p-4 rounded-xl border transition-all duration-200 no-underline"
                  style={{
                    backgroundColor: isActive(link.path) ? 'var(--accent-1)' : 'transparent',
                    borderColor: isActive(link.path) ? 'var(--accent-1)' : 'var(--border)',
                    color: isActive(link.path) ? 'var(--bg-primary)' : 'var(--text-primary)',
                  }}>
                  <span className="text-xs font-bold uppercase tracking-[0.2em]">{link.name}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
                </Link>
              ))}
            </nav>
            <div className="p-6 border-t" style={{ borderColor: 'var(--border)' }}>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 text-center" style={{ color: 'var(--text-secondary)' }}>Full Stack Developer</p>
            </div>
          </div>
        </>
      )}

      <style>{`
        @keyframes slide-in { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
      `}</style>
    </>
  );
};

export default Navbar;
