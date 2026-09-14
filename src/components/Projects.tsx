import React, { useState } from 'react';
import { ExternalLink, Github, Layers, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

interface ProjectsProps {
  isDark: boolean;
  onSelectProjectForDeploy?: (projectId: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ isDark }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'frontend' | 'app' | 'tools'>('all');

  const filteredProjects = activeFilter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className={`py-20 border-t ${
      isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-slate-50/50 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-500 mb-2 block">
            Sản phẩm thực tế
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Các dự án tiêu biểu hoàn thành
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Được đóng gói chuẩn HTML, CSS, JS tĩnh, sẵn sàng chạy ngay khi đẩy lên GitHub Pages.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {[
              { key: 'all', label: 'Tất cả dự án' },
              { key: 'frontend', label: 'Frontend Web' },
              { key: 'app', label: 'Web App' },
              { key: 'tools', label: 'Tiện ích' },
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key as any)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeFilter === tab.key
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : isDark
                      ? 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className={`rounded-2xl border overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1.5 hover:shadow-xl group ${
                isDark 
                  ? 'bg-slate-900 border-slate-800 hover:border-indigo-500/50' 
                  : 'bg-white border-slate-200 hover:border-indigo-500/50 hover:shadow-indigo-500/10'
              }`}
            >
              {/* Card visual banner */}
              <div className={`h-44 bg-gradient-to-br ${project.gradient} p-5 flex flex-col justify-between text-white relative overflow-hidden`}>
                <div className="flex items-center justify-between z-10">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-black/40 backdrop-blur-sm border border-white/10 text-cyan-300 font-semibold">
                    {project.categoryLabel}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                    Live Ready
                  </span>
                </div>

                <div className="z-10">
                  <div className="font-mono text-base font-bold text-sky-200 group-hover:scale-105 transition-transform origin-left">
                    {project.highlightText}
                  </div>
                </div>

                {/* Background decorative pattern */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/5 rounded-full blur-xl pointer-events-none" />
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold mb-2 group-hover:text-indigo-500 transition-colors">
                  {project.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-4 flex-grow ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className={`text-[11px] font-medium px-2 py-0.5 rounded-md ${
                        isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Footer link row */}
                <div className={`pt-4 border-t flex items-center justify-between text-xs font-semibold ${
                  isDark ? 'border-slate-800' : 'border-slate-100'
                }`}>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-indigo-500 hover:text-indigo-400"
                  >
                    <span>Yêu cầu dự án tương tự</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1 transition-colors ${
                      isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
