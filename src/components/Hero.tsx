
import React from 'react';

const Hero: React.FC = () => {
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
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 md:pt-24 px-4 md:px-6">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Left Content Column */}
          <div className="space-y-10">
            {/* Opening Statement */}
            <div className="space-y-6">
              <div className="space-y-1">
                <p className="mono text-xs tracking-[0.3em] uppercase font-bold" style={{ color: 'var(--accent-3)' }}>
                  Full Stack Developer
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]" style={{ color: 'var(--text-primary)' }}>
                  Building reliable,<br />
                  scalable web<br />
                  applications
                </h1>
              </div>

              <div className="max-w-xl space-y-4">
                <p className="text-lg md:text-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Hi, I'm <strong style={{ color: 'var(--text-primary)', fontWeight: 700 }}>Krina Khunt</strong>—a software engineer who builds maintainable, high-performance solutions with clean architecture and long-term thinking.
                </p>
                <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  I focus on writing code that's easy to understand, test, and scale. Every project is approached with attention to usability, performance optimization, and thoughtful engineering decisions that stand the test of time.
                </p>
              </div>
            </div>

            {/* Primary Actions */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="px-8 py-4 font-bold uppercase tracking-[0.15em] text-sm border-2"
                style={{
                  backgroundColor: 'var(--accent-1)',
                  color: 'var(--bg-primary)',
                  borderColor: 'var(--accent-1)'
                }}
              >
                View Work
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 font-bold uppercase tracking-[0.15em] text-sm"
                style={{
                  borderColor: 'var(--border)',
                  color: 'var(--text-primary)'
                }}
              >
                Get in Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  style={{ color: 'var(--accent-3)' }}
                  aria-label={link.name}
                >
                  <div className="w-11 h-11 rounded-full border flex items-center justify-center" style={{ borderColor: 'var(--border)' }}>
                    {link.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Identity Block */}
          <div className="relative flex justify-center items-center">
            <div className="relative">
              {/* Main Profile Card */}
              <div
                className="relative w-[280px] h-[340px] sm:w-[320px] sm:h-[380px] md:w-[360px] md:h-[420px] rounded-2xl border-2 overflow-hidden"
                style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-secondary)' }}
              >
                {/* Profile Image */}
                <div className="absolute inset-0">
                  <img
                    src="/Girl.jpg"
                    alt="Krina Khunt - Full Stack Developer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Identity Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 border-t" style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border)' }}>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-lg font-black tracking-tight" style={{ color: 'var(--text-primary)' }}>
                          Krina Khunt
                        </h2>
                        <p className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>
                          Full Stack Developer
                        </p>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-secondary)' }}>
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--text-primary)' }}>
                          Available
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-medium" style={{ color: 'var(--accent-3)' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>Based in India</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Accents */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-l-2 border-t-2 rounded-tl-2xl" style={{ borderColor: 'var(--accent-3)', opacity: 0.3 }}></div>
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-r-2 border-b-2 rounded-br-2xl" style={{ borderColor: 'var(--accent-3)', opacity: 0.3 }}></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
