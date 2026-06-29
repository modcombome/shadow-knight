# SEO Audit — Shadow Knight

Nguồn audit: HTML WordPress/RankMath gốc từ file người dùng gửi.

## 1. Tóm tắt nhanh

| Hạng mục | Trạng thái | Ghi chú |
|---|---:|---|
| Code GitHub Pages | Đã tối ưu | Đã bỏ CSS/JS/plugin WordPress dư thừa |
| Title | Cần tối ưu | Title gốc dài 67 ký tự |
| Meta description | Cần mở rộng | Meta gốc 131 ký tự, hơi ngắn |
| Canonical | Tốt | Đang trỏ về `https://modcombo.me/shadow-knight/` |
| Schema | Cần làm sạch | RankMath gộp `Organization` với `Person`, logo còn dùng `http` |
| Heading | Cần giảm lặp | Nhiều heading lặp cụm “Hack Shadow Knight” |
| Nội dung | Khá ổn | Nên bổ sung cảnh báo rủi ro MOD/PvP rõ hơn |
| Hình ảnh | Cần bổ sung | OG image 512x512 chưa lý tưởng cho social share |

## 2. Title SEO

### Title gốc

```text
Tải Hack Shadow Knight (Full Tiền, Full Nhân Vật, Bất Tử) V3.24.410
```

Độ dài: 67 ký tự.

### Vấn đề

- Hơi dài.
- Dễ bị cắt trên Google.
- Keyword chính có nhưng chưa gọn.
- Từ “Full” lặp nhiều trong title.

### Title đề xuất

```text
Tải Hack Shadow Knight APK v3.24.410 – Full Tiền
```

Độ dài: 48 ký tự.

## 3. Meta description

### Meta gốc

```text
Tải Hack Shadow Knight nhận Full Tiền, Full Nhân Vật và Bất Tử, cho phép người chơi tối ưu hóa trải nghiệm ARPG chặt chém đỉnh cao.
```

Độ dài: 131 ký tự.

### Meta đề xuất

```text
Tải Hack Shadow Knight APK v3.24.410, nhận full tiền, mở khóa nhân vật và chế độ bất tử để trải nghiệm ARPG chặt chém mượt hơn trên Android cùng MODCOMBO.
```

Độ dài: 154 ký tự.

## 4. Heading audit

### Heading gốc nên giữ

- H1: Tải Hack Shadow Knight...
- H2: Giới Thiệu Về Game Hack Shadow Knight
- H2: Những Điểm Hấp Dẫn...
- H2: Các Tính Năng Nổi Bật...
- H2: Tải Hack Shadow Knight Tại Đây

### Nên chỉnh

- Không cần lặp “Hack Shadow Knight” ở mọi H2.
- H3 nên tự nhiên hơn, ưu tiên mô tả gameplay.
- FAQ nên dùng câu hỏi rõ ràng, đúng ý định tìm kiếm.

### Heading đã tối ưu trong bản GitHub

- H1 có keyword chính.
- H2/H3 chia theo intent: giới thiệu, gameplay, tính năng MOD, lý do tải, FAQ.
- FAQ được đồng bộ với schema `FAQPage`.

## 5. Schema audit

### Lỗi/điểm chưa tốt trong schema gốc

- `Organization` bị gộp với `Person`.
- Logo trong schema dùng `http://` thay vì `https://`.
- `FAQPage` đang nằm trong `subjectOf` của `Article`, vẫn hợp lệ nhưng khó đọc và khó bảo trì.
- Thiếu `SoftwareApplication` rõ ràng cho APK/game.
- Chưa có `BreadcrumbList`.

### Schema đã làm lại

Bản GitHub đã có:

- `Organization`
- `WebSite`
- `WebPage`
- `BreadcrumbList`
- `SoftwareApplication`
- `Article`
- `FAQPage`

## 6. Content audit

### Điểm tốt

- Nội dung có đủ phần giới thiệu, gameplay, tính năng MOD, FAQ.
- Có thông tin APK rõ: dung lượng, phiên bản, Android, nhà phát hành, tên gói.
- Có internal link về MODCOMBO và danh mục hành động.

### Điểm nên sửa

- Câu “MOD được xây dựng với tiêu chí an toàn” nên viết thận trọng hơn.
- Nên tránh khẳng định “an toàn tuyệt đối”.
- Nên format lượt tải thành `10.000.000+` thay vì `10000000`.
- Cần thêm cảnh báo rủi ro khi dùng MOD APK với tài khoản chính hoặc PvP.
- Đoạn CTA gốc có lỗi dính chữ: `phiên bảnHack Shadow Knight`.

## 7. Checklist kỹ thuật GitHub Pages

- [x] HTML semantic: `header`, `main`, `article`, `section`, `aside`, `footer`
- [x] CSS tách riêng
- [x] JS tách riêng và dùng `defer`
- [x] Không phụ thuộc jQuery
- [x] Không còn admin-bar WordPress
- [x] Không còn CSS wpDiscuz/Flatsome nặng
- [x] Có `.nojekyll`
- [x] Có `404.html`
- [x] Có `robots.txt`
- [x] Có `sitemap.xml`
- [x] Có schema JSON-LD sạch

## 8. Việc nên làm thêm nếu public thật

1. Tạo ảnh OG 1200x630 riêng cho bài.
2. Nén ảnh sang WebP nếu có quyền tải ảnh về hosting riêng.
3. Cập nhật canonical sang GitHub Pages nếu đây là site chính.
4. Nếu chỉ dùng làm vệ tinh, giữ canonical về bài gốc.
5. Kiểm tra lại tính hợp lệ schema bằng Rich Results Test.
