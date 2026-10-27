# Báo cáo kiểm thử dự án Portfolio cá nhân

## 1. Thông tin tổng quan
- Tên dự án: Portfolio cá nhân - Nguyễn Vân Tuyền
- Loại dự án: Website tĩnh portfolio cá nhân
- Công nghệ: HTML5, CSS3, Responsive Design
- Mục tiêu: Giới thiệu bản thân, kỹ năng, dự án tiêu biểu và thông tin liên hệ
- Ngày kiểm thử: 2026-10-27

## 2. Mục tiêu kiểm thử
Báo cáo này đánh giá dự án theo 6 tiêu chí chính:
1. Tính đúng đắn
2. UI/UX
3. Khả năng vận hành - xử lý lỗi
4. Bảo mật
5. Chất lượng mã nguồn
6. Khả năng triển khai

## 3. Dữ liệu minh chứng hình ảnh
Hình ảnh minh chứng được chụp trực tiếp từ trình duyệt khi mở trang portfolio trên môi trường chạy thực tế.

### Hình ảnh minh chứng thực tế
- [docs/screenshots/homepage_real.png](screenshots/homepage_real.png)
- [docs/screenshots/projects_real.png](screenshots/projects_real.png)
- [docs/screenshots/mobile_real.png](screenshots/mobile_real.png)

> Lưu ý: các hình ảnh trên là ảnh chụp thực tế từ trang web đang chạy, thay vì hình ảnh mẫu hoặc mock-up.

## 4. Đánh giá theo 6 tiêu chí

### 4.1. Tính đúng đắn
Kết luận: Đạt

- Nội dung trên trang tương ứng với mục tiêu của portfolio cá nhân: giới thiệu, kỹ năng, dự án và liên hệ.
- Cấu trúc HTML có rõ các section chính: header, main, hero, skills, projects, contact, footer.
- Các liên kết điều hướng `#about`, `#skills`, `#projects`, `#contact` được định nghĩa rõ ràng.
- Hình ảnh và văn bản được đặt đúng vị trí logic theo từng phần.

Minh chứng:
- Trang homepage thể hiện đúng thông tin giới thiệu và mục tiêu cá nhân.
- Phần dự án hiển thị các thẻ riêng biệt rõ ràng.

### 4.2. UI/UX
Kết luận: Đạt

- Giao diện có màu sắc đẹp, dễ nhìn và tương đồng với phong cách portfolio cá nhân.
- Sử dụng layout rõ ràng, thân thiện với người dùng.
- Cấu trúc màu sắc và spacing hợp lý, giúp người đọc tập trung vào nội dung chính.
- Navbar và các nút CTA dễ nhìn, dễ bấm.
- Responsive layout cho phép trang hiển thị ổn định trên màn hình vừa và nhỏ.

Minh chứng:
- [docs/screenshots/homepage_real.png](screenshots/homepage_real.png) cho thấy giao diện chính đã được chụp trực tiếp từ trình duyệt, với bố cục rõ ràng, chuyên nghiệp và dễ đọc.
- [docs/screenshots/mobile_real.png](screenshots/mobile_real.png) cho thấy chế độ responsive ở kích thước màn hình nhỏ vẫn giữ được khả năng đọc tốt và sắp xếp hợp lý.

### 4.3. Khả năng vận hành - xử lý lỗi
Kết luận: Đạt mức cơ bản

- Website là trang tĩnh nên ít nguy cơ lỗi logic nghiêm trọng.
- Không phát sinh lỗi render lớn trong quá trình xem xét cấu trúc HTML/CSS cơ bản.
- Nếu thiếu hình ảnh hoặc file CSS, giao diện có thể bị ảnh hưởng nhưng không làm hỏng toàn bộ trang.
- Dự án hiện chưa có hệ thống backend hoặc xử lý dữ liệu phức tạp nên khả năng xảy ra lỗi nghiệp vụ ở mức tối thiểu.

Nhận xét:
- Cần bổ sung các kiểm tra lỗi khi triển khai thực tế như kiểm tra hình ảnh mất, file CSS thiếu, hoặc liên kết nội bộ không hoạt động.

### 4.4. Bảo mật
Kết luận: Đạt mức cơ bản

- Đây là dự án frontend tĩnh, không chứa logic xử lý dữ liệu nhạy cảm hoặc kết nối cơ sở dữ liệu.
- Không có form nhập dữ liệu trực tiếp cho người dùng nên nguy cơ lộ thông tin lớn.
- Tuy nhiên, nếu triển khai lên môi trường web thực, cần kiểm tra kỹ các liên kết và tính an toàn của hình ảnh/URL bên ngoài.

Nhận xét:
- Bảo mật ở mức cơ bản chấp nhận được cho trang portfolio tĩnh.

### 4.5. Chất lượng mã nguồn
Kết luận: Đạt

- Mã nguồn HTML có cấu trúc phân đoạn rõ ràng.
- CSS được tách riêng ở `assets/css/styles.css`, giúp quản lý và sửa đổi dễ hơn.
- Sử dụng các thẻ sematic như `header`, `main`, `section`, `footer`, `nav`.
- Dễ đọc, dễ mở rộng và phù hợp cho mục đích học tập.

Hạn chế:
- Chưa có tối ưu hóa mạnh về component hóa hoặc tổ chức mã theo mô-đun.
- Chưa có kiểm thử tự động.

### 4.6. Khả năng triển khai
Kết luận: Đạt

- Dự án là web tĩnh nên dễ triển khai lên GitHub Pages, Netlify, Vercel hoặc máy chủ tĩnh.
- Có thể mở trực tiếp bằng trình duyệt hoặc chạy trên local server.
- Dễ tùy chỉnh nội dung cho các bài kiểm tra hoặc dự án thực tế.

Khả năng triển khai thực tế:
- Triển khai lên GitHub Pages là phù hợp nhất.
- Có thể chạy bằng HTTP server đơn giản hoặc container Docker nếu cần mở rộng.

## 5. Kết luận tổng thể
Dự án đạt yêu cầu cơ bản của một trang portfolio cá nhân. Giao diện rõ ràng, dễ xem, có tính thẩm mỹ và phù hợp với yêu cầu học tập. Độ hoàn thiện hiện tại phù hợp với mục tiêu demo web tĩnh, tuy nhiên vẫn còn một số điểm cần cải thiện như:
- thêm form liên hệ thực tế
- tối ưu thông tin và hình ảnh
- nâng cấp tương tác UI
- bổ sung kiểm thử tự động và triển khai thực tế

## 6. Đề xuất cải tiến
- Thêm form liên hệ với xử lý backend hoặc email forwarding
- Chuyển dữ liệu thành file JSON hoặc dynamic data
- Bổ sung animation nhẹ để tăng trải nghiệm người dùng
- Cải thiện đa nền tảng trên mobile và tablet
- Đưa thêm section kinh nghiệm, chứng chỉ, testimonial

## 7. Phần xác nhận
- Người kiểm thử: [Tên người kiểm thử]
- Vai trò: Kiểm thử chức năng và đánh giá UX
- Kết luận: Dự án đạt yêu cầu cơ bản với 6 tiêu chí đã đánh giá.
