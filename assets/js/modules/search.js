export function initSearch(coursesData, renderCoursesFn) {
  const searchInput = document.getElementById("searchInput");

  // Nếu không tìm thấy ô input trên DOM thì dừng lại (tránh lỗi)
  if (!searchInput) return;

  // Lắng nghe sự kiện gõ phím theo thời gian thực
  searchInput.addEventListener("input", (e) => {
    // Lấy từ khóa, chuyển thành chữ thường và xóa khoảng trắng thừa ở 2 đầu
    const keyword = e.target.value.toLowerCase().trim();

    // Nếu ô tìm kiếm trống, hiển thị lại toàn bộ khóa học
    if (keyword === "") {
      renderCoursesFn(coursesData, "course-list");
      return;
    }

    // Lọc dữ liệu: Khóa học thỏa mãn nếu tiêu đề HOẶC mô tả chứa từ khóa
    const filteredCourses = coursesData.filter((course) => {
      const matchTitle = course.title.toLowerCase().includes(keyword);
      const matchDesc = course.description.toLowerCase().includes(keyword);
      return matchTitle || matchDesc;
    });

    // Gọi lại hàm render với mảng dữ liệu đã lọc
    renderCoursesFn(filteredCourses, "course-list");
  });
}
