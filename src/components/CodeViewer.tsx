import React, { useState } from 'react';
import { 
  Copy, 
  Check, 
  Download, 
  FileCode, 
  Code, 
  Palette, 
  BookOpen, 
  Settings, 
  Sparkles, 
  Github, 
  Globe, 
  Terminal, 
  ExternalLink,
  Layers,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SOURCE_FILES, downloadSingleFile, downloadCompleteZip } from '../data/sourceCode';
import type { SourceFile } from '../types';

interface CodeViewerProps {
  isDark: boolean;
  onOpenDeployGuide: () => void;
}

export const CodeViewer: React.FC<CodeViewerProps> = ({ isDark, onOpenDeployGuide }) => {
  const [selectedFileIdx, setSelectedFileIdx] = useState(0);
  const [copied, setCopied] = useState(false);
  const [downloadingZip, setDownloadingZip] = useState(false);
  
  // Custom simulator for GitHub Pages URL
  const [githubUser, setGithubUser] = useState('vunguyenhavan');
  const [githubRepo, setGithubRepo] = useState('portfolio-web');

  const currentFile: SourceFile = SOURCE_FILES[selectedFileIdx];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentFile.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadSingle = () => {
    downloadSingleFile(currentFile.filename, currentFile.code);
  };

  const handleDownloadAllZip = async () => {
    setDownloadingZip(true);
    try {
      await downloadCompleteZip();
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } finally {
      setTimeout(() => setDownloadingZip(false), 800);
    }
  };

  const getFileIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code className="w-4 h-4 text-orange-400" />;
      case 'Palette': return <Palette className="w-4 h-4 text-sky-400" />;
      case 'FileCode': return <FileCode className="w-4 h-4 text-amber-400" />;
      case 'BookOpen': return <BookOpen className="w-4 h-4 text-emerald-400" />;
      case 'Settings': return <Settings className="w-4 h-4 text-purple-400" />;
      default: return <FileCode className="w-4 h-4 text-indigo-400" />;
    }
  };

  const codeLines = currentFile.code.split('\n');

  return (
    <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Top Banner with ZIP download CTA */}
      <div className={`p-6 sm:p-8 rounded-3xl border mb-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 ${
        isDark ? 'bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border-slate-800' : 'bg-gradient-to-r from-indigo-50 via-white to-cyan-50 border-indigo-100 shadow-sm'
      }`}>
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mã Nguồn Đã Chuẩn Hóa 100% Cho GitHub Pages</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Bộ mã nguồn tĩnh HTML, CSS & JavaScript
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Được đóng gói chuẩn không cần cài đặt Node.js hay build server. Bạn có thể tải file <span className="font-mono font-bold text-indigo-500">.zip</span> hoặc sao chép từng file và đẩy trực tiếp lên GitHub Pages miễn phí.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            id="download-complete-zip-btn"
            onClick={handleDownloadAllZip}
            disabled={downloadingZip}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Download className="w-4 h-4" />
            <span>{downloadingZip ? 'Đang tạo tệp ZIP...' : 'Tải trọn bộ .ZIP (Tất cả file)'}</span>
          </button>

          <button
            id="modal-trigger-btn"
            onClick={onOpenDeployGuide}
            className={`inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm border transition-all ${
              isDark 
                ? 'border-slate-700 bg-slate-800 text-slate-200 hover:border-indigo-500 hover:text-indigo-400' 
                : 'border-slate-200 bg-white text-slate-800 hover:border-indigo-500 hover:text-indigo-600 shadow-sm'
            }`}
          >
            <Github className="w-4 h-4" />
            <span>Xem 3 Bước Deploy</span>
          </button>
        </div>
      </div>

      {/* GitHub Pages URL Calculator / Preview */}
      <div className={`p-5 rounded-2xl border mb-8 ${
        isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
      }`}>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center shrink-0">
              <Globe className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold">Mô phỏng tên miền trang web của bạn trên GitHub Pages:</h4>
              <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Nhập tên GitHub và tên Repository để xem trước liên kết web hoạt động
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <div className="flex items-center text-xs font-mono">
              <span className={`px-2.5 py-2 rounded-l-lg border border-r-0 ${isDark ? 'bg-slate-800 border-slate-700 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'}`}>
                https://
              </span>
              <input
                type="text"
                value={githubUser}
                onChange={(e) => setGithubUser(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
                placeholder="username"
                className={`w-28 sm:w-32 px-2.5 py-2 border text-xs outline-none ${
                  isDark ? 'bg-slate-800 border-slate-700 text-indigo-400' : 'bg-white border-slate-200 text-indigo-600'
                }`}
              />
              <span className={`px-1.5 py-2 border-y ${isDark ? 'bg-slate-800 border-slate-700 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'}`}>
                .github.io/
              </span>
              <input
                type="text"
                value={githubRepo}
                onChange={(e) => setGithubRepo(e.target.value.toLowerCase().replace(/[^a-z0-9-_]/g, ''))}
                placeholder="repo-name"
                className={`w-28 sm:w-32 px-2.5 py-2 border rounded-r-lg text-xs outline-none ${
                  isDark ? 'bg-slate-800 border-slate-700 text-indigo-400' : 'bg-white border-slate-200 text-indigo-600'
                }`}
              />
            </div>

            <a
              href={`https://${githubUser || 'username'}.github.io/${githubRepo}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center gap-1 shrink-0"
              title="Mở đường dẫn mẫu"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Xem link</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Code Explorer Container */}
      <div className="rounded-2xl border border-slate-800 bg-[#0b101c] overflow-hidden shadow-2xl">
        
        {/* Tab Header */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between border-b border-slate-800 bg-[#121929] px-4 py-2 gap-3">
          
          {/* File Tabs */}
          <div className="flex items-center overflow-x-auto gap-1 scrollbar-none py-1">
            {SOURCE_FILES.map((file, idx) => (
              <button
                key={file.filename}
                onClick={() => setSelectedFileIdx(idx)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono font-semibold transition-all whitespace-nowrap shrink-0 ${
                  selectedFileIdx === idx
                    ? 'bg-[#1e293b] text-indigo-300 border border-indigo-500/30 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {getFileIcon(file.iconName)}
                <span>{file.filename}</span>
              </button>
            ))}
          </div>

          {/* Action buttons on tab header */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono font-semibold transition-all"
              title="Sao chép toàn bộ mã nguồn file này"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Đã sao chép!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Sao chép mã</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownloadSingle}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-mono font-semibold transition-all"
              title={`Tải file ${currentFile.filename}`}
            >
              <Download className="w-3.5 h-3.5" />
              <span>Tải file này</span>
            </button>
          </div>
        </div>

        {/* File Description Bar */}
        <div className="bg-[#0e1524] px-5 py-2.5 border-b border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-slate-300">{currentFile.description}</span>
          </div>
          <span className="text-slate-400">{codeLines.length} dòng</span>
        </div>

        {/* Syntax Code Body with line numbers */}
        <div className="p-4 sm:p-6 overflow-x-auto max-h-[600px] text-xs font-mono leading-relaxed select-text bg-[#0b101c]">
          <table className="w-full border-collapse">
            <tbody>
              {codeLines.map((line, index) => (
                <tr key={index} className="hover:bg-slate-800/40">
                  <td className="w-12 select-none text-right pr-4 text-slate-500 border-r border-slate-800/60 align-top">
                    {index + 1}
                  </td>
                  <td className="pl-4 whitespace-pre text-slate-200 font-mono align-top">
                    {line || ' '}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer info bar */}
        <div className="px-5 py-3 bg-[#111929] border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-amber-400" />
            <span>Thư mục chuẩn: <strong>root /</strong> (không cần lồng thư mục)</span>
          </div>
          <div className="text-indigo-400">
            Tương thích 100% với trình duyệt Chrome, Safari, Firefox, Edge
          </div>
        </div>
      </div>

    </section>
  );
};
