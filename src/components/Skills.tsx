
import React from 'react';
import type { Skill } from '../types';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories: Skill['category'][] = ["Frontend", "Backend", "Database", "Tools & DevOps", "Design"];

  return (
    <section id="skills" className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
      {/* Decorative background numbers */}
      <div className="container max-w-6xl mx-auto px-6 relative">
        <div className="mb-12 md:mb-20 space-y-3 md:space-y-4 text-center">
          <h3 className="mono text-xs md:text-sm uppercase tracking-[0.3em] mb-4" style={{ color: 'var(--accent-1)' }}>Arsenal</h3>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-black mb-4">Technical <span className="gradient-text">Matrix</span></h2>
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
                <div className="w-1.5 md:w-2 h-8 md:h-10 rounded-full" style={{ backgroundColor: 'var(--accent-1)' }} />
                <h3 className="text-sm md:text-base lg:text-lg font-semibold uppercase tracking-tight">{cat}</h3>
              </div>

              {/* Skills Grid for this category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {SKILLS.filter((s: Skill) => s.category === cat).map((skill: Skill, idx: number) => (
                  <div
                    key={skill.name}
                    className="p-4 md:p-5 rounded-xl md:rounded-2xl border border-white/5 bg-white/5 transition-all duration-300 hover:scale-105 hover:bg-white/[0.08] interactive group/item min-h-[80px] md:min-h-[90px]"
                  >
                    <div className="flex flex-col gap-3 h-full justify-between">
                      <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center gap-2 md:gap-3">
                        <span className="font-bold text-xs md:text-sm leading-tight flex-1 min-w-0">{skill.name}</span>
                        <div className="flex gap-0.5 flex-shrink-0">
                          {[1, 2, 3, 4, 5].map((star: number) => {
                            const isFilled = skill.level / 20 >= star;
                            return (
                              <svg
                                key={star}
                                xmlns="http://www.w3.org/2000/svg"
                                width="11"
                                height="11"
                                viewBox="0 0 24 24"
                                fill={isFilled ? 'currentColor' : 'none'}
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="md:w-3 md:h-3"
                                style={{ color: 'var(--accent-1)', opacity: isFilled ? 1 : 0.2 }}
                              >
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                              </svg>
                            );
                          })}
                        </div>
                      </div>

                      {/* Proficiency Indicator - Subtle progress line */}
                      <div className="h-0.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full transition-all duration-1000 delay-300"
                          style={{ width: `${skill.level}%`, backgroundColor: 'var(--accent-1)' }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative accent for the pod */}
              <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 blur-3xl opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" style={{ backgroundColor: 'var(--accent-1)' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
