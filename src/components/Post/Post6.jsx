import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Post6() {
    return (
        <div className="community-responsibility bg-light py-5 main">
            <div className="container">
                <div className="row">
                    {/* Cột trái - Thông tin bài viết */}
                    <div className="col-md-3">
                        <p className="text-sm uppercase lg:text-lg font-barlow-condensed text-typo-heading">
                            <span className="font-semibold">Cocoon</span>
                            &nbsp;/&nbsp;
                            <span className="lg:text-typo-heading">15.05.24</span>
                            &nbsp;/&nbsp;
                            <span>10 phút</span>
                        </p>
                        <h5 className="italic title font-vollkorn text-typo-heading">
                            Cocoon x AAF: Chung tay cứu trợ chó mèo lang thang cùng Tổ chức Động vật Châu Á
                        </h5>
                        <p className="text-muted mt-2 fst-italic">By Hồng Hoa</p>
                    </div>

                    {/* Cột giữa - Nội dung chia sẻ */}
                    <div className="col-md-6 middle-column">
                        <h5 className="fw-bold section-title">Tiếp sức cho những chú chó mèo lang thang</h5>
                        <p className="text-muted text-left">
                            Tiếp tục sự đồng lòng trong việc yêu thương và tôn trọng động vật cũng như cảm nhận rõ ràng thực trạng chó mèo lang thang hiện nay, vào ngày 27/12/2023, Mỹ Phẩm Thuần Chay Cocoon đồng hành cùng Tổ Chức Động Vật Châu Á AAF trong lễ ký kết "CHUNG TAY CỨU TRỢ CHÓ MÈO LANG THANG". Chúng tôi cam kết hướng đến các mục tiêu quan trọng trong chiến dịch lần này:
                        </p>
                        <ul className="text-muted text-left">
                            <li>Trao tặng lương thực, các vật dụng cần thiết và hỗ trợ các phúc lợi về y tế cho các trạm cứu hộ chó mèo tại Việt Nam.</li>
                            <li>Triển khai chương trình tiêm chủng vắc xin phòng bệnh dại cho chó mèo trong cộng đồng.</li>
                            <li>Lan tỏa về lòng yêu thương và ý thức trách nhiệm khi nhận nuôi chó mèo.</li>
                        </ul>
                        {/* Hình ảnh */}
                        <div className="text-center">
                            <img src="/images/post6_1.jpg" alt="Cocoon x AAF" className="img-fluid rounded shadow-sm" />
                        </div>
                        <p className="text-muted text-left">
                            Trong khuôn khổ của chiến dịch lần này, Cocoon và AAF sẽ kết hợp cho ra mắt các PHIÊN BẢN GIỚI HẠN, với mỗi sản phẩm giới hạn được bán ra, chúng tôi sẽ trích 10.000đ ủng hộ vào quỹ của AAF để thực hiện dự án này.
                        </p>
                        {/* Hình ảnh */}
                        <div className="text-center">
                            <img src="/images/post6_2.jpg" alt="Phiên bản giới hạn" className="img-fluid rounded shadow-sm" />
                        </div>
                        <p className="text-muted text-left">
                            Thông qua chiến dịch “CHUNG TAY CỨU TRỢ CHÓ MÈO LANG THANG”, chúng tôi mong muốn lan toả ý thức cộng đồng, trách nhiệm với các em chó mèo, và được góp thêm một phần nhỏ bé trong việc cung cấp nguồn lực cho các trạm cứu hộ, giúp duy trì và nâng cao phúc lợi của chó mèo lang thang, đồng thời, lan tỏa sự khích lệ và sẻ chia từ cộng đồng đến với những cá nhân, tập thể đang điều hành trạm và thực hiện công tác cứu hộ chó mèo.
                        </p>
                        <p className="text-muted text-left">
                            Cocoon x AAF sẽ cần rất nhiều sự chung tay của các bạn, hãy cùng chúng tôi chia sẻ yêu thương với những “người bạn bốn chân” nhé!
                        </p>
                        {/* Hình ảnh */}
                        <div className="text-center">
                            <img src="/images/post6_3.jpg" alt="Chó mèo dễ thương" className="img-fluid rounded shadow-sm" />
                        </div>
                        <h6 className="fw-bold">Cocoon đặc biệt thiết kế 10 chiếc áo mới với hình ảnh của chó mèo:</h6>
                        <ul className="text-muted text-left">
                            <li>Chó Corgi</li>
                            <li>Chó Cỏ</li>
                            <li>Chó Husky</li>
                            <li>Chó Pug</li>
                            <li>Chó Poodle</li>
                            <li>Mèo Mướp Vàng</li>
                            <li>Mèo Xiêm</li>
                            <li>Mèo Anh Lông Ngắn</li>
                            <li>Mèo Ba Tư</li>
                            <li>Mèo Ai Cập</li>
                        </ul>
                        {/* Hình ảnh */}
                        <div className="text-center">
                            <img src="/images/post6_4.jpg" alt="Áo với hình ảnh chó mèo" className="img-fluid rounded shadow-sm" />
                        </div>
                                                {/* Hình ảnh */}
                                                <div className="text-center">
                            <img src="/images/post6_5.jpg" alt="Áo với hình ảnh chó mèo" className="img-fluid rounded shadow-sm" />
                        </div>
                                                {/* Hình ảnh */}
                                                <div className="text-center">
                            <img src="/images/post6_6.jpg" alt="Áo với hình ảnh chó mèo" className="img-fluid rounded shadow-sm" />
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

export default Post6;
