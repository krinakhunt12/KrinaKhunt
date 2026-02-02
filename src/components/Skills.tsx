
import React from 'react';
import type { Skill } from '../types';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories: Skill['category'][] = ["Frontend", "Backend", "Database", "Tools & DevOps", "Design"];

  return (
    <section id="skills" className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
      {/* Decorative background numbers */}
      <div className="container max-w-6xl mx-auto px-2 md:px-6 relative">
        <div className="mb-12 md:mb-20 space-y-3 md:space-y-4 text-center">
          <h3 className="mono text-xs md:text-sm uppercase tracking-[0.3em] mb-4 text-accent opacity-60">Arsenal</h3>
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">Technical <span className="gradient-text">Matrix</span></h2>
          <p className="opacity-60 text-sm md:text-base px-4">A high-precision suite of tools and technologies mastered for digital dominance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {categories.map((cat, catIdx) => (
            <div
              key={cat}
              className="reveal p-6 md:p-8 lg:p-12 rounded-2xl md:rounded-[2.5rem] border border-white/5 transition-all duration-500 hover:border-white/20 group relative overflow-hidden"
              style={{ backgroundColor: 'var(--bg-secondary)', transitionDelay: `${catIdx * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-10">
                <div className="w-1.5 md:w-2 h-8 md:h-10 rounded-full bg-accent-1" />
                <h3 className="text-sm md:text-base lg:text-lg font-semibold uppercase tracking-tight">{cat}</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {SKILLS.filter((s: Skill) => s.category === cat).map((skill: Skill) => (
                  <div
                    key={skill.name}
                    className="p-4 md:p-5 rounded-xl md:rounded-2xl border border-white/5 bg-white/5 transition-all duration-300 hover:scale-105 hover:bg-white/[0.08] interactive group/item"
                  >
                    <div className="flex flex-col gap-3 h-full justify-between">
                      <div className="flex justify-between items-center gap-3 mb-1">
                        <span className="font-bold text-xs md:text-sm lg:text-base leading-tight">{skill.name}</span>
                        <span
                          className="text-xs md:text-sm lg:text-base font-bold tabular-nums flex-shrink-0"
                          style={{ color: 'var(--accent-1)' }}
                        >
                          {skill.level}%
                        </span>
                      </div>

                      {/* Enhanced Progress Bar */}
                      <div className="relative h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        {/* Background glow effect */}
                        <div
                          className="absolute inset-0 opacity-20 blur-sm"
                          style={{
                            width: `${skill.level}%`,
                            backgroundColor: 'var(--accent-1)',
                            transition: 'width 1000ms cubic-bezier(0.4, 0, 0.2, 1) 300ms'
                          }}
                        />
                        {/* Main progress bar */}
                        <div
                          className="absolute inset-0 rounded-full transition-all duration-1000 delay-300 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            background: `linear-gradient(90deg, var(--accent-1), var(--accent-2))`,
                            boxShadow: `0 0 10px var(--accent-1)`
                          }}
                        />
                        {/* Shimmer effect on hover */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"
                          style={{
                            width: `${skill.level}%`,
                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                            animation: 'shimmer 2s infinite'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative accent for the pod */}
              <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 blur-3xl opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none bg-accent-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
