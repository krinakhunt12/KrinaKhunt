
import React from 'react';
import type { Skill } from '../types';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories: Skill['category'][] = ["Frontend", "Backend", "Database", "Tools & DevOps", "Design"];

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      {/* Decorative background numbers */}
      <div className="absolute -left-10 top-1/2 -translate-y-1/2 text-[20rem] font-black opacity-[0.02] pointer-events-none select-none">SKILLS</div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="mb-20 space-y-4 text-center reveal">
          <h3 className="mono text-sm uppercase tracking-[0.3em]" style={{ color: 'var(--accent-1)' }}>Arsenal</h3>
          <h2 className="text-4xl md:text-6xl font-black">Technical <span className="gradient-text">Matrix</span></h2>
          <p className="max-w-xl mx-auto opacity-60">A high-precision suite of tools and technologies mastered for digital dominance.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, catIdx) => (
            <div
              key={cat}
              className="reveal p-8 md:p-12 rounded-[2.5rem] border border-white/5 transition-all duration-500 hover:border-white/20 group relative overflow-hidden"
              style={{ backgroundColor: 'var(--bg-secondary)', transitionDelay: `${catIdx * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-10">
                <div className="w-2 h-10 rounded-full" style={{ backgroundColor: 'var(--accent-1)' }} />
                <h3 className="text-2xl font-black uppercase tracking-tighter">{cat}</h3>
              </div>

              {/* Skills Grid for this category */}
              <div className="grid grid-cols-2 gap-4">
                {SKILLS.filter((s: Skill) => s.category === cat).map((skill: Skill, idx: number) => (
                  <div
                    key={skill.name}
                    className="p-5 rounded-2xl border border-white/5 bg-white/5 transition-all duration-300 hover:scale-105 hover:bg-white/[0.08] interactive group/item"
                  >
                    <div className="flex flex-col gap-3">
                      <div className="flex justify-between items-start">
                        <span className="font-bold text-sm">{skill.name}</span>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((dot: number) => (
                            <div
                              key={dot}
                              className={`w-1 h-1 rounded-full transition-all duration-500 ${skill.level / 20 >= dot ? 'bg-[var(--accent-1)] scale-125 shadow-[0_0_5px_var(--accent-1)]' : 'bg-white/10'}`}
                            />
                          ))}
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
              <div className="absolute top-0 right-0 w-32 h-32 blur-3xl opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" style={{ backgroundColor: 'var(--accent-1)' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
