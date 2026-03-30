// Mock Data: Danh sách khóa học
export const coursesData = [
  // --- DANH MỤC: AI, ML & DL (data-filter="ai") ---
  {
    id: 1,
    title: "Data Science với Python",
    category: "AI & Data",
    categoryCode: "ai",
    description: "Tiền xử lý và trực quan hóa dữ liệu quy mô lớn sử dụng thư viện Pandas, NumPy và Matplotlib.",
    badgeColor: "bg-danger",
    price: 899000,
    duration: "45 giờ",
    syllabus: [
      "Cài đặt môi trường Jupyter Notebook và Anaconda.",
      "Cấu trúc dữ liệu Series và DataFrame trong Pandas.",
      "Làm sạch dữ liệu (Data Cleaning) và xử lý Missing Values.",
      "Trực quan hóa dữ liệu biểu đồ với Matplotlib & Seaborn.",
      "Dự án cuối khóa: Phân tích tập dữ liệu thực tế.",
    ],
  },
  {
    id: 2,
    title: "Machine Learning Thực Chiến",
    category: "AI & Data",
    categoryCode: "ai",
    description: "Xây dựng các mô hình dự đoán, hệ thống phân tích cảm xúc (Sentiment Analysis) chuyên sâu với scikit-learn.",
    badgeColor: "bg-danger",
    price: 1250000,
    duration: "60 giờ",
    syllabus: [
      "Ôn tập Đại số tuyến tính và Xác suất thống kê cơ bản.",
      "Hồi quy tuyến tính và Logistic Regression.",
      "Thuật toán K-Nearest Neighbors và Support Vector Machine (SVM).",
      "Đánh giá mô hình: Confusion Matrix, F1-Score, ROC/AUC.",
      "Dự án: Xây dựng hệ thống phân tích cảm xúc (Sentiment Analysis).",
    ],
  },
  {
    id: 3,
    title: "Deep Learning & Computer Vision",
    category: "AI & Data",
    categoryCode: "ai",
    description: "Thiết kế mạng nơ-ron nhân tạo, ứng dụng mô hình YOLOv8 trong các bài toán nhận diện và phát hiện đối tượng thực tế.",
    badgeColor: "bg-danger",
    price: 1500000,
    duration: "75 giờ",
    syllabus: [
      "Kiến trúc mạng nơ-ron nhân tạo (ANN) và Convolutional Neural Networks (CNN).",
      "Framework PyTorch/TensorFlow căn bản.",
      "Cấu trúc mô hình YOLOv8 và các thế hệ YOLO.",
      "Kỹ thuật gán nhãn dữ liệu (Data Labeling) và Augmentation.",
      "Dự án thực tế: Huấn luyện mô hình phát hiện phân loại rác thải bằng YOLOv8.",
    ],
  },
  {
    id: 4,
    title: "NLP & Hệ thống RAG Hiện Đại",
    category: "AI & Data",
    categoryCode: "ai",
    description: "Xử lý ngôn ngữ tự nhiên với kiến trúc Transformers, BERT và xây dựng hệ thống gợi ý với RAG, ChromaDB.",
    badgeColor: "bg-danger",
    price: 1800000,
    duration: "80 giờ",
    syllabus: [
      "Xử lý văn bản cơ bản: Tokenization, Stemming, Lemmatization.",
      "Word Embeddings và kiến trúc Attention, Transformers, BERT.",
      "Cơ sở dữ liệu vector (Vector Database) với ChromaDB.",
      "Kiến trúc Retrieval-Augmented Generation (RAG).",
      "Dự án: Xây dựng hệ thống Agent hỏi đáp thông minh kết hợp RAG và ChromaDB.",
    ],
  },
  {
    id: 5,
    title: "Hệ thống Gợi ý (Recommendation System)",
    category: "AI & Data",
    categoryCode: "ai",
    description: "Nắm vững thuật toán lọc cộng tác, xây dựng hệ thống đề xuất phim/sản phẩm cá nhân hóa.",
    badgeColor: "bg-danger",
    price: 950000,
    duration: "50 giờ",
    syllabus: [
      "Tổng quan về Recommendation System và các phương pháp đánh giá.",
      "Lọc dựa trên nội dung (Content-Based Filtering).",
      "Lọc cộng tác (Collaborative Filtering): User-based và Item-based.",
      "Ma trận phân tích (Matrix Factorization) và SVD.",
      "Dự án: Xây dựng hệ thống gợi ý phim chuyên nghiệp.",
    ],
  },

  // --- DANH MỤC: CODE C++ & PYTHON CƠ BẢN (data-filter="coding") ---
  {
    id: 6,
    title: "Lập trình C++ Nền Tảng",
    category: "Code & Core",
    categoryCode: "coding",
    description: "Làm chủ tư duy logic, cấu trúc dữ liệu và giải thuật cơ bản với ngôn ngữ C++.",
    badgeColor: "bg-primary",
    price: 0,
    duration: "40 giờ",
    syllabus: [
      "Cú pháp cơ bản, biến, kiểu dữ liệu và toán tử trong C++.",
      "Cấu trúc điều khiển (if-else, switch-case) và vòng lặp (for, while).",
      "Hàm (Functions) và mảng (Arrays).",
      "Con trỏ (Pointers) và tham chiếu (References).",
      "Lập trình hướng đối tượng (OOP) căn bản trong C++.",
    ],
  },
  {
    id: 7,
    title: "Lập trình C Cơ Bản",
    category: "Code & Core",
    categoryCode: "coding",
    description: "Học lập trình C từ con số 0, nắm vững con trỏ, cấp phát bộ nhớ để hiểu sâu về hệ thống.",
    badgeColor: "bg-primary",
    price: 0,
    duration: "35 giờ",
    syllabus: [
      "Nhập môn C và môi trường lập trình.",
      "Kiểu dữ liệu, biến, hằng và các toán tử.",
      "Cấu trúc điều kiện và cấu trúc lặp.",
      "Mảng 1 chiều, 2 chiều và chuỗi ký tự.",
      "Quản lý bộ nhớ động (malloc, calloc, free) và con trỏ cấp cao.",
    ],
  },
  {
    id: 8,
    title: "Quản lý mã nguồn với Git/GitHub",
    category: "Code & Core",
    categoryCode: "coding",
    description: "Quy trình làm việc nhóm chuẩn doanh nghiệp, xử lý conflict và quản lý phiên bản hiệu quả.",
    badgeColor: "bg-secondary",
    price: 250000,
    duration: "15 giờ",
    syllabus: [
      "Các khái niệm cơ bản về Version Control System (VCS).",
      "Các lệnh Git cơ bản: add, commit, status, log.",
      "Làm việc với Branch: tạo, chuyển nhánh, và merge.",
      "Kết nối và đẩy code lên Remote Repository (GitHub).",
      "Xử lý xung đột (Merge Conflict) và quy trình Pull Request.",
    ],
  },
  {
    id: 9,
    title: "Mạng Máy Tính Toàn Diện",
    category: "Code & Core",
    categoryCode: "coding",
    description: "Kiến trúc mạng, mô hình OSI, chia IP/Subnetting và các giao thức bảo mật cốt lõi.",
    badgeColor: "bg-dark",
    price: 450000,
    duration: "30 giờ",
    syllabus: [
      "Tổng quan về kiến trúc và cấu trúc liên kết mạng.",
      "Tìm hiểu sâu 7 tầng của mô hình OSI và mô hình TCP/IP.",
      "Đại chỉ IP (IPv4, IPv6) và kỹ thuật chia Subnetting.",
      "Các giao thức định tuyến và dịch vụ mạng (DNS, DHCP).",
      "Bảo mật mạng máy tính cơ bản và thực hành phân tích gói tin.",
    ],
  },

  // --- DANH MỤC: WEB DEV & DATABASE (data-filter="web") ---
  {
    id: 10,
    title: "Web Frontend Foundation",
    category: "Web & DB",
    categoryCode: "web",
    description: "Làm chủ bộ 3 quyền lực HTML5, CSS3, JavaScript ES6 và framework Bootstrap 5.",
    badgeColor: "bg-info text-dark",
    price: 650000,
    duration: "50 giờ",
    syllabus: [
      "HTML5 Semantic và thiết kế bố cục trang web.",
      "CSS3: Flexbox, Grid, Animations và Variables.",
      "JavaScript ES6+: DOM Manipulation, Events, Modules.",
      "Responsive Web Design với Bootstrap 5.",
      "Dự án: Xây dựng Landing Page doanh nghiệp chuyên nghiệp.",
    ],
  },
  {
    id: 11,
    title: "Phát triển API với FastAPI",
    category: "Web & DB",
    categoryCode: "web",
    description: "Xây dựng Backend tốc độ cao bằng Python, tích hợp Swagger UI và xử lý bất đồng bộ.",
    badgeColor: "bg-info text-dark",
    price: 790000,
    duration: "40 giờ",
    syllabus: [
      "Cơ bản về HTTP Protocol và RESTful API.",
      "Khởi tạo project FastAPI và định nghĩa các Endpoints.",
      "Pydantic Models để xác thực dữ liệu đầu vào.",
      "Xử lý Database với SQLAlchemy và mô hình bất đồng bộ (async/await).",
      "Tích hợp xác thực (JWT) và tài liệu Swagger UI tự động.",
    ],
  },
  {
    id: 12,
    title: "Data Web App với Streamlit",
    category: "Web & DB",
    categoryCode: "web",
    description: "Triển khai nhanh các ứng dụng AI/Data Science lên nền web chỉ với vài dòng code Python.",
    badgeColor: "bg-info text-dark",
    price: 490000,
    duration: "25 giờ",
    syllabus: [
      "Giới thiệu Streamlit và kiến trúc hoạt động.",
      "Các thành phần UI cơ bản: Text, Data, Media, Form.",
      "Quản lý trạng thái (Session State) và Caching tối ưu hiệu năng.",
      "Tích hợp biểu đồ trực quan và kết nối với Pandas DataFrame.",
      "Triển khai (Deploy) ứng dụng lên Streamlit Cloud hoặc Server.",
    ],
  },
  {
    id: 13,
    title: "SQL & Quản trị CSDL Thực Hành",
    category: "Web & DB",
    categoryCode: "web",
    description: "Truy vấn T-SQL, viết Stored Procedures, Triggers và quản trị MySQL, SQL Server (SSMS).",
    badgeColor: "bg-warning text-dark",
    price: 550000,
    duration: "40 giờ",
    syllabus: [
      "Nguyên lý Cơ sở dữ liệu quan hệ (RDBMS) và thiết kế ERD.",
      "Truy vấn SQL cơ bản: SELECT, JOIN, GROUP BY, HAVING.",
      "Sử dụng công cụ SQL Server Management Studio (SSMS) và MySQL.",
      "Lập trình T-SQL: Variables, Control Flow, Transactions.",
      "Viết Stored Procedures, Functions và tối ưu hóa Triggers.",
    ],
  },

  // --- DANH MỤC: KHOA HỌC CƠ BẢN & ĐẠI CƯƠNG (data-filter="science") ---
  {
    id: 14,
    title: "Toán Cho AI: Đại Số Tuyến Tính & XSTK",
    category: "Khoa Học",
    categoryCode: "science",
    description: "Nền tảng toán học vững chãi: ma trận, không gian vector ứng dụng trực tiếp cho các mô hình AI.",
    badgeColor: "bg-success",
    price: 0,
    duration: "60 giờ",
    syllabus: [
      "Ma trận, định thức và hệ phương trình tuyến tính.",
      "Không gian Vector, cơ sở, số chiều và biến đổi tuyến tính.",
      "Trị riêng (Eigenvalues), vector riêng (Eigenvectors) và chéo hóa.",
      "Lý thuyết xác suất: Biến ngẫu nhiên, phân phối xác suất.",
      "Thống kê suy diễn: Ước lượng và kiểm định giả thuyết.",
    ],
  },
  {
    id: 15,
    title: "Giải Tích Kỹ Thuật (Calculus)",
    category: "Khoa Học",
    categoryCode: "science",
    description: "Làm chủ đạo hàm, tích phân và gradient descent - chìa khóa để tối ưu hóa các mô hình Deep Learning.",
    badgeColor: "bg-success",
    price: 0,
    duration: "50 giờ",
    syllabus: [
      "Giới hạn (Limits) và tính liên tục của hàm số.",
      "Đạo hàm (Derivatives) và quy tắc chuỗi (Chain Rule).",
      "Đạo hàm riêng (Partial Derivatives) đối với hàm nhiều biến.",
      "Ứng dụng đạo hàm: Tối ưu hóa và thuật toán Gradient Descent.",
      "Tích phân cơ bản và ứng dụng trong kỹ thuật.",
    ],
  },
  {
    id: 16,
    title: "Toán Rời Rạc (Discrete Mathematics)",
    category: "Khoa Học",
    categoryCode: "science",
    description: "Tư duy logic, lý thuyết đồ thị và tổ hợp. Nền tảng bắt buộc để học sâu về Cấu trúc dữ liệu và Giải thuật.",
    badgeColor: "bg-success",
    price: 0,
    duration: "45 giờ",
    syllabus: [
      "Logic mệnh đề và phương pháp chứng minh toán học.",
      "Lý thuyết tập hợp, hàm số và hệ thức.",
      "Đại số Boole và ứng dụng trong mạch logic.",
      "Đại cương về Lý thuyết đồ thị (Graph Theory) và cây (Trees).",
      "Bài toán đường đi ngắn nhất (Dijkstra) và các thuật toán duyệt.",
    ],
  },
  {
    id: 17,
    title: "Phương Pháp Tính & Matlab",
    category: "Khoa Học",
    categoryCode: "science",
    description: "Giải gần đúng các bài toán kỹ thuật phức tạp bằng thuật toán số học và lập trình Matlab/Python.",
    badgeColor: "bg-success",
    price: 0,
    duration: "40 giờ",
    syllabus: [
      "Sai số và nguyên lý các phương pháp tính toán gần đúng.",
      "Giải gần đúng phương trình phi tuyến (Newton-Raphson).",
      "Giải hệ phương trình tuyến tính (Phương pháp Gauss, Jacobi).",
      "Nội suy (Interpolation) và xấp xỉ hàm.",
      "Thực hành cài đặt các thuật toán bằng phần mềm Matlab/Python.",
    ],
  },
];

