export function initChatWidget() {
  const toggleBtn = document.getElementById("chatToggleBtn");
  const chatWindow = document.getElementById("chatWindow");
  const closeChatBtn = document.getElementById("closeChatBtn");
  const widget = document.getElementById("chatWidget");
  const aboutSection = document.getElementById("about");

  // Các phần tử bên trong Box chat
  const chatBody = document.getElementById("chatBody");
  const chatInput = document.getElementById("chatInput");
  const sendChatBtn = document.getElementById("sendChatBtn");

  if (!toggleBtn || !chatWindow || !widget) return;

  // 1. Logic Đóng/Mở Box Chat
  const toggleChat = () => {
    chatWindow.classList.toggle("active");
    const icon = toggleBtn.querySelector("i");

    if (chatWindow.classList.contains("active")) {
      icon.classList.replace("bi-chat-dots-fill", "bi-x-lg");
      chatInput.focus(); // Tự động trỏ chuột vào ô nhập liệu
    } else {
      icon.classList.replace("bi-x-lg", "bi-chat-dots-fill");
    }
  };

  toggleBtn.addEventListener("click", toggleChat);
  closeChatBtn.addEventListener("click", toggleChat);

  // 2. Observer: Nhảy bong bóng khi cuộn tới phần Giới thiệu
  if (aboutSection) {
    const aboutObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            widget.classList.add("chat-pop-animation");
            observer.unobserve(aboutSection);
          }
        });
      },
      { threshold: 0.5 },
    );
    aboutObserver.observe(aboutSection);
  }

  // === LOGIC XỬ LÝ NHẮN TIN ===

  // Hàm thêm tin nhắn vào màn hình
  const appendMessage = (text, sender) => {
    const messageDiv = document.createElement("div");
    // Phân loại class dựa trên người gửi (user hay bot)
    messageDiv.className = `chat-message ${sender}-message mb-3 animate-fade-up delay-100`;

    const bgColor = sender === "user" ? "" : "bg-white text-dark";

    messageDiv.innerHTML = `
            <div class="message-bubble ${bgColor} p-2 rounded-3 shadow-sm inline-block">
                ${text}
            </div>
        `;

    chatBody.appendChild(messageDiv);

    // Tự động cuộn xuống cuối cùng khi có tin nhắn mới
    chatBody.scrollTop = chatBody.scrollHeight;
  };

  // Hàm xử lý gửi tin nhắn
  const handleSendMessage = () => {
    const text = chatInput.value.trim();
    if (text === "") return;

    // 1. Hiển thị tin nhắn của User
    appendMessage(text, "user");
    chatInput.value = ""; // Xóa input

    // 2. Giả lập Backend/Bot trả lời sau 1 giây
    setTimeout(() => {
      appendMessage("Cảm ơn bạn đã liên hệ! Hiện tại các tư vấn viên đang bận, vui lòng để lại Số điện thoại hoặc gửi email qua hotro@ankhoahoc.vn để được hỗ trợ nhanh nhất nhé.", "bot");
    }, 1000);
  };

  // Bắt sự kiện Click nút Gửi
  sendChatBtn.addEventListener("click", handleSendMessage);

  // Bắt sự kiện bấm phím Enter trong ô input
  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  });
}
