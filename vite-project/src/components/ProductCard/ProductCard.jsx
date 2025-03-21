// This is a separate component for the product card
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <div className="product-card">
      <div className="product-img">
        <img src={product.img} alt={product.title} />
        <div className="discount-badge">-{product.discountPercent}%</div>
        {product.badge && <div className="product-badge">{product.badge}</div>}
      </div>
      <div className="product-information">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-category">{product.category}</p>
        <div className="product-price">
          <span className="discounted-price">
            {formatPrice(product.discountedPrice)}₫
          </span>
          <span className="original-price">
            {formatPrice(product.originalPrice)}₫
          </span>
        </div>
        <button className="add-to-cart-btn">
          <FaShoppingCart /> Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
}
