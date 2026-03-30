export function initNavbar() {
  const navbar = document.querySelector(".navbar-custom");

  if (!navbar) return;

  // Lắng nghe sự kiện cuộn để thay đổi style Header
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = "#000000";
      navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.3)";
    } else {
      navbar.style.backgroundColor = "rgba(0, 0, 0, 0.85)";
      navbar.style.boxShadow = "none";
    }
  });
}
