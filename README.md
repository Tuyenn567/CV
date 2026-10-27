# Portfolio Cá Nhân - Nguyễn Vân Tuyền

## 1. Tên dự án
Portfolio cá nhân - Nguyễn Vân Tuyền

## 2. Mô tả dự án
Dự án này là một trang portfolio cá nhân được xây dựng bằng HTML5 và CSS3 để giới thiệu thông tin cá nhân, kỹ năng, dự án tiêu biểu và thông tin liên hệ. Trang web có giao diện hiện đại, dễ nhìn, phù hợp cho việc giới thiệu bản thân với nhà tuyển dụng, đối tác, khách hàng hoặc cộng đồng.

Website bao gồm các phần chính như:
- Giới thiệu bản thân
- Kỹ năng chuyên môn
- Dự án tiêu biểu
- Thông tin liên hệ
- Footer và nút quay lên đầu trang

## 3. Chức năng chính
- Hiển thị thông tin cá nhân và vai trò nghề nghiệp
- Triển khai giao diện hero section bắt mắt
- Hiển thị danh sách kỹ năng theo nhóm
- Chia sẻ các dự án tiêu biểu dưới dạng card layout
- Tạo điều hướng nội dung bằng menu cố định
- Responsive trên nhiều kích thước màn hình
- Hỗ trợ liên hệ qua email, GitHub, LinkedIn
- Dễ dàng chỉnh sửa nội dung và hình ảnh theo nhu cầu cá nhân

## 4. Công nghệ sử dụng
- HTML5
- CSS3
- Flexbox
- CSS Grid
- Responsive Design
- Git & GitHub
- Trình duyệt hiện đại: Chrome, Edge, Firefox, Safari

## 5. Yêu cầu môi trường
Đây là dự án frontend tĩnh nên không cần cài đặt môi trường phức tạp.

### Yêu cầu tối thiểu
- Hệ điều hành: Windows 10/11, macOS, Linux
- Trình duyệt: Google Chrome, Microsoft Edge, Firefox, Safari
- Công cụ hỗ trợ: VS Code (khuyên dùng) hoặc trình soạn thảo văn bản bất kỳ
- Tùy chọn: Python 3.x hoặc Node.js nếu muốn chạy máy chủ tĩnh
- Tùy chọn: Docker nếu muốn chạy trong container

## 6. Cài đặt và chạy dự án

### 6.1. Cài đặt trên Windows
1. Clone hoặc tải mã nguồn về máy:
   ```bash
   git clone <URL_REPOSITORY>
   ```
2. Vào thư mục dự án:
   ```bash
   cd KT A2.1
   ```
3. Mở file `index.html` bằng trình duyệt.
4. Nếu muốn chạy ở chế độ local server, mở PowerShell hoặc Command Prompt và thực hiện:
   ```bash
   python -m http.server 8000
   ```
5. Truy cập địa chỉ sau trong trình duyệt:
   ```text
   http://localhost:8000
   ```

### 6.2. Cài đặt trên macOS
1. Mở Terminal.
2. Clone repository:
   ```bash
   git clone <URL_REPOSITORY>
   ```
3. Di chuyển vào thư mục dự án:
   ```bash
   cd KT\ A2.1
   ```
4. Mở file `index.html` bằng trình duyệt hoặc chạy local server:
   ```bash
   python3 -m http.server 8000
   ```
5. Mở trình duyệt và truy cập:
   ```text
   http://localhost:8000
   ```

### 6.3. Cài đặt trên Linux
1. Mở Terminal.
2. Clone mã nguồn:
   ```bash
   git clone <URL_REPOSITORY>
   ```
3. Chuyển tới thư mục dự án:
   ```bash
   cd KT\ A2.1
   ```
4. Chạy máy chủ tĩnh:
   ```bash
   python3 -m http.server 8000
   ```
5. Truy cập trong trình duyệt:
   ```text
   http://localhost:8000
   ```

### 6.4. Cài đặt với Docker
Nếu bạn muốn chạy dự án trong Docker, bạn có thể dùng một image HTTP server nhẹ như `nginx` hoặc `httpd`.

