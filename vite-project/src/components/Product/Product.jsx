import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart";
import "./Product.css";
const Product = ({ product }) => {
  const navigate = useNavigate();
  const { id, title, description, img, price, discount } = product;

  function calculateDiscountedPrice(price, discount) {
    if (!discount) return price;
    const priceNum = parseInt(price.replace(/\D/g, "")); 
    const discountPercent = parseInt(discount) / 100; 
    const discountedPrice = priceNum * (1 - discountPercent); 
    const roundedPrice = Math.ceil(discountedPrice / 1000) * 1000;
    return roundedPrice.toLocaleString("vi-VN") + " đ"; 
  }

  const { addToCart } = useContext(CartContext);

  return (
    <div 
      className="product-card bg-white overflow-hidden rounded-2xl shadow-sm transform transition-transform duration-300 hover:scale-105 cursor-pointer"
      
    >
      <img src={img} alt={title} className="w-full" onClick={() => navigate(`/cocoon/san-pham/${id}`)}/>
      <div className="p-4 flex flex-col gap-2 flex-grow">
        <h3 className="text-sm font-bold font-['Vollkorn'] text-gray-700 line-clamp-2" onClick={() => navigate(`/cocoon/san-pham/${id}`)} style={{fontSize:18, height:40}}>{title}</h3>
        <p className="text-sm text-gray-500 line-clamp-2 onClick={() => navigate(`/cocoon/san-pham/${id}`)}" style={{fontSize:14, height:40}}>{description}</p>
        <div className="flex items-center gap-2" onClick={() => navigate(`/cocoon/san-pham/${id}`)}>
          {discount ? (
            <>
              <p className="text-lg font-semibold text-green-600">
                {calculateDiscountedPrice(price, discount)}
              </p>
              <p className="text-sm text-red-400 line-through">{price}</p>
            </>
          ) : (
            <p className="text-lg font-semibold text-green-400">{price}</p>
          )}
        </div>
        <button
          className="mt-auto py-2 px-4 rounded-lg bg-[#E3D0AC] text-gray-700 hover:bg-[#d1bb8f] transition"
          onClick={() => addToCart(product)}
        >
          Thêm vào giỏ
        </button>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
