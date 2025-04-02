import { Link } from "react-router-dom";
import "./SidebarCocoon.css";
import React from "react";

function SidebarCocoon({ show, onClose }) {
  return (
    <div className={`sidebar-container ${show ? "show" : ""}`}>
      <div className="sidebar-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h3 className="sidebar-title">Cocoon</h3>
        <ul>
          <li><Link to="/cocoon/cau-chuyen-thuong-hieu" onClick={onClose}>Câu chuyện thương hiệu</Link></li>
          <li><Link to="/cocoon/gia-tri-cot-loi" onClick={onClose}>Giá trị cốt lõi</Link></li>
          <li><Link to="/cocoon/trach-nhiem-cong-dong" onClick={onClose}>Trách nhiệm cộng đồng</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default SidebarCocoon;
