import React, { useEffect } from 'react';
import SkillsComponent from '../components/Skills';
import { FiCpu } from "react-icons/fi";
import SEO from '../components/SEO';

const Skills: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <main className="relative pt-20">
      <SEO title="Technical Expertise" description="Discover Krina Khunt's technical skills including React, Next.js, TypeScript, Node.js, Python, and AI/ML integrations." />
      {/* Decorative background element */}
      <div className="absolute top-40 -left-20 w-80 h-80 rounded-full blur-[100px] -z-10" style={{ backgroundColor: 'var(--accent-1)', opacity: 0.05 }} />

      <div className="py-12 md:py-20 px-6">
        <div className="container max-w-6xl mx-auto px-2 md:px-6">
          <div className="flex items-center gap-3 mb-2 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <FiCpu className="text-accent-1 opacity-50" />
            <span className="mono text-xs uppercase tracking-[0.35em] opacity-50" style={{ color: 'var(--text-secondary)' }}>Skills</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-12 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            Technical <span style={{ color: 'var(--accent-1)', opacity: 0.65 }}>Arsenal</span>
          </h1>
        </div>
      </div>

      <div className="animate-in fade-in duration-1000 delay-300">
        <SkillsComponent hideHeader={true} />
      </div>
    </main>
  );
};

export default Skills;
