import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Post4() {
    return (
        <div className="community-responsibility bg-light py-5 main">
            <div className="container">
                <div className="row">
                    {/* Cột trái - Thông tin bài viết */}
                    <div className="col-md-3">
                        <p className="text-sm uppercase lg:text-lg font-barlow-condensed text-typo-heading">
                            <span className="font-semibold">Cocoon</span>
                            &nbsp;/&nbsp;
                            <span className="lg:text-typo-heading">01.01.70</span>
                            &nbsp;/&nbsp;
                            <span>24 phút</span>
                        </p>
                        <h5 className="italic title font-vollkorn text-typo-heading">
                            Chương trình "Ửng hồng Không ửng đỏ" - chung tay chăm sóc trẻ em vùng cao
                        </h5>
                        <p className="text-muted mt-2 fst-italic">By Hồng Hoa</p>
                    </div>

                    {/* Cột giữa - Nội dung chia sẻ */}
                    <div className="col-md-6 middle-column">
                        <h5 className="fw-bold section-title">Chia sẻ</h5>
                        <div className="highlight-box p-3 mb-3 bg-light border rounded">
                            <p className="text-muted text-left">
                                Cocoon và Trung tâm UNESCO Hợp tác Giáo dục và Văn hoá Việt Nam (UNESCO-CEP) hân hạnh thông báo về sự hợp tác trong chương trình mang tên “Ửng Hồng Không Ửng Đỏ”. Hành trình này được khởi tạo để cùng hướng đến các mục tiêu nhân văn – nơi yêu thương được sẻ chia, điều kiện sống và học tập của trẻ em vùng cao được cải thiện, và những giá trị bền vững được lan tỏa qua những hành động:
                            </p>
                        </div>
                        <p className="text-muted text-left">
                            Điểm đặc biệt của chương trình là sự ra đời của phiên bản giới hạn Sáp Dưỡng Ẩm Đa Năng Sen Hậu Giang. Hy vọng đây sẽ là chiếc cầu nối giữa những trái tim ấm áp và những giấc mơ chưa trọn vẹn của trẻ em vùng cao. Trên bao bì ấy, những nét vẽ ngây thơ từ dự án Em’s của UNESCO-CEP khẽ kể câu chuyện về sự sáng tạo, về những tâm hồn nhỏ đang khao khát một thế giới rực rỡ hơn.
                        </p>
                        {/* Hình ảnh */}
                        <div className="text-center">
                            <img src="/images/post4.jpg" alt="" className="img-fluid rounded shadow-sm" />
                        </div>
                        <p className="text-muted text-left">
                            Chương trình dự kiến sẽ đóng góp 300 triệu đồng để xây dựng sân chơi cho các em học sinh tại điểm trường xã Bản Nghè, huyện Bắc Mê, tỉnh Hà Giang. Đây là nỗ lực chung của chúng tôi nhằm cải thiện không gian vui học cho trẻ em vùng cao, mang lại cho các em cơ hội phát triển cả về thể chất lẫn tinh thần.
                        </p>
                        {/* Hình ảnh */}
                        <div className="text-center">
                            <img src="/images/post4_1.jpg" alt="" className="img-fluid rounded shadow-sm" />
                        </div>
                        {/* Hình ảnh */}
                        <div className="text-center">
                            <img src="/images/post4_2.jpg" alt="" className="img-fluid rounded shadow-sm" />
                        </div>
                        <p className="text-muted text-left">
                            Cocoon x UNESCO-CEP và dự án Em’s sẽ cần rất nhiều sự sẻ chia của các bạn để chương trình “Ửng Hồng Không Ửng Đỏ” lan tỏa rộng rãi đến với mọi người. Hãy chung tay cùng chúng tôi vì một tương lai tốt đẹp hơn cho trẻ em vùng cao nói riêng và trẻ em Việt Nam nói chung.
                        </p>
                        {/* Hình ảnh */}
                        <div className="text-center">
                            <img src="/images/post4_3.jpg" alt="" className="img-fluid rounded shadow-sm" />
                        </div>
                        {/* Hình ảnh */}
                        <div className="text-center">
                            <img src="/images/post4_5.jpg" alt="" className="img-fluid rounded shadow-sm" />
                        </div>
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

export default Post4;
