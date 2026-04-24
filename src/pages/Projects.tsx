import React, { useEffect } from 'react';
import ProjectsComponent from '../components/Projects';
import { FiGrid } from "react-icons/fi";
import SEO from '../components/SEO';

const Projects: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <main className="relative pt-20 page-enter">
      <SEO title="Portfolio Showcase" description="A collection of high-performance web applications, e-commerce solutions, and AI/ML projects built by Krina Khunt." />
      <div className="py-8 md:py-12 px-6">
        <div className="container max-w-6xl mx-auto px-2 md:px-6">
          <div className="flex items-center gap-3 mb-2">
            <FiGrid className="text-accent-1 opacity-50" />
            <span className="mono text-xs uppercase tracking-[0.35em] opacity-50" style={{ color: 'var(--text-secondary)' }}>Portfolio</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
            All <span style={{ color: 'var(--accent-1)', opacity: 0.65 }}>Projects</span>
          </h1>
        </div>
      </div>

      <ProjectsComponent hideHeader={true} />

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
            <p className="max-w-md text-text-secondary leading-relaxed opacity-70">
              A systematic approach to transforming abstract concepts into high-performance digital products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Strategy", desc: "Defining goals, user personas, and technical requirements." },
              { step: "02", title: "Design", desc: "Creating wireframes and high-fidelity prototypes." },
              { step: "03", title: "Development", desc: "Writing clean, scalable code using modern tech stacks." },
              { step: "04", title: "Deployment", desc: "Rigorous testing followed by seamless cloud launch." }
            ].map((p, i) => (
              <div key={i} className="relative group p-8 border border-border rounded-2xl bg-bg-secondary hover:border-accent-1 transition-all">
                <div className="text-5xl font-bold opacity-10 mb-6 group-hover:opacity-20 transition-opacity">{p.step}</div>
                <h4 className="text-xl font-bold mb-3 tracking-tight">{p.title}</h4>
                <p className="text-sm text-text-secondary leading-relaxed opacity-60">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
