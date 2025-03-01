import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Article.css";

function Article() {
    return (
        <div className="main">
            <div className="container mt-0">
                {/* Row nội dung bài viết & ảnh */}
                <div className="row">
                    <div className="col-4 p-3 d-flex flex-column justify-content-between">
                        <div>
                            <br />
                            <h5 className="baiviet">BÀI VIẾT</h5>
                            <h1 className="tieude">Chương trình "Cùng Cocoon Sống Xanh Mỗi Ngày" năm 2024</h1>
                            <p className="noidung">
                                Chương trình Thu Hồi Vỏ Chai Cũ được Cocoon khởi xướng từ tháng 4/2021 đã thu hút
                                được sự tham gia nhiệt tình từ khách hàng, đặc biệt qua hình thức online. Đây không chỉ
                                là nỗ lực của Cocoon trong việc giảm thiểu rác thải nhựa mà còn là lời cam kết mạnh mẽ
                                hướng đến một môi trường bền vững. Để tăng cường tính thuận tiện cho khách hàng và mở rộng
                                quy mô chương trình, Cocoon đã quyết định đưa hoạt động này đến gần hơn với mọi người.
                            </p>
                        </div>
                        {/* Nút Đọc bài viết */}
                        <button className="btn-read-more">
                            Đọc bài viết <span className="arrow">→</span>
                        </button>
                    </div>
                    <div className="col-8 p-3">
                        <img
                            src="./images/Banner_image.jpg"
                            alt="Đây là hình ảnh"
                            style={{ width: "100%", height: "auto", marginTop: "220px" }}
                        />
                    </div>
                </div>

                {/* Row tiêu đề "Làm đẹp" và nút "Tất cả bài viết" */}
                <div className="row mt-5">
                    <div className="col-12 d-flex justify-content-between align-items-center">
                        <h5 className="baiviet">LÀM ĐẸP</h5>
                        <button className="btn-view-all">Tất cả bài viết →</button>
                    </div>
                </div>

                {/* Row 3 bài viết */}
                <div className="row mt-1">
                    {[
                        {
                            img: "./images/hinh1.jpg",
                            category: "Làm đẹp",
                            date: "01.10.21",
                            title: "Vài “tip” giúp bạn tận hưởng trọn vẹn từng giây phút làm sạch da chết trên cơ thể cùng Cà phê Đắk Lắk",
                            desc: "Hãy thử áp dụng một vài tip sau để gia tăng thêm những trải nghiệm thật “chill” với sản phẩm Cà phê Đắk Lắk làm sạch da chết cơ thể."
                        },
                        {
                            img: "./images/hinh2.jpg",
                            category: "Làm đẹp",
                            date: "22.09.21",
                            title: "3 bước tẩy da chết hiệu quả dành cho mặt từ cà phê Đắk Lắk",
                            desc: "Việc tẩy da chết tuy chỉ mất từ 10 – 15s nhưng nó sẽ giúp bạn loại bỏ các tế bào da chết trên bề mặt da một cách dễ dàng, giảm nguy cơ tắc nghẽn lỗ chân lông và..."
                        },
                        {
                            img: "./images/hinh3.jpg",
                            category: "Làm đẹp",
                            date: "22.09.21",
                            title: "Da dầu, mụn sẽ “ăn chay” như thế nào?",
                            desc: "Giống như các loại da khác, da dầu cũng sẽ đạt được trạng thái khỏe mạnh và mịn màng nếu được làm sạch đúng cách và được bảo vệ với các sản phẩm phù hợp."
                        }
                    ].map((article, index) => (
                        <div className="col-4 d-flex flex-column p-3 article-container" key={index}>
                            <div className="image-container">
                                <img src={article.img} alt={article.title} className="article-image" />
                            </div>
                            <p className="text-muted mt-2 article-text">
                                <strong>{article.category}</strong> | {article.date}
                            </p>
                            <h6 className="mt-1 article-title">{article.title}</h6>
                            <p className="text-muted article-text">{article.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Row tiêu đề "Cocoon" và nút "Tất cả bài viết" */}
                <div className="row mt-5">
                    <div className="col-12 d-flex justify-content-between align-items-center">
                        <h5 className="baiviet">COCOON</h5>
                        <button className="btn-view-all">Tất cả bài viết →</button>
                    </div>
                </div>

                {/* Row 3 bài viết */}
                <div className="row mt-1">
                    {[
                        {
                            img: "./images/hinh4.jpg",
                            category: "Cocoon ",
                            date: "01.01.24",
                            title: "Chương trình 'Ửng hồng Không ửng đỏ' - chung tay chăm sóc trẻ em vùng cao",
                            desc: "Chương trình 'Ửng Hồng Không Ửng Đỏ' được Cocoon và UNESCO-CEP triển khai nhằm hướng đến một mục tiêu thiết thực là xây dựng sân chơi an toàn, sạch sẽ c..."
                        },
                        {
                            img: "./images/hinh5.jpg",
                            category: "Cocoon ",
                            date: "22.09.21",
                            title: "Chương trình 'Cùng Cocoon Sống Xanh Mỗi Ngày' năm 2024",
                            desc: "Từ tháng 9/2024, Cocoon mang lại 115 điểm thu hồi vỏ chai trực tiếp, được triển khai tại 25 tỉnh thành trên khắp Việt Nam để khách hàng dễ dàng tham gia vào việc thu..."
                        },
                        {
                            img: "./images/hinh6.jpg",
                            category: "Cocoon ",
                            date: "15.05.24",
                            title: "Cocoon x AAF: Chung tay cứu trợ chó mèo lang thang cùng Tổ chức Động vật Châu Á",
                            desc: "Với mỗi sản phẩm giới hạn được được bán ra, Cocoon sẽ trích 10.000đ để ủng hộ vào quỹ của AAF nhằm san sẻ những khó khăn về lương thực, y tế với các trạm..."
                        }
                    ].map((article, index) => (
                        <div className="col-4 d-flex flex-column p-3 article-container" key={index}>
                            <div className="image-container">
                                <img src={article.img} alt={article.title} className="article-image" />
                            </div>
                            <p className="text-muted mt-2 article-text">
                                <strong>{article.category}</strong> | {article.date}
                            </p>
                            <h6 className="mt-1 article-title">{article.title}</h6>
                            <p className="text-muted article-text">{article.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="row mt-5 d-flex justify-content-center">
                    <img src="./images/bannerqc.jpg" alt="" />
                </div>
            </div>
        </div>
    );
}


export default Article;