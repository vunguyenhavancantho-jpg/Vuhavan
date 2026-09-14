import React from 'react';
import { Github, Heart, Download, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { downloadCompleteZip } from '../data/sourceCode';

interface FooterProps {
  isDark: boolean;
  onOpenDeployGuide: () => void;
  onViewCode: () => void;
}

export const Footer: React.FC<FooterProps> = ({ isDark, onOpenDeployGuide, onViewCode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t transition-colors ${
      isDark ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 font-bold text-slate-900 dark:text-white">
              <span className="h-6 w-6 rounded bg-indigo-600 text-white flex items-center justify-center font-mono text-xs font-bold">
                &lt;/&gt;
              </span>
              <span>HaVan.dev &bull; GitHub Pages Edition</span>
            </div>
            <p className="text-xs">
              Mã nguồn chuẩn tĩnh HTML5, CSS3, JavaScript - Tương thích 100% với GitHub Pages.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
            <button
              onClick={onViewCode}
              className="hover:text-indigo-500 transition-colors"
            >
              Mã nguồn HTML/CSS/JS
            </button>
            <span>&bull;</span>
            <button
              onClick={onOpenDeployGuide}
              className="hover:text-indigo-500 transition-colors"
            >
              Hướng dẫn Deploy
            </button>
            <span>&bull;</span>
            <button
              onClick={() => downloadCompleteZip()}
              className="hover:text-indigo-500 transition-colors flex items-center gap-1 text-indigo-500 font-bold"
            >
              <Download className="w-3.5 h-3.5" /> Tải ZIP
            </button>
            <span>&bull;</span>
            <button
              onClick={scrollToTop}
              className="hover:text-indigo-500 transition-colors flex items-center gap-1"
            >
              <ArrowUp className="w-3.5 h-3.5" /> Đầu trang
            </button>
          </div>
        </div>

        <div className={`mt-8 pt-8 border-t flex flex-col sm:flex-row items-center justify-between text-xs gap-4 ${
          isDark ? 'border-slate-900 text-slate-500' : 'border-slate-200 text-slate-400'
        }`}>
          <div>
            &copy; 2026 {PERSONAL_INFO.name} ({PERSONAL_INFO.email}). All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Thiết kế & đóng gói phục vụ triển khai GitHub</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
