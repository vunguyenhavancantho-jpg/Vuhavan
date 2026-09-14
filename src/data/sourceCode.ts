import JSZip from 'jszip';
import type { SourceFile } from '../types';

export const HTML_CODE = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vũ Nguyễn Hà Vân | Web Developer Portfolio</title>
  <meta name="description" content="Trang web cá nhân và hồ sơ năng lực của Vũ Nguyễn Hà Vân - Web Developer. Triển khai miễn phí trên GitHub Pages.">
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
  
  <!-- CSS Stylesheet -->
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Header / Navigation -->
  <header class="site-header" id="header">
    <div class="container header-container">
      <a href="#hero" class="brand-logo" id="brand-logo">
        <span class="logo-symbol">&lt;/&gt;</span>
        <span class="logo-text">HaVan<span class="accent-dot">.dev</span></span>
      </a>

      <nav class="nav-menu" id="nav-menu">
        <ul class="nav-list">
          <li><a href="#about" class="nav-link">Giới thiệu</a></li>
          <li><a href="#skills" class="nav-link">Kỹ năng</a></li>
          <li><a href="#projects" class="nav-link">Dự án</a></li>
          <li><a href="#experience" class="nav-link">Kinh nghiệm</a></li>
          <li><a href="#contact" class="nav-link">Liên hệ</a></li>
        </ul>
      </nav>

      <div class="header-actions">
        <!-- Theme Toggle Button -->
        <button class="theme-toggle-btn" id="theme-toggle" aria-label="Đổi chế độ sáng tối" title="Đổi giao diện">
          <svg class="sun-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
          <svg class="moon-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
        </button>

        <a href="#contact" class="btn btn-primary header-cta">Thuê tôi</a>

        <!-- Mobile Menu Toggle -->
        <button class="mobile-toggle-btn" id="mobile-menu-btn" aria-label="Mở menu điều hướng">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <main>
    <section class="hero-section" id="hero">
      <div class="container hero-grid">
        <div class="hero-content">
          <div class="status-badge">
            <span class="status-dot"></span>
            <span>Sẵn sàng nhận dự án mới & Cơ hội việc làm</span>
          </div>
          <h1 class="hero-title">
            Xin chào, tôi là <span class="gradient-text">Vũ Nguyễn Hà Vân</span>
          </h1>
          <p class="hero-subtitle">
            Frontend & Full-Stack Web Developer đến từ Cần Thơ. Chuyên xây dựng các ứng dụng web tốc độ cao, giao diện chuẩn responsive, trải nghiệm mượt mà và tối ưu SEO.
          </p>

          <div class="hero-cta-group">
            <a href="#projects" class="btn btn-primary">
              Xem dự án nổi bật
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub Profile
            </a>
          </div>

          <div class="stats-row">
            <div class="stat-card">
              <span class="stat-num" data-target="25">0</span><span class="stat-plus">+</span>
              <span class="stat-label">Dự án hoàn thành</span>
            </div>
            <div class="stat-card">
              <span class="stat-num" data-target="3">0</span><span class="stat-plus">+</span>
              <span class="stat-label">Năm kinh nghiệm</span>
            </div>
            <div class="stat-card">
              <span class="stat-num" data-target="100">0</span><span class="stat-plus">%</span>
              <span class="stat-label">Cam kết đúng hạn</span>
            </div>
          </div>
        </div>

        <div class="hero-visual">
          <div class="avatar-card">
            <div class="code-window-header">
              <span class="win-dot red"></span>
              <span class="win-dot yellow"></span>
              <span class="win-dot green"></span>
              <span class="win-title">developer.config.json</span>
            </div>
            <div class="code-body">
              <pre><code>const developer = {
  name: "Vũ Nguyễn Hà Vân",
  role: "Web Developer",
  location: "Cần Thơ, Việt Nam",
  stack: [
    "HTML5", "CSS3", "JavaScript",
    "React", "Tailwind", "Git"
  ],
  status: "Ready for Work",
  passionateAbout: "Clean Code & UX"
};</code></pre>
            </div>
            <div class="floating-badge badge-top">
              <span class="icon">🚀</span>
              <span>100% GitHub Pages Ready</span>
            </div>
            <div class="floating-badge badge-bottom">
              <span class="icon">⚡</span>
              <span>Lighthouse Score: 99</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="section about-section" id="about">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">Về bản thân</span>
          <h2 class="section-title">Lập trình viên đam mê kiến tạo trải nghiệm web hiện đại</h2>
          <p class="section-desc">Kết hợp tư duy thẩm mỹ và cấu trúc code chặt chẽ để mang đến những sản phẩm số hiệu quả cao.</p>
        </div>

        <div class="about-grid">
          <div class="about-card">
            <div class="icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
            </div>
            <h3>Giao diện chuẩn Responsive</h3>
            <p>Thiết kế mượt mà trên mọi kích thước màn hình từ điện thoại di động, máy tính bảng đến màn hình rộng 4K.</p>
          </div>

          <div class="about-card">
            <div class="icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
            </div>
            <h3>Tối ưu tốc độ & SEO</h3>
            <p>Code HTML, CSS, JavaScript thuần nhẹ nhàng, tải trang dưới 1 giây, tuân thủ các chỉ số Google Core Web Vitals.</p>
          </div>

          <div class="about-card">
            <div class="icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
            </div>
            <h3>Dễ bảo trì & Mở rộng</h3>
            <p>Cấu trúc thư mục rõ ràng, phân tách mạch lạc giữa cấu trúc (HTML), giao diện (CSS) và hành vi (JS).</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="section skills-section" id="skills">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">Công nghệ & Kỹ năng</span>
          <h2 class="section-title">Hộp công cụ phát triển phần mềm</h2>
          <p class="section-desc">Thành thạo các công nghệ web nền tảng và hiện đại phục vụ phát triển ứng dụng.</p>
        </div>

        <div class="skills-grid">
          <div class="skill-category">
            <h3 class="category-title">Frontend Core</h3>
            <div class="skill-bars">
              <div class="skill-item">
                <div class="skill-info">
                  <span>HTML5 & Semantic Markup</span>
                  <span>95%</span>
                </div>
                <div class="progress-bar"><div class="progress" style="width: 95%"></div></div>
              </div>
              <div class="skill-item">
                <div class="skill-info">
                  <span>CSS3 / Flexbox / Grid / Animations</span>
                  <span>90%</span>
                </div>
                <div class="progress-bar"><div class="progress" style="width: 90%"></div></div>
              </div>
              <div class="skill-item">
                <div class="skill-info">
                  <span>JavaScript (ES6+) & DOM API</span>
                  <span>88%</span>
                </div>
                <div class="progress-bar"><div class="progress" style="width: 88%"></div></div>
              </div>
              <div class="skill-item">
                <div class="skill-info">
                  <span>React & Modern Hooks</span>
                  <span>85%</span>
                </div>
                <div class="progress-bar"><div class="progress" style="width: 85%"></div></div>
              </div>
            </div>
          </div>

          <div class="skill-category">
            <h3 class="category-title">Công cụ & Triển khai</h3>
            <div class="skill-bars">
              <div class="skill-item">
                <div class="skill-info">
                  <span>Git, GitHub & GitHub Pages</span>
                  <span>92%</span>
                </div>
                <div class="progress-bar"><div class="progress" style="width: 92%"></div></div>
              </div>
              <div class="skill-item">
                <div class="skill-info">
                  <span>Tailwind CSS & Utility-First</span>
                  <span>90%</span>
                </div>
                <div class="progress-bar"><div class="progress" style="width: 90%"></div></div>
              </div>
              <div class="skill-item">
                <div class="skill-info">
                  <span>RESTful API Integration</span>
                  <span>82%</span>
                </div>
                <div class="progress-bar"><div class="progress" style="width: 82%"></div></div>
              </div>
              <div class="skill-item">
                <div class="skill-info">
                  <span>Vite / Webpack / Build Tools</span>
                  <span>80%</span>
                </div>
                <div class="progress-bar"><div class="progress" style="width: 80%"></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="section projects-section" id="projects">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">Sản phẩm thực tế</span>
          <h2 class="section-title">Các dự án đã hoàn thành</h2>
          <p class="section-desc">Những dự án tiêu biểu được xây dựng bằng HTML, CSS, JavaScript và React.</p>
        </div>

        <div class="filter-tabs">
          <button class="filter-btn active" data-filter="all">Tất cả</button>
          <button class="filter-btn" data-filter="frontend">Frontend Web</button>
          <button class="filter-btn" data-filter="app">Web App</button>
          <button class="filter-btn" data-filter="tools">Tiện ích</button>
        </div>

        <div class="projects-grid" id="projects-container">
          <!-- Project 1 -->
          <article class="project-card" data-category="frontend">
            <div class="project-preview">
              <div class="project-mockup" style="background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);">
                <div class="mockup-code">
                  <span class="tag">&lt;E-Commerce /&gt;</span>
                </div>
              </div>
            </div>
            <div class="project-details">
              <span class="project-tag">Frontend Web</span>
              <h3 class="project-title">Trang thương mại điện tử EcoShop</h3>
              <p class="project-summary">Cửa hàng trực tuyến với giỏ hàng tương tác, bộ lọc sản phẩm theo giá và danh mục, hỗ trợ thanh toán giả lập.</p>
              <div class="tech-tags">
                <span>HTML5</span>
                <span>CSS3</span>
                <span>JavaScript</span>
                <span>LocalStorage</span>
              </div>
              <div class="project-links">
                <a href="#contact" class="link-btn">Xem chi tiết &rarr;</a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="link-github">GitHub Code</a>
              </div>
            </div>
          </article>

          <!-- Project 2 -->
          <article class="project-card" data-category="app">
            <div class="project-preview">
              <div class="project-mockup" style="background: linear-gradient(135deg, #0f766e 0%, #134e4a 100%);">
                <div class="mockup-code">
                  <span class="tag">&lt;TaskFlow App /&gt;</span>
                </div>
              </div>
            </div>
            <div class="project-details">
              <span class="project-tag">Web App</span>
              <h3 class="project-title">Ứng dụng quản lý công việc Kanban</h3>
              <p class="project-summary">Bảng quản lý công việc kéo thả (Drag & Drop), phân chia độ ưu tiên, lưu trữ offline tự động và thống kê năng suất.</p>
              <div class="tech-tags">
                <span>HTML5 Drag & Drop</span>
                <span>Modern CSS</span>
                <span>ES6 Modules</span>
              </div>
              <div class="project-links">
                <a href="#contact" class="link-btn">Xem chi tiết &rarr;</a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="link-github">GitHub Code</a>
              </div>
            </div>
          </article>

          <!-- Project 3 -->
          <article class="project-card" data-category="tools">
            <div class="project-preview">
              <div class="project-mockup" style="background: linear-gradient(135deg, #4338ca 0%, #312e81 100%);">
                <div class="mockup-code">
                  <span class="tag">&lt;Weather Dashboard /&gt;</span>
                </div>
              </div>
            </div>
            <div class="project-details">
              <span class="project-tag">Tiện ích</span>
              <h3 class="project-title">Bảng tin dự báo thời tiết trực tuyến</h3>
              <p class="project-summary">Kết nối OpenWeather API hiển thị nhiệt độ, độ ẩm, chất lượng không khí và dự báo 7 ngày tới theo định vị người dùng.</p>
              <div class="tech-tags">
                <span>Fetch API</span>
                <span>JavaScript</span>
                <span>Flexbox</span>
              </div>
              <div class="project-links">
                <a href="#contact" class="link-btn">Xem chi tiết &rarr;</a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="link-github">GitHub Code</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="section contact-section" id="contact">
      <div class="container">
        <div class="contact-card">
          <div class="contact-info">
            <span class="section-subtitle">Kết nối</span>
            <h2 class="contact-heading">Hãy cùng nhau xây dựng sản phẩm tuyệt vời</h2>
            <p class="contact-subtext">Bạn đang tìm kiếm lập trình viên phát triển website chuẩn SEO, triển khai lên GitHub Pages hoặc dự án riêng? Hãy gửi tin nhắn ngay!</p>

            <div class="contact-methods">
              <div class="contact-item">
                <div>
                  <span class="item-label">Email liên hệ</span>
                  <a href="mailto:vunguyenhavancantho@gmail.com" class="item-value">vunguyenhavancantho@gmail.com</a>
                </div>
              </div>

              <div class="contact-item">
                <div>
                  <span class="item-label">Địa điểm</span>
                  <span class="item-value">Cần Thơ, Việt Nam (Nhận Remote)</span>
                </div>
              </div>
            </div>
          </div>

          <form class="contact-form" id="contact-form">
            <div class="form-group">
              <label for="name">Họ và tên *</label>
              <input type="text" id="name" name="name" placeholder="Ví dụ: Nguyễn Văn A" required>
            </div>

            <div class="form-group">
              <label for="email">Địa chỉ Email *</label>
              <input type="email" id="email" name="email" placeholder="name@example.com" required>
            </div>

            <div class="form-group">
              <label for="message">Nội dung tin nhắn *</label>
              <textarea id="message" name="message" rows="4" placeholder="Mô tả ngắn về ý tưởng website hoặc câu hỏi của bạn..." required></textarea>
            </div>

            <button type="submit" class="btn btn-primary submit-btn" id="submit-btn">
              <span>Gửi tin nhắn</span>
            </button>
            <div class="form-feedback" id="form-feedback"></div>
          </form>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="container footer-content">
      <p class="copyright">&copy; 2026 Vũ Nguyễn Hà Vân. Sẵn sàng triển khai trên GitHub Pages.</p>
      <div class="footer-links">
        <a href="#hero">Về đầu trang &uarr;</a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  </footer>

  <!-- Javascript -->
  <script src="script.js"></script>
