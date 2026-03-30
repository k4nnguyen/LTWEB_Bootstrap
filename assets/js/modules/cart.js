import { coursesData } from "./courses.js";

let cart = JSON.parse(localStorage.getItem("app-cart")) || [];

// Hàm Format Tiền
const formatCurrency = (amount) => {
  if (amount === 0) return "Miễn phí";
  return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(amount);
};

// Khởi tạo và render giỏ hàng ngay khi tải trang
export function initCart() {
  renderCart();
}

// Hàm render danh sách khóa học trong Offcanvas
export function renderCart() {
  const cartBody = document.getElementById("cartBody");
  const cartBadge = document.getElementById("cartBadge");
  const cartTotal = document.getElementById("cartTotal");
  const emptyMsg = document.getElementById("emptyCartMsg");

  if (!cartBody || !cartBadge) return;

  // Cập nhật số lượng trên Navbar
  cartBadge.textContent = cart.length;

  if (cart.length === 0) {
    cartBody.innerHTML = "";
    if (emptyMsg) cartBody.appendChild(emptyMsg);
    emptyMsg.classList.remove("d-none");
    if (cartTotal) cartTotal.textContent = "0 ₫";
    return;
  }

  if (emptyMsg) emptyMsg.classList.add("d-none");

  let totalAmount = 0;
  let htmlString = "";

  cart.forEach((courseId, index) => {
    // Tìm thông tin khóa học từ Data gốc
    const course = coursesData.find((c) => c.id === courseId);
    if (course) {
      totalAmount += course.price;
      htmlString += `
                <div class="card mb-3 border-0 shadow-sm">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <h6 class="fw-bold mb-1">${course.title}</h6>
                            <button class="btn btn-sm text-danger p-0" onclick="window.removeFromCart(${courseId})" title="Xóa khỏi giỏ"><i class="bi bi-trash"></i></button>
                        </div>
                        <span class="badge ${course.badgeColor} mb-2">${course.category}</span>
                        <div class="text-danger fw-bold small">${formatCurrency(course.price)}</div>
                    </div>
                </div>
            `;
    }
  });

  cartBody.innerHTML = htmlString;
  if (cartTotal) cartTotal.textContent = formatCurrency(totalAmount);
}

// Gắn hàm Xóa vào window để có thể gọi từ file HTML (onclick)
window.removeFromCart = (courseId) => {
  cart = cart.filter((id) => id !== courseId);
  localStorage.setItem("app-cart", JSON.stringify(cart));
  renderCart();
};

// Hàm Thêm vào giỏ hàng (Được gọi bên detail.js)
export function addToCart(courseId) {
  const successToast = new bootstrap.Toast(document.getElementById("cartToast"));
  const warningToast = new bootstrap.Toast(document.getElementById("cartWarningToast"));

  // Kiểm tra trùng lặp
  if (cart.includes(courseId)) {
    warningToast.show(); // Báo Vàng
  } else {
    cart.push(courseId);
    localStorage.setItem("app-cart", JSON.stringify(cart));
    renderCart(); // Cập nhật lại UI giỏ hàng
    successToast.show(); // Báo Xanh
  }
}
