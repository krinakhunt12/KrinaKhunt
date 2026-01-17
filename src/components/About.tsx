
import React, { useEffect, useState, useRef } from 'react';

const About: React.FC = () => {
  const stats = [
    { label: "Years Experience", value: 2, suffix: "+" },
    { label: "Projects Completed", value: 15, suffix: "+" },
    { label: "Technologies", value: 12, suffix: "+" },
    { label: "Open Source", value: 8, suffix: "+" }
  ];

  return (
    <section id="about" className="py-24 px-6 overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="reveal relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border group" style={{ borderColor: 'var(--border)' }}>
              <img
                src="/about-image.png"
                alt="Professional Workspace"
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 opacity-30" style={{ borderColor: 'var(--accent-1)' }} />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 opacity-30" style={{ borderColor: 'var(--accent-3)' }} />

            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/5 rounded-full blur-3xl" />
          </div>

          <div className="space-y-8 reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="space-y-4">
              <h3 className="mono text-sm uppercase tracking-[0.3em]" style={{ color: 'var(--text-secondary)' }}>01 // Discovery</h3>
              <h2 className="text-5xl md:text-6xl font-black leading-tight">
                Architecting <br />
                <span className="gradient-text italic">Digital Logic.</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-relaxed font-light" style={{ color: 'var(--text-secondary)' }}>
              <p>
                I am <span style={{ color: 'var(--accent-1)' }} className="font-semibold">Krina Khunt</span>, a Full Stack Developer and AI enthusiast dedicated to crafting high-performance digital solutions. My approach blends technical precision with creative problem-solving.
              </p>

              <p>
                From developing computer vision systems for <span className="text-[var(--accent-2)]">Plant Disease Detection</span> to building sophisticated <span className="text-[var(--accent-2)]">E-Commerce Ecosystems</span>, I specialize in bridging the gap between complex backend logic and pixel-perfect user experiences.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 py-8">
              {stats.map((stat, i) => (
                <div key={i} className="p-8 rounded-xl border transition-all duration-500 hover:border-white/40 interactive group relative overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border)' }}>
                  <div className="relative z-10 transition-transform duration-500 group-hover:translate-x-2">
                    <div className="text-4xl font-black flex items-baseline">
                      <Counter end={stat.value} />
                      <span className="text-sm ml-1 opacity-50">{stat.suffix}</span>
                    </div>
                    <div className="text-[10px] uppercase tracking-widest font-bold mt-2 opacity-50" style={{ color: 'var(--text-secondary)' }}>{stat.label}</div>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl transition-all duration-500 group-hover:scale-150" />
                </div>
              ))}
            </div>

            <button className="flex items-center gap-6 group interactive">
              <div className="relative">
                <span className="w-16 h-16 rounded-full border flex items-center justify-center transition-all duration-500 group-hover:bg-white group-hover:border-white" style={{ borderColor: 'var(--accent-3)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-black transition-colors transform group-hover:translate-y-1"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs mono uppercase tracking-widest opacity-50">Curriculum Vitae</span>
                <span className="text-sm font-bold uppercase tracking-[0.2em] group-hover:tracking-[0.3em] transition-all">Download CV</span>
              </div>
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
