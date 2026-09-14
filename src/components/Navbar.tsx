import React, { useState } from 'react';
import { 
  Code2, 
  Eye, 
  Download, 
  Moon, 
  Sun, 
  Github, 
  Menu, 
  X, 
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { downloadCompleteZip } from '../data/sourceCode';

interface NavbarProps {
  activeTab: 'preview' | 'code';
  setActiveTab: (tab: 'preview' | 'code') => void;
  isDark: boolean;
  toggleTheme: () => void;
  onOpenDeployGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  isDark,
  toggleTheme,
  onOpenDeployGuide,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handleDownloadZip = async () => {
    try {
      setDownloading(true);
      await downloadCompleteZip();
    } finally {
      setTimeout(() => setDownloading(false), 1000);
    }
  };

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-200 ${
      isDark ? 'bg-slate-950/85 border-slate-800 text-slate-100' : 'bg-white/85 border-slate-200 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <a 
              href="#hero" 
              onClick={() => setActiveTab('preview')}
              className="flex items-center gap-2 group font-bold text-lg sm:text-xl tracking-tight"
            >
              <span className="h-9 w-9 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-mono text-sm font-extrabold shadow-sm group-hover:scale-105 transition-transform">
                &lt;/&gt;
              </span>
              <span className="font-extrabold">
                HaVan<span className="text-indigo-500">.dev</span>
              </span>
            </a>

            {/* View Mode Pill Switcher */}
            <div className={`hidden md:flex items-center p-1 rounded-full border text-xs font-semibold ml-4 ${
              isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-200'
            }`}>
              <button
                id="tab-preview-btn"
                onClick={() => setActiveTab('preview')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-200 ${
                  activeTab === 'preview'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Xem Website</span>
              </button>
              <button
                id="tab-code-btn"
                onClick={() => setActiveTab('code')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-200 ${
                  activeTab === 'code'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Code2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Mã Nguồn HTML/CSS/JS</span>
                <span className="bg-amber-500/20 text-amber-400 text-[10px] px-1.5 py-0.5 rounded-full uppercase">Deploy</span>
              </button>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {activeTab === 'preview' ? (
              <>
                <a href="#about" className={`transition-colors ${isDark ? 'text-slate-300 hover:text-indigo-400' : 'text-slate-600 hover:text-indigo-600'}`}>Giới thiệu</a>
                <a href="#skills" className={`transition-colors ${isDark ? 'text-slate-300 hover:text-indigo-400' : 'text-slate-600 hover:text-indigo-600'}`}>Kỹ năng</a>
                <a href="#projects" className={`transition-colors ${isDark ? 'text-slate-300 hover:text-indigo-400' : 'text-slate-600 hover:text-indigo-600'}`}>Dự án</a>
                <a href="#contact" className={`transition-colors ${isDark ? 'text-slate-300 hover:text-indigo-400' : 'text-slate-600 hover:text-indigo-600'}`}>Liên hệ</a>
              </>
            ) : (
              <span className="text-xs text-indigo-400 font-mono flex items-center gap-1.5 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20">
                <Sparkles className="w-3.5 h-3.5" /> Chế độ kiểm tra mã nguồn & Triển khai GitHub Pages
              </span>
            )}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2.5">
            {/* Guide Button */}
            <button
              id="open-deploy-guide-btn"
              onClick={onOpenDeployGuide}
              className={`hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg border transition-all ${
                isDark 
                  ? 'border-slate-800 bg-slate-900 text-slate-200 hover:border-indigo-500 hover:text-indigo-400' 
                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-indigo-500 hover:text-indigo-600'
              }`}
              title="Xem hướng dẫn triển khai lên GitHub Pages"
            >
              <Github className="w-4 h-4" />
              <span>Cách Deploy</span>
            </button>

            {/* Quick Download ZIP */}
            <button
              id="download-zip-nav-btn"
              onClick={handleDownloadZip}
              disabled={downloading}
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
              title="Tải trọn bộ file HTML, CSS, JS dạng ZIP"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">{downloading ? 'Đang nén...' : 'Tải ZIP (.html,.css,.js)'}</span>
              <span className="sm:hidden">ZIP</span>
            </button>

            {/* Theme Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={toggleTheme}
              className={`p-2 rounded-lg border transition-colors ${
                isDark 
                  ? 'border-slate-800 bg-slate-900 text-amber-400 hover:bg-slate-800' 
                  : 'border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
              aria-label="Chuyển đổi giao diện Sáng / Tối"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg border ${
                isDark ? 'border-slate-800 bg-slate-900 text-slate-300' : 'border-slate-200 bg-slate-100 text-slate-700'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className={`md:hidden border-b px-4 pt-3 pb-5 space-y-3 ${
          isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          {/* Mobile switcher */}
          <div className="flex rounded-lg border p-1 mb-3">
            <button
              onClick={() => { setActiveTab('preview'); setMobileMenuOpen(false); }}
              className={`flex-1 py-2 text-xs font-semibold rounded-md flex items-center justify-center gap-1 ${
                activeTab === 'preview' ? 'bg-indigo-600 text-white' : 'text-slate-400'
              }`}
            >
              <Eye className="w-3.5 h-3.5" /> Xem Website
            </button>
            <button
              onClick={() => { setActiveTab('code'); setMobileMenuOpen(false); }}
              className={`flex-1 py-2 text-xs font-semibold rounded-md flex items-center justify-center gap-1 ${
                activeTab === 'code' ? 'bg-indigo-600 text-white' : 'text-slate-400'
              }`}
            >
              <Code2 className="w-3.5 h-3.5 text-amber-400" /> Mã Nguồn HTML/CSS/JS
            </button>
          </div>

          <div className="flex flex-col space-y-2 text-sm font-medium">
            <a 
              href="#about" 
              onClick={() => { setActiveTab('preview'); setMobileMenuOpen(false); }}
              className="py-1.5 px-2 rounded hover:bg-indigo-500/10"
            >
              Giới thiệu
            </a>
            <a 
              href="#skills" 
              onClick={() => { setActiveTab('preview'); setMobileMenuOpen(false); }}
              className="py-1.5 px-2 rounded hover:bg-indigo-500/10"
            >
              Kỹ năng
            </a>
            <a 
              href="#projects" 
              onClick={() => { setActiveTab('preview'); setMobileMenuOpen(false); }}
              className="py-1.5 px-2 rounded hover:bg-indigo-500/10"
            >
              Dự án
            </a>
            <a 
              href="#contact" 
              onClick={() => { setActiveTab('preview'); setMobileMenuOpen(false); }}
              className="py-1.5 px-2 rounded hover:bg-indigo-500/10"
            >
              Liên hệ
            </a>
            <button
              onClick={() => { onOpenDeployGuide(); setMobileMenuOpen(false); }}
              className="text-left py-1.5 px-2 rounded text-indigo-500 font-semibold flex items-center gap-1.5"
            >
              <ExternalLink className="w-4 h-4" /> Hướng dẫn Deploy lên GitHub Pages
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
