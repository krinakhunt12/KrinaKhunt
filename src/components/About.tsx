
import React, { useEffect, useState, useRef } from 'react';

const About: React.FC = () => {
  const stats = [
    { label: "Years Experience", value: 6, suffix: "+" },
    { label: "Projects Completed", value: 40, suffix: "+" },
    { label: "Tech Stack", value: 15, suffix: "+" },
    { label: "Happy Clients", value: 25, suffix: "+" }
  ];

  return (
    <section id="about" className="py-24 px-6" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container max-w-6xl mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="reveal relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border" style={{ borderColor: 'var(--border)' }}>
              <img src="https://picsum.photos/seed/office/800/1000" alt="Workspace" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4" style={{ borderColor: 'var(--accent-1)' }} />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4" style={{ borderColor: 'var(--accent-3)' }} />
          </div>

          <div className="space-y-8 reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="space-y-4">
              <h3 className="mono text-sm uppercase tracking-widest" style={{ color: 'var(--accent-1)' }}>Background</h3>
              <h2 className="text-4xl md:text-5xl font-black">Building Digital <br /><span className="gradient-text">Ecosystems</span></h2>
            </div>

            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              I am a results-driven developer who thrives on solving complex problems. My journey began with a curiosity for how things work under the hood, leading to a deep mastery of the full stack ecosystem.
            </p>

            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              From high-performance cloud architectures to pixel-perfect frontends, I bring a holistic approach to digital craftsmanship.
            </p>

            <div className="grid grid-cols-2 gap-6 py-8">
              {stats.map((stat, i) => (
                <div key={i} className="p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-2 interactive group" style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border)' }}>
                  <div className="text-3xl font-black flex items-baseline group-hover:scale-110 transition-transform">
                    <Counter end={stat.value} />
                    <span style={{ color: 'var(--accent-1)' }}>{stat.suffix}</span>
                  </div>
                  <div className="text-[10px] uppercase tracking-widest font-bold mt-1" style={{ color: 'var(--text-secondary)' }}>{stat.label}</div>
                </div>
              ))}
            </div>

            <button className="flex items-center gap-4 group interactive">
              <span className="w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-300 group-hover:bg-[var(--accent-1)]" style={{ borderColor: 'var(--accent-1)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-black transition-colors"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              </span>
              <span className="text-sm font-bold uppercase tracking-widest">Download CV</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Counter: React.FC<{ end: number }> = ({ end }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
        const duration = 2000;
        const step = (timestamp: number) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          setCount(Math.floor(progress * end));
          if (progress < 1) window.requestAnimationFrame(step);
        };
        window.requestAnimationFrame(step);
      }
    });
    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, [end]);

  return <span ref={countRef}>{count}</span>;
};

export default About;
