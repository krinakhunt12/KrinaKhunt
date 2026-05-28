import React, { useEffect, useRef, type JSX } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import SEO from '../components/SEO';
import { FiCpu, FiLayers, FiLayout, FiCheckCircle, FiActivity, FiSearch, FiCode, FiZap, FiGithub, FiCloud, FiPenTool } from "react-icons/fi";
import { SERVICES, METHODOLOGIES, PROCESS_STEPS } from '../constants';

const iconMap: Record<string, JSX.Element> = {
  FiLayout: <FiLayout size={22} />,
  FiLayers: <FiLayers size={22} />,
  FiCpu: <FiCpu size={22} />,
  FiZap: <FiZap />,
  FiGithub: <FiGithub />,
  FiCloud: <FiCloud />,
  FiPenTool: <FiPenTool />,
  FiActivity: <FiActivity />,
  FiCode: <FiCode />,
  FiSearch: <FiSearch />,
  FiCheckCircle: <FiCheckCircle />
};

const Home: React.FC = () => {
  const servicesRef = useRef<HTMLElement>(null);
  const [servicesInView, setServicesInView] = React.useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setServicesInView(true); observer.disconnect(); } }, { threshold: 0.15 });
    if (servicesRef.current) observer.observe(servicesRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative overflow-hidden">
      <SEO 
        title="Full Stack Developer & AI Specialist" 
        description="Welcome to Krina Khunt's official portfolio. Premium Full Stack Developer & AI Specialist crafting high-performance web solutions, e-commerce suites, and plant disease detection AI systems like LeafGuard." 
        keywords="Krina Khunt, Krina, Full Stack Developer, AI Specialist, LeafGuard, Plant Disease Detection AI, Smart Farming, Agricultural AI, Web Developer Portfolio, React Developer, FastAPI, India"
        schemaType="profile"
      />
      {/* Background blobs */}
      <div className="absolute top-[12%] -right-24 w-96 h-96 rounded-full blur-[120px] -z-10 animate-pulse" style={{ backgroundColor: 'var(--accent-1)', opacity: 0.03 }} />
      <div className="absolute top-[45%] -left-24 w-[500px] h-[500px] rounded-full blur-[150px] -z-10" style={{ backgroundColor: 'var(--accent-1)', opacity: 0.025 }} />

      <Hero />

      {/* ── Services ── */}
      <section ref={servicesRef} className="py-12 md:py-20 px-6 relative">
        <div className="container max-w-6xl mx-auto px-2 md:px-6">
          <div className="flex flex-col gap-4 mb-12"
            style={{ opacity: servicesInView ? 1 : 0, transform: servicesInView ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
            <h3 className="mono text-xs md:text-sm uppercase tracking-[0.4em] opacity-50" style={{ color: 'var(--text-secondary)' }}>Capabilities</h3>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-none">
              What I <span className="italic opacity-60" style={{ color: 'var(--accent-1)' }}>Provide.</span>
            </h2>
            <p className="text-sm md:text-base max-w-lg opacity-60 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Transforming complex requirements into elegant, efficient, and user-centric digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {SERVICES.map((s, idx) => (
              <div key={idx}
                className="group p-8 md:p-10 rounded-2xl border relative overflow-hidden"
                style={{
                  borderColor: 'var(--border)',
                  backgroundColor: 'var(--bg-secondary)',
                  opacity: servicesInView ? 1 : 0,
                  transform: servicesInView ? 'translateY(0)' : 'translateY(40px)',
                  transition: `opacity 0.7s ease ${idx * 0.15}s, transform 0.7s ease ${idx * 0.15}s, border-color 0.3s`,
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent-1)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'}
              >
                <div className="mono text-[10px] uppercase tracking-widest opacity-30 mb-6">{s.num}</div>
                <div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-7 transition-all duration-300 group-hover:-translate-y-1"
                  style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-primary)', color: 'var(--accent-1)' }}>
                  {iconMap[s.iconName]}
                </div>
                <h4 className="text-lg md:text-xl font-bold mb-3 tracking-tight">{s.title}</h4>
                <p className="text-sm md:text-base leading-relaxed font-light opacity-60" style={{ color: 'var(--text-secondary)' }}>{s.desc}</p>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, transparent 100%)' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <About />

      {/* Methodologies & Workflow (from Skills) */}
      <section className="py-12 md:py-20 px-6 bg-secondary">
        <div className="container max-w-6xl mx-auto px-2 md:px-6">
          <div className="mb-16">
            <h3 className="mono text-xs md:text-sm uppercase tracking-[0.4em] opacity-50 mb-4" style={{ color: 'var(--text-secondary)' }}>Workflow</h3>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Beyond the <span className="italic opacity-60" style={{ color: 'var(--accent-1)' }}>Code.</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {METHODOLOGIES.map((item, idx) => (
              <div key={idx} className="p-8 rounded-2xl border border-border bg-primary hover:border-accent-1 transition-all group">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-secondary text-accent-1 mb-6 group-hover:scale-110 transition-transform">{iconMap[item.iconName]}</div>
                <h4 className="text-xl font-bold mb-3 tracking-tight">{item.title}</h4>
                <p className="text-sm text-text-secondary leading-relaxed opacity-70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-20 px-6">
        <div className="container max-w-6xl mx-auto px-2 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16 md:mb-24">
            <div className="space-y-4">
              <h3 className="mono text-xs md:text-sm uppercase tracking-[0.4em] opacity-50" style={{ color: 'var(--text-secondary)' }}>Method</h3>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-none">
                Development <span className="italic opacity-60" style={{ color: 'var(--accent-1)' }}>Process.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((p, i) => (
              <div key={i} className="relative group p-8 border border-border rounded-2xl bg-bg-secondary hover:border-accent-1 transition-all">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-accent-1 opacity-40 group-hover:opacity-100 transition-opacity">{iconMap[p.iconName]}</div>
                  <div className="text-2xl font-bold opacity-10">{p.step}</div>
                </div>
                <h4 className="text-xl font-bold mb-3 tracking-tight">{p.title}</h4>
                <p className="text-sm text-text-secondary leading-relaxed opacity-60">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ backgroundColor: 'var(--bg-primary)' }}>
        <Projects limit={4} />
      </div>

      <Contact />
    </main>
  );
};

export default Home;
