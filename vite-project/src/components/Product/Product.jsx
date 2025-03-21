import React, { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../../context/cart";
import "./Product.css";

const Product = ({ product }) => {
  const { title, description, img, price } = product;

  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card bg-white overflow-hidden rounded-2xl shadow-sm transform transition-transform duration-300 hover:scale-105">
      <img src={img} alt={title} className="w-full" />
      <div className="p-4 flex flex-col gap-2 flex-grow">
        <h3 className="text-xl font-bold font-['Vollkorn'] text-gray-800 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-2">{description}</p>
        <p className="text-lg font-semibold text-green-600">{price}</p>
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
