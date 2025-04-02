import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import './StoryBrand.css';

function StoryBrand() {
    const ingredientsImages = [
        "/images/20676_Cocoonmyphamthuanchay_2_1595824804.jpeg",
        "/images/my-pham-thien-nhien-viet-nam-3.jpg",
        "/images/my-pham-thuan-chay-cocoon_2.jpg",
        "/images/thaun-chay.jpg",
        "/images/thien-nhien-cocoon.jpg"
    ];
    const philosophyImages = [
        "/images/myphamthuanchay-cocoon-final-3.jpg",
        "/images/cocoon-thuan-chay-4-1.jpg",
        "/images/my-pham-thuan-chay-cocoon_2.jpg",
        "/images/thaun-chay.jpg",
        "/images/thien-nhien-cocoon.jpg"
    ];
    return (
        <div className="story-brand">
            <p className="title">Câu chuyện thương hiệu</p>
            <div className="story">
                
            <div className="brand-introduction">
                {/* Ý nghĩa thương hiệu */}
                <div className="brand-meaning">
                    <div className="text-content">
                        <span className='large-text'>Ý nghĩa thương hiệu</span> <br />
                        Cocoon có nghĩa là “cái kén”, nơi ủ ấp và nuôi dưỡng con sâu nhỏ để trở thành nàng bướm rực rỡ. 
                        Cũng như vậy, Cocoon chính là "ngôi nhà" giúp chăm sóc làn da, mái tóc của người Việt bằng nguồn nguyên liệu thuần khiết, gần gũi.
                    </div>
                    <div className="image-content">
                        <img src="/images/hinh-anh-con-buom-dep-dau-tren-bong-hoa.jpg" alt="Hình ảnh cái kén và cánh bướm" />
                    </div>
                </div>

                {/* Triết lý với Swiper */}
                <div className="philosophy">
    <div className="text-content">
        <span className="large-text">Triết lý</span> <br />
        Chúng tôi tin rằng mỹ phẩm cũng như thực phẩm – đều là những "món ăn bổ dưỡng" cho vẻ đẹp tự nhiên. 
        Với sự phong phú của thực vật Việt Nam, chúng tôi lựa chọn nguyên liệu từ rau củ, trái cây, 
        giữ trọn vẹn dưỡng chất để mang đến làn da khỏe mạnh và tỏa sáng.
    </div>
    
    {/* Swiper full màn hình dưới nội dung */}
    <div className="image-slider">
        <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
        >
            {ingredientsImages.map((src, index) => (
                <SwiperSlide key={index}>
                    <img src={src} alt="Nguyên liệu tự nhiên" />
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
</div>
</div>

<div className="brand-section">
                <div className="brand-mission">
                    <span className='large-text'>Sứ mệnh</span> <br />
                    Chúng tôi cam kết mang đến giải pháp chăm sóc da và tóc an toàn, hiệu quả từ nguyên liệu thuần chay kết hợp với khoa học tiên tiến. 
                    Hành trình tìm kiếm vẻ đẹp chân thật không chỉ của riêng bạn – Cocoon luôn đồng hành cùng bạn.

                    <div className="brand-commitment">

                        <span className='large-bold'>100% nguyên liệu có nguồn gốc rõ ràng:</span> Được kiểm nghiệm chặt chẽ và tuân thủ tiêu chuẩn quốc tế. <br />
                        <span className='large-bold'>100% thuần chay:</span> Không sử dụng nguyên liệu từ động vật. <br />
                        <span className='large-bold'>100% không thử nghiệm trên động vật:</span> Được chứng nhận bởi Leaping Bunny và PETA.
                    </div>
                    <div className="image-slider2">
                        <Swiper
                            modules={[Autoplay, EffectFade, Navigation]}
                            spaceBetween={0}
                            slidesPerView={1}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            loop={true}
                            effect='fade'
                            navigation
                        >
                            {philosophyImages.map((src, index) => (
                                <SwiperSlide key={index}>
                                    <img src={src} alt="Hình ảnh gợi ý sứ mệnh" className="zoom-effect" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>

                {/* Giá trị thương hiệu */}
                <div className="brand-value">
                    <span className='large-text'>Cocoon tự hào là thương hiệu mỹ phẩm 100% sản xuất tại Việt Nam</span> <br />
                    
                    <span>Với sự nghiên cứu nghiêm túc và tình yêu dành cho thiên nhiên Việt Nam, Cocoon mang đến những sản phẩm thuần chay chất lượng, tôn vinh vẻ đẹp Việt.</span>
                    <div className="image-full">
                        <img src="/images/Chien-luoc-marketing-cua-Cocoon-1.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoryBrand;
