import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Post.css";

function Post1() {
    return (
        <div className="community-responsibility bg-light py-5 main">
            <div className="container">
                <div className="row">
                    {/* Cột trái - Thông tin bài viết */}
                    <div className="col-md-3">
                        <p className="text-sm uppercase lg:text-lg font-barlow-condensed text-typo-heading">
                            <span className="font-semibold">Làm đẹp</span>
                            &nbsp;/&nbsp;
                            <span className="lg:text-typo-heading">01.10.21</span>
                            &nbsp;/&nbsp;
                            <span>12 phút</span>
                        </p>
                        <h5 className="italic title font-vollkorn text-typo-heading">
                            Vài “tip” giúp bạn tận hưởng trọn vẹn từng giây phút làm sạch da chết trên cơ thể cùng Cà phê Đắk Lắk
                        </h5>
                        <p className="text-muted mt-2 fst-italic">By Hồng Hoa</p>
                    </div>

                    {/* Cột giữa - Nội dung chia sẻ */}
                    <div className="col-md-6 middle-column">
                        <h5 className="fw-bold section-title">Chia sẻ</h5>
                        <p className="text-muted text-left">
                            Bạn có đoán được một nơi mà chúng ta được trở về với chính mình, thoải mái thể hiện những cảm xúc của bạn thân và cho phép mình được gác lại hết bộn bề của cuộc sống là ở đâu không? Không nơi nào khác, đó chính là căn phòng tắm yêu thích của bạn đó.
                        </p>
                        <div className="highlight-box">
                            <p>
                                Và Cocoon sẽ rất vui khi được giúp bạn rũ bỏ những áp lực, muộn phiền như cách những hạt cà phê Đắk Lắk nhuyễn, mịn của chúng tôi cuốn đi những lớp da chết xỉn màu, xấu xí trên cơ thể của bạn.
                            </p>
                        </div>

                        {/* Ảnh minh họa */}
                        <div className="text-center">
                            <img
                                src="/images/post1.jpg"
                                alt="Cà phê Đắk Lắk làm sạch da chết"
                                className="img-fluid rounded shadow-sm"
                            />
                        </div>

                        <p className="text-muted text-left">
                            Hãy thử áp dụng một vài tip sau để gia tăng thêm những trải nghiệm thật “chill” với sản phẩm Cà phê Đắk Lắk làm sạch da chết cơ thể: <br />

                            Hãy tiến hành tẩy da chết trên da ướt hoặc tốt nhất là sau khi cơ thể đã được làm sạch bằng sữa tắm. Bởi khi làn da được ướt, các lỗ chân lông sẽ được kích thích giãn nở và trở nên mềm mại hơn giúp cho trong quá trình tẩy tế bào da chết trên cơ thể dễ dàng và dễ chịu hơn. <br />
                            Tán đều sản phẩm lên khắp cơ thể của bạn theo chuyển động tròn hoặc xoắn ốc để những hạt “scrub” cà phê dễ dàng lấy đi những lớp da chết trên mọi “ngóc ngách” của cơ thể. Hãy thực hiện các động tác mát- xa này thật nhẹ nhàng, điều đó sẽ vừa giúp cơ thể của bạn được thư giãn vừa kích thích sự phát triển của các tế bào da mới. <br />
                            Buổi tối chính là thời điểm tuyệt vời để làm sạch da chết trên cơ thể vì đây là lúc làn da không phải đối diện với những tác nhân xấu từ môi trường, bên cạnh đó, ban đêm cũng là "thời gian vàng" cho làn da nghỉ ngơi để quá trình tái tạo và phục hồi da diễn ra tốt hơn. <br />
                            Hãy chủ động làm sạch da chết cơ thể với Cà phê Đắk Lắk làm sạch da chết cơ thể từ 2 – 3 lần/tuần để luôn cảm nhận được một làn da tươi mới, đều màu và đặc biệt là cảm giác mềm mịn lan tỏa khắp làn da cơ thể. <br />
                            Đừng quên bảo vệ làn da sau khi làm sạch các lớp da chết bằng cách kết hợp dưỡng ẩm với Bơ dưỡng thể cà phê Đắk Lắk để duy trì trạng thái khỏe khoắn, tươi trẻ cho toàn bộ cơ thể. <br /> <br />
                            Hãy chia sẻ thêm với Cocoon những tip bạn đang áp dụng để thật sự tận hưởng giây phút yêu thương bản thân cùng cà phê Đắk Lắk nhé!
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
                                link: "/coocoon/bai-viet/post4",
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
export default Post1;
