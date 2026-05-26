import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';

const ROLES = ['Full Stack Developer', 'React Specialist', 'AI Enthusiast', 'UI/UX Craftsperson'];

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  const socialLinks = [
    { name: 'Github', url: 'https://github.com/krinakhunt12', icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/krinakhunt', icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> },
    { name: 'Email', url: 'mailto:krinakhunt12@gmail.com', icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> },
  ];

  const fade = (delay: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
  });

  return (
    <section id="home" className="relative min-h-svh flex items-center justify-center pt-20 md:pt-24 pb-16 md:pb-0 px-4 md:px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)', backgroundSize: '60px 60px', opacity: 0.04 }} />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full -z-10" style={{ background: 'radial-gradient(circle, var(--accent-1) 0%, transparent 70%)', opacity: 0.04, filter: 'blur(40px)' }} />

      <div className="container max-w-6xl mx-auto px-2 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">

          <div className="space-y-6 md:space-y-10 order-2 md:order-1">
            <div style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)', ...fade(0.1) }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[10px] md:text-xs font-semibold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span style={{ color: 'var(--text-secondary)' }}>Open to opportunities</span>
            </div>

            <div style={fade(0.25)}>
              <p className="mono text-xs md:text-sm tracking-[0.25em] uppercase font-semibold mb-3 h-5" style={{ color: 'var(--accent-3)' }}>
                {displayed}<span style={{ color: 'var(--accent-1)', animation: 'blink 1s step-end infinite' }}>|</span>
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.06]" style={{ color: 'var(--text-primary)' }}>
                Crafted by<br />
                <span style={{ background: 'linear-gradient(135deg, var(--accent-1) 0%, var(--accent-3) 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Krina Khunt
                </span>
              </h1>
            </div>

            <div style={fade(0.4)}>
              <p className="text-base md:text-lg leading-relaxed max-w-lg opacity-80" style={{ color: 'var(--text-secondary)' }}>
                Software engineer who crafts maintainable, high-performance solutions with clean architecture. Every line of code is written with purpose.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 md:gap-4" style={fade(0.55)}>
              <Link to="/projects" className="px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] no-underline hover:no-underline rounded-lg" style={{ backgroundColor: 'var(--accent-1)', color: 'var(--bg-primary)', border: '2px solid var(--accent-1)', transition: 'all 0.3s ease' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.85'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
              >
                View My Work
              </Link>
              <Link to="/contact" className="px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] no-underline hover:no-underline rounded-lg" style={{ border: '2px solid var(--border)', color: 'var(--text-primary)', transition: 'all 0.3s ease' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent-1)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
              >
                Let's Talk
              </Link>
            </div>

            <div className="flex items-center gap-5 pt-2" style={fade(0.7)}>
              {socialLinks.map((link) => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}
                  className="flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-200"
                  style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--accent-1)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent-1)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
                >
                  {link.icon}
                </a>
              ))}
              <div className="h-px flex-1 max-w-[80px]" style={{ backgroundColor: 'var(--border)' }} />
              <span className="mono text-[10px] uppercase tracking-widest opacity-60" style={{ color: 'var(--accent-3)' }}>Connect</span>
            </div>
          </div>

          <div className="relative flex justify-center items-center order-1 md:order-2 mb-6 md:mb-0" style={{ opacity: visible ? 1 : 0, transform: visible ? 'scale(1)' : 'scale(0.92)', transition: 'opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s' }}>
            {/* Spinning Rings - scaled down on mobile */}
            <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[480px] md:h-[480px] rounded-full" style={{ border: '1px dashed var(--border)', animation: 'spin-slow 30s linear infinite', opacity: 0.3 }} />
            <div className="absolute w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] rounded-full" style={{ border: '1px dotted var(--border)', animation: 'spin-slow 20s linear infinite reverse', opacity: 0.2 }} />

            <div className="relative w-[260px] h-[320px] sm:w-[320px] sm:h-[385px] md:w-[360px] md:h-[430px] rounded-2xl overflow-hidden shadow-2xl" style={{ border: '1px solid var(--border)' }}>
              <img src="/girl.png" alt="Krina Khunt" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 border-t backdrop-blur-xl" style={{ backgroundColor: 'color-mix(in srgb, var(--bg-primary), transparent 15%)', borderColor: 'var(--border)' }}>
                <div className="flex items-center justify-between mb-1">
                  <div>
                    <h2 className="text-sm md:text-base font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>Krina Khunt</h2>
                    <p className="text-[10px] font-medium opacity-80" style={{ color: 'var(--text-secondary)' }}>Full Stack Developer</p>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-emerald-500/30" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-500">Available</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-[9px] font-bold opacity-90" style={{ color: 'var(--accent-3)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                  Based in India
                </div>
              </div>
            </div>

            {/* Floaties - Adjusted for mobile */}
            <div className="absolute -left-2 md:-left-8 top-1/4 px-3 py-2 md:px-4 md:py-3 rounded-xl border backdrop-blur-md shadow-xl" style={{ backgroundColor: 'color-mix(in srgb, var(--bg-secondary), transparent 40%)', borderColor: 'var(--border)', animation: 'float 4s ease-in-out infinite' }}>
              <div className="text-lg md:text-xl font-bold" style={{ color: 'var(--text-primary)' }}>8+</div>
              <div className="text-[8px] md:text-[10px] uppercase tracking-widest opacity-60" style={{ color: 'var(--text-secondary)' }}>Projects</div>
            </div>
            <div className="absolute -right-2 md:-right-8 bottom-1/3 px-3 py-2 md:px-4 md:py-3 rounded-xl border backdrop-blur-md shadow-xl" style={{ backgroundColor: 'color-mix(in srgb, var(--bg-secondary), transparent 40%)', borderColor: 'var(--border)', animation: 'float 4s ease-in-out 1.5s infinite' }}>
              <div className="text-lg md:text-xl font-bold" style={{ color: 'var(--text-primary)' }}>1+</div>
              <div className="text-[8px] md:text-[10px] uppercase tracking-widest opacity-60" style={{ color: 'var(--text-secondary)' }}>Yr Exp</div>
            </div>

            <div className="absolute -top-3 -left-3 w-14 h-14 border-l-2 border-t-2 rounded-tl-xl opacity-20" style={{ borderColor: 'var(--accent-1)' }} />
            <div className="absolute -bottom-3 -right-3 w-14 h-14 border-r-2 border-b-2 rounded-br-xl opacity-20" style={{ borderColor: 'var(--accent-1)' }} />
          </div>
        </div>

        {/* Scroll indicator - Moved down and hidden if screen is too small */}
        <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2" style={{ opacity: visible ? 0.4 : 0, transition: 'opacity 0.7s ease 1.4s' }}>
          <span className="mono text-[9px] uppercase tracking-[0.3em]" style={{ color: 'var(--text-secondary)' }}>Scroll</span>
          <div style={{ width: 20, height: 32, border: '1px solid var(--border)', borderRadius: 10, display: 'flex', justifyContent: 'center', paddingTop: 4 }}>
            <div style={{ width: 2, height: 6, backgroundColor: 'var(--accent-1)', borderRadius: 1, animation: 'scroll-anim 1.8s ease-in-out infinite' }} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink { 0%,100% { opacity:1; } 50% { opacity:0; } }
        @keyframes spin-slow { to { transform: rotate(360deg); } }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes scroll-anim { 0% { transform: translateY(0); opacity:1; } 100% { transform: translateY(10px); opacity:0; } }
      `}</style>
    </section>
  );
};

export default Hero;
