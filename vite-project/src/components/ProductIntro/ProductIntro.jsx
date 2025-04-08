import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./ProductIntro.css";
import ProductList from "../ProductList/ProductList";
import { FaArrowRightLong } from "react-icons/fa6";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, Plane } from "@react-three/drei";
import * as THREE from "three";

const images = [
  "https://image.cocoonvietnam.com/uploads/Bo_Ket_Trai_113f8d9833.png",
  "https://image.cocoonvietnam.com/uploads/Chanh_Day_293ff496c0.png",
  "https://image.cocoonvietnam.com/uploads/Bo_Ket_Phai_cc60e7569a.png",
  "https://image.cocoonvietnam.com/uploads/Chanh_Day_293ff496c0.png",
];

const ProductPlane = () => {
  const texture = useLoader(
    THREE.TextureLoader,
    "https://image.cocoonvietnam.com/uploads/San_Pham_6c8d021d63.png"
  );

  const meshRef = useRef();
  const { camera } = useThree();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.lookAt(camera.position);
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <Plane args={[2.8 * 3, 3.6 * 3]}>
        <meshBasicMaterial
          map={texture}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </Plane>
    </mesh>
  );
};

const ImagePlane = ({ img, index, total }) => {
  const texture = useLoader(THREE.TextureLoader, img);
  const meshRef = useRef();
  const radius = 3;
  const angle = (index / total) * Math.PI * 2;
  const initialX = Math.cos(angle) * radius;
  const initialZ = Math.sin(angle) * radius;

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.5;
    meshRef.current.position.x = Math.cos(angle + t) * radius;
    meshRef.current.position.z = Math.sin(angle + t) * radius;
    meshRef.current.lookAt(0, 0, 0);
  });

  return (
    <mesh ref={meshRef} position={[initialX, 0, initialZ]}>
      <Plane args={[3.6, 3.6]}>
        <meshBasicMaterial
          attach="material"
          map={texture}
          side={THREE.DoubleSide}
          transparent={true}
        />
      </Plane>
    </mesh>
  );
};

