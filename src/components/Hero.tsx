
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
      <div className="container max-w-6xl mx-auto px-2 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Left Content Column */}
          <div className="space-y-8 md:space-y-10">
            {/* Opening Statement */}
            <div className="space-y-4 md:space-y-6">
              <div className="space-y-1 mt-4">
                <p className="mono text-sm md:text-base tracking-[0.3em] uppercase font-semibold text-accent opacity-60">
                  Full Stack Developer
                </p>
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-primary">
                  Building reliable,<br />
                  scalable web<br />
                  applications
                </h1>
              </div>

              <div className="max-w-xl space-y-3 md:space-y-4">
                <p className="text-base md:text-lg lg:text-xl leading-relaxed text-secondary">
                  Hi, I'm <strong className="text-primary font-bold">Krina Khunt</strong>—a software engineer who builds maintainable, high-performance solutions with clean architecture and long-term thinking.
                </p>
                <p className="text-sm md:text-base lg:text-lg leading-relaxed text-secondary">
                  I focus on writing code that's easy to understand, test, and scale. Every project is approached with attention to usability, performance optimization, and thoughtful engineering decisions that stand the test of time.
                </p>
              </div>
            </div>

            {/* Primary Actions */}
            <div className="flex flex-wrap gap-3 md:gap-4 pt-2">
              <a
                href="#projects"
                className="px-6 md:px-8 py-3 md:py-4 font-bold uppercase tracking-[0.15em] text-xs md:text-sm border-2"
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
                className="px-6 md:px-8 py-3 md:py-4 border-2 font-bold uppercase tracking-[0.15em] text-xs md:text-sm"
                style={{
                  borderColor: 'var(--border)',
                  color: 'var(--text-primary)'
                }}
              >
                Get in Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 md:gap-6 pt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-accent-3"
                  aria-label={link.name}
                >
                  <div className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-border flex items-center justify-center">
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
                className="relative w-[280px] h-[340px] sm:w-[320px] sm:h-[380px] md:w-[360px] md:h-[420px] rounded-2xl border-2 overflow-hidden border-border bg-secondary"
              >
                {/* Profile Image */}
                <div className="absolute inset-0">
                  <img
                    src="/girl.png"
                    alt="Krina Khunt - Full Stack Developer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Identity Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 border-t bg-primary border-border">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-base md:text-lg font-semibold tracking-tight text-primary">
                          Krina Khunt
                        </h2>
                        <p className="text-[10px] md:text-xs font-medium text-secondary">
                          Full Stack Developer
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-1 md:py-1.5 rounded-full border border-border bg-secondary">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-primary">
                          Available
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 md:gap-2 text-[9px] md:text-[10px] font-medium text-accent-3">
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
              <div className="absolute -top-3 -left-3 w-16 h-16 border-l-2 border-t-2 rounded-tl-2xl border-accent-3 opacity-30"></div>
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-r-2 border-b-2 rounded-br-2xl border-accent-3 opacity-30"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
