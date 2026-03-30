import { initNavbar } from "./modules/navbar.js";
import { coursesData, renderCourses, loadMoreCourses } from "./modules/courses.js";
import { initSidebar } from "./modules/sidebar.js";
import { initSearch } from "./modules/search.js";
import { initChatWidget } from "./modules/chat.js";
import { initCounter } from "./modules/counter.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("AnKhoaHoc App Ready!");

  initNavbar();
  renderCourses(coursesData, "course-list");
  initSidebar(coursesData, renderCourses);
  initSearch(coursesData, renderCourses);

  const btnLoadMore = document.getElementById("btn-load-more");
  if (btnLoadMore) {
    btnLoadMore.addEventListener("click", () => {
      loadMoreCourses("course-list");
    });
  }

  initChatWidget();

  // KÍCH HOẠT COUNTER
  initCounter();
});
