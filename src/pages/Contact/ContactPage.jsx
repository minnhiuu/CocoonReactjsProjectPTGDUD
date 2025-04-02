import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaGoogle, FaApple } from 'react-icons/fa';
import './ContactPage.css';

function ContactPage() {
    return (
        <div className="contact-page">
            <div className="container">
                <section className="contact-header">
                    <h1>Liên Hệ Với Chúng Tôi</h1>
                    <p>Chúng tôi luôn sẵn sàng lắng nghe ý kiến của bạn. Vui lòng liên hệ với chúng tôi qua các kênh sau</p>
                </section>

                <div className="contact-main">
                    <section className="contact-map-section"> {/* Container cho ảnh và bản đồ */}
                        <div className="company-image"> {/* Ảnh đại diện công ty */}
                            <img src="/images/hinhlienhe.jpg" alt="Logo công ty"/> 
                        </div>
                        <section className="contact-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.66787087763!2d106.66257271140599!3d10.760059859449496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ee56696af85%3A0x3fea8ff6e56548db!2zxJAuIMSQw6BvIER1eSBU4burLCBRdeG6rW4gMTAsIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1742464532365!5m2!1svi!2s"
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Bản đồ vị trí"
                            ></iframe>
                        </section>
                    </section>

                    <section className="contact-details">
                        <section className="contact-info">
                            <h2>Thông Tin Liên Hệ</h2>
                            <div className="info-grid">
                                <div className="info-item">
                                    <FaEnvelope className="icon" />
                                    <a href="mailto:info@cocoonvietnam.com">info@cocoonvietnam.com</a>
                                </div>
                                <div className="info-item">
                                    <FaPhone className="icon" />
                                    1900 633 307
                                </div>
                                <div className="info-item">
                                    <FaMapMarkerAlt className="icon" />
                                    140I, KDC Đào Duy Từ, Quận 10, TP. Hồ Chí Minh
                                </div>
                                {/* Social Media Icons */}
                                <div className="social-icons-container">
                                   <div className="d-flex justify-content gap-3">
                                        <FaGoogle className="text-danger fs-2 cursor-pointer" />
                                        <FaFacebook className="text-primary fs-2 cursor-pointer" style={{ marginLeft: "30px" }} />
                                        <FaApple className="fs-2 cursor-pointer" style={{ marginLeft: "30px" }} />
                                   </div>
                                </div>
                            </div>
                        </section>

                        <section className="contact-form">
                            <h2>Gửi Tin Nhắn Cho Chúng Tôi</h2>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">Tên của bạn:</label>
                                    <input type="text" id="name" name="name" className="form-control" placeholder="Nhập tên của bạn" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email của bạn:</label>
                                    <input type="email" id="email" name="email" className="form-control" placeholder="Nhập email của bạn" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Tin nhắn của bạn:</label>
                                    <textarea id="message" name="message" className="form-control" rows="5" placeholder="Nhập tin nhắn của bạn" required />
                                </div>
                                <button type="submit" className="btn btn-primary">Gửi tin nhắn</button>
                            </form>
                        </section>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;