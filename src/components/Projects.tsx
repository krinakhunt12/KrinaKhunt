import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';

interface ProjectsProps { limit?: number; hideHeader?: boolean; }

const CATEGORIES = ['all', 'frontend', 'fullstack', 'ml'];
const CAT_LABELS: Record<string, string> = { all: 'All', frontend: 'Frontend', fullstack: 'Full Stack', ml: 'Machine Learning' };

const Projects: React.FC<ProjectsProps> = ({ limit, hideHeader }) => {
  const [filter, setFilter] = useState('all');
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); observer.disconnect(); } }, { threshold: 0.08 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filtered = PROJECTS.filter(p => filter === 'all' || p.category === filter);
  const displayed = limit ? filtered.slice(0, limit) : filtered;

  return (
    <section ref={sectionRef} id="projects" className={`py-12 md:py-20 lg:py-24 px-4 md:px-6 ${hideHeader ? 'pt-0' : ''}`} style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container max-w-6xl mx-auto px-2 md:px-6">

        {/* Header */}
        {!hideHeader && (
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6"
            style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
          >
            <div className="space-y-2 md:space-y-3">
              <h3 className="mono text-xs md:text-sm uppercase tracking-[0.35em] opacity-50" style={{ color: 'var(--text-secondary)' }}>Showcase</h3>
              <h2 className="text-4xl md:text-5xl font-bold">
                {limit ? 'Featured ' : 'All '}<span style={{ color: 'var(--accent-1)', opacity: 0.65 }}>Creations</span>
              </h2>
            </div>
            {!limit && (
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map(cat => (
                  <button key={cat} onClick={() => setFilter(cat)}
                    className="px-4 md:px-5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-200"
                    style={{
                      backgroundColor: filter === cat ? 'var(--accent-1)' : 'transparent',
                      color: filter === cat ? 'var(--bg-primary)' : 'var(--text-secondary)',
                      border: `1px solid ${filter === cat ? 'var(--accent-1)' : 'var(--border)'}`,
                    }}
                  >
                    {CAT_LABELS[cat]}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          {displayed.map((project, idx) => (
            <div key={project.id}
              className="group relative rounded-2xl overflow-hidden border"
              style={{
                borderColor: 'var(--border)',
                backgroundColor: 'var(--bg-primary)',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.7s ease ${idx * 0.1}s, transform 0.7s ease ${idx * 0.1}s`,
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent-1)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
            >
              {/* Image */}
              <div className="relative h-60 md:h-72 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" style={{ transition: 'transform 0.5s ease' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1.06)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1)'}
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 55%)' }} />

                {/* Category badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest"
                  style={{ backgroundColor: 'rgba(0,0,0,0.7)', color: 'var(--text-secondary)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  {project.category}
                </div>

                {/* Hover overlay - Desktop only */}
                <div className="absolute inset-0 hidden xl:flex items-center justify-center p-6 xl:opacity-0 xl:group-hover:opacity-100"
                  style={{ backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)', transition: 'opacity 0.3s ease' }}>
                  <div className="text-center space-y-5">
                    <p className="text-white text-xs md:text-sm leading-relaxed">{project.description}</p>
                    <div className="flex justify-center gap-4">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white text-black transition-all duration-300 hover:bg-neutral-200 hover:scale-[1.03] active:scale-[0.97]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                        Live Demo
                      </a>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-wider border border-white/80 text-white transition-all duration-300 hover:bg-white/10 hover:border-white hover:scale-[1.03] active:scale-[0.97]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 md:p-8 space-y-4">
                <div className="flex justify-between items-start gap-3">
                  <h4 className="text-xl md:text-2xl font-bold tracking-tight" style={{ transition: 'color 0.2s' }}>{project.title}</h4>
                </div>

                {/* Description - Mobile & Tablet only */}
                <p className="text-xs md:text-sm opacity-70 leading-relaxed font-light xl:hidden" style={{ color: 'var(--text-secondary)' }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border" style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)', transition: 'border-color 0.2s' }}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons - Mobile & Tablet only */}
                <div className="flex gap-3 pt-2 xl:hidden">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-wider flex-1 text-center border-2 transition-all duration-300 active:scale-[0.97]"
                    style={{ backgroundColor: 'var(--accent-1)', color: 'var(--bg-primary)', borderColor: 'var(--accent-1)' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.85'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    Live Demo
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-wider flex-1 text-center border transition-all duration-300 active:scale-[0.97]"
                    style={{ borderColor: 'var(--border)', color: 'var(--text-primary)', backgroundColor: 'var(--bg-secondary)' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent-1)'; (e.currentTarget as HTMLElement).style.color = 'var(--accent-1)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)'; }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {limit && PROJECTS.length > limit && (
          <div className="mt-14 text-center">
            <Link to="/projects"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs no-underline hover:no-underline"
              style={{ border: '2px solid var(--accent-1)', color: 'var(--accent-1)', transition: 'background-color 0.2s, color 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--accent-1)'; (e.currentTarget as HTMLElement).style.color = 'var(--bg-primary)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'var(--accent-1)'; }}
            >
              <span>View All Projects</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
