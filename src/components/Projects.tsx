
import React, { useState } from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const filtered = PROJECTS.filter(p => filter === 'all' || p.category === filter);

  return (
    <section id="projects" className="py-24 px-6" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 reveal">
          <div className="space-y-4">
            <h3 className="mono text-sm uppercase tracking-[0.3em]" style={{ color: 'var(--accent-1)' }}>Showcase</h3>
            <h2 className="text-4xl md:text-5xl font-black">Featured <span className="gradient-text">Creations</span></h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {['all', 'frontend', 'backend', 'fullstack', 'ml'].map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 interactive ${filter === cat ? 'bg-white text-black' : 'bg-white/5'}`}
                style={{
                  backgroundColor: filter === cat ? 'var(--accent-1)' : 'transparent',
                  color: filter === cat ? 'var(--bg-primary)' : 'var(--text-secondary)',
                  border: `1px solid ${filter === cat ? 'var(--accent-1)' : 'var(--border)'}`
                }}
              >
                {cat === 'ml' ? 'Machine Learning' : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {filtered.map((project, idx) => (
            <div
              key={project.id}
              className="group relative bg-black rounded-3xl overflow-hidden border transition-all duration-500 hover:-translate-y-4 reveal interactive"
              style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-primary)', transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center p-8">
                  <div className="text-center space-y-6 transform translate-y-10 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    <p className="text-white text-sm leading-relaxed">{project.description}</p>
                    <div className="flex justify-center gap-4">
                      <a href={project.liveUrl} className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
                      <a href={project.githubUrl} className="w-12 h-12 rounded-full border border-white text-white flex items-center justify-center hover:bg-white hover:text-black transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-10 space-y-6">
                <div className="flex justify-between items-start">
                  <h4 className="text-3xl font-black group-hover:text-[var(--accent-1)] transition-colors">{project.title}</h4>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">{project.category}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/10 group-hover:border-[var(--accent-1)] transition-colors">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
