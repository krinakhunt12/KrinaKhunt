
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["Full Stack Developer", "Software Engineer", "UI/UX Specialist", "Problem Solver"];
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    // Increased speed for snappier typing effect
    const speed = isDeleting ? 30 : 80;
    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(isDeleting
          ? currentRole.substring(0, displayText.length - 1)
          : currentRole.substring(0, displayText.length + 1)
        );
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const socialLinks = [
    {
      name: 'Github',
      url: 'https://github.com/krinakhunt12',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/krina-khunt-232732267',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
    },
    {
      name: 'Email',
      url: 'mailto:krinakhunt12@gmail.com',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
    },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 px-6 overflow-hidden">
      <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content Column */}
        <div className="space-y-8 animate-[fadeInLeft_1s_ease-out] relative z-20">
          <div className="space-y-4">
            <h2 className="mono text-sm tracking-[0.5em] uppercase" style={{ color: 'var(--accent-3)' }}>Greeting, I am</h2>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none overflow-hidden">
              <span className="block animate-[slideIn_1s_ease-out]">Krina</span>
              <span className="gradient-text animate-[slideIn_1.2s_ease-out]">Khunt</span>
            </h1>
            <div className="h-8 flex items-center text-2xl md:text-3xl font-light" style={{ color: 'var(--text-secondary)' }}>
              <span className="mr-2 opacity-50">&gt;</span>
              <span>{displayText}</span>
              <span className="w-[3px] h-full ml-1 animate-pulse" style={{ backgroundColor: 'var(--accent-1)' }} />
            </div>
          </div>

          <p className="text-lg leading-relaxed max-w-lg" style={{ color: 'var(--text-secondary)' }}>
            Full-stack developer focused on building scalable web applications with an emphasis on performance, clean architecture, and intuitive user experiences.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="px-8 py-4 font-bold uppercase tracking-widest text-sm transition-all duration-300 transform hover:-translate-y-1 interactive shadow-lg"
              style={{ backgroundColor: 'var(--accent-1)', color: 'var(--bg-primary)' }}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border font-bold uppercase tracking-widest text-sm transition-all duration-300 transform hover:-translate-y-1 interactive"
              style={{ borderColor: 'var(--accent-3)', color: 'var(--text-primary)' }}
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-8 pt-8">
            {socialLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 transition-all duration-300 transform hover:scale-110 interactive"
                style={{ color: 'var(--accent-3)', animationDelay: `${1.2 + i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/5 group-hover:border-[var(--accent-1)] group-hover:text-[var(--accent-1)] transition-all">
                  {link.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">{link.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right Image Column: Premium Professional Card Design */}
        <div className="relative flex justify-center items-center group animate-[fadeInRight_1.2s_ease-out] z-10">

          {/* Main Card Container */}
          <div
            className="relative z-20 w-[300px] h-[350px] md:w-[480px] md:h-[520px] rounded-[3rem] bg-white/[0.03] backdrop-blur-3xl border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.4)] flex items-center justify-center animate-float overflow-hidden"
            style={{ borderColor: 'var(--border)' }}
          >
            {/* Inner Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-50" />

            {/* Spinning Rings Backdrop */}
            <div className="absolute w-[80%] h-[80%] rounded-full border border-dashed border-white/5 animate-spin-slow opacity-20" />
            <div className="absolute w-[90%] h-[90%] rounded-full border border-white/[0.02] animate-spin-slow opacity-10" style={{ animationDirection: 'reverse' }} />

            {/* Profile Frame */}
            <div className="relative z-10 w-[200px] h-[200px] md:w-[320px] md:h-[320px] rounded-full p-2 bg-gradient-to-tr from-[var(--accent-1)]/20 to-transparent shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/10 group-hover:border-[var(--accent-1)] transition-all duration-700 bg-[var(--bg-secondary)]">
                <img
                  src="/Girl.jpg"
                  alt="Krina Khunt"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                />
              </div>
            </div>

            {/* Floating Info Badge: Available */}
            <div
              className="absolute bottom-10 right-10 md:bottom-12 md:right-12 px-5 py-3 rounded-2xl bg-white text-black shadow-2xl flex items-center gap-3 animate-pulse transform hover:scale-105 transition-all z-30 interactive"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-[11px] font-black uppercase tracking-widest">Available</span>
            </div>

            {/* Background Decorative Gradient */}
            <div className="absolute -inset-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_0%,transparent_70%)] pointer-events-none" />
          </div>

          {/* Exterior Floating Decorative Elements (Colored Dots & Glows) */}
          <div className="absolute top-10 left-10 md:top-20 md:left-20 w-4 h-4 rounded-full bg-blue-400 blur-[2px] opacity-60 animate-bounce" style={{ animationDuration: '3s' }} />
          <div className="absolute bottom-20 left-0 md:bottom-32 md:-left-10 w-6 h-6 rounded-full bg-pink-500 blur-[3px] opacity-40 animate-pulse-slow" />
          <div className="absolute top-1/2 right-0 md:-right-15 w-5 h-5 rounded-full bg-purple-500 blur-[2px] opacity-50 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }} />

          {/* Large Background Ambient Glows */}
          <div className="absolute -top-20 -right-20 w-64 h-64 blur-[120px] opacity-20 bg-[var(--accent-1)] animate-pulse-slow" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 blur-[150px] opacity-10 bg-[var(--accent-3)] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
