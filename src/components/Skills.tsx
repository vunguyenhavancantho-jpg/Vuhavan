import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

interface SkillsProps {
  isDark: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ isDark }) => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-500 mb-2 block">
            Công nghệ & Kỹ năng
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Nền tảng kỹ thuật vững chắc
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Các công nghệ cốt lõi phục vụ lập trình giao diện, xử lý dữ liệu và xuất bản trang web.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat, catIdx) => (
            <div
              key={catIdx}
              className={`p-6 sm:p-8 rounded-2xl border ${
                isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2.5">
                <span className="w-2 h-5 rounded-full bg-indigo-600 inline-block" />
                <span>{cat.title}</span>
              </h3>

              <div className="space-y-5">
                {cat.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold">{skill.name}</span>
                      <span className="font-mono text-xs text-indigo-500 font-bold">{skill.level}%</span>
                    </div>
                    <div className={`h-2 rounded-full overflow-hidden ${
                      isDark ? 'bg-slate-800' : 'bg-slate-100'
                    }`}>
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