#### Tạo file Dockerfile
```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### Build Docker image
```bash
docker build -t portfolio-nguyen-van-tuyen .
```

#### Chạy Docker container
```bash
docker run -d -p 8080:80 --name portfolio-app portfolio-nguyen-van-tuyen
```

#### Truy cập ứng dụng
```text
http://localhost:8080
```

## 7. Cấu hình dự án
Dự án là web tĩnh nên cấu hình rất đơn giản. Bạn có thể chỉnh sửa các phần sau:

### 7.1. Thay đổi thông tin cá nhân
Mở file `index.html` và tìm các nội dung như:
- Tên: Nguyễn Vân Tuyền
- Mô tả nghề nghiệp
- Email
- GitHub
- LinkedIn
- Các dự án tiêu biểu

### 7.2. Thay đổi giao diện
Mở file `assets/css/styles.css` để chỉnh sửa:
- màu sắc
- kích thước chữ
- khoảng cách
- bố cục
- hiệu ứng hover
- responsive layout

### 7.3. Thay đổi hình ảnh
Các hình ảnh nằm trong thư mục:
```text
assets/img/
```
Bạn có thể thay thế bằng ảnh mới tương ứng với hướng dẫn và tên file hiện tại.

## 8. Cấu trúc thư mục
```text
KT A2.1/
├── index.html
├── README.md
├── assets/
│   ├── css/
│   │   └── styles.css
│   └── img/
│       ├── anhlatop1.jpg
│       ├── anhwebdesign.jpg
│       ├── anhdichvupc.jpg
│       ├── decorphong.jpg
│       ├── anhhacker.jpg
│       └── anhtuthien.jpg
└── .gitignore
```

## 9. Chạy thử
Sau khi cài đặt xong, bạn có thể kiểm tra dự án bằng các cách sau:

### Cách 1: Mở trực tiếp
- Nhấn đúp chuột vào `index.html`
- Trang sẽ mở trong trình duyệt mặc định

### Cách 2: Sử dụng Local Server
```bash
python3 -m http.server 8000
```
Sau đó truy cập:
```text
http://localhost:8000
```

### Cách 3: Sử dụng Live Server trên VS Code
1. Mở thư mục dự án trong VS Code
2. Cài đặt extension `Live Server`
3. Click chuột phải vào `index.html`
4. Chọn `Open with Live Server`

## 10. Lưu ý khi phát triển
- Không nên sửa trực tiếp file HTML nếu chưa nắm rõ cấu trúc
- Khi thay đổi CSS nên kiểm tra responsive trên màn hình mobile và desktop
- Ưu tiên giữ nguyên cấu trúc semantic HTML để dễ đọc và SEO tốt hơn
- Nên tối ưu hình ảnh để giảm thời gian tải trang

## 11. Thông tin liên hệ
- Họ tên: Nguyễn Vân Tuyền
- Email: tuyennguyenn567@gmail.com
- GitHub: github.com/nguyenvantuyen
- LinkedIn: linkedin.com/in/nguyenvantuyen

## 12. Ghi chú
Dự án này là một bài thực hành về thiết kế web và portfolio cá nhân. Mục tiêu là xây dựng một giao diện đẹp, rõ ràng và thân thiện với người dùng, đồng thời rèn luyện kỹ năng HTML, CSS và bố cục responsive.

## 13. Kết luận
Portfolio cá nhân này phù hợp để giới thiệu bản thân, kỹ năng và dự án trên internet. Nếu cần nâng cấp, bạn có thể mở rộng thêm các phần như:
- timeline kinh nghiệm
- danh mục sản phẩm chi tiết
- form liên hệ
- hiệu ứng animation
- tích hợp backend hoặc portfolio động

---

Nếu bạn muốn, tôi có thể tiếp tục viết thêm một phiên bản README chuyên nghiệp hơn theo tiêu chuẩn GitHub, hoặc tạo luôn file `Dockerfile` và `docker-compose.yml` cho dự án này.
