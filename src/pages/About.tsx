import React, { useEffect } from 'react';
import AboutComponent from '../components/About';
import { FiBookOpen } from "react-icons/fi";
import { ABOUT_STORY, VALUES } from '../constants';
import SEO from '../components/SEO';

const About: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <main className="relative pt-20">
      <SEO title="My Story" description="Learn more about Krina Khunt's journey as a software engineer, her core values, and her commitment to building logic-driven, aesthetic web solutions." />
      <div className="py-12 md:py-20 px-6">
        <div className="container max-w-6xl mx-auto px-2 md:px-6">
          <div className="flex items-center gap-3 mb-2 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <FiBookOpen className="text-accent-1 opacity-50" />
            <span className="mono text-xs uppercase tracking-[0.35em] opacity-50" style={{ color: 'var(--text-secondary)' }}>About</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-12 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            My <span style={{ color: 'var(--accent-1)', opacity: 0.65 }}>Story</span>
          </h1>

          <div className="grid md:grid-cols-3 gap-8">
            {ABOUT_STORY.map((item, i) => (
              <div 
                key={i} 
                className="group relative p-8 md:p-10 rounded-2xl border transition-all duration-500 hover:scale-[1.02] opacity-0 translate-y-8 animate-[fade-in-up_0.8s_ease-out_forwards] overflow-hidden"
                style={{ 
                  animationDelay: `${(i + 2) * 150}ms`,
                  borderColor: 'var(--border)',
                  backgroundColor: 'color-mix(in srgb, var(--bg-secondary), transparent 40%)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                {/* Large Background Number */}
                <div className="absolute -right-4 -top-8 text-[120px] font-bold opacity-[0.03] select-none pointer-events-none transition-all duration-700 group-hover:opacity-[0.07] group-hover:scale-110" style={{ color: 'var(--accent-1)' }}>
                  0{i + 1}
                </div>

                <div className="relative z-10 space-y-6">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-bold tracking-tight text-primary transition-colors duration-300 group-hover:text-accent-1">
                      {item.title}
                    </h3>
                    <div className="w-8 h-[1.5px] bg-accent-1 opacity-30 transition-all duration-500 group-hover:w-16 group-hover:opacity-100" />
                  </div>
                  <p className="text-sm md:text-base leading-relaxed opacity-70 transition-opacity duration-300 group-hover:opacity-100" style={{ color: 'var(--text-secondary)' }}>
                    {item.desc}
                  </p>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 left-0 w-1.5 h-1.5 border-l border-t opacity-0 transition-opacity duration-500 group-hover:opacity-50" style={{ borderColor: 'var(--accent-1)' }} />
                <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-r border-b opacity-0 transition-opacity duration-500 group-hover:opacity-50" style={{ borderColor: 'var(--accent-1)' }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="animate-in fade-in duration-1000 delay-700">
        <AboutComponent />
      </div>

      {/* Values Grid */}
      <section className="py-8 md:py-12 bg-secondary px-6 relative overflow-hidden">
        <div className="container max-w-6xl mx-auto px-2 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {VALUES.map((val, i) => (
              <div key={i} className={`space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-${(i + 4) * 200}`}>
                <div className="w-12 h-0.5" style={{ backgroundColor: 'var(--accent-1)' }} />
                <h4 className="text-xl font-bold uppercase tracking-tighter">{val.title}</h4>
                <p className="text-sm opacity-60 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