</body>
</html>`;

export const CSS_CODE = `/* ==========================================================================
   CSS Stylesheet for Vũ Nguyễn Hà Vân Portfolio
   Optimized for GitHub Pages deployment
   ========================================================================== */

:root {
  /* Colors - Light Mode (Default) */
  --bg-main: #f8fafc;
  --bg-surface: #ffffff;
  --bg-card: #ffffff;
  --bg-alt: #f1f5f9;
  
  --text-main: #0f172a;
  --text-muted: #475569;
  --text-subtle: #64748b;
  
  --primary: #4f46e5;
  --primary-hover: #4338ca;
  --primary-light: #eef2ff;
  --accent: #06b6d4;
  
  --border: #e2e8f0;
  --border-light: #f1f5f9;
  
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  --shadow-glow: 0 0 20px rgba(79, 70, 229, 0.15);
  
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-full: 9999px;
  
  --font-sans: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --transition: all 0.25s ease-in-out;
}

[data-theme="dark"] {
  --bg-main: #0b0f19;
  --bg-surface: #111827;
  --bg-card: #141e33;
  --bg-alt: #1a2238;
  
  --text-main: #f8fafc;
  --text-muted: #cbd5e1;
  --text-subtle: #94a3b8;
  
  --primary: #6366f1;
  --primary-hover: #4f46e5;
  --primary-light: rgba(99, 102, 241, 0.15);
  --accent: #22d3ee;
  
  --border: #1e293b;
  --border-light: #182235;
  
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.5);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.4);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.5);
  --shadow-glow: 0 0 25px rgba(99, 102, 241, 0.25);
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: var(--font-sans);
  background-color: var(--bg-main);
  color: var(--text-main);
  line-height: 1.6;
  min-height: 100vh;
  transition: background-color 0.3s ease, color 0.3s ease;
  overflow-x: hidden;
}