function ProductIntro() {
  return (
    <div className="main">
      <section
        className="intro-carousel carousel slide carousel-fade p-4 mb-0"
        id="introCarousel"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-indicators intro-indicators">
          <button
            type="button"
            data-bs-target="#introCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#introCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#introCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active ">
            <div className="d-flex w-100 h-100">
              <div className="intro-image">
                <img
                  src="/images/Main_banner_1.png"
                  alt="Sữa rửa mặt Sen Hậu Giang"
                />
              </div>
              <div className="intro-info p-5 text-left">
                <h4 className="fw-bold mb-3 p-0">SẢN PHẨM MỚI</h4>
                <h1 className="fw-bold p-0 m-0 text-font">Sữa rửa mặt</h1>
                <h1 className="fw-bold mb-5 text-font">Sen Hậu Giang</h1>
                <p>
                  Với công trình nghiên cứu kỹ lưỡng, kết hợp sự hiểu biết về
                  cấu trúc sinh học của da và sự kiểm nghiệm khắt khe qua bài
                  test HRIPT trên 61 làn da nhạy cảm, Cocoon tự hào giới thiệu
                  đột phá mới.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex w-100 h-100">
              <div className="intro-image">
                <video autoPlay loop muted playsInline>
                  <source src="/images/video_banner_2.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="intro-info bg-2 p-5">
                <h4 className="fw-bold mb-4 p-0">SẢN PHẨM NỔI BẬT</h4>
                <h1 className="fw-bold p-0 mt-2 text-font">Dầu Tẩy Trang</h1>
                <h1 className="fw-bold p-0 mb-5 text-font">Hoa Hồng</h1>
                <p>
                  Với công trình nghiên cứu kỹ lưỡng, kết hợp sự hiểu biết về
                  cấu trúc sinh học của da và sự kiểm nghiệm khắt khe qua bài
                  test HRIPT trên 61 làn da nhạy cảm, Cocoon tự hào giới thiệu
                  đột phá mới.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="d-flex w-100 h-100">
              <div className="intro-image">
                <img src="/images/Main_banner_3.jpg" alt="Gel dưỡng Bí Đao" />
              </div>
              <div className="intro-info bg-3 p-5">
                <h4 className="fw-bold mb-3 p-0">CHƯƠNG TRÌNH</h4>
                <h1 className="fw-bold p-0 mt-2 text-font">Đổi Vỏ Chai Cũ</h1>
                <h1 className="fw-bold p-0 mb-5 text-font">
                  Nhận Sản Phẩm Mới
                </h1>
                <p>
                  Cocoon luôn sẵn sàng nhận vỏ chai cũ từ các bạn và trao đi các
                  sản phẩm mới. Cứ 10 vỏ chai lọ rỗng bạn khi gửi về cho chúng
                  tôi, bạn sẽ nhận lại một sản phẩm mới.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <button
          className="carousel-control-prev intro-control-prev"
          type="button"
          data-bs-target="#introCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon intro-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next intro-control-next"
          type="button"
          data-bs-target="#introCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon intro-control-next-icon"></span>
        </button> */}
      </section>

      <div
        className="features-block hidden lg:block relative w-full overflow-hidden"
        id="2"
        style={{
          height: "56.0938vw",
          maxHeight: "calc(100vh - 2.0625rem + 3.8125rem)",
        }}
      >
        <div
          className="absolute text-6xl animate-on-scroll"
          style={{
            fontSize: "45px",
            fontFamily: "Vollkorn",
            width: "21.5625rem",
            left: "6.23%",
            top: "6.43%",
            transform: "translate3d(0px, 20.2653px, 0px)",
            color: "rgba(31, 28, 23, 1)",
            lineHeight: "1",
          }}
        >
          Nước dưỡng da đầu bồ kết
        </div>

        <img
          src="https://image.cocoonvietnam.com/uploads/Text_4bcacc4ebf.png"
          alt="Text"
          className="abs-image absolute h-full w-full object-contain animate-on-scroll"
        />

        {/* Hiệu ứng 3D */}
        <div className="flex justify-center items-base h-[600px]">
          <Canvas camera={{ position: [0, 0, 7] }}>
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
            />
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 2]} />

            <ProductPlane />

            {/* Hình ảnh quay quanh sản phẩm */}
            {images.map((img, index) => (
              <ImagePlane
                className="abs-image absolute h-full w-full object-contain animate-on-scroll"
                key={index}
                img={img}
                index={index}
                total={images.length}
              />
            ))}
          </Canvas>
        </div>

        <div
          className="right-text-box animate-on-scroll absolute"
          style={{
            transform: "translate3d(0, 40.53px, 0)",
            width: "18rem",
            right: "6.67%",
            bottom: "25.81%",
          }}
        >
          <p className="text-lg leading-6 text-gray-500">
            Da đầu – giống như da mặt – là nơi cư trú của hàng tỉ vi sinh vật.
            Việc cân bằng hệ vi sinh giúp giảm gàu lâu dài, kiểm soát dầu và
            phục hồi vùng da đầu tổn thương.
          </p>
          <Link
            to="/cocoon/san-pham/50"
            className="flex items-center justify-center mt-[2.125rem] rounded-sm hover:opacity-70 hover:shadow-md hover:shadow-gray-400 transition-all duration-300 ease-in-out"
            style={{
              width: "200px",
              padding: "10px 20px",
              fontSize: "1.125rem",
              whiteSpace: "nowrap",
              fontFamily: "Vollkorn",
              fontWeight: "500",
              textTransform: "uppercase",
              textDecoration: "none",
              backgroundColor: "#c3a15c",
              color: "#fff",
              lineHeight: "1.75rem",
              transitionProperty:
                "background-color, border-color, color, fill, stroke",
              transitionDuration: "300ms",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 1, 1)",
              cursor: "pointer",
            }}
          >
            <span className="button__text with-icon flex items-center gap-4">
              Mua ngay
              <FaArrowRightLong />
            </span>
            <span className="button__icon icon-arrow-right text-[20px]"></span>
          </Link>
        </div>
      </div>

      <div>
        <div className="features-block-mobile block lg:hidden" id="2">
          <div
            className="relative mx-auto"
            style={{ height: "29.875rem", maxWidth: "23.4375rem" }}
          >
            <Link to="/cocoon/san-pham/50">
              <img
                src="https://image.cocoonvietnam.com/uploads/TEXT_c24107cb32.png"
                alt="TEXT"
                className="animate-on-scroll absolute left-1/2 h-full max-w-none"
              />
            </Link>

            <div className="flex justify-center items-base h-[600px]">
              <Canvas camera={{ position: [0, 0, 7] }}>
                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  minPolarAngle={Math.PI / 2}
                  maxPolarAngle={Math.PI / 2}
                />
                <ambientLight intensity={0.5} />
                <directionalLight position={[2, 2, 2]} />

                <ProductPlane />

                {images.map((img, index) => (
                  <ImagePlane
                    className="abs-image absolute h-full w-full object-contain animate-on-scroll"
                    key={index}
                    img={img}
                    index={index}
                    total={images.length}
                  />
                ))}
              </Canvas>
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="font-vollkorn text-primary-dark mt-5 leading-none text-[30px] max-w-[18.125rem]">
              Nước dưỡng da đầu bồ kết
            </div>
            <p className="mt-2 text-sm text-gray-500 max-w-[18.125rem]">
              Da đầu – giống như làn da mặt – là nơi cư trú của hàng tỉ vi sinh
              vật có lợi và có hại. Cân bằng hệ vi sinh là giúp tái lập môi
              trường sống lý tưởng cho hệ vi sinh có lợi, kiềm hãm vi sinh vật
              gây hại – từ đó hỗ trợ giảm gàu lâu dài, hạn chế tiết dầu quá mức
              và phục hồi vùng da đầu tổn thương.
            </p>
            <Link
              to="/cocoon/san-pham/50"
              className="button button-large button-transparent mt-[2.125rem] mb-[3.625rem]"
              style={{
                padding: 0,
                width: "5.625rem",
                height: "1.25rem",
                fontSize: "1.125rem",
              }}
            >
              <span className="button__text ">Mua ngay</span>
              <span className="button__icon icon-arrow-right text-[20px]"></span>
            </Link>
          </div>
        </div>
      </div>

      <div className="container-fluid section-2 mb-3 mt-0">
        <div className="section-2-content text-center">
          <h1 className="mb-4 mt-2 text-font">Triết Lý Thương Hiệu</h1>
          <p className="text-gray-500">
            "Là những người yêu thiên nhiên và đam mê khám phá các nguồn nguyên
            liệu đặc hữu của Việt Nam, chúng tôi luôn kiên định với những triết
            lý trên hành trình tìm vẻ đẹp thật sự của làn da."
          </p>
        </div>
      </div>
      <div className="section-3 mb-5">
        <div className="row m-0 mb-3 p-3">
          <div className="col-12">
            <h3 className="text-center fw-bold text-font mt-3">
              CHỨNG NHẬN BỞI CÁC TỔ CHỨC QUỐC TẾ
            </h3>
          </div>
        </div>
        <div className="row m-0">
          <div className="col-4 section-3-content">
            <div className="section-3-content-img">
              <img src="/images/bunny.svg" alt="" />
            </div>
            <h3 className="text-center fw-bold">Leaping Bunny</h3>
            <h4 className="text-center fw-500 text-gray">
              CHƯƠNG TRÌNH LEAPING BUNNY
            </h4>
            <h5 className="text-center fw-400 text-gray">
              " Chương trình Leaping Bunny của tổ chức Cruelty Free
              International được xem là "tiêu chuẩn vàng" toàn cầu cho các sản
              phẩm không thử nghiệm trên động vật. "
            </h5>
          </div>
          <div className="col-4 section-3-content">
            <div className="section-3-content-img">
              <img src="/images/flower.svg" alt="" />
            </div>
            <h3 className="text-center fw-bold">The Vegan Sociaty</h3>
            <h4 className="text-center fw-500 text-gray">
              HIỆP HỘI THUẦN CHAY QUỐC TẾ
            </h4>
            <h5 className="text-center fw-400 text-gray">
              " Chương trình Leaping Bunny của tổ chức Cruelty Free
              International được xem là "tiêu chuẩn vàng" toàn cầu cho các sản
              phẩm không thử nghiệm trên động vật. "
            </h5>
          </div>
          <div className="col-4 section-3-content">
            <div className="section-3-content-img">
              <img src="/images/buom.svg" alt="" />
            </div>
            <h3 className="text-center fw-bold">PETA</h3>
            <h4 className="text-center fw-500 text-gray">
              ANIMAL TEST-FREE & VEGAN
            </h4>
            <h5 className="text-center fw-400 text-gray">
              " Chương trình Leaping Bunny của tổ chức Cruelty Free
              International được xem là "tiêu chuẩn vàng" toàn cầu cho các sản
              phẩm không thử nghiệm trên động vật. "
            </h5>
          </div>
        </div>
      </div>
      <div className="section-4 text-left mt-5 mb-5">
        <div className="row align-items-end">
          <div className="col-3 h-100">
            <h1 className="fst-italic p-0 m-0 mb-1">Sản Phẩm</h1>
            <h1 className="fw-bold p-0 m-0 mb-3 text-font">BÁN CHẠY</h1>
            <p className="text-gray fw-300 mb-5">
              Cocoon tự hào khi các sản phẩm mà chúng tôi tạo ra mang đến những
              thay đổi tuyệt vời trên làn da, mái tóc của bạn.
            </p>
          </div>
          <div className="col-9 h-100 pe-5">
            <div
              id="productListCarousel"
              className="carousel slide product-list-carousel"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <ProductList />
              </div>
              <button
                className="carousel-control-prev product-list-control-prev"
                type="button"
                data-bs-target="#productListCarousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon product-list-control-prev-icon"></span>
              </button>
              <button
                className="carousel-control-next product-list-control-next"
                type="button"
                data-bs-target="#productListCarousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon product-list-control-next-icon"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductIntro;
