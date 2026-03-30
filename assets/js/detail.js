// assets/js/detail.js
import { coursesData } from "./modules/courses.js";
import { addToCart, initCart } from "./modules/cart.js";
import { initThemeToggle } from "./modules/theme.js";

document.addEventListener("DOMContentLoaded", () => {
  // Khởi tạo Theme & Cart chung cho trang detail
  initThemeToggle();
  initCart();

  // 1. Lấy ID từ URL
  const urlParams = new URLSearchParams(window.location.search);
  const idParam = urlParams.get("id");

  // Nếu không có ID trên URL, báo lỗi hoặc điều hướng về trang chủ
  if (!idParam) {
    showError("Không tìm thấy mã khóa học hợp lệ.");
    return;
  }

  // 2. Ép kiểu ID sang dạng số và tìm trong mảng data
  const courseId = parseInt(idParam, 10);
  const courseDetail = coursesData.find((course) => course.id === courseId);

  // 3. Render dữ liệu ra giao diện hoặc báo lỗi nếu không tìm thấy
  if (courseDetail) {
    // Cập nhật thẻ HTML bằng dữ liệu thật
    document.getElementById("detail-title").textContent = courseDetail.title;
    document.getElementById("detail-desc").textContent = courseDetail.description;

    const categoryBadge = document.getElementById("detail-category");
    categoryBadge.textContent = courseDetail.category;
    categoryBadge.className = `badge mb-2 ${courseDetail.badgeColor}`;

    document.getElementById("bread-category").textContent = courseDetail.category;
    document.title = `${courseDetail.title} - AnKhoaHoc`;

    // 1. Xử lý Thời lượng
    document.getElementById("detail-duration").textContent = courseDetail.duration || "Chưa cập nhật";

    // 2. Xử lý Giá tiền (Format VNĐ)
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

    // === LOGIC XỬ LÝ NÚT THÊM VÀO GIỎ HÀNG ===
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
