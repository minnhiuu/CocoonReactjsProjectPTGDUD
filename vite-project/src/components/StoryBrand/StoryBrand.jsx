import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { motion, useInView } from 'framer-motion';

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

    const introRef = useRef(null);
    const introInView = useInView(introRef, { once: true, margin: '-5px' });
    const meaningRef = useRef(null);
    const meaningInView = useInView(meaningRef, { once: true, margin: '-5px' });
    const philosophyRef = useRef(null);
    const philosophyInView = useInView(philosophyRef, { once: true, margin: '-5px' });
    const missionRef = useRef(null);
    const missionInView = useInView(missionRef, { once: true, margin: '-5px' });
    const valueRef = useRef(null);
    const valueInView = useInView(valueRef, { once: true, margin: '-5px' });

    return (
        <div className="story-brand">
            <p className="title">Câu chuyện thương hiệu</p>
            <div className="story">

                <motion.div
                    className="brand-introduction"
                    ref={introRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={introInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1 }}
                >

                    <motion.div
                        className="brand-meaning"
                        ref={meaningRef}
                        initial={{ opacity: 0, y: 60 }}
                        animate={meaningInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <div className="text-content">
                            <span className='large-text'>Ý nghĩa thương hiệu</span>
                            <p>
                                Cocoon có nghĩa là “cái kén”, nơi ủ ấp và nuôi dưỡng con sâu nhỏ để trở thành nàng bướm rực rỡ.
                                Cũng như vậy, Cocoon chính là "ngôi nhà" giúp chăm sóc làn da, mái tóc của người Việt bằng nguồn nguyên liệu thuần khiết, gần gũi.
                            </p>
                        </div>
                        <div className="image-content">
                            <img src="/images/hinh-anh-con-buom-dep-dau-tren-bong-hoa.jpg" alt="Cái kén và cánh bướm" />
                        </div>
                    </motion.div>

                    <motion.div
                        className="philosophy"
                        ref={philosophyRef}
                        initial={{ opacity: 0, y: 60 }}
                        animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        <div className="text-content">
                            <span className="large-text">Triết lý</span>
                            <p>
                                Chúng tôi tin rằng mỹ phẩm cũng như thực phẩm – đều là những "món ăn bổ dưỡng" cho vẻ đẹp tự nhiên.
                                Với sự phong phú của thực vật Việt Nam, chúng tôi lựa chọn nguyên liệu từ rau củ, trái cây,
                                giữ trọn vẹn dưỡng chất để mang đến làn da khỏe mạnh và tỏa sáng.
                            </p>
                        </div>

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
                                        <img src={src} alt={`Nguyên liệu ${index + 1}`} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="brand-section"
                    ref={missionRef}
                    initial={{ opacity: 0, y: 60 }}
                    animate={missionInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    <motion.div
                        className="brand-mission"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={missionInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 1, delay: 0.8 }}
                    >
                        <span className='large-text'>Sứ mệnh</span>
                        <p>
                            Chúng tôi cam kết mang đến giải pháp chăm sóc da và tóc an toàn, hiệu quả từ nguyên liệu thuần chay kết hợp với khoa học tiên tiến.
                            Hành trình tìm kiếm vẻ đẹp chân thật không chỉ của riêng bạn – Cocoon luôn đồng hành cùng bạn.
                        </p>

                        <div className="brand-commitment">
                            <ul>
                                <li><span className='large-bold'>100% nguyên liệu có nguồn gốc rõ ràng:</span> Được kiểm nghiệm chặt chẽ và tuân thủ tiêu chuẩn quốc tế.</li>
                                <li><span className='large-bold'>100% thuần chay:</span> Không sử dụng nguyên liệu từ động vật.</li>
                                <li><span className='large-bold'>100% không thử nghiệm trên động vật:</span> Được chứng nhận bởi Leaping Bunny và PETA.</li>
                            </ul>
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
                                        <img src={src} alt={`Hình ảnh sứ mệnh ${index + 1}`} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </motion.div>

                    <motion.div
                        className="brand-value"
                        ref={valueRef}
                        initial={{ opacity: 0, y: 50 }}
                        animate={valueInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        <span className='large-text'>Cocoon tự hào là thương hiệu mỹ phẩm 100% sản xuất tại Việt Nam</span>
                        <p>
                            Với sự nghiên cứu nghiêm túc và tình yêu dành cho thiên nhiên Việt Nam,
                            Cocoon mang đến những sản phẩm thuần chay chất lượng, tôn vinh vẻ đẹp Việt.
                        </p>
                        <div className="image-full">
                            <img src="/images/Chien-luoc-marketing-cua-Cocoon-1.jpg" alt="Chiến lược marketing Cocoon" />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default StoryBrand;
