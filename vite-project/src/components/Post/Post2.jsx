import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Post.css";

function Post2() {
    return (
        <div className="community-responsibility bg-light py-5 main">
            <div className="container">
                <div className="row">
                    {/* Cột trái - Thông tin bài viết */}
                    <div className="col-md-3">
                        <p className="text-sm uppercase lg:text-lg font-barlow-condensed text-typo-heading">
                            <span className="font-semibold">Làm đẹp</span>
                            &nbsp;/&nbsp;
                            <span className="lg:text-typo-heading">22.09.21</span>
                            &nbsp;/&nbsp;
                            <span>6 phút</span>
                        </p>
                        <h5 className="italic title font-vollkorn text-typo-heading">
                            3 bước tẩy da chết hiệu quả dành cho mặt từ cà phê Đắk Lắk
                        </h5>
                        <p className="text-muted mt-2 fst-italic">By Hồng Hoa</p>
                    </div>

                    {/* Cột giữa - Nội dung chia sẻ */}
                    <div className="col-md-6 middle-column">
                        <h5 className="fw-bold section-title">Chia sẻ</h5>
                        <p className="text-muted text-left">
                            Bạn đã thêm bước tẩy da chết cho mặt vào quy trình chăm sóc da của mình chưa? Nếu chưa, rất có thể bạn đang bỏ lỡ vô số lợi ích mà nó mang đến cho làn da của mình đó. Việc tẩy da chết tuy chỉ mất từ 10 – 15s nhưng nó sẽ giúp bạn loại bỏ các tế bào da chết trên bề mặt da một cách dễ dàng, giảm nguy cơ tắc nghẽn lỗ chân lông và nổi mụn.
                        </p>
                        {/* Hình ảnh */}
                        <div className="text-center">
                            <img src="/images/post2.jpg" alt="Tẩy da chết từ cà phê Đắk Lắk" className="img-fluid rounded shadow-sm" />
                        </div>
                        <p className="text-muted text-left mt-3">
                            Cùng Cocoon note lại các bước sử dụng Cà phê Đắk Lắk làm sạch da chết mặt để đạt hiệu quả tốt nhất nhé: <br />
                            Bước 1: Luôn luôn làm ướt da mặt trước khi tẩy da chết. <br />
                            Bước 2: Lấy một lượng sản phẩm vừa đủ xoa đều trong lòng bàn tay, sau đó mát-xa thật nhẹ nhàng lên khắp khuôn mặt theo chuyển động tròn, tránh vùng mắt. Chú ý, hãy luôn mát-xa mặt theo hướng đi lên và tập trung vào các vùng như trán, khóe mũi, hai má. <br />
                            Bước 3: Rửa sạch mặt với nước và thấm khô bằng khăn mềm. <br />
                        </p>
                        {/* Hình ảnh */}
                        <div className="text-center">
                            <img src="/images/post2_1.jpg" alt="Các bước tẩy da chết mặt" className="img-fluid rounded shadow-sm" />
                        </div>
                        <p className="text-muted text-left mt-3">
                            Bạn có thể sử dụng Cà phê Đắk Lắk làm sạch da chết mặt từ 2 – 3 lần/tuần để làn da của mình luôn tươi sáng, rạng rỡ và tràn năng lượng.
                        </p>
                    </div>

                    {/* Cột phải - Bài viết phổ biến */}
                    <div className="col-md-3">
                        <h3 className="italic articles__title font-vollkorn text-typo-heading">
                            Bài viết phổ biến
                        </h3>
                        {[
                            {
                                title: "3 bước tẩy da chết hiệu quả dành cho mặt từ cà phê Đắk Lắk",
                                desc: "Việc tẩy da chết tuy chỉ mất từ 10 – 15s nhưng nó sẽ giúp bạn loại bỏ các tế bào da chết trên...",
                                link: "cocoon/bai-viet/post2",
                                img: "/images/hinh2.jpg"
                            },
                            {
                                title: "Da dầu, mụn sẽ “ăn chay” như thế nào?",
                                desc: "Giống như các loại da khác, da dầu cũng sẽ đạt được trạng thái khỏe mạnh và mịn...",
                                link: "/cocoon/bai-viet/post3",
                                img: "/images/hinh3.jpg"
                            },
                            {
                                title: "Chương trình 'Ửng hồng Không ửng đỏ' - chung tay chăm sóc trẻ em vùng cao",
                                desc: "Chương trình được Cocoon và UNESCO-CEP triển khai nhằm xây dựng sân chơi an...",
                                link: "/cocoon/bai-viet/post4",
                                img: "/images/hinh4.jpg"
                            }
                        ].map((article, index) => (
                            <div key={index} className="mb-3 p-3 border rounded shadow-sm bg-white">
                                <div className="row align-items-center">
                                    {/* Cột ảnh bên trái (50%) */}
                                    <div className="col-6">
                                        <img src={article.img} alt={article.title} className="img-fluid rounded w-100" />
                                    </div>
                                    {/* Cột nội dung bên phải (50%) */}
                                    <div className="col-6">
                                        <h6>
                                            <Link to={`/${article.link.replace(/^\/+/, "")}`} className="text-decoration-none text-dark fw-bold">
                                                {article.title}
                                            </Link>

                                        </h6>
                                        <p className="text-muted small mb-0">{article.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Post2;
