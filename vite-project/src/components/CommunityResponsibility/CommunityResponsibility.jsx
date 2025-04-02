import React, { useState, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Plane } from "@react-three/drei";
import * as THREE from "three";
import "./CommunityResponsibility.css";

// Danh sách hình ảnh
const images = [
    "/images/z2346000241203_2c20d4b68755b5f540ee91114347778a.jpg",
    "/images/t8a.jpg",
    "/images/Phu-nu-Viet-Nam.jpg",
    "/images/image-20200910134725-1.jpeg",
    "/images/bao-ve-moi-truong.jpg",
    "/images/10122524_9.4- uu tien 1_22-09-04.jpg",
    "/images/bao-ve-moi-truong_095531998.jpg",
    "/images/5-1647399987-hinh-anh-bao-ve-moi-truong-kinhtemoitruong-3.jpg"
    
];

// Component Trái Đất
const EarthEffect = () => (
    <Sphere args={[1, 300, 300]} scale={3} rotation={[0, 0, 0]}>
    <meshStandardMaterial color="#1E90FF" />
  </Sphere>
  
);

// Component ảnh quay quanh Trái Đất
const ImagePlane = ({ img, index, total, onClick }) => {
  const texture = useLoader(THREE.TextureLoader, img);
  const meshRef = useRef();
  
  // Tính toán vị trí ban đầu theo hình tròn
  const radius = 5;
  const angle = (index / total) * Math.PI * 2;
  const initialX = Math.cos(angle) * radius;
  const initialZ = Math.sin(angle) * radius;

  // Làm ảnh xoay quanh Trái Đất
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.2;
    meshRef.current.position.x = Math.cos(angle + t) * radius;
    meshRef.current.position.z = Math.sin(angle + t) * radius;
    meshRef.current.lookAt(0, 0, 0); // Quay mặt về Trái Đất
  });

  return (
    <mesh ref={meshRef} position={[initialX, 0, initialZ]} onClick={() => onClick(img)}>
      <Plane args={[1.2, 1.2]}>
        <meshBasicMaterial attach="material" map={texture} side={THREE.DoubleSide} />
      </Plane>
    </mesh>
  );
};

const CommunityResponsibility = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
    <h2 className="title">Trách nhiệm cộng đồng của Cocoon 🤝</h2>
    <div className="community-container">
      {/* Nội dung trách nhiệm cộng đồng */}
      <div className="content-section">
        
        <div className="community-content">
          <h3 className="community-title">🌍 Bảo vệ môi trường</h3>
          <ul>
            <li>Khuyến khích tái chế bao bì, giảm thiểu rác thải nhựa.</li>
            <li>Sử dụng bao bì thân thiện môi trường, hạn chế nhựa dùng một lần.</li>
            <li>Hợp tác trồng cây, dọn rác, bảo vệ hệ sinh thái.</li>
          </ul>

          <h3 className="community-title">🎓 Hỗ trợ giáo dục & phụ nữ</h3>
          <ul>
            <li>Cung cấp học bổng cho sinh viên ngành mỹ phẩm.</li>
            <li>Tạo việc làm cho phụ nữ nông thôn qua hợp tác sản xuất nguyên liệu.</li>
            <li>Tài trợ sách vở, thiết bị học tập cho trẻ em khó khăn.</li>
          </ul>

          <h3 className="community-title">🏥 Sức khỏe & cộng đồng</h3>
          <ul>
            <li>Quyên góp doanh thu hỗ trợ bệnh nhi ung thư.</li>
            <li>Cung cấp sản phẩm chăm sóc da miễn phí cho bệnh viện.</li>
            <li>Tổ chức hội thảo chăm sóc da cùng chuyên gia.</li>
          </ul>

          <h3 className="community-title">💖 Lan tỏa tinh thần nhân ái</h3>
          <ul>
            <li>Tổ chức chiến dịch thiện nguyện giúp đỡ người khó khăn.</li>
            <li>Khuyến khích lối sống xanh, tiêu dùng bền vững.</li>
            <li>Xây dựng cộng đồng yêu thiên nhiên, làm đẹp an toàn.</li>
          </ul>

          
        </div>
      </div>

      {/* Hiệu ứng 3D */}
      <div className="earth-section">
        <Canvas camera={{ position: [0, 0, 7] }}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} />
          
          {/* Trái Đất */}
          <EarthEffect />

          {/* Hình ảnh quay quanh Trái Đất */}
          {images.map((img, index) => (
            <ImagePlane key={index} img={img} index={index} total={images.length} onClick={setSelectedImage} />
          ))}
        </Canvas>
      </div>

      {/* Hiển thị ảnh khi click */}
      {selectedImage && (
        <div className="image-popup" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Selected" />
        </div>
      )}
    </div>
    <p className="quote">
            💖 Cocoon tin rằng kinh doanh không chỉ là lợi nhuận, mà còn là sự sẻ chia và trách nhiệm với xã hội!
          </p>
    </>
  );
};

export default CommunityResponsibility;
