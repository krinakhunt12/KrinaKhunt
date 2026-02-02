
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
    <section id="about" className="py-12 md:py-20 lg:py-24 px-4 md:px-6 overflow-hidden bg-secondary">
      <div className="container max-w-6xl mx-auto px-2 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border group border-border">
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
            <div className="space-y-3 md:space-y-4">
              <h3 className="mono text-sm md:text-base uppercase tracking-[0.3em] text-secondary opacity-60">01 // Discovery</h3>
              <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
                Architecting <br />
                <span className="italic text-accent-1">Digital Logic.</span>
              </h2>
            </div>

            <div className="space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed font-light text-secondary">
              <p>
                I am <span className="text-accent-1 font-semibold">Krina Khunt</span>, a Full Stack Developer and AI enthusiast dedicated to crafting high-performance digital solutions. My approach blends technical precision with creative problem-solving.
              </p>

              <p>
                From developing computer vision systems for <span className="text-[var(--accent-2)]">Plant Disease Detection</span> to building sophisticated <span className="text-[var(--accent-2)]">E-Commerce Ecosystems</span>, I specialize in bridging the gap between complex backend logic and pixel-perfect user experiences.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 py-8">
              {stats.map((stat, i) => (
                <div key={i} className="px-2 py-4 md:p-8 rounded-xl border relative bg-primary border-border">
                  <div className="relative z-10">
                    <div className="text-3xl md:text-4xl font-semibold flex items-baseline">
                      <Counter end={stat.value} />
                      <span className="text-sm ml-1 opacity-50">{stat.suffix}</span>
                    </div>
                    <div className="text-[10px] uppercase tracking-widest font-bold mt-2 opacity-50" style={{ color: 'var(--text-secondary)' }}>{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="flex items-center gap-4 md:gap-6 group"
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
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full border flex items-center justify-center cursor-pointer group-hover:underline border-accent-3"
                >
                  <FiDownload
                    size={20}
                    className="md:w-6 md:h-6 group-hover:text-[var(--accent-1)]"
                  />
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] md:text-xs mono uppercase tracking-widest opacity-50">Curriculum Vitae</span>
                <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] group-hover:underline">Download CV</span>
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
