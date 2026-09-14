# Bộ Mã Nguồn Website HTML, CSS, JavaScript Triển Khai GitHub Pages

Bộ mã nguồn tĩnh được tối ưu hóa 100% để triển khai (deploy) miễn phí lên **GitHub Pages** không cần cài đặt Node.js hay câu lệnh phức tạp.

## 📁 Cấu Trúc Thư Mục

```text
├── index.html        # File HTML cấu trúc giao diện chính chuẩn SEO
├── style.css         # File CSS giao diện hiện đại, hỗ trợ Dark Mode & Responsive
├── script.js         # File JavaScript thuần (Vanilla JS) tương tác, animation
└── README.md         # Hướng dẫn chi tiết
```

---

## 🚀 Hướng Dẫn Triển Khai Lên GitHub Pages (3 Cách Dễ Dàng)

### Cách 1: Tải trực tiếp trên giao diện web GitHub (Nhanh nhất - Không cần cài Git)

1. **Đăng nhập vào GitHub**: Truy cập [github.com](https://github.com) và bấm nút **New** (Tạo Repository mới).
2. **Đặt tên Repository**:
   - Ví dụ: `my-portfolio` (kết quả web sẽ là `https://<ten-user>.github.io/my-portfolio/`)
   - Hoặc đặt tên theo định dạng: `<ten-user>.github.io` (kết quả web sẽ là trang chủ `https://<ten-user>.github.io`)
   - Chọn chế độ **Public**.
3. **Tải các file lên**:
   - Bấm **uploading an existing file**
   - Kéo thả 3 file: `index.html`, `style.css`, `script.js` vào trình duyệt.
   - Bấm **Commit changes**.
4. **Bật GitHub Pages**:
   - Vào mục **Settings** của Repository -> chọn thẻ **Pages** ở thanh menu bên trái.
   - Tại mục **Build and deployment**:
     - Source: Chọn **Deploy from a branch**
     - Branch: Chọn nhánh **main** (hoặc **master**) và thư mục **/ (root)**.
     - Bấm **Save**.
5. **Xem trang web của bạn**:
   - Sau khoảng 1-2 phút, GitHub sẽ hiển thị đường link trang web màu xanh:
   - `Your site is live at https://<ten-user>.github.io/<ten-repo>/`

---

### Cách 2: Triển khai bằng câu lệnh Git trên máy tính

Nếu bạn đã cài đặt Git trên máy tính:

```bash
# 1. Khởi tạo kho lưu trữ git trong thư mục chứa file
git init

# 2. Thêm tất cả các file vào git
git add .

# 3. Tạo commit đầu tiên
git commit -m "Deploy website to GitHub Pages"

# 4. Đổi tên nhánh sang main
git branch -M main

# 5. Liên kết với Repository trên GitHub của bạn
git remote add origin https://github.com/<ten-user>/<ten-repo>.git

# 6. Đẩy mã nguồn lên GitHub
git push -u origin main
```

Sau đó vào **Settings -> Pages** trên GitHub để bật GitHub Pages như Bước 4 ở Cách 1.

---

## ✨ Tính Năng Đã Tích Hợp Sẵn

- **Chuẩn Responsive**: Tương thích hoàn hảo trên iPhone, Android, iPad, Laptop và Desktop.
- **Chế Độ Sáng / Tối (Light & Dark Mode)**: Tự động ghi nhớ lựa chọn của người dùng qua `localStorage`.
- **Hiệu Ứng Mượt Mà**: Đếm số tự động (Counter stats), lọc dự án theo danh mục (Filter tabs).
- **Form Liên Hệ Tương Tác**: Bắt lỗi và thông báo trạng thái gửi tin nhắn trực tiếp.
- **Tối Ưu SEO**: Thẻ meta OpenGraph, tiêu đề và mô tả đầy đủ.
- **Không Cần Thư Viện Nặng**: Tải trang cực nhanh (< 1 giây) đạt điểm tối đa trên Google Lighthouse.
