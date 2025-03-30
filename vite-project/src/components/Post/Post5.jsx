import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Post5() {
    return (
        <div className="community-responsibility bg-light py-5 main">
            <div className="container">
                <div className="row">
                    {/* Cột trái - Thông tin bài viết */}
                    <div className="col-md-3">
                        <p className="text-sm uppercase lg:text-lg font-barlow-condensed text-typo-heading">
                            <span className="font-semibold">Cocoon</span>
                            &nbsp;/&nbsp;
                            <span className="lg:text-typo-heading">01.09.24</span>
                            &nbsp;/&nbsp;
                            <span>13 phút</span>
                        </p>
                        <h5 className="italic title font-vollkorn text-typo-heading">
                            Chương trình "Cùng Cocoon Sống Xanh Mỗi Ngày" năm 2024
                        </h5>
                        <p className="text-muted mt-2 fst-italic">By Hồng Hoa</p>
                    </div>

                    {/* Cột giữa - Nội dung chia sẻ */}
                    <div className="col-md-6 middle-column">
                        <h5 className="fw-bold section-title">THU HỒI VỎ CHAI CŨ - NHẬN QUÀ TẶNG</h5>
                        <div className="highlight-box p-3 mb-3 bg-light border rounded">
                            <p className="text-muted text-left">
                                • Thời gian diễn ra đến hết ngày 20/12/2024
                            </p>
                        </div>
                        <p className="text-muted text-left">
                            Chương trình Thu Hồi Vỏ Chai Cũ được Cocoon khởi xướng từ tháng 4/2021 đã thu hút được sự tham gia nhiệt tình từ khách hàng, đặc biệt qua hình thức online. Đây không chỉ là nỗ lực của Cocoon trong việc giảm thiểu rác thải nhựa mà còn là lời cam kết mạnh mẽ hướng đến một môi trường bền vững. Để tăng cường tính thuận tiện cho khách hàng và mở rộng quy mô chương trình, Cocoon đã quyết định đưa hoạt động này đến gần hơn với mọi người.
                        </p>
                        <p className="text-muted text-left">
                            Với 115 điểm thu hồi (ĐIỂM XANH) được triển khai tại 25 tỉnh thành trên khắp Việt Nam, khách hàng giờ đây có thể dễ dàng tham gia vào việc thu hồi vỏ chai cũ tại các "ĐIỂM XANH", mang đến trải nghiệm trực tiếp và gần gũi hơn. Đây là bước tiến mới giúp lan tỏa tinh thần bảo vệ môi trường, đồng thời giúp Cocoon và khách hàng cùng chung tay tạo ra những thay đổi tích cực.
                        </p>
                        {/* Hình ảnh */}
                        <div className="text-center">
                            <img src="/images/post5.jpg" alt="" className="img-fluid rounded shadow-sm" />
                        </div>
                        <p className="text-muted text-left">
                            Danh sách các "ĐIỂM XANH": <a href="https://bit.ly/Danh-sach-Diem-Xanh-2024" target="_blank" rel="noopener noreferrer">https://bit.ly/Danh-sach-Diem-Xanh-2024</a>
                        </p>
                        <h6 className="fw-bold">QUY ĐỊNH QUY ĐỔI:</h6>
                        <ul className="text-muted text-left">
                            <li>5 VỎ CHAI, HŨ, TUÝP, TÚI REFILL (full size) từ Cocoon đổi lấy 1 TÚI VẢI THỰC HÀNH SỐNG XANH trị giá 185.000đ</li>
                        </ul>
                        <p className="text-muted text-left">
                            LƯU Ý: Chúng tôi thu hồi tất cả vỏ chai, hũ, tuýp, túi refill từ Cocoon, tuy nhiên QUÀ TẶNG TÚI VẢI KHÔNG ÁP DỤNG với vỏ các sản phẩm mini size và dạng thỏi, cụ thể:
                        </p>
                        <ul className="text-muted text-left">
                            <li>Gel/sữa rửa mặt/nước tẩy trang/toner dung tích 50ml</li>
                            <li>Tinh chất dung tích 5ml</li>
                            <li>Sữa chống nắng bí đao 5ml</li>
                            <li>Son dưỡng dầu dừa Bến Tre 5g</li>
                            <li>Cà phê Đắk Lắk làm sạch da chết môi 5g</li>
                        </ul>
                        {/* Hình ảnh */}
                        <div className="text-center">
                            <img src="/images/post5_1.jpg" alt="" className="img-fluid rounded shadow-sm" />
                        </div>
                        <h6 className="fw-bold">Tham gia ngay:</h6>
                        <ol className="text-muted text-left">
                            <li>Chuẩn bị vỏ chai cũ của Cocoon đã được vệ sinh sạch sẽ</li>
                            <li>Mang tối thiểu 5 vỏ chai cũ đến điểm thu hồi gần bạn nhất</li>
                            <li>Làm theo hướng dẫn của nhân viên tại Điểm Xanh và nhận quà tặng</li>
                        </ol>
                        <p className="text-muted text-left">
                            Lưu ý:
                        </p>
                        <ul className="text-muted text-left">
                            <li>Chương trình thu hồi tất cả vỏ chai Cocoon nhưng không áp dụng quy đổi quà tặng đối với các loại vỏ mini size, vỏ son/vỏ tẩy da chết môi.</li>
                            <li>Vỏ chai/hũ cũ phải được vệ sinh sạch sẽ</li>
                            <li>Sản phẩm quà tặng không có giá trị quy đổi thành tiền mặt</li>
                        </ul>
                        {/* Hình ảnh */}
                        <div className="text-center">
                            <img src="/images/post5_2.jpg" alt="" className="img-fluid rounded shadow-sm" />
                        </div>
                        <p className="text-muted text-left">
                            Hãy cùng Cocoon chung tay thu gom những vỏ chai nhựa cũ, để mỗi hành động nhỏ đều trở thành một bước tiến trong hành trình bảo vệ môi trường. Khi bạn tham gia chương trình, không chỉ là bạn đang đóng góp vào việc giảm thiểu rác thải nhựa, mà còn cùng Cocoon lan tỏa tinh thần sống xanh mỗi ngày. Hãy bắt đầu từ hôm nay, cùng nhau tạo nên những thay đổi tích cực cho Trái Đất.
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

export default Post5;
