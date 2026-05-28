import React, { useEffect, useState, useRef } from 'react';
import { FiDownload, FiCode, FiCpu, FiLayers, FiGlobe } from 'react-icons/fi';
import { useTheme } from '../hooks/useTheme';

const Counter: React.FC<{ end: number }> = ({ end }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !triggered.current) {
        triggered.current = true;
        let start = 0;
        const step = (ts: number) => {
          if (!start) start = ts;
          const progress = Math.min((ts - start) / 1800, 1);
          setCount(Math.floor(progress * end));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return <span ref={ref}>{count}</span>;
};

const About: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); observer.disconnect(); }
    }, { threshold: 0.15 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { label: 'Years Experience', value: 1, suffix: '+' },
    { label: 'Projects Built', value: 8, suffix: '+' },
    { label: 'Technologies', value: 15, suffix: '+' },
    { label: 'GitHub Repos', value: 12, suffix: '+' },
  ];

  const highlights = [
    { icon: <FiCode size={14} />, text: 'Clean Code' },
    { icon: <FiCpu size={14} />, text: 'AI & ML' },
    { icon: <FiLayers size={14} />, text: 'Full-Stack' },
    { icon: <FiGlobe size={14} />, text: 'Scalable' },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-12 md:py-20 px-6 overflow-hidden relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] -z-10" style={{ backgroundImage: 'radial-gradient(var(--text-primary) 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />

      <div className="container max-w-6xl mx-auto px-2 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Image column */}
          <div className="lg:col-span-5 relative" style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateX(0)' : 'translateX(-40px)', transition: 'opacity 0.8s ease, transform 0.8s ease' }}>
            <div className="relative group">
              <div className="relative z-10 rounded-2xl overflow-hidden border border-border shadow-2xl">
                <img src="/about-image.png" alt="Professional Workspace" className="w-full h-auto object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent opacity-60" />
                
                {/* Floating highlights */}
                <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3">
                  {highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest backdrop-blur-md shadow-lg border transition-all duration-300"
                      style={{
                        backgroundColor: isLight ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.65)',
                        borderColor: isLight ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.15)',
                        color: isLight ? 'var(--text-primary)' : 'rgba(255, 255, 255, 0.9)'
                      }}>
                      <span style={{ color: 'var(--accent-1)' }}>{h.icon}</span>
                      <span>{h.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Decorative frames */}
              <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-accent-1/30 rounded-tl-3xl -z-10" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-accent-3/30 rounded-br-3xl -z-10" />
            </div>
          </div>

          {/* Content column */}
          <div className="lg:col-span-7 flex flex-col space-y-10" style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateX(0)' : 'translateX(40px)', transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s' }}>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-accent-1 font-bold">01 // Discovery & Philosophy</span>
                <div className="h-px w-12 bg-accent-1/30" />
              </div>
              <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tighter">
                Where Design meets <span className="italic text-accent-1">Logic.</span>
              </h2>
            </div>

            <div className="space-y-6 text-base md:text-lg leading-relaxed text-text-secondary max-w-2xl">
              <p>
                I am <strong className="text-primary">Krina Khunt</strong>, a developer who believes every line of code should serve a clear purpose. My approach blends technical precision with creative problem-solving to build robust, scalable digital ecosystems.
              </p>
              <p>
                I prioritize clarity and efficiency in an era of digital noise. Whether I'm architecting complex backend logic or fine-tuning micro-interactions, my goal is to deliver solutions that are technically superior and visually stunning.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="p-6 rounded-2xl border border-border bg-bg-secondary/50 hover:bg-bg-secondary hover:border-accent-1 transition-all duration-300 group relative overflow-hidden">
                  <div className="text-3xl md:text-4xl font-bold flex items-baseline gap-1 mb-1">
                    <Counter end={stat.value} />
                    <span className="text-sm text-accent-1">{stat.suffix}</span>
                  </div>
                  <div className="text-[10px] uppercase tracking-widest font-bold opacity-40 group-hover:opacity-60 transition-opacity">{stat.label}</div>
                  <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-accent-1/5 rounded-full blur-xl group-hover:bg-accent-1/10 transition-all" />
                </div>
              ))}
            </div>

            {/* CV Action */}
            <button
              className="group flex items-center gap-6 w-fit"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Krina-Khunt-CV.pdf';
                link.download = 'Krina-Khunt-CV.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <div className="relative w-16 h-16 rounded-full border border-accent-1/20 flex items-center justify-center group-hover:border-accent-1 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-accent-1 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <FiDownload size={20} className="relative z-10 text-primary group-hover:text-bg-primary transition-colors duration-500" />
              </div>
              <div className="flex flex-col">
                <span className="mono text-[10px] uppercase tracking-[0.3em] opacity-40 group-hover:text-accent-1 group-hover:opacity-100 transition-all">Curriculum Vitae</span>
                <span className="text-base font-bold uppercase tracking-[0.15em] text-primary">Download CV</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
