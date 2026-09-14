import type { Project, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Vũ Nguyễn Hà Vân',
  role: 'Frontend & Full-Stack Web Developer',
  location: 'Cần Thơ, Việt Nam',
  email: 'vunguyenhavancantho@gmail.com',
  github: 'https://github.com',
  bio: 'Chuyên gia xây dựng website hiệu năng cao, chuẩn responsive, tối ưu trải nghiệm người dùng và sẵn sàng triển khai miễn phí lên GitHub Pages.',
  status: 'Sẵn sàng nhận dự án mới & Hợp tác',
  stats: [
    { label: 'Dự án hoàn thành', value: 25, suffix: '+' },
    { label: 'Năm kinh nghiệm', value: 3, suffix: '+' },
    { label: 'Điểm Lighthouse', value: 99, suffix: '/100' },
    { label: 'Khách hàng hài lòng', value: 100, suffix: '%' },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'EcoShop - Sàn Thương Mại Điện Tử Hiện Đại',
    category: 'frontend',
    categoryLabel: 'Frontend Web',
    description: 'Trang mua sắm trực tuyến với bộ lọc sản phẩm linh hoạt, giỏ hàng thời gian thực, lưu trữ đơn hàng và giao diện thanh toán mượt mà.',
    tech: ['HTML5', 'CSS3 Flexbox/Grid', 'Vanilla JS', 'LocalStorage'],
    githubUrl: 'https://github.com',
    gradient: 'from-slate-800 to-slate-900',
    highlightText: '<E-Commerce Platform />',
  },
  {
    id: '2',
    title: 'TaskFlow - Bảng Quản Lý Công Việc Kanban',
    category: 'app',
    categoryLabel: 'Web App',
    description: 'Ứng dụng quản trị công việc kéo thả (Drag & Drop), chia cột Trạng thái, thiết lập deadline, gắn nhãn màu và thống kê tiến độ tự động.',
    tech: ['HTML5 Drag & Drop', 'Modern CSS', 'ES6 Modules', 'JSON'],
    githubUrl: 'https://github.com',
    gradient: 'from-teal-800 to-teal-950',
    highlightText: '<Kanban Board App />',
  },
  {
    id: '3',
    title: 'WeatherSync - Trạm Dự Báo Thời Tiết Toàn Cầu',
    category: 'tools',
    categoryLabel: 'Tiện ích',
    description: 'Bảng theo dõi thời tiết thời gian thực kết nối API quốc tế, tự động xác định vị trí qua Geolocation, hiển thị dự báo 7 ngày và biểu đồ nhiệt độ.',
    tech: ['Async/Await', 'Fetch API', 'SVG Icons', 'Responsive CSS'],
    githubUrl: 'https://github.com',
    gradient: 'from-indigo-800 to-indigo-950',
    highlightText: '<Weather Dashboard />',
  },
  {
    id: '4',
    title: 'FinanceTrack - Quản Lý Chi Tiêu Cá Nhân',
    category: 'app',
    categoryLabel: 'Web App',
    description: 'Ứng dụng sổ thu chi cá nhân với biểu đồ trực quan, phân loại chi phí thông minh, xuất báo cáo CSV và lưu trữ offline an toàn.',
    tech: ['JavaScript', 'Canvas API', 'CSS Custom Props', 'PWA Ready'],
    githubUrl: 'https://github.com',
    gradient: 'from-emerald-800 to-emerald-950',
    highlightText: '<Personal Finance />',
  },
  {
    id: '5',
    title: 'DocuMarkdown - Trình Soạn Thảo Markdown Live',
    category: 'tools',
    categoryLabel: 'Tiện ích',
    description: 'Trình biên tập văn bản kỹ thuật với chế độ xem trước song song (Split Preview), đếm từ, hỗ trợ bảng biểu và xuất file HTML/PDF.',
    tech: ['HTML5 ContentEditable', 'RegEx Parser', 'CSS Styling'],
    githubUrl: 'https://github.com',
    gradient: 'from-purple-800 to-purple-950',
    highlightText: '<Markdown Studio />',
  },
  {
    id: '6',
    title: 'LandingPro - Giao Diện Doanh Nghiệp Chuẩn SEO',
    category: 'frontend',
    categoryLabel: 'Frontend Web',
    description: 'Mẫu giao diện giới thiệu dịch vụ và sản phẩm công nghệ đạt điểm tối đa Core Web Vitals, tương thích hoàn toàn thiết bị di động.',
    tech: ['HTML5 Semantic', 'BEM CSS', 'Micro-interactions'],
    githubUrl: 'https://github.com',
    gradient: 'from-blue-800 to-blue-950',
    highlightText: '<SaaS Landing Page />',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Nền tảng Frontend & Giao diện',
    skills: [
      { name: 'HTML5 Semantic & SEO', level: 95, description: 'Cấu trúc web chuẩn ngữ nghĩa, tối ưu Google Search & Accessibility' },
      { name: 'CSS3, Flexbox & Grid', level: 92, description: 'Bố cục layout linh hoạt, animations, custom variables, responsive' },
      { name: 'JavaScript (ES6+) & DOM', level: 88, description: 'Xử lý logic, tương tác DOM, async/await, fetch dữ liệu REST' },
      { name: 'Tailwind CSS & Frameworks', level: 90, description: 'Thiết kế giao diện nhanh, utility-first, nhất quán hệ màu' },
      { name: 'React & Modern Hooks', level: 85, description: 'Kiến trúc component, quản lý state, memoization và SPA' },
    ],
  },
  {
    title: 'Công cụ, Git & Triển khai Web',
    skills: [
      { name: 'Git & Quản lý nhánh', level: 92, description: 'Version control, commit convention, pull requests, resolving conflicts' },
      { name: 'GitHub Pages & Deploy', level: 95, description: 'Triển khai web tĩnh miễn phí, cấu hình custom domain, HTTPS' },
      { name: 'GitHub Actions (CI/CD)', level: 82, description: 'Tự động kiểm thử và xuất bản website khi có commit mới' },
      { name: 'Vite & Build Tooling', level: 85, description: 'Đóng gói mã nguồn, tối ưu hóa dung lượng file và tốc độ tải' },
      { name: 'Tối ưu tốc độ Web (Core Web Vitals)', level: 90, description: 'Giảm thiểu render-blocking, nén tài nguyên, lazy loading' },
    ],
  },
];