.container {
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 20px;
}

a {
  color: inherit;
  text-decoration: none;
  transition: var(--transition);
}

button, input, textarea {
  font: inherit;
}

ul {
  list-style: none;
}

/* Header */
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: rgba(248, 250, 252, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

[data-theme="dark"] .site-header {
  background-color: rgba(11, 15, 25, 0.85);
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 800;
  font-size: 1.25rem;
}

.logo-symbol {
  font-family: var(--font-mono);
  color: var(--primary);
}

.accent-dot {
  color: var(--accent);
}

.nav-list {
  display: flex;
  align-items: center;
  gap: 28px;
}

.nav-link {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-muted);
  position: relative;
  padding: 6px 0;
}

.nav-link:hover, .nav-link.active {
  color: var(--primary);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.theme-toggle-btn {
  background: var(--bg-alt);
  border: 1px solid var(--border);
  color: var(--text-main);
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);
}

.theme-toggle-btn:hover {
  background: var(--primary-light);
  color: var(--primary);
  border-color: var(--primary);
}

.sun-icon { display: none; }
.moon-icon { display: block; }
[data-theme="dark"] .sun-icon { display: block; }
[data-theme="dark"] .moon-icon { display: none; }

.mobile-toggle-btn {
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  flex-direction: column;
  gap: 5px;
  padding: 6px;
}

