import React, { useState } from 'react';
import { 
  X, 
  Check, 
  Copy, 
  Github, 
  Terminal, 
  MousePointerClick, 
  Sparkles, 
  ExternalLink,
  Download,
  AlertCircle
} from 'lucide-react';
import { downloadCompleteZip } from '../data/sourceCode';

interface DeployGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}

export const DeployGuideModal: React.FC<DeployGuideModalProps> = ({
  isOpen,
  onClose,
  isDark,
}) => {
  const [tab, setTab] = useState<'ui' | 'cli'>('ui');
  const [copiedCli, setCopiedCli] = useState(false);

  if (!isOpen) return null;

  const cliCommands = `# 1. Khởi tạo Git trong thư mục chứa file
git init

# 2. Thêm index.html, style.css, script.js vào git
git add .

# 3. Tạo commit đầu tiên
git commit -m "Deploy website to GitHub Pages"

# 4. Đặt tên nhánh chính là main
git branch -M main

# 5. Liên kết kho lưu trữ GitHub của bạn
git remote add origin https://github.com/<ten-user>/<ten-repo>.git

# 6. Đẩy mã nguồn lên GitHub
git push -u origin main`;

  const handleCopyCli = () => {
    navigator.clipboard.writeText(cliCommands);
    setCopiedCli(true);
    setTimeout(() => setCopiedCli(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-sm animate-fade-in">
      <div 
        className={`relative w-full max-w-2xl rounded-3xl border shadow-2xl overflow-hidden my-8 ${
          isDark ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className={`flex items-center justify-between px-6 py-5 border-b ${
          isDark ? 'border-slate-800 bg-slate-900/90' : 'border-slate-100 bg-slate-50'
        }`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Hướng Dẫn Triển Khai Lên GitHub Pages</h3>
              <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Đưa website của bạn lên mạng Internet miễn phí trong 3 phút
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className={`p-2 rounded-xl transition-colors ${
              isDark ? 'hover:bg-slate-800 text-slate-400' : 'hover:bg-slate-200 text-slate-600'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Method Tabs */}
        <div className={`px-6 pt-4 flex gap-2 border-b ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
          <button
            onClick={() => setTab('ui')}
            className={`pb-3 text-xs sm:text-sm font-semibold flex items-center gap-2 border-b-2 transition-all ${
              tab === 'ui'
                ? 'border-indigo-500 text-indigo-500'
                : isDark ? 'border-transparent text-slate-400 hover:text-white' : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <MousePointerClick className="w-4 h-4" />
            <span>Cách 1: Giao diện Web (Kéo thả - Không cần cài Git)</span>
          </button>
          <button
            onClick={() => setTab('cli')}
            className={`pb-3 text-xs sm:text-sm font-semibold flex items-center gap-2 border-b-2 transition-all ${
              tab === 'cli'
                ? 'border-indigo-500 text-indigo-500'
                : isDark ? 'border-transparent text-slate-400 hover:text-white' : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>Cách 2: Dùng Git Terminal</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          {tab === 'ui' ? (
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
                  1
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold">Tạo Repository mới trên GitHub</h4>
                  <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    Truy cập <a href="https://github.com/new" target="_blank" rel="noopener noreferrer" className="text-indigo-500 underline font-semibold">github.com/new</a>. Đặt tên Repo (ví dụ: <code className="px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-500 font-mono">my-web</code> hoặc <code className="px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-500 font-mono">&lt;ten-user&gt;.github.io</code>) và chọn chế độ <strong>Public</strong>.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
                  2
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold">Tải 3 file mã nguồn lên</h4>
                  <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    Bấm <strong>uploading an existing file</strong> trên trang repo. Kéo thả 3 file: <span className="font-mono text-indigo-500 font-bold">index.html</span>, <span className="font-mono text-indigo-500 font-bold">style.css</span>, và <span className="font-mono text-indigo-500 font-bold">script.js</span> vào rồi nhấn <strong>Commit changes</strong>.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
                  3
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold">Bật GitHub Pages trong mục Settings</h4>
                  <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    Vào <strong>Settings</strong> của Repository &rarr; chọn <strong>Pages</strong> bên menu trái.
                    Tại <em>Branch</em>, chọn nhánh <strong>main</strong> và thư mục <strong>/ (root)</strong> rồi nhấn <strong>Save</strong>.
                  </p>
                </div>
              </div>

              {/* Result Notice */}
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs flex items-start gap-3 mt-4">
                <Sparkles className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold mb-0.5">Website sẵn sàng hoạt động!</div>
                  <div>Sau 1-2 phút, GitHub sẽ cấp cho bạn đường link miễn phí dạng: <strong className="font-mono">https://&lt;ten-user&gt;.github.io/&lt;ten-repo&gt;/</strong></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <p className={`text-xs ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                Mở Terminal / PowerShell trong thư mục chứa file và chạy tuần tự các lệnh sau:
              </p>

              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-[#0c1220] p-4 text-xs font-mono text-slate-200">
                <button
                  onClick={handleCopyCli}
                  className="absolute top-3 right-3 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-[11px] flex items-center gap-1.5 transition-all text-slate-300"
                >
                  {copiedCli ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCli ? 'Đã sao chép!' : 'Sao chép lệnh'}</span>
                </button>
                <pre className="overflow-x-auto pr-24 leading-relaxed">
                  <code>{cliCommands}</code>
                </pre>
              </div>

              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  Lưu ý: Thay thế <code className="font-bold">&lt;ten-user&gt;</code> và <code className="font-bold">&lt;ten-repo&gt;</code> bằng tên tài khoản và tên repository thực tế của bạn trên GitHub.
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className={`px-6 py-4 border-t flex flex-wrap items-center justify-between gap-3 ${
          isDark ? 'border-slate-800 bg-slate-900/90' : 'border-slate-100 bg-slate-50'
        }`}>
          <button
            onClick={() => downloadCompleteZip()}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-500 hover:text-indigo-400"
          >
            <Download className="w-4 h-4" />
            <span>Tải file ZIP để giải nén ngay</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white transition-colors"
          >
            Đã hiểu, đóng cửa sổ
          </button>
        </div>
      </div>
    </div>
  );
};
