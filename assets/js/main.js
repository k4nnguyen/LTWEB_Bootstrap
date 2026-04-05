import { coursesData, renderCourses, loadMoreCourses } from "./modules/courses.js";
import { initSidebar } from "./modules/sidebar.js";
import { initSearch } from "./modules/search.js";
import { initThemeToggle } from "./modules/theme.js";
import { initCart } from "./modules/cart.js";
import { initCounter } from "./modules/counter.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("AnKhoaHoc App đã load xong!");
  renderCourses(coursesData, "course-list");
  initSidebar(coursesData, renderCourses);
  initSearch(coursesData, renderCourses);
  initThemeToggle();
  initCart();

  const btnLoadMore = document.getElementById("btn-load-more");
  if (btnLoadMore) {
    btnLoadMore.addEventListener("click", () => {
      loadMoreCourses("course-list");
    });
  }

  // KÍCH HOẠT COUNTER
  initCounter();
  initDemoForm();
});

export function initDemoForm() {
  const form = document.getElementById("demoRequestForm");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    // 1. Chặn hành vi load lại trang mặc định
    e.preventDefault();

    // 2. Lấy dữ liệu người dùng vừa nhập (Sau này dùng gửi lên Server)
    const name = document.getElementById("demoName").value;
    const phone = document.getElementById("demoPhone").value;
    const email = document.getElementById("demoEmail").value;
    const course = document.getElementById("demoCourse").value;

    console.log("Đã thu thập data:", { name, phone, email, course });

    // 3. Hiển thị thông báo thành công (Dùng hàm alert mặc định cho nhanh, hoặc có thể dùng Toast của Bootstrap)
    alert(`Cảm ơn ${name}! AnKhoaHoc đã nhận được yêu cầu. Tài liệu khóa học "${course}" sẽ được gửi đến email ${email} hoặc qua Zalo số ${phone} trong giây lát!`);

    // 4. Xóa trắng form để người khác có thể nhập
    form.reset();
  });
}