.mobile-toggle-btn .bar {
  width: 22px;
  height: 2px;
  background-color: var(--text-main);
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: var(--radius-md);
  cursor: pointer;
  border: none;
  transition: var(--transition);
}

.btn-primary {
  background-color: var(--primary);
  color: #ffffff;
  box-shadow: var(--shadow-sm);
}

.btn-primary:hover {
  background-color: var(--primary-hover);
  box-shadow: var(--shadow-glow);
  transform: translateY(-1px);
}

.btn-outline {
  background-color: var(--bg-surface);
  color: var(--text-main);
  border: 1px solid var(--border);
}

.btn-outline:hover {
  border-color: var(--primary);
  color: var(--primary);
  background-color: var(--primary-light);
  transform: translateY(-1px);
}

/* Hero Section */
.hero-section {
  padding: 80px 0 60px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 48px;
  align-items: center;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  background-color: var(--primary-light);
  color: var(--primary);
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: var(--radius-full);
  margin-bottom: 20px;
}

.status-dot {
  width: 8px;
  height: 8px;
  background-color: #10b981;
  border-radius: 50%;
}

.hero-title {
  font-size: 2.85rem;
  line-height: 1.2;
  font-weight: 800;
  margin-bottom: 18px;
  letter-spacing: -0.02em;
}

