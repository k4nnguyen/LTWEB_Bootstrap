// assets/js/detail.js
import { coursesData } from "./modules/courses.js";
import { addToCart, initCart } from "./modules/cart.js";
import { initThemeToggle } from "./modules/theme.js";

document.addEventListener("DOMContentLoaded", () => {
  // Khởi tạo Theme & Cart chung cho trang detail
  initThemeToggle();
  initCart();

  // Lấy ID từ URL
  const urlParams = new URLSearchParams(window.location.search);
  const idParam = urlParams.get("id");

  // Nếu không có ID trên URL, báo lỗi hoặc điều hướng về trang chủ
  if (!idParam) {
    showError("Không tìm thấy mã khóa học hợp lệ.");
    return;
  }

  // Ép kiểu ID sang dạng số và tìm trong mảng data
  const courseId = parseInt(idParam, 10);
  const courseDetail = coursesData.find((course) => course.id === courseId);

  //  Render dữ liệu ra giao diện hoặc báo lỗi nếu không tìm thấy
  if (courseDetail) {
    // Cập nhật thẻ HTML bằng dữ liệu thật
    document.getElementById("detail-title").textContent = courseDetail.title;
    document.getElementById("detail-desc").textContent = courseDetail.description;

    const categoryBadge = document.getElementById("detail-category");
    categoryBadge.textContent = courseDetail.category;
    categoryBadge.className = `badge mb-2 ${courseDetail.badgeColor}`;

    document.getElementById("bread-category").textContent = courseDetail.category;
    document.title = `${courseDetail.title} - AnKhoaHoc`;

    // Xử lý Thời lượng
    document.getElementById("detail-duration").textContent = courseDetail.duration || "Chưa cập nhật";

    // Xử lý Giá tiền (Format VNĐ)
    const priceElement = document.getElementById("detail-price");
    if (courseDetail.price === 0) {
      priceElement.textContent = "Miễn phí";
      priceElement.classList.replace("text-danger", "text-success");
    } else if (courseDetail.price > 0) {
      const formattedPrice = new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(courseDetail.price);
      priceElement.textContent = formattedPrice;
      priceElement.classList.replace("text-success", "text-danger");
    } else {
      priceElement.textContent = "Liên hệ";
    }

    // Xử lý Tổng quan chi tiết
    const fullDescElement = document.getElementById("detail-full-desc");
    if (fullDescElement) {
      // Dùng innerHTML vì dữ liệu fullDesc chứa các thẻ HTML (<p>, <b>...)
      fullDescElement.innerHTML = courseDetail.fullDesc || "Chưa có thông tin chi tiết cho khóa học này.";
    }

    // Xử lý Render Slider Ảnh (Carousel)
    const carouselContainer = document.getElementById("courseCarousel");
    const carouselInner = document.getElementById("carousel-inner");
    const carouselIndicators = document.getElementById("carousel-indicators");

    if (carouselContainer && carouselInner && carouselIndicators) {
      // Kiểm tra nếu mảng images tồn tại và có ảnh
      if (courseDetail.images && courseDetail.images.length > 0) {
        let innerHTML = "";
        let indicatorsHTML = "";

        courseDetail.images.forEach((imgSrc, index) => {
          const activeClass = index === 0 ? "active" : "";

          // Render Nút gạch ngang bên dưới ảnh
          indicatorsHTML += `<button type="button" data-bs-target="#courseCarousel" data-bs-slide-to="${index}" class="${activeClass}" aria-current="${index === 0 ? "true" : "false"}" aria-label="Slide ${index + 1}"></button>`;

          // Render Ảnh
          innerHTML += `
                    <div class="carousel-item ${activeClass}">
                        <img src="${imgSrc}" class="d-block w-100" style="object-fit: cover; height: 450px;" alt="Hình ảnh khóa học ${index + 1}">
                    </div>`;
        });

        carouselIndicators.innerHTML = indicatorsHTML;
        carouselInner.innerHTML = innerHTML;
        carouselContainer.style.display = "block"; // Hiện Carousel
      } else {
        carouselContainer.style.display = "none"; // Ẩn Carousel nếu khóa học không có ảnh
      }
    }
    // 3. Xử lý Render Syllabus (Danh sách nội dung học)
    const syllabusContainer = document.getElementById("detail-syllabus");
    if (courseDetail.syllabus && courseDetail.syllabus.length > 0) {
      const syllabusHTML = courseDetail.syllabus
        .map(
          (item) => `
                <li class="list-group-item py-3">
                    <i class="bi bi-check-circle-fill text-success me-3"></i> 
                    ${item}
                </li>
            `,
        )
        .join("");
      syllabusContainer.innerHTML = syllabusHTML;
    } else {
      syllabusContainer.innerHTML = `<li class="list-group-item text-muted">Nội dung đang được cập nhật.</li>`;
    }

    // LOGIC XỬ LÝ NÚT THÊM VÀO GIỎ HÀNG
    const addToCartBtn = document.getElementById("addToCartBtn");
    if (addToCartBtn) {
      addToCartBtn.addEventListener("click", () => {
        addToCart(courseDetail.id); // Gọi hàm từ cart.js
      });
    }
  } else {
    showError("Khóa học không tồn tại hoặc đã bị xóa.");
  }
});

/**
 * Hàm phụ: Hiển thị lỗi khi ID sai hoặc không có ID
 */
function showError(message) {
  const wrapper = document.getElementById("course-content-wrapper");
  if (wrapper) {
    wrapper.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="bi bi-exclamation-triangle-fill text-warning" style="font-size: 4rem;"></i>
                <h2 class="fw-bold mt-3">Lỗi 404</h2>
                <p class="text-muted">${message}</p>
                <a href="index.html" class="btn btn-outline-primary rounded-pill mt-3">Quay lại danh sách</a>
            </div>
        `;
  }
}
