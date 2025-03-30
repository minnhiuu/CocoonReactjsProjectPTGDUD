import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Post3() {
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
                            <span>14 phút</span>
                        </p>
                        <h5 className="italic title font-vollkorn text-typo-heading">
                            Da dầu, mụn sẽ “ăn chay” như thế nào?
                        </h5>
                        <p className="text-muted mt-2 fst-italic">By Hồng Hoa</p>
                    </div>

                    {/* Cột giữa - Nội dung chia sẻ */}
                    <div className="col-md-6 middle-column">
                        <h5 className="fw-bold section-title">Chia sẻ</h5>
                        <div className="highlight-box p-3 mb-3 bg-light border rounded">
                            <p className="text-muted text-left">
                                Vẻ đẹp của làn da được xem như một tấm gương phản chiếu tốt nhất về tình trạng sức khỏe thể chất và tinh thần của chúng ta.
                            </p>
                        </div>
                        <p className="text-muted text-left">
                            Giống như các loại da khác, da dầu cũng sẽ đạt được trạng thái khỏe mạnh và mịn màng nếu được làm sạch đúng cách và được bảo vệ với các sản phẩm phù hợp. Với đặc điểm lỗ chân lông to, tuyến bã nhờn hoạt động liên tục khiến bề mặt da luôn bóng nhẫy và dễ lên mụn, do vậy, da dầu sẽ cần những “món ăn” giàu các hoạt chất hỗ trợ điều trị và ngăn ngừa mụn, công thức oil-free cùng kết cấu mỏng nhẹ, thấm nhanh.
                        </p>
                        <p className="text-muted text-left">
                            Trải qua nhiều thời gian nghiên cứu về đặc trưng làn da dầu của người Việt cũng như đặc điểm khí hậu tại Việt Nam và chọn lọc những thành phần tự nhiên phù hợp, chúng tôi đã thiết kế nên 7 "món chay" thịnh soạn từ BÍ ĐAO bao gồm: nước tẩy trang - gel rửa mặt - nước cân bằng da - mặt nạ - tinh chất - thạch dưỡng - chấm mụn.
                        </p>
                        <p className="text-muted text-left">
                            Trong thực đơn này, chúng tôi đặc biệt đầu tư cho bảng thành phần của mỗi “món ăn”, tất cả đều không có nguồn gốc từ động vật và không thử nghiệm trên động vật, đảm bảo hiệu quả, an toàn và thân thiện với làn da dầu, mụn, có thể kể đến các thành phần thuần chay nổi bật như:
                        </p>
                        <ul className="text-muted text-left">
                            <li><b>Bí đao:</b> giúp giảm bớt tình trạng căng thẳng và khó chịu của làn da đang bị mụn. Dịch chiết từ loại quả này còn có tác dụng kháng khuẩn, chống ôxi hoá, hạn chế sự hình thành những gốc tự do, từ đó giúp điều hoà và làm dịu mụn viêm.</li>
                            <li><b>Chiết xuất từ rau má:</b> đẩy nhanh quá trình phục hồi, làm lành tổn thương của làn da, tăng cường sản sinh collagen, giúp những vết mụn viêm được làm dịu và nhanh lành, đồng thời giảm tình trạng để lại sẹo xấu sau mụn.</li>
                            <li><b>Tinh dầu tràm trà:</b> giúp kháng khuẩn mạnh, giảm viêm hiệu quả giúp giảm đỏ và làm dịu các vết mụn đang sưng tấy nhanh chóng.</li>
                            <li><b>5α-AVOCUTA® (chiết xuất từ quả bơ):</b> giúp ức chế mạnh mẽ hoạt động của enzyme 5α-reductase loại 1 - loại enzyme kích thích sự chuyển đổi của hooc-môn trong cơ thể làm tuyến bã nhờn to ra và tiết bã nhờn nhiều hơn - từ đó sẽ giảm tiết dầu thừa và ngăn ngừa tình trạng mụn.</li>
                        </ul>
                        <p className="text-muted text-left">
                            Ngoài ra, các món chay từ bí đao của chúng tôi còn được bổ sung thêm các thành phần khác như: BHA, TECA, Vitamin B3, B5, Betaine, chiết xuất cam thảo… hỗ trợ thêm cho quá trình làm thông thoáng lỗ chân lông, điều tiết bã nhờn, cấp ẩm và cải thiện tình trạng mụn.
                        </p>
                        <p className="text-muted text-left">
                            Bên cạnh đó, chúng tôi còn đặc biệt chú ý đến cách mình “chế biến” các thành phần này thành những “món ăn” hoàn chỉnh, làm sao để tạo nên những kết cấu phù hợp nhất với đặc điểm của làn da dầu, mụn. Chúng tôi luôn ưu tiên sự lỏng nhẹ, thẩm thấu nhanh để mang đến cảm giác thông thoáng và êm dịu nhất cho làn da này.
                        </p>
                    </div>

                    {/* Cột phải - Bài viết phổ biến */}
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
export default Post3;
