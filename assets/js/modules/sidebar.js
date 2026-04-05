// Cập nhật khóa học theo chủ đề ở side bar
export function initSidebar(coursesData, renderCoursesFn) {
  const sidebarItems = document.querySelectorAll("#sidebarOffcanvas .list-group-item");
  if (!sidebarItems.length) return;

  sidebarItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      // Ngăn không bị scroll lên đầu trang (Do có href = #)
      e.preventDefault();

      // Cập nhật UI: Xóa active ở item cũ, thêm vào item mới
      sidebarItems.forEach((el) => el.classList.remove("active"));
      e.currentTarget.classList.add("active");

      // Lấy giá trị data-filter (Cần thêm thuộc tính này vào HTML)
      const filterValue = e.currentTarget.getAttribute("data-filter");

      // Lọc dữ liệu
      let filteredCourses = [];
      if (filterValue === "all" || !filterValue) {
        filteredCourses = coursesData;
      } else {
        filteredCourses = coursesData.filter((course) => course.categoryCode === filterValue);
      }

      // 4. Re-render giao diện
      renderCoursesFn(filteredCourses, "course-list");
    });
  });
}
