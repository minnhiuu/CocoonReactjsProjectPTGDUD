import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
function Footer() {
  return (
    <footer className="footer mt-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col p-0 m-0">
          <Carousel className="custom-carousel">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/footer_1.jpg"
                    alt="First slide"
                />
                <div className="carousel-caption centered-caption">
                    <h2>“Cocoon Vietnam – Từ mầm xanh làm đẹp đến giải thưởng danh giá tại ELLE Beauty Awards 2021”</h2>
                    <p className="fw-700">ELLE VIETNAM</p>
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/footer_1.jpg"
                    alt="Second slide"
                />
                <div className="carousel-caption centered-caption">
                    <h2>"Cocoon - Mỹ phẩm thuần chay cho nét đẹp thuần Việt"</h2>
                    <p>ELLE VIETNAM</p>
                </div>
            </Carousel.Item>

           
        </Carousel>
          </div>
        </div>
        <div className="footer-content container-fluid p-0 m-0 ">
          <div className="row">
          <div className="col-6 p-0 m-0">
            <div className="footer-img-box">
              <img src="/images/footer-image.jpg" alt="Footer" />
            </div>
          </div>
          <div className="col-6 p-0 m-0">
            <div className="row p-4 footer-about">
              <div className="col-md-4">
                <h6 className="fw-bold">Hỗ trợ khách hàng</h6>
                <ul className="list-unstyled">
                  <li>
                    <a href="/">Hỏi đáp</a>
                  </li>
                  <li>
                    <a href="/">Hướng dẫn mua hàng</a>
                  </li>
                  <li>
                    <a href="/">Chính sách bán hàng</a>
                  </li>
                  <li>
                    <a href="/">Điều khoản bảo mật</a>
                  </li>
                  <li>
                    <a href="/">Điều kiện chung</a>
                  </li>
                  <li>
                    <a href="/">Liên hệ chúng tôi</a>
                  </li>
                </ul>
              </div>

              <div className="col-md-4">
                <h6 className="fw-bold">Về Cocoon</h6>
                <ul className="list-unstyled">
                  <li>
                    <a href="/">Câu chuyện thương hiệu</a>
                  </li>
                  <li>
                    <a href="/">Giá trị cốt lõi</a>
                  </li>
                  <li>
                    <a href="/">Trách nhiệm cộng đồng</a>
                  </li>
                  <li>
                    <a href="/">Tìm hiểu nguyên liệu</a>
                  </li>
                </ul>
              </div>

              <div className="col-md-4">
                <h6 className="fw-bold">Mạng xã hội</h6>
                <ul className="list-unstyled">
                  <li>
                    <a href="/">Facebook ↗</a>
                  </li>
                  <li>
                    <a href="/">Instagram ↗</a>
                  </li>
                  <li>
                    <a href="/">Youtube ↗</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row footer-bottom p-3 m-0">
              <p className="text-center ">
                WEBSITE THUỘC QUYỀN CÔNG TY CỔ PHẦN Y&B
                <br />
                Địa chỉ: 140I, KDC Đào Duy Từ, Quận 10, TP. Hồ Chí Minh
                <br />
                Email: web@cocoonvietnam.com
                <br />
                <br />
                SẢN XUẤT VÀ CHỊU TRÁCH NHIỆM VỀ HÀNG HÓA
                <br />
                CÔNG TY TNHH NATURE STORY
                <br />
                Địa chỉ: Lô 1F2A-1F2B, KCN Xuyên Á, Long An
                <br />
                Điện thoại: 1900 633 307 - Email: web@cocoonvietnam.com
              </p>

              <div className="social-icons text-center">
                <img
                  src="/images/daThongBao.png"
                  alt="Đã thông báo Bộ Công Thương"
                  className="me-3"
                />
                {/* <a href="/" className="btn btn-icon">
                  <i className="fas fa-phone"></i>
                </a>
                <a href="/" className="btn btn-icon">
                  <i className="fas fa-comments"></i>
                </a>
                <a href="/" className="btn btn-icon">
                  <i className="fab fa-facebook-messenger"></i>
                </a>
                <a href="/" className="btn btn-icon">
                  <i className="fas fa-times"></i>
                </a> */}
              </div>

              <p className="text-center mt-2 small">
                © 2025 Cocoon Vietnam. All rights reserved.
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
