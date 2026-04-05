// Mock Data: Danh sách khóa học
export const coursesData = [
  // --- DANH MỤC: AI, ML & DL (data-filter="ai") ---
  {
    id: 1,
    title: "Data Science với Python",
    category: "AI & Data",
    categoryCode: "ai",
    description: "Tiền xử lý và trực quan hóa dữ liệu quy mô lớn sử dụng thư viện Pandas, NumPy và Matplotlib.",
    fullDesc:
      "<p>Khoa học dữ liệu (Data Science) đang là một trong những ngành nghề khát nhân lực nhất. Khóa học này cung cấp cho bạn bộ công cụ mạnh mẽ nhất của hệ sinh thái Python để làm chủ dữ liệu.</p><p>Bạn sẽ không chỉ học cách viết code, mà còn học <b>tư duy phân tích dữ liệu</b>. Từ việc xử lý hàng triệu dòng dữ liệu thô bị lỗi, đến việc vẽ ra những biểu đồ tương tác kể lại câu chuyện kinh doanh ẩn sau những con số. Cuối khóa học, dự án thực tế sẽ giúp bạn xây dựng một Portfolio ấn tượng trong mắt nhà tuyển dụng.</p>",
    images: ["assets/img/ds-py/01.jpg", "assets/img/ds-py/02.jpg", "assets/img/ds-py/03.jpg"],
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
    description: "Xây dựng các mô hình dự đoán, hệ thống phân tích cảm xúc chuyên sâu với scikit-learn.",
    fullDesc:
      "<p>Tiếp nối các kiến thức xử lý dữ liệu, khóa học này đưa bạn bước vào thế giới của <b>Học Máy (Machine Learning)</b> cổ điển. Thay vì học lý thuyết suông, bạn sẽ tự tay huấn luyện các thuật toán để dự đoán tương lai dựa trên dữ liệu quá khứ.</p><p>Khóa học tập trung mạnh vào thư viện <code>scikit-learn</code>, giúp bạn hiểu sâu về các tham số siêu việt (hyperparameters), cách tránh overfitting (học vẹt), và cách đánh giá một mô hình AI có thực sự hoạt động tốt hay không trước khi đưa vào ứng dụng thực tế.</p>",
    images: ["assets/img/ml-basic/01.jpg", "assets/img/ml-basic/02.jpg", "assets/img/ml-basic/03.jpg"],
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
    description: "Thiết kế mạng nơ-ron nhân tạo, ứng dụng mô hình YOLOv8 trong bài toán nhận diện đối tượng.",
    fullDesc:
      "<p>Đây là khóa học đưa bạn chạm tay vào ranh giới của <b>Trí tuệ nhân tạo hiện đại</b>. Bạn sẽ được học về cách bộ não con người truyền cảm hứng cho việc thiết kế các Mạng nơ-ron nhân tạo (ANN) và Mạng nơ-ron tích chập (CNN) chuyên dùng cho xử lý hình ảnh.</p><p>Đặc biệt, khóa học sẽ đi sâu vào việc triển khai và tinh chỉnh mô hình <b>YOLOv8</b> - thuật toán phát hiện đối tượng theo thời gian thực hàng đầu thế giới hiện nay. Bạn sẽ có thể làm các ứng dụng như camera nhận diện biển số xe, nhận diện khuôn mặt, hay chấm công tự động.</p>",
    images: ["assets/img/dl-cv/01.jpg", "assets/img/dl-cv/02.jpg", "assets/img/dl-cv/03.jpg"],
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
    description: "Xử lý ngôn ngữ tự nhiên với kiến trúc Transformers, BERT và hệ thống gợi ý với RAG.",
    fullDesc:
      "<p>Sự bùng nổ của ChatGPT đã chứng minh sức mạnh của Xử lý ngôn ngữ tự nhiên (NLP). Khóa học này dạy bạn <b>cách chế tạo ra một hệ thống tương tự</b>. Bạn sẽ hiểu bản chất của kiến trúc Transformers, cơ chế Attention và các mô hình ngôn ngữ lớn (LLMs).</p><p>Điểm nhấn cực mạnh của khóa học là kiến trúc <b>RAG (Retrieval-Augmented Generation)</b> kết hợp với Cơ sở dữ liệu Vector (ChromaDB), giúp AI của bạn có khả năng đọc hiểu tài liệu nội bộ của công ty và trả lời câu hỏi chính xác mà không bị 'ảo giác'.</p>",
    images: ["assets/img/nlp-rag/01.jpg", "assets/img/nlp-rag/02.jpg", "assets/img/nlp-rag/03.jpg"],
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
    fullDesc:
      "<p>Làm thế nào Netflix biết bạn thích xem phim gì? Làm sao Shopee gợi ý đúng món đồ bạn đang tìm kiếm? Khóa học này sẽ giải mã các thuật toán đứng sau những cỗ máy kiếm tiền tỷ đô này.</p><p>Bạn sẽ đi từ những thuật toán gợi ý cơ bản như Lọc dựa trên nội dung (Content-based), Lọc cộng tác (Collaborative Filtering) cho đến những kỹ thuật phân tích ma trận phức tạp như SVD. Kiến thức này cực kỳ giá trị cho các kỹ sư muốn làm việc trong mảng Thương mại điện tử.</p>",
    images: ["assets/img/recsys/01.jpg", "assets/img/recsys/02.jpg", "assets/img/recsys/03.jpg"],
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
    fullDesc:
      "<p>C++ luôn được mệnh danh là ngôn ngữ 'vua' khi nói về hiệu năng và quản lý bộ nhớ. Khóa học này là viên gạch nền tảng vững chắc nhất cho bất kỳ ai muốn theo đuổi ngành Khoa học Máy tính. Bạn sẽ học cách tư duy như một cái máy tính, hiểu rõ dữ liệu được lưu trữ và xử lý ra sao trong RAM.</p><p>Hơn thế nữa, khóa học sẽ cung cấp nền tảng vững chắc về Lập trình hướng đối tượng (OOP), giúp bạn dễ dàng chuyển đổi sang học Java, C# hay bất kỳ ngôn ngữ hiện đại nào khác trong tương lai.</p>",
    images: ["assets/img/cpp-base/01.jpg", "assets/img/cpp-base/02.jpg", "assets/img/cpp-base/03.jpg"],
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
    fullDesc:
      "<p>Nếu C++ là một chiếc xe hơi hiện đại, thì ngôn ngữ C chính là khối động cơ nguyên bản. Học C giúp bạn tiếp xúc rất gần với phần cứng và hệ điều hành. Đây là ngôn ngữ bắt buộc phải học nếu bạn có ý định theo đuổi mảng Lập trình nhúng (Embedded Systems) hoặc IoT.</p><p>Khóa học đặc biệt chú trọng vào 'nỗi ám ảnh' của sinh viên IT: <b>Con trỏ (Pointers) và Cấp phát bộ nhớ động (Malloc, Free)</b>. Vượt qua được nó, tư duy lập trình của bạn sẽ thăng hạng vượt bậc.</p>",
    images: ["assets/img/c-basic/01.jpg", "assets/img/c-basic/02.jpg", "assets/img/c-basic/03.jpg"],
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
    fullDesc:
      "<p>Biết code là một chuyện, biết làm việc chung với team hay không lại là chuyện khác. Git là kỹ năng 'sống còn', là tấm vé thông hành bắt buộc để bạn bước vào môi trường doanh nghiệp thực tế.</p><p>Trong khóa học này, bạn sẽ học cách lưu lại các phiên bản mã nguồn, tạo nhánh (branch) để phát triển tính năng mới mà không làm hỏng code chính, và quan trọng nhất là nghệ thuật <b>giải quyết xung đột (Merge Conflict)</b> khi nhiều người cùng sửa chung một file.</p>",
    images: ["assets/img/git/01.jpg", "assets/img/git/02.jpg", "assets/img/git/03.jpg"],
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
    fullDesc:
      "<p>Khóa học Mạng máy tính sẽ vén bức màn bí mật về cách Internet vận hành. Không chỉ là lý thuyết mô hình OSI nhàm chán, bạn sẽ được thực hành phân tích các gói tin thực tế bằng Wireshark, tự tay chia Subnetmask thiết kế mạng cho công ty.</p><p>Việc hiểu rõ về DNS, DHCP, TCP/UDP sẽ giúp ích cực lớn cho bạn sau này khi chuyển sang học thiết kế Backend API hay triển khai Web lên Server.</p>",
    images: ["assets/img/networking/01.jpg", "assets/img/networking/02.jpg", "assets/img/networking/03.jpg"],
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
    fullDesc:
      "<p>Khóa học này sẽ biến bạn từ một người chỉ biết xem web thành một nhà sáng tạo có thể tự tay vẽ lên bất kỳ giao diện nào. Bạn sẽ nắm vững bộ 3 cốt lõi: <b>HTML (Khung xương), CSS (Da thịt) và JavaScript (Hệ thần kinh).</b></p><p>Đặc biệt, khóa học cập nhật các chuẩn thiết kế mới nhất như Flexbox, Grid Layout và thực hành xây dựng giao diện tương thích hoàn hảo trên điện thoại di động (Responsive Web) bằng Bootstrap 5.</p>",
    images: ["assets/img/web-front/01.jpg", "assets/img/web-front/02.jpg", "assets/img/web-front/03.jpg"],
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
    fullDesc:
      "<p>Khóa học này hướng dẫn bạn sử dụng <b>FastAPI</b> - một trong những Framework Python nhanh nhất hiện nay để xây dựng các API. Bạn sẽ học được tư duy thiết kế RESTful API chuẩn quốc tế.</p><p>Hơn thế nữa, bạn sẽ học cách quản lý tương tác với Cơ sở dữ liệu thông qua ORM (SQLAlchemy), và xử lý hàng ngàn request cùng lúc bằng lập trình bất đồng bộ (Async/Await) - kỹ năng cực kỳ quan trọng cho hệ thống lớn.</p>",
    images: ["assets/img/fastapi/01.jpg", "assets/img/fastapi/02.jpg", "assets/img/fastapi/03.jpg"],
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
    description: "Triển khai nhanh các ứng dụng AI/Data Science lên nền web với Python.",
    fullDesc:
      "<p>Là một Kỹ sư AI, việc phải học thêm HTML, CSS, ReactJS chỉ để khoe cái mô hình dự đoán của mình thực sự quá tốn thời gian! <b>Streamlit</b> ra đời để cứu rỗi bạn.</p><p>Khóa học này sẽ dạy bạn cách biến các script phân tích dữ liệu, các mô hình học máy thành một trang Web tương tác trực quan đẹp mắt chỉ với vài chục dòng code Python thuần túy. Triển khai mô hình lên Cloud chưa bao giờ dễ dàng đến thế!</p>",
    images: ["assets/img/streamlit/01.jpg", "assets/img/streamlit/02.jpg", "assets/img/streamlit/03.jpg"],
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
    description: "Truy vấn T-SQL, viết Stored Procedures, Triggers và quản trị MySQL, SQL Server.",
    fullDesc:
      "<p>Dữ liệu là dầu mỏ của thế kỷ 21, và SQL chính là cái dàn khoan! Việc giao tiếp thành thạo với Cơ sở dữ liệu quan hệ (RDBMS) là kỹ năng sống còn của mọi Lập trình viên hay Chuyên viên Dữ liệu.</p><p>Phần nâng cao sẽ giúp bạn làm chủ <b>T-SQL</b>, lập trình các Stored Procedures để tối ưu hiệu năng Database, và thiết lập các Trigger tự động hóa luồng dữ liệu khép kín chuyên nghiệp.</p>",
    images: ["assets/img/sql-db/01.jpg", "assets/img/sql-db/02.jpg", "assets/img/sql-db/03.jpg"],
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
    description: "Nền tảng toán học vững chãi: ma trận, không gian vector ứng dụng trực tiếp cho mô hình AI.",
    fullDesc:
      "<p>Bản chất của các mạng nơ-ron sâu (Deep Learning) hay ChatGPT thực chất là những <b>phép nhân Ma trận</b> khổng lồ. Việc học AI mà bỏ qua nền tảng Toán học giống như xây nhà không móng.</p><p>Khóa học không hàn lâm khô khan, mà mọi kiến thức về Không gian Vector, Định thức, hay Phân phối xác suất đều được liên kết trực tiếp để giải thích cách các thuật toán Machine Learning hoạt động dưới nền tảng toán học.</p>",
    images: ["assets/img/math-ai/01.jpg", "assets/img/math-ai/02.jpg", "assets/img/math-ai/03.jpg"],
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
    description: "Làm chủ đạo hàm, tích phân và gradient descent - chìa khóa để tối ưu hóa Deep Learning.",
    fullDesc:
      "<p>Làm thế nào một con AI ban đầu ngu ngốc lại dần dần trở nên thông minh sau hàng triệu vòng huấn luyện? Câu trả lời nằm ở <b>Thuật toán Gradient Descent (Giảm độ dốc)</b>, và nền tảng của nó chính là Đạo hàm riêng của môn Giải tích.</p><p>Khóa học Giải tích Kỹ thuật tập trung vào việc mô hình hóa sự biến thiên, giúp bạn hiểu rõ cách thức các Loss Function (Hàm mất mát) của AI hội tụ về mức thấp nhất.</p>",
    images: ["assets/img/calculus/01.jpg", "assets/img/calculus/02.jpg", "assets/img/calculus/03.jpg"],
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
    description: "Tư duy logic, lý thuyết đồ thị và tổ hợp. Nền tảng bắt buộc để học sâu Cấu trúc dữ liệu.",
    fullDesc:
      "<p>Máy tính không hiểu những con số liên tục như con người, chúng chỉ hiểu dữ liệu dưới dạng các khối rời rạc (0 và 1). Toán rời rạc chính là <b>ngôn ngữ tư duy của mọi kỹ sư phần mềm</b>.</p><p>Khóa học sẽ đưa bạn vào thế giới của Logic mệnh đề, Đại số Boole và đặc biệt là Lý thuyết đồ thị (Graph Theory) - nền tảng đằng sau Google Maps hay các thuật toán gợi ý bạn bè trên Facebook.</p>",
    images: ["assets/img/discrete-math/01.jpg", "assets/img/discrete-math/02.jpg", "assets/img/discrete-math/03.jpg"],
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
    description: "Giải gần đúng các bài toán kỹ thuật phức tạp bằng thuật toán số học và lập trình Matlab.",
    fullDesc:
      "<p>Trong thực tế kỹ thuật, có những phương trình vi phân hay tích phân phức tạp đến mức con người không thể giải bằng tay ra đáp án chính xác tuyệt đối. Đó là lúc chúng ta cần đến <b>Phương Pháp Tính (Numerical Methods)</b> để tìm ra đáp án gần đúng ở mức chấp nhận được.</p><p>Khóa học sẽ kết hợp lý thuyết giải thuật số học với việc thực hành code trực tiếp trên phần mềm Matlab/Python, giúp bạn mô phỏng và giải quyết các bài toán kỹ thuật phức tạp.</p>",
    images: ["assets/img/matlab/01.jpg", "assets/img/matlab/02.jpg", "assets/img/matlab/03.jpg"],
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

// Liên quan đến hiển thị số lượng khóa học
const ITEMS_PER_PAGE = 6; // Số lượng item hiển thị mỗi lần
let currentLimit = ITEMS_PER_PAGE;
let currentDataSource = [];

/**
 * Hàm render danh sách khóa học ra DOM
 * @param {Array} courses - Mảng dữ liệu khóa học
 * @param {String} containerId - ID của thẻ chứa
 * @param {Boolean} isReset - true nếu đang lọc/tìm kiếm mới
 */
export function renderCourses(courses, containerId, isReset = true) {
  const container = document.getElementById(containerId);
  const btnLoadMore = document.getElementById("btn-load-more");
  if (!container) return;

  // Nếu reset trang sẽ đặt lại số item limit
  if (isReset) {
    currentLimit = ITEMS_PER_PAGE;
    currentDataSource = courses;
  }

  container.innerHTML = "";

  // Nếu không thấy khóa học (Search) thì trả về text s
  if (currentDataSource.length === 0) {
    container.innerHTML = `<p class="text-muted text-center w-100 mt-4">Không tìm thấy khóa học nào phù hợp.</p>`;
    if (btnLoadMore) btnLoadMore.classList.add("d-none");
    return;
  }

  const itemsToRender = currentDataSource.slice(0, currentLimit);

  const htmlString = itemsToRender
    .map((course, index) => {
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

  // Nếu số lượng khóa học vẫn còn thì vẫn hiện nút load more
  if (btnLoadMore) {
    if (currentDataSource.length > currentLimit) {
      btnLoadMore.classList.remove("d-none");
    } else {
      btnLoadMore.classList.add("d-none");
    }
  }
}

/**
 * Hàm kích hoạt khi bấm nút Xem thêm
 * @param {String} containerId - ID của thẻ chứa khóa học
 */
export function loadMoreCourses(containerId) {
  currentLimit += ITEMS_PER_PAGE;
  renderCourses(currentDataSource, containerId, false);
}
