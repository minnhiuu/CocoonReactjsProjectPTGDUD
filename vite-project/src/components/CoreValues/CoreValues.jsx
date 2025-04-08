import React from 'react';
import './CoreValues.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import 'swiper/css';
import 'swiper/css/autoplay';

function CoreValues() {
  const ingredientsImages = [
    "/images/nguyen-lieu.jpg",
    "/images/photo-2-1578394277713418268230.jpg",
    "/images/cocoon-thuan-chay-vietnam.jpg",
    "/images/86b5efee2b938eb45c365e1c91d40225.jpg",
    "/images/thien-nhien-cocoon.jpg"
  ];

  // Tạo ref để theo dõi phần tử cuộn vào
  const { ref: coreValuesRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="core-values" ref={coreValuesRef}>
      <h2 className="core-values-title-1">Giá trị cốt lõi của Cocoon 🌱</h2>

      <motion.div
        className="core-values-content"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Section 1 */}
        <section className='section-1'>
          <h3 className='core-values-label'>1. Thuần chay (Vegan) 🌿</h3>
          <ul>
            <li>100% thành phần từ thực vật, không chứa sáp ong, mật ong, collagen động vật.</li>
            <li>Sử dụng nguyên liệu tự nhiên như bí đao, rau má, cà phê Đắk Lắk, nghệ Hưng Yên.</li>
          </ul>
          <div className="image-slider2">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop={true}
            >
              {ingredientsImages.map((src, index) => (
                <SwiperSlide key={index}>
                  <img src={src} alt="Nguyên liệu tự nhiên" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Section 2 */}
        <section className='section-22'>
          <h3 className='core-values-label'>2. Không thử nghiệm trên động vật (Cruelty-free) 🐰</h3>
          <ul>
            <li>Được chứng nhận “Cruelty-free” từ PETA.</li>
            <li>Kiểm nghiệm trên người, cam kết làm đẹp nhân đạo.</li>
          </ul>
          <div className='cruelty-free'>
            <img src="/images/chung-nhan-cruelty-free-bia.jpg" alt="Cruelty Free" />
          </div>
        </section>

        {/* Section 3 */}
        <section className='section-3'>
          <h3 className='core-values-label'>3. Thành phần thiên nhiên, an toàn 🌸</h3>
          <ul>
            <li>Nguyên liệu chọn lọc từ nguồn thiên nhiên Việt Nam.</li>
            <li>Không chứa paraben, sulfate, silicone, dầu khoáng, hương liệu nhân tạo.</li>
          </ul>
          <div className='thanh-phan'>
            <img src="/images/z4049933820713_07b14144b07b572f3d20100e8316394a_b3a9f006c5.jpg" alt="Thành phần 2" />
          </div>
        </section>

        {/* Section 4 */}
        <section className='section-4'>
          <div className='bao-bi-content'>
            <h3 className='core-values-label'>4. Bền vững & bảo vệ môi trường 🌏</h3>
            <ul>
              <li>Bao bì tái chế, khuyến khích tái sử dụng.</li>
              <li>Hỗ trợ nông trại bền vững, giảm thiểu tác động môi trường.</li>
            </ul>
          </div>
          <div className='bao-bi-img'>
            <img src="/images/cocoon-thuan-chay-5.jpg" alt="Bảo vệ môi trường" />
          </div>
        </section>

        <p className='core-values-sound'>💚 Cocoon không chỉ là mỹ phẩm – mà còn là một phong cách sống!</p>
      </motion.div>
    </div>
  );
}

export default CoreValues;
