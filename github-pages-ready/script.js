/**
 * JavaScript for Vũ Nguyễn Hà Vân Portfolio
 * 100% Vanilla JS - Không phụ thuộc thư viện ngoài - Tối ưu cho GitHub Pages
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileMenu();
  initProjectFilter();
  initStatsCounter();
  initContactForm();
  initScrollSpy();
});

/* ==========================================================================
   1. Theme Toggle (Light / Dark Mode)
   ========================================================================== */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (!themeToggleBtn) return;

  // Kiểm tra theme đã lưu trong localStorage hoặc theo cài đặt hệ thống
  const savedTheme = localStorage.getItem('site-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }

  // Lắng nghe sự kiện click đổi theme
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

/* ==========================================================================
   2. Mobile Menu Navigation
   ========================================================================== */
function initMobileMenu() {
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!mobileBtn || !navMenu) return;

  mobileBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    const isOpen = navMenu.classList.contains('open');
    mobileBtn.setAttribute('aria-expanded', isOpen);
  });

  // Tự động đóng menu khi click vào link trên di động
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        mobileBtn.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

/* ==========================================================================
   3. Filter Projects by Category
   ========================================================================== */
function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Cập nhật trạng thái active của button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* ==========================================================================
   4. Stats Counter Animation
   ========================================================================== */
function initStatsCounter() {
  const statNums = document.querySelectorAll('.stat-num');
  if (!statNums.length) return;

  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        statNums.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target') || '0', 10);
          const duration = 1200; // milliseconds
          const stepTime = 20;
          const totalSteps = duration / stepTime;
          const increment = target / totalSteps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              counter.textContent = target;
              clearInterval(timer);
            } else {
              counter.textContent = Math.ceil(current);
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsContainer = document.querySelector('.stats-row');
  if (statsContainer) {
    observer.observe(statsContainer);
  }
}

/* ==========================================================================
   5. Interactive Contact Form
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  const submitBtn = document.getElementById('submit-btn');

  if (!form || !feedback) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
      feedback.textContent = 'Vui lòng điền đầy đủ các thông tin bắt buộc.';
      feedback.className = 'form-feedback error';
      return;
    }

    // Giả lập trạng thái gửi tin nhắn
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>Đang gửi...</span>';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;

      feedback.textContent = `Cảm ơn bạn ${nameInput.value}! Tin nhắn đã được gửi thành công. Tôi sẽ phản hồi sớm nhất qua email ${emailInput.value}.`;
      feedback.className = 'form-feedback success';

      form.reset();

      // Ẩn thông báo sau 6 giây
      setTimeout(() => {
        feedback.style.display = 'none';
        feedback.className = 'form-feedback';
      }, 6000);
    }, 900);
  });
}

/* ==========================================================================
   6. Scroll Spy for Active Navigation Link
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}