.gradient-text {
  background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.125rem;
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 32px;
  max-width: 540px;
}

.hero-cta-group {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 40px;
}

.stats-row {
  display: flex;
  gap: 32px;
  padding-top: 24px;
  border-top: 1px solid var(--border);
}

.stat-num, .stat-plus {
  font-size: 2rem;
  font-weight: 800;
  color: var(--text-main);
  line-height: 1;
}

.stat-plus { color: var(--primary); }

.stat-label {
  font-size: 0.85rem;
  color: var(--text-subtle);
  margin-top: 6px;
}

/* Sections */
.section { padding: 90px 0; }
.section-header {
  text-align: center;
  max-width: 680px;
  margin: 0 auto 50px;
}

.section-subtitle {
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--primary);
  margin-bottom: 8px;
}

.section-title {
  font-size: 2.1rem;
  font-weight: 800;
  margin-bottom: 14px;
}

.section-desc {
  color: var(--text-muted);
}

.about-grid, .skills-grid, .projects-grid {
  display: grid;
  gap: 24px;
}

.about-grid, .projects-grid { grid-template-columns: repeat(3, 1fr); }
.skills-grid { grid-template-columns: repeat(2, 1fr); }

.about-card, .skill-category, .project-card, .contact-card {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 24px;
}

.project-card:hover, .about-card:hover {
  transform: translateY(-4px);
  border-color: var(--primary);
}

.contact-card {
  padding: 40px;
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 40px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-group input, .form-group textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid var(--border);
  background: var(--bg-alt);
  color: var(--text-main);
  border-radius: var(--radius-md);
}

@media (max-width: 768px) {
  .hero-grid, .about-grid, .skills-grid, .projects-grid, .contact-card {
    grid-template-columns: 1fr;
  }
  .nav-menu { display: none; }
  .mobile-toggle-btn { display: flex; }
}
`;

export const JS_CODE = `/**
 * JavaScript for Vũ Nguyễn Hà Vân Portfolio
 * 100% Vanilla JS - Không phụ thuộc thư viện ngoài - Tối ưu cho GitHub Pages
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileMenu();
  initProjectFilter();
  initStatsCounter();
  initContactForm();
});

function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (!themeToggleBtn) return;

  const savedTheme = localStorage.getItem('site-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }

  themeToggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('site-theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('site-theme', 'dark');
    }
  });
}

function initMobileMenu() {
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!mobileBtn || !navMenu) return;

  mobileBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
    });
  });
}

function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

function initStatsCounter() {
  const statNums = document.querySelectorAll('.stat-num');
  if (!statNums.length) return;

  statNums.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target') || '0', 10);
    let current = 0;
    const step = target / 40;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        counter.textContent = target;
        clearInterval(timer);
      } else {
        counter.textContent = Math.ceil(current);
      }
    }, 25);
  });
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  const submitBtn = document.getElementById('submit-btn');

  if (!form || !feedback) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitBtn.textContent = 'Đang gửi...';

    setTimeout(() => {
      submitBtn.textContent = 'Gửi tin nhắn';
      feedback.textContent = 'Cảm ơn bạn! Tin nhắn đã được gửi thành công.';
      feedback.style.display = 'block';
      feedback.style.color = '#10b981';
      form.reset();
    }, 800);
  });
}
`;

export const README_CODE = `# Bộ Mã Nguồn Website HTML, CSS, JavaScript Triển Khai GitHub Pages

Bộ mã nguồn tĩnh được tối ưu hóa 100% để triển khai (deploy) miễn phí lên **GitHub Pages** không cần cài đặt Node.js hay câu lệnh phức tạp.

## 📁 Cấu Trúc Thư Mục
\`\`\`text
├── index.html        # File HTML cấu trúc giao diện chính chuẩn SEO
├── style.css         # File CSS giao diện hiện đại, hỗ trợ Dark Mode & Responsive
├── script.js         # File JavaScript thuần (Vanilla JS) tương tác, animation
└── README.md         # Hướng dẫn chi tiết
\`\`\`

---

## 🚀 Hướng Dẫn Triển Khai Lên GitHub Pages (3 Cách Dễ Dàng)

### Cách 1: Tải trực tiếp trên giao diện web GitHub (Nhanh nhất - Không cần cài Git)
1. Truy cập [github.com](https://github.com) và bấm nút **New** (Tạo Repository mới).
2. Đặt tên Repository ví dụ \`my-portfolio\`, chọn chế độ **Public**.
3. Bấm **uploading an existing file** và kéo thả 3 file: \`index.html\`, \`style.css\`, \`script.js\` vào.
4. Bấm **Commit changes**.
5. Vào **Settings** -> chọn **Pages** ở thanh bên trái:
   - Source: Chọn **Deploy from a branch**
   - Branch: Chọn nhánh **main** và thư mục **/ (root)**.
   - Bấm **Save**.
