# Dự Án Website Vũ Nguyễn Hà Vân - Sẵn Sàng Triển Khai GitHub Pages

Dự án cung cấp bộ mã nguồn tĩnh hoàn chỉnh gồm **HTML5**, **CSS3**, và **JavaScript (Vanilla)** cùng ứng dụng web tương tác hiện đại, được tối ưu 100% để triển khai (deploy) miễn phí lên **GitHub Pages**.

---

## 📂 Các Tệp Mã Nguồn Tĩnh Dùng Để Deploy Trực Tiếp

Thư mục `/github-pages-ready/` chứa toàn bộ các file tĩnh độc lập:

1. **`github-pages-ready/index.html`**: Cấu trúc HTML5 chuẩn SEO, semantic tags, tối ưu OpenGraph và Responsive.
2. **`github-pages-ready/style.css`**: Phong cách thiết kế hiện đại, hỗ trợ Dark/Light mode bằng CSS Variables, Flexbox/Grid.
3. **`github-pages-ready/script.js`**: JavaScript thuần (Vanilla JS) xử lý theme sáng/tối, lọc danh mục dự án, đếm số và form liên hệ.
4. **`github-pages-ready/README.md`**: Hướng dẫn 3 bước đưa website lên GitHub Pages chi tiết bằng tiếng Việt.
5. **`.github/workflows/deploy.yml`**: Tệp GitHub Actions để tự động hóa quy trình deploy khi push code.

---

## 🚀 3 Bước Triển Khai Nhanh Lên GitHub Pages

### Cách 1: Kéo Thả Trực Tiếp Trên Web GitHub (Không cần cài Git)

1. Đăng nhập [GitHub](https://github.com) & bấm **New Repository** (đặt tên ví dụ `my-portfolio` hoặc `<username>.github.io`), chọn **Public**.
2. Bấm **uploading an existing file** và kéo 3 file (`index.html`, `style.css`, `script.js` từ thư mục `github-pages-ready` hoặc từ file `.zip`) vào.
3. Nhấn **Commit changes**.
4. Vào **Settings** -> mục **Pages**:
   - Chọn Source: **Deploy from a branch**
   - Branch: **main** (hoặc **master**) và thư mục **/ (root)** -> bấm **Save**.
5. Đợi 1-2 phút, trang web của bạn sẽ hoạt động tại:  
   `https://<ten-user>.github.io/<ten-repo>/`

### Cách 2: Dùng Lệnh Git Terminal

```bash
git init
git add .
git commit -m "Deploy website to GitHub Pages"
git branch -M main
git remote add origin https://github.com/<ten-user>/<ten-repo>.git
git push -u origin main
```

---

## 🛠️ Chạy Thử Dự Án Bằng Vite Trong Môi Trường Phát Triển

```bash
npm install
npm run dev
```
Trang web sẽ chạy tại `http://localhost:3000`.
Build bản tĩnh đóng gói:
```bash
npm run build
```
Thư mục `dist/` sẽ chứa các file tĩnh được build sẵn với `base: './'`.
