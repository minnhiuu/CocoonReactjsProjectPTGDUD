import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Article.css";
import useClampText from "../ArticleExtra/useClampText"; 

function Article() {
    const navigate = useNavigate();

    const handleClick = (link) => {
        if (link && link !== "#") {
            navigate(link);
        }
    };

    return (
        <div className="main">
            <div className="content container mt-0">
                <div className="row">
                    <div className="col-4 p-3 d-flex flex-column justify-content-between">
                        <div>
                            <br />
                            <h5 className="baiviet">BÀI VIẾT</h5>
                            <h1 className="tieude">Chương trình "Cùng Cocoon Sống Xanh Mỗi Ngày" năm 2024</h1>
                            <p className="noidung">
                                Chương trình Thu Hồi Vỏ Chai Cũ được Cocoon khởi xướng từ tháng 4/2021 đã thu hút
                                được sự tham gia nhiệt tình từ khách hàng, đặc biệt qua hình thức online...
                            </p>
                        </div>
                        <Link to="/cocoon" className="btn-read-more btn-view-all">
                            Đọc bài viết <span className="arrow">→</span>
                        </Link>
                    </div>
                    <div className="col-8 p-3">
                        <img
                            src="/images/Banner_image.jpg"
                            alt="Đây là hình ảnh"
                            style={{ width: "100%", height: "auto", marginTop: "80px" }}
                        />
                    </div>
                </div>

                {/* Danh mục Làm Đẹp */}
                <CategorySection title="LÀM ĐẸP" link="/cocoon/bai-viet/lam-dep" articles={[
                    {
                        link: "/cocoon/bai-viet/post1",
                        img: "/images/hinh1.jpg",
                        category: "Làm đẹp",
                        date: "01.10.21",
                        title: "Vài “tip” giúp bạn tận hưởng trọn vẹn...",
                        desc: "Hãy thử áp dụng một vài tip sau để gia tăng thêm những trải nghiệm thật “chill”..."
                    },
                    {
                        link: "/cocoon/bai-viet/post2",
                        img: "/images/hinh2.jpg",
                        category: "Làm đẹp",
                        date: "22.09.21",
                        title: "3 bước tẩy da chết hiệu quả...",
                        desc: "Việc tẩy da chết tuy chỉ mất từ 10 – 15s nhưng nó sẽ giúp bạn loại bỏ..."
                    },
                    {
                        link: "/cocoon/bai-viet/post3",
                        img: "/images/hinh3.jpg",
                        category: "Làm đẹp",
                        date: "22.09.21",
                        title: "Da dầu, mụn sẽ “ăn chay” như thế nào?",
                        desc: "Giống như các loại da khác, da dầu cũng sẽ đạt được trạng thái khỏe mạnh..."
                    }
                ]} handleClick={handleClick} />

                {/* Danh mục Cocoon */}
                <CategorySection title="COCOON" link="/cocoon/bai-viet/chuong-trinh" articles={[
                    {
                        link: "/cocoon/bai-viet/post4",
                        img: "/images/hinh4.jpg",
                        category: "Cocoon",
                        date: "01.01.24",
                        title: "Chương trình 'Ửng hồng Không ửng đỏ'...",
                        desc: "Chương trình 'Ửng Hồng Không Ửng Đỏ' được Cocoon và UNESCO-CEP triển khai..."
                    },
                    {
                        link: "/cocoon/bai-viet/post5",
                        img: "/images/hinh5.jpg",
                        category: "Cocoon",
                        date: "22.09.21",
                        title: "Chương trình 'Cùng Cocoon Sống Xanh Mỗi Ngày'...",
                        desc: "Từ tháng 9/2024, Cocoon mang lại 115 điểm thu hồi vỏ chai trực tiếp..."
                    },
                    {
                        link: "/cocoon/bai-viet/post6",
                        img: "/images/hinh6.jpg",
                        category: "Cocoon",
                        date: "15.05.24",
                        title: "Cocoon x AAF: Chung tay cứu trợ chó mèo lang thang...",
                        desc: "Với mỗi sản phẩm giới hạn được được bán ra, Cocoon sẽ trích 10.000đ để ủng hộ..."
                    }
                ]} handleClick={handleClick} />
            </div>
        </div>
    );
}

const CategorySection = ({ title, link, articles, handleClick }) => (
    <div>
        <div className="row mt-5">
            <div className="col-12 d-flex justify-content-between align-items-center">
                <h5 className="baiviet">{title}</h5>
                <Link to={link} className="btn-view-all">Tất cả bài viết →</Link>
            </div>
        </div>
        <div className="row mt-1">
            {articles.map((article, index) => (
                <ArticleItem key={index} article={article} handleClick={handleClick} />
            ))}
        </div>
    </div>
);

const ArticleItem = ({ article, handleClick }) => {
    const [titleText, titleRef] = useClampText(article.title, 2); // Giới hạn tiêu đề 2 dòng
    const [descText, descRef] = useClampText(article.desc, 3); // Giới hạn mô tả 3 dòng

    return (
        <div className="col-4 d-flex flex-column p-3 article-container" onClick={() => handleClick(article.link)} style={{ cursor: "pointer" }}>
            <div className="image-container">
                <img src={article.img} alt={article.title} className="article-image" />
            </div>
            <p className="text-muted mt-2 article-text">
                <strong>{article.category}</strong> | {article.date}
            </p>
            <h6 className="mt-1 article-title" ref={titleRef}>{titleText}</h6>
            <p className="text-muted article-text" ref={descRef}>{descText}</p>
        </div>
    );
};

export default Article;
