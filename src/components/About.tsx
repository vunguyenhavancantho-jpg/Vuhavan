import React from 'react';
import { Smartphone, Zap, ShieldCheck, Globe, Code, Cpu } from 'lucide-react';

interface AboutProps {
  isDark: boolean;
}

export const About: React.FC<AboutProps> = ({ isDark }) => {
  const highlights = [
    {
      icon: <Smartphone className="w-5 h-5 text-indigo-500" />,
      title: 'Chuẩn Responsive 100%',
      desc: 'Hiển thị sắc nét và mượt mà trên mọi thiết bị: từ màn hình điện thoại, iPad, laptop đến màn hình máy tính 4K.'
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      title: 'Tải trang thần tốc & Chuẩn SEO',
      desc: 'Mã nguồn tĩnh thuần không render chặn, tối ưu hình ảnh, đạt điểm số 95-100 trên Google Core Web Vitals.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
      title: 'Triển khai GitHub Pages Miễn Phí',
      desc: 'Chỉ cần kéo thả file hoặc git push là có ngay trang web trực tuyến bảo mật với chứng chỉ SSL/HTTPS tự động.'
    },
    {
      icon: <Code className="w-5 h-5 text-cyan-500" />,
      title: 'Tách bạch cấu trúc & Dễ tùy chỉnh',
      desc: 'HTML cho cấu trúc nội dung, CSS cho phong cách giao diện và JS cho tính năng tương tác - dễ dàng thay đổi nội dung.'
    },
    {
      icon: <Globe className="w-5 h-5 text-rose-500" />,
      title: 'Hỗ trợ Custom Domain cá nhân',
      desc: 'Có thể gắn tên miền riêng (ví dụ: havan.vn hoặc tenban.com) vào GitHub Pages chỉ với vài thao tác DNS đơn giản.'
    },
    {
      icon: <Cpu className="w-5 h-5 text-purple-500" />,
      title: 'Zero Dependencies - Không lỗi vặt',
      desc: 'Không cần phụ thuộc vào hàng ngàn node_modules cồng kềnh, chạy ổn định vĩnh viễn trên bất kỳ máy chủ nào.'
    }
  ];

  return (
    <section id="about" className={`py-20 border-y ${
      isDark ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50/60 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-500 mb-2 block">
            Về giải pháp & Năng lực
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Xây dựng website hiện đại, tối ưu cho GitHub Pages
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Được thiết kế từ gốc với các tiêu chuẩn web hiện đại nhất, sẵn sàng đưa vào sử dụng thực tế và lưu trữ miễn phí vĩnh viễn.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${
                isDark 
                  ? 'bg-slate-900/80 border-slate-800 hover:border-indigo-500/50' 
                  : 'bg-white border-slate-200 hover:border-indigo-500/50 hover:shadow-indigo-500/5'
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                isDark ? 'bg-slate-800' : 'bg-slate-100'
              }`}>
                {item.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 tracking-tight">
                {item.title}
              </h3>
              <p className={`text-sm leading-relaxed ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
