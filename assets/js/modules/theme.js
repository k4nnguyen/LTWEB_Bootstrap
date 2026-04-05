// Thực hiện đổi theme sáng / tối
export function initThemeToggle() {
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const themeIcon = document.getElementById("themeIcon");
  const htmlElement = document.documentElement; // Thẻ <html>

  if (!themeToggleBtn || !themeIcon) return;

  // 1. Kiểm tra trạng thái đã lưu, nếu không có thì mặc định là 'light'
  const savedTheme = localStorage.getItem("app-theme") || "light";
  setTheme(savedTheme);

  // 2. Lắng nghe sự kiện click
  themeToggleBtn.addEventListener("click", () => {
    const currentTheme = htmlElement.getAttribute("data-bs-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
  });

  // Hàm cập nhật Giao diện và Icon
  function setTheme(theme) {
    htmlElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("app-theme", theme);

    if (theme === "dark") {
      themeIcon.classList.replace("bi-moon-fill", "bi-sun-fill");
      themeIcon.classList.add("text-warning"); // Đổi icon mặt trời màu vàng
    } else {
      themeIcon.classList.replace("bi-sun-fill", "bi-moon-fill");
      themeIcon.classList.remove("text-warning");
    }
  }
}