// === QUẢN LÝ TRẠNG THÁI (STATE) CHO TÍNH NĂNG LOAD MORE ===
const ITEMS_PER_PAGE = 6; // Số lượng item hiển thị mỗi lần (đảm bảo chia hết cho 3 cột)
let currentLimit = ITEMS_PER_PAGE;
let currentDataSource = []; // Lưu lại mảng dữ liệu đang làm việc (Mảng gốc, hoặc mảng đã bị filter/search)

/**
 * Hàm render danh sách khóa học ra DOM
 * @param {Array} courses - Mảng dữ liệu khóa học truyền vào
 * @param {String} containerId - ID của thẻ chứa
 * @param {Boolean} isReset - true nếu đang lọc/tìm kiếm mới, false nếu đang bấm Xem thêm
 */
export function renderCourses(courses, containerId, isReset = true) {
  const container = document.getElementById(containerId);
  const btnLoadMore = document.getElementById("btn-load-more");
  if (!container) return;

  // 1. Cập nhật State
  if (isReset) {
    currentLimit = ITEMS_PER_PAGE; // Reset lại hiển thị 6 item
    currentDataSource = courses; // Cập nhật lại nguồn dữ liệu hiện tại
  }

  container.innerHTML = ""; // Clear nội dung cũ

  // Nếu mảng rỗng (ví dụ search không ra kết quả)
  if (currentDataSource.length === 0) {
    container.innerHTML = `<p class="text-muted text-center w-100 mt-4">Không tìm thấy khóa học nào phù hợp.</p>`;
    if (btnLoadMore) btnLoadMore.classList.add("d-none");
    return;
  }

  // 2. Cắt mảng dữ liệu để lấy đúng số lượng cần hiển thị
  const itemsToRender = currentDataSource.slice(0, currentLimit);

  // 3. Sinh HTML
  const htmlString = itemsToRender
    .map((course, index) => {
      // Delay chỉ áp dụng cho 6 item đầu để tạo hiệu ứng khi tải trang, các item sau không cần delay lâu
      const delayClass = isReset ? `delay-${((index % 3) + 1) * 100}` : "";

      return `
            <div class="col-md-6 col-xl-4 animate-fade-up ${delayClass}">
                <div class="card h-100 course-card-hover border-0 neumorphism-card">
                    <div class="card-body">
                        <span class="badge ${course.badgeColor} mb-2">${course.category}</span>
                        <h5 class="card-title fw-bold">${course.title}</h5>
                        <p class="card-text text-muted small">${course.description}</p>
                    </div>
                    <div class="card-footer bg-transparent border-0 pb-3">
                        <a href="course-detail.html?id=${course.id}" class="btn btn-outline-dark btn-sm rounded-pill w-100 interactive-cursor">
                            Xem chi tiết
                        </a>
                    </div>
                </div>
            </div>
        `;
    })
    .join("");

  container.innerHTML = htmlString;

  // 4. Xử lý logic Ẩn/Hiện nút "Xem thêm"
  if (btnLoadMore) {
    if (currentDataSource.length > currentLimit) {
      btnLoadMore.classList.remove("d-none"); // Hiện nút nếu còn data
    } else {
      btnLoadMore.classList.add("d-none"); // Ẩn nút nếu đã hết data
    }
  }
}

/**
 * Hàm kích hoạt khi bấm nút Xem thêm
 * @param {String} containerId - ID của thẻ chứa khóa học
 */
export function loadMoreCourses(containerId) {
  currentLimit += ITEMS_PER_PAGE; // Tăng giới hạn lên thêm 6
  renderCourses(currentDataSource, containerId, false); // Gọi lại render nhưng KHÔNG reset limit
}
