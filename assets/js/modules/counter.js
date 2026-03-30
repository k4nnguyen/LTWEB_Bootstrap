export function initCounter() {
  const counterElement = document.getElementById("studentCounter");
  const reviewsSection = document.getElementById("reviews");

  if (!counterElement || !reviewsSection) return;

  const targetNumber = 5000; // Con số đích cần đạt
  const duration = 5000; // Thời gian chạy animation (5 giây)

  // Hàm thực thi việc đếm số
  const runCounter = () => {
    let startTime = null;

    const animationStep = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;

      // Tính toán số hiện tại dựa trên tiến độ thời gian
      const currentNumber = Math.min(Math.floor((progress / duration) * targetNumber), targetNumber);

      // Format số có dấu chấm (VD: 5.000)
      counterElement.textContent = currentNumber.toLocaleString("vi-VN");

      // Nếu chưa hết thời gian thì tiếp tục gọi animation
      if (progress < duration) {
        requestAnimationFrame(animationStep);
      } else {
        counterElement.textContent = targetNumber.toLocaleString("vi-VN");
      }
    };

    requestAnimationFrame(animationStep);
  };

  // Dùng Observer để kích hoạt đếm số KHI NGƯỜI DÙNG CUỘN ĐẾN NƠI
  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      if (entries[0].isIntersecting) {
        runCounter();
        observerInstance.disconnect(); // Chạy 1 lần rồi ngắt để không bị chạy lại
      }
    },
    { threshold: 0.3 },
  ); // Cuộn được 30% section thì kích hoạt

  observer.observe(reviewsSection);
}
