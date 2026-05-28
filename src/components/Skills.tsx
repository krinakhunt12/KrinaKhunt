import React, { useEffect, useRef, useState } from 'react';
import type { Skill } from '../types';
import { SKILLS } from '../constants';
import { useTheme } from '../hooks/useTheme';

const SkillBar: React.FC<{ skill: Skill; delay: number; isLight: boolean }> = ({ skill, delay, isLight }) => {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setAnimated(true); observer.disconnect(); }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const bgNormal = isLight ? 'rgba(0, 0, 0, 0.02)' : 'rgba(255, 255, 255, 0.03)';
  const bgHover = isLight ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.07)';
  const borderNormal = isLight ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.06)';
  const borderHover = isLight ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.15)';

  return (
    <div ref={ref} className="p-4 md:p-5 rounded-xl border group relative overflow-hidden"
      style={{ backgroundColor: bgNormal, borderColor: borderNormal, transition: 'transform 0.25s, background-color 0.25s, border-color 0.25s' }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.backgroundColor = bgHover; (e.currentTarget as HTMLElement).style.borderColor = borderHover; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.backgroundColor = bgNormal; (e.currentTarget as HTMLElement).style.borderColor = borderNormal; }}
    >
      <div className="flex justify-between items-center mb-3">
        <span className="font-bold text-xs md:text-sm">{skill.name}</span>
        <span className="text-xs font-bold tabular-nums" style={{ color: 'var(--accent-1)' }}>{skill.level}%</span>
      </div>
      <div className="relative h-1.5 w-full rounded-full overflow-hidden" style={{ backgroundColor: isLight ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.08)' }}>
        <div className="absolute inset-y-0 left-0 rounded-full"
          style={{
            width: animated ? `${skill.level}%` : '0%',
            background: 'linear-gradient(90deg, var(--accent-1), var(--accent-2))',
            boxShadow: isLight ? 'none' : '0 0 8px var(--accent-1)',
            transition: `width 1200ms cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
          }}
        />
        {/* Shimmer */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ width: `${skill.level}%`, background: isLight ? 'linear-gradient(90deg,transparent,rgba(0,0,0,0.05),transparent)' : 'linear-gradient(90deg,transparent,rgba(255,255,255,0.25),transparent)', animation: 'shimmer 1.5s infinite' }} />
      </div>
    </div>
  );
};

interface SkillsProps {
  hideHeader?: boolean;
}

const Skills: React.FC<SkillsProps> = ({ hideHeader }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const categories: Skill['category'][] = ['Frontend', 'Backend', 'Database', 'Tools & DevOps', 'Design'];
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); observer.disconnect(); }
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className={`py-8 md:py-12 px-4 md:px-6 relative overflow-hidden ${hideHeader ? 'pt-0' : ''}`}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl -z-10" style={{ background: 'radial-gradient(circle, var(--accent-1), transparent)', opacity: 0.03 }} />

      <div className="container max-w-6xl mx-auto px-2 md:px-6 relative">
        {/* Section Header */}
        {!hideHeader && (
          <div className="mb-14 md:mb-20 space-y-4 text-center" style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
            <h3 className="mono text-xs md:text-sm uppercase tracking-[0.35em] opacity-50" style={{ color: 'var(--text-secondary)' }}>Arsenal</h3>
            <h2 className="text-4xl md:text-5xl font-bold">
              Technical{' '}
              <span className="gradient-text">Matrix</span>
            </h2>
            <p className="opacity-60 text-sm md:text-base max-w-xl mx-auto">A high-precision suite of tools and technologies mastered for digital dominance.</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {categories.map((cat, catIdx) => {
            const catSkills = SKILLS.filter((s: Skill) => s.category === cat);
            return (
              <div key={cat}
                className="p-6 md:p-10 rounded-2xl md:rounded-3xl border relative overflow-hidden"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderColor: isLight ? 'var(--border)' : 'rgba(255,255,255,0.06)',
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(40px)',
                  transition: `opacity 0.7s ease ${catIdx * 0.12}s, transform 0.7s ease ${catIdx * 0.12}s`,
                }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1.5 h-9 rounded-full" style={{ backgroundColor: 'var(--accent-1)' }} />
                  <h3 className="text-sm md:text-base font-bold uppercase tracking-wider">{cat}</h3>
                  <span className="ml-auto mono text-xs opacity-40">{catSkills.length} skills</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {catSkills.map((skill: Skill, i: number) => (
                    <SkillBar key={skill.name} skill={skill} delay={catIdx * 100 + i * 80} isLight={isLight} />
                  ))}
                </div>
                <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-10 pointer-events-none" style={{ backgroundColor: 'var(--accent-1)' }} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
