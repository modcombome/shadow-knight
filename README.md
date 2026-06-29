# Shadow Knight GitHub Pages SEO

Bộ code static đã được rút gọn từ HTML WordPress gốc để dùng cho GitHub Pages.

## Cấu trúc

```text
shadow-knight-github-seo/
├── index.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── .nojekyll
├── SEO-AUDIT.md
└── assets/
    ├── css/style.css
    └── js/main.js
```

## Cách đăng lên GitHub Pages

1. Tạo repository mới trên GitHub.
2. Upload toàn bộ file trong thư mục này lên nhánh `main`.
3. Vào **Settings → Pages**.
4. Chọn **Deploy from a branch**.
5. Chọn branch `main`, folder `/root`.
6. Lưu lại và chờ GitHub build.

## Ghi chú canonical

Hiện tại canonical đang trỏ về bài gốc:

```html
<link rel="canonical" href="https://modcombo.me/shadow-knight/">
```

Nếu GitHub Pages là site chính, hãy đổi canonical thành URL GitHub Pages của bạn.
Nếu GitHub Pages chỉ dùng làm vệ tinh/mirror, giữ canonical về MODCOMBO để tránh trùng lặp nội dung.
