
import React, { useEffect, useState, useRef } from 'react';
import { FiDownload } from "react-icons/fi";

const About: React.FC = () => {
  const stats = [
    { label: "Years Experience", value: 1, suffix: "+" },
    { label: "Projects Completed", value: 6, suffix: "+" },
    { label: "Technologies", value: 6, suffix: "+" },
    { label: "GitHub Repos", value: 12, suffix: "+" }
  ];

  return (
    <section id="about" className="py-24 px-6 overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border group" style={{ borderColor: 'var(--border)' }}>
              <img
                src="/about-image.png"
                alt="Professional Workspace"
                className="w-full h-auto"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 opacity-30" style={{ borderColor: 'var(--accent-1)' }} />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 opacity-30" style={{ borderColor: 'var(--accent-3)' }} />

            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/5 rounded-full blur-3xl" />
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="mono text-sm uppercase tracking-[0.3em]" style={{ color: 'var(--text-secondary)' }}>01 // Discovery</h3>
              <h2 className="text-5xl md:text-6xl font-black leading-tight">
                Architecting <br />
                <span className="italic" style={{ color: 'var(--accent-1)' }}>Digital Logic.</span>
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
                <div key={i} className="p-8 rounded-xl border relative" style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border)' }}>
                  <div className="relative z-10">
                    <div className="text-4xl font-black flex items-baseline">
                      <Counter end={stat.value} />
                      <span className="text-sm ml-1 opacity-50">{stat.suffix}</span>
                    </div>
                    <div className="text-[10px] uppercase tracking-widest font-bold mt-2 opacity-50" style={{ color: 'var(--text-secondary)' }}>{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="flex items-center gap-6 group"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Krina-Khunt-CV.pdf';
                link.download = 'Krina-Khunt-CV.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <div className="relative">
                <span
                  className="w-16 h-16 rounded-full border flex items-center justify-center cursor-pointer group-hover:underline"
                  style={{ borderColor: "var(--accent-3)" }}
                >
                  <FiDownload
                    size={24}
                    className="group-hover:text-[var(--accent-1)]"
                  />
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs mono uppercase tracking-widest opacity-50">Curriculum Vitae</span>
                <span className="text-sm font-bold uppercase tracking-[0.2em] group-hover:underline">Download CV</span>
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