6. Sau 1 phút, nhận link web: \`https://<ten-user>.github.io/<ten-repo>/\`!

### Cách 2: Triển khai bằng Git CLI
\`\`\`bash
git init
git add .
git commit -m "Deploy website to GitHub Pages"
git branch -M main
git remote add origin https://github.com/<ten-user>/<ten-repo>.git
git push -u origin main
\`\`\`
`;

export const WORKFLOW_CODE = `name: Deploy static content to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Pages
        uses: actions/configure-pages@v5
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
`;

export const SOURCE_FILES: SourceFile[] = [
  {
    name: 'HTML (Giao diện chính)',
    filename: 'index.html',
    language: 'html',
    description: 'Cấu trúc tài liệu HTML5 chuẩn SEO, chuẩn ngữ nghĩa (semantic), hỗ trợ responsive meta.',
    code: HTML_CODE,
    iconName: 'Code',
  },
  {
    name: 'CSS (Định kiểu & Dark Mode)',
    filename: 'style.css',
    language: 'css',
    description: 'Bộ style hiện đại sử dụng CSS Variables, Grid/Flexbox, tối ưu Dark Mode và thiết bị di động.',
    code: CSS_CODE,
    iconName: 'Palette',
  },
  {
    name: 'JavaScript (Tương tác & Logic)',
    filename: 'script.js',
    language: 'javascript',
    description: 'Vanilla JavaScript thuần không cần build, quản lý theme sáng/tối, lọc dự án, đếm số, gửi form.',
    code: JS_CODE,
    iconName: 'FileCode',
  },
  {
    name: 'README (Hướng dẫn Deploy)',
    filename: 'README.md',
    language: 'markdown',
    description: 'Tài liệu hướng dẫn 3 bước đưa website lên GitHub Pages chi tiết bằng tiếng Việt.',
    code: README_CODE,
    iconName: 'BookOpen',
  },
  {
    name: 'GitHub Action (Tự động hóa)',
    filename: '.github/workflows/deploy.yml',
    language: 'yaml',
    description: 'Tùy chọn: File workflow GitHub Actions tự động hóa xuất bản website khi push code.',
    code: WORKFLOW_CODE,
    iconName: 'Settings',
  },
];

// Helper to download single file
export function downloadSingleFile(filename: string, content: string) {
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// Helper to download complete ZIP
export async function downloadCompleteZip() {
  const zip = new JSZip();
  zip.file('index.html', HTML_CODE);
  zip.file('style.css', CSS_CODE);
  zip.file('script.js', JS_CODE);
  zip.file('README.md', README_CODE);

  const workflowFolder = zip.folder('.github')?.folder('workflows');
  if (workflowFolder) {
    workflowFolder.file('deploy.yml', WORKFLOW_CODE);
  }

  const blob = await zip.generateAsync({ type: 'blob' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'github-pages-html-css-js-bundle.zip';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
