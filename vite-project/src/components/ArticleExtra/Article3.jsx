import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../Article/Article.css";

function Article2() {
    return (
        <div className="main">
            <div className="container mt-0">
                {/* Row tiêu đề "Làm đẹp" và nút "Tất cả bài viết" */}
                <div className="row">
                    <div className="col-4 p-3 d-flex flex-column justify-content-between">
                        <br />
                        <h5 className="baiviet">BÀI VIẾT / COCOON</h5>
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
                {/* Row 3 bài viết */}
                <div className="row mt-1">
                    {[
                        {
                            img: "./images/hinh8.jpg",
                            category: "Cocoon ",
                            date: "15.05.24",
                            title: "Cocoon x Guardian Vietnam: ra mắt 20 trạm refill tại TP.HCM",
                            desc: "Trạm Refill là chương trình nhằm giúp giảm tải số lượng vỏ chai nhựa cũ thải ra ngoài môi trường của Cocoon và Guardian Vietnam. Hiện tại, chương trình đang triển kh..."
                        },
                        {
                            img: "./images/hinh9.jpg",
                            category: "Cocoon ",
                            date: "15.05.24",
                            title: "Chương trình 'Thu hồi pin cũ - Bảo vệ trái đất xanh' năm 2024",
                            desc: "Cocoon và Trường Đại học Sư phạm TP.HCM kết hợp phát động chương trình “Thu hồi pin cũ - Bảo vệ trái đất xanh” 2024 với hơn 96 điểm thu hồi pin trải rộng trên ..."
                        },
                        {
                            img: "./images/hinh10.jpg",
                            category: "Cocoon ",
                            date: "14.09.23",
                            title: "Cocoon x Suboi: Love Your Nature - Cứ tự nhiên đi",
                            desc: "Chúng tôi tôn trọng sự đa dạng và trân trọng sự khác biệt vì bản chất tự nhiên của mỗi người là điều vô cùng độc đáo và quý giá. Cocoon & Suboi rất tự hào khi đặt ..."
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
            </div>
        </div>
    );
}


export default Article2;