import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  isDark: boolean;
}

export const Contact: React.FC<ContactProps> = ({ isDark }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setFeedbackMsg('Vui lòng điền đầy đủ các thông tin bắt buộc (*)');
      return;
    }

    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
      setFeedbackMsg(`Cảm ơn bạn ${formData.name}! Tin nhắn đã được gửi thành công. Tôi sẽ sớm liên hệ lại với bạn qua email ${formData.email}.`);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setStatus('idle');
        setFeedbackMsg('');
      }, 7000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className={`rounded-3xl border overflow-hidden p-8 sm:p-12 lg:p-14 ${
          isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-xl'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-500 block">
                Kết nối & Trao đổi
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Cùng nhau tạo nên những trang web ấn tượng
              </h2>
              <p className={`text-base leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                Bạn cần một website cá nhân, portfolio, landing page doanh nghiệp hay cần hỗ trợ chuyển đổi mã nguồn để deploy lên GitHub Pages? Hãy liên hệ ngay hôm nay!
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Email trực tiếp</div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm sm:text-base font-semibold text-indigo-500 hover:underline"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Khu vực hoạt động</div>
                    <div className="text-sm sm:text-base font-semibold">
                      {PERSONAL_INFO.location} (Hỗ trợ Remote toàn quốc)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold">Họ và tên *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ví dụ: Nguyễn Văn A"
                      required
                      className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                        isDark 
                          ? 'bg-slate-800/80 border-slate-700 text-white focus:border-indigo-500' 
                          : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-500 focus:bg-white'
                      }`}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold">Địa chỉ Email *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      required
                      className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                        isDark 
                          ? 'bg-slate-800/80 border-slate-700 text-white focus:border-indigo-500' 
                          : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-500 focus:bg-white'
                      }`}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold">Tiêu đề yêu cầu</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Ví dụ: Cần thiết kế trang web portfolio cá nhân"
                    className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                      isDark 
                        ? 'bg-slate-800/80 border-slate-700 text-white focus:border-indigo-500' 
                        : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-500 focus:bg-white'
                    }`}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold">Nội dung tin nhắn *</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Mô tả ý tưởng, tiến độ mong muốn hoặc câu hỏi của bạn..."
                    required
                    className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                      isDark 
                        ? 'bg-slate-800/80 border-slate-700 text-white focus:border-indigo-500' 
                        : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-500 focus:bg-white'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm bg-indigo-600 text-white hover:bg-indigo-700 shadow-md transition-all flex items-center justify-center gap-2 hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === 'submitting' ? 'Đang gửi tin nhắn...' : 'Gửi tin nhắn ngay'}</span>
                </button>

                {status === 'success' && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{feedbackMsg}</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs sm:text-sm flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{feedbackMsg}</span>
                  </div>
                )}
              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
