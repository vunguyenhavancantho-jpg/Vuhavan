import React from 'react';
import { 
  ArrowRight, 
  Github, 
  Download, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Zap, 
  Terminal 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  isDark: boolean;
  onViewCode: () => void;
  onOpenDeployGuide: () => void;
}

export const Hero: React.FC<HeroProps> = ({ isDark, onViewCode, onOpenDeployGuide }) => {
  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Background soft ambient accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{PERSONAL_INFO.status}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
              Xin chào, tôi là{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            {/* Subtitle */}
            <p className={`text-lg sm:text-xl font-normal leading-relaxed max-w-2xl ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              {PERSONAL_INFO.bio}
            </p>

            {/* Highlight tags */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-semibold">
              <span className={`px-2.5 py-1 rounded-md border flex items-center gap-1.5 ${
                isDark ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
              }`}>
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500" /> 100% HTML, CSS, JS Thuần
              </span>
              <span className={`px-2.5 py-1 rounded-md border flex items-center gap-1.5 ${
                isDark ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
              }`}>
                <Zap className="w-3.5 h-3.5 text-amber-500" /> Sẵn sàng deploy GitHub Pages
              </span>
              <span className={`px-2.5 py-1 rounded-md border flex items-center gap-1.5 ${
                isDark ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
              }`}>
                <Sparkles className="w-3.5 h-3.5 text-cyan-500" /> Không cần cài Node.js
              </span>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              <a
                id="hero-explore-projects-btn"
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all hover:-translate-y-0.5"
              >
                <span>Xem Dự Án Hoàn Thành</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                id="hero-view-code-btn"
                onClick={onViewCode}
                className={`inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm border transition-all hover:-translate-y-0.5 ${
                  isDark 
                    ? 'border-slate-700 bg-slate-900/80 text-slate-200 hover:border-indigo-500 hover:text-indigo-400' 
                    : 'border-slate-300 bg-white text-slate-800 hover:border-indigo-500 hover:text-indigo-600 shadow-sm'
                }`}
              >
                <Terminal className="w-4 h-4 text-amber-400" />
                <span>Xem & Lấy Mã Nguồn HTML/CSS/JS</span>
              </button>
            </div>

            {/* Stats row */}
            <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t ${
              isDark ? 'border-slate-800/80' : 'border-slate-200'
            }`}>
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-indigo-600 dark:text-indigo-400">
                    {stat.value}{stat.suffix}
                  </span>
                  <span className={`text-xs font-medium mt-1 ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Interactive Code Card Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Floating GitHub Pages badge */}
              <div className="absolute -top-4 -right-2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold shadow-xl border border-slate-700">
                <Github className="w-3.5 h-3.5 text-amber-400" />
                <span>GitHub Pages Ready</span>
              </div>

              {/* Terminal Code Card */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-[#0c1322] text-slate-200 font-mono text-xs">
                {/* Window Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#131d31] border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 text-slate-400 text-[11px]">profile.config.ts</span>
                  </div>
                  <span className="text-[11px] text-indigo-400 font-sans font-semibold">GitHub Static</span>
                </div>

                {/* Code body */}
                <div className="p-5 space-y-2 leading-relaxed select-none">
                  <div>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-blue-400">developer</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-sky-300">name</span>:{' '}
                    <span className="text-emerald-400">"{PERSONAL_INFO.name}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-sky-300">role</span>:{' '}
                    <span className="text-emerald-400">"{PERSONAL_INFO.role}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-sky-300">location</span>:{' '}
                    <span className="text-emerald-400">"{PERSONAL_INFO.location}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-sky-300">email</span>:{' '}
                    <span className="text-emerald-400">"{PERSONAL_INFO.email}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-sky-300">deployPlatform</span>:{' '}
                    <span className="text-amber-300">"GitHub Pages (Free Hosting)"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-sky-300">coreTech</span>: [
                    <span className="text-emerald-300">"HTML5"</span>,{' '}
                    <span className="text-emerald-300">"CSS3"</span>,{' '}
                    <span className="text-emerald-300">"JavaScript"</span>,{' '}
                    <span className="text-emerald-300">"React"</span>
                    ],
                  </div>
                  <div className="pl-4">
                    <span className="text-sky-300">lighthouseSpeedScore</span>:{' '}
                    <span className="text-indigo-400 font-bold">99</span>
                  </div>
                  <div>&#125;;</div>
                  <div className="pt-2 text-slate-400 italic">
                    // Sẵn sàng tải mã nguồn hoặc đẩy trực tiếp lên kho GitHub của bạn
                  </div>
                </div>

                {/* Bottom Card Action Bar */}
                <div className="px-4 py-3 bg-[#11192b] border-t border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Deploy Status: Sẵn sàng</span>
                  </div>
                  <button
                    onClick={onOpenDeployGuide}
                    className="text-xs text-indigo-400 hover:text-indigo-300 font-sans font-semibold underline underline-offset-2"
                  >
                    Xem 3 bước Deploy &rarr;
                  </button>
                </div>
              </div>

              {/* Floating Bottom Card */}
              <div className="absolute -bottom-4 -left-3 z-20 flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-xs font-bold shadow-xl border border-slate-200 dark:border-slate-800">
                <div className="w-7 h-7 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">Định dạng file</div>
                  <div className="font-mono text-indigo-600 dark:text-indigo-400">.html | .css | .js</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
