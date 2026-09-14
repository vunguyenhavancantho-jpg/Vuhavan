import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { CodeViewer } from './components/CodeViewer';
import { DeployGuideModal } from './components/DeployGuideModal';
import { Footer } from './components/Footer';
import { Download, Code2, Eye, Github, Sparkles } from 'lucide-react';
import { downloadCompleteZip } from './data/sourceCode';

export default function App() {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [isDark, setIsDark] = useState(false);
  const [isDeployGuideOpen, setIsDeployGuideOpen] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('site-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('site-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('site-theme', 'light');
      }
      return next;
    });
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      isDark ? 'bg-slate-950 text-slate-100' : 'bg-[#fafafa] text-slate-900'
    }`}>
      {/* Top Notification Announcement Bar */}
      <aside aria-label="GitHub Deploy Announcement" className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-cyan-600 text-white text-xs font-semibold py-2 px-4 text-center flex items-center justify-center gap-2">
        <span className="hidden sm:inline">🚀</span>
        <span>Bộ mã nguồn HTML, CSS, JS đã sẵn sàng để deploy miễn phí lên GitHub Pages.</span>
        <button
          onClick={() => setActiveTab('code')}
          className="underline underline-offset-2 ml-1 hover:text-cyan-200 transition-colors cursor-pointer"
        >
          Xem mã nguồn & Tải file &rarr;
        </button>
      </aside>

      {/* Main Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isDark={isDark}
        toggleTheme={toggleTheme}
        onOpenDeployGuide={() => setIsDeployGuideOpen(true)}
      />

      {/* Primary Content Views */}
      <main>
        {activeTab === 'preview' ? (
          <div>
            <Hero
              isDark={isDark}
              onViewCode={() => setActiveTab('code')}
              onOpenDeployGuide={() => setIsDeployGuideOpen(true)}
            />
            <About isDark={isDark} />
            <Skills isDark={isDark} />
            <Projects isDark={isDark} />
            <Contact isDark={isDark} />
          </div>
        ) : (
          <div>
            <CodeViewer
              isDark={isDark}
              onOpenDeployGuide={() => setIsDeployGuideOpen(true)}
            />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        isDark={isDark}
        onOpenDeployGuide={() => setIsDeployGuideOpen(true)}
        onViewCode={() => setActiveTab('code')}
      />

      {/* Deployment Guide Modal */}
      <DeployGuideModal
        isOpen={isDeployGuideOpen}
        onClose={() => setIsDeployGuideOpen(false)}
        isDark={isDark}
      />

      {/* Floating Quick Action Widget */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        <button
          id="floating-zip-download-btn"
          onClick={() => downloadCompleteZip()}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-lg shadow-indigo-600/30 hover:scale-105 active:scale-95 transition-all"
          title="Tải trọn bộ .ZIP chứa index.html, style.css, script.js"
        >
          <Download className="w-4 h-4" />
          <span className="hidden sm:inline">Tải ZIP Deploy GitHub</span>
          <span className="sm:hidden">ZIP</span>
        </button>

        <button
          id="floating-mode-toggle-btn"
          onClick={() => setActiveTab(activeTab === 'preview' ? 'code' : 'preview')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-bold shadow-md transition-all hover:scale-105 active:scale-95 ${
            isDark 
              ? 'bg-slate-900 border-slate-700 text-slate-200 hover:border-indigo-500' 
              : 'bg-white border-slate-200 text-slate-800 hover:border-indigo-500'
          }`}
          title="Chuyển đổi giữa chế độ Xem Website và Xem Mã Nguồn HTML/CSS/JS"
        >
          {activeTab === 'preview' ? (
            <>
              <Code2 className="w-4 h-4 text-amber-500" />
              <span>Xem Code HTML/JS</span>
            </>
          ) : (
            <>
              <Eye className="w-4 h-4 text-indigo-500" />
              <span>Xem Giao Diện Web</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
