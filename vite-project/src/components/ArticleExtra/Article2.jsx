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
                        <h5 className="baiviet">BÀI VIẾT / LÀM ĐẸP</h5>
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
                {/* Row 1 bài viết */}
                <div className="row mt-1">
                    {[
                        {
                            img: "./images/hinh7.jpg",
                            category: "Làm đẹp",
                            date: "14.09.21",
                            title: "Thực hành sống xanh cùng túi refill cà phê Đắk Lắk",
                            desc: "Mỗi túi refill dung tích 600ml sẽ giúp bạn tiết kiệm ngay 15% chi phí và còn giảm đến 86% nhựa so với dạng hũ. Đặc biệt, với sản phẩm này sẵn trong nhà, bạn sẽ dễ..."
                        },
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