export function initSidebar(coursesData, renderCoursesFn) {
  const sidebarItems = document.querySelectorAll("#sidebarOffcanvas .list-group-item");
  if (!sidebarItems.length) return;

  sidebarItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();

      // 1. Cập nhật UI: Xóa active ở item cũ, thêm vào item mới
      sidebarItems.forEach((el) => el.classList.remove("active"));
      e.currentTarget.classList.add("active");

      // 2. Lấy giá trị data-filter (Cần thêm thuộc tính này vào HTML)
      const filterValue = e.currentTarget.getAttribute("data-filter");

      // 3. Lọc dữ liệu
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