export const DEPLOY_STEPS = [
  {
    step: '1',
    title: 'Tạo Kho Lưu Trữ (Repository) trên GitHub',
    desc: 'Đăng nhập vào github.com, nhấn dấu "+" góc trên bên phải và chọn "New repository". Đặt tên repository (ví dụ: my-web hoặc username.github.io) và để chế độ Public.',
    tips: 'Nếu đặt tên là username.github.io, link web sẽ có dạng ngắn gọn nhất: https://username.github.io',
  },
  {
    step: '2',
    title: 'Tải các File HTML, CSS, JS lên GitHub',
    desc: 'Nhấn nút "Add file" -> "Upload files" rồi kéo thả 3 file (index.html, style.css, script.js) vào. Ghi chú commit và nhấn "Commit changes".',
    tips: 'Bạn cũng có thể dùng câu lệnh Git CLI: git init && git add . && git commit -m "deploy" && git push',
  },
  {
    step: '3',
    title: 'Kích hoạt tính năng GitHub Pages',
    desc: 'Vào mục "Settings" của Repository -> chọn thẻ "Pages" ở danh mục bên trái. Tại mục "Build and deployment", chọn Source là "Deploy from a branch", chọn nhánh "main" (hoặc "master") và folder "/ (root)", rồi nhấn "Save".',
    tips: 'Sau khoảng 1-2 phút, bạn sẽ thấy đường link trang web trực tuyến hiển thị sẵn sàng!',
  },
];
