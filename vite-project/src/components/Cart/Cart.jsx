import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  FaRegTrashAlt,
  FaShoppingCart,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { BsCartXFill } from "react-icons/bs";
import "./Cart.css";
import { CartContext } from "../../context/cart";
import { path } from "../../constants/path";

export default function Cart({ showCart, toggleCart }) {
  const {
    cartItems,
    addToCart,
    decreaseItem,
    removeFromCart,
    clearCart,
    getCartTotal,
    updateItemQuantity,
  } = useContext(CartContext);

  const [closing, setClosing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!showCart && cartItems.length > 0) {
        const cartWrapper = document.querySelector('.cart-wrapper.active');
        if (cartWrapper) {
            cartWrapper.classList.remove('active');
            cartWrapper.classList.add('inactive');
            setClosing(true);
            const timer = setTimeout(() => {
                setClosing(false);
            }, 400);
             return () => clearTimeout(timer);
        } else {
             setClosing(false);
        }
    } else if (!showCart) {
        setClosing(false);
    }
  }, [showCart, cartItems.length]);

  const handleNavigateProduct = () => {
    toggleCart();
    navigate(path.cocoon);
  };

  const handleNavigateProductDetails = (id) => {
    toggleCart();
    navigate(`/cocoon/san-pham/${id}`);
  };

  const cartWrapperClass = showCart ? 'cart-wrapper active' : (closing ? 'cart-wrapper inactive' : 'cart-wrapper');

  if (!showCart && !closing) {
      return null;
  }

  return (
    <div className={cartWrapperClass}>
      <h1 className="cart-title">
        <FaShoppingCart />
        Giỏ hàng ({cartItems.length})
      </h1>
      <div className="close-cart-btn-wrapper">
        <button className="btn-close" onClick={toggleCart}></button>
      </div>

      <div className="cart-list">
        {cartItems.map((item) => (
          <div
            className="cart-item"
            key={item.id}
          >
            <div style={{ display: "flex", gap: "16px", alignItems: 'center' }}>
              <Link to={`/cocoon/san-pham/${item.id}`} onClick={toggleCart}>
                <img
                  src={item.img}
                  alt={item.title}
                  className="cart-item-img"
                />
              </Link>
              <div
                className="cart-item-info"
              >
                 <Link to={`/cocoon/san-pham/${item.id}`} onClick={toggleCart} className="text-decoration-none">
                    <h1 className="cart-item-title">{item.title}</h1>
                 </Link>
                <p className="cart-item-price">{item.price}</p>
              </div>
            </div>

            <div className="quantity-control-wrapper">
              <div className="quantity-control-btn">
                <button
                  className="decrease-quantity-btn"
                  onClick={(e) => { e.stopPropagation(); decreaseItem(item); }}
                >
                  -
                </button>
                <input
                  className="item-quantity"
                  type="number"
                  value={item.quantity}
                  onChange={(e) => {
                    e.stopPropagation();
                    const value = e.target.value;
                    if (/^\d+$/.test(value) && parseInt(value) > 0) {
                       updateItemQuantity(item.id, parseInt(value));
                    } else if (value === "") {

                    }
                  }}
                  onBlur={(e) => {
                    e.stopPropagation();
                     const value = e.target.value;
                     if (value === "" || parseInt(value) <= 0) {
                         updateItemQuantity(item.id, 1);
                     }
                  }}
                  onClick={(e) => { e.stopPropagation(); e.target.select(); }}
                />

                <button
                  className="increase-quantity-btn"
                  onClick={(e) => { e.stopPropagation(); addToCart(item); }}
                >
                  +
                </button>
              </div>
              <div
                className="remove-item-btn"
                onClick={(e) => { e.stopPropagation(); removeFromCart(item); }}
              >
                Xóa
              </div>
            </div>
          </div>
        ))}
      </div>

      {cartItems.length > 0 ? (
        <div className="footer-cart">
          <div className="total-cart">
            <h1 className="total-price">Tổng tiền: {getCartTotal()}</h1>

            <button
              className="clear-cart-btn"
              onClick={() => {
                clearCart();
              }}
            >
              <FaRegTrashAlt />
              <span>Xóa hết</span>
            </button>
          </div>
          <button
            className="checkout-btn"
            onClick={() => {
              toggleCart();
              navigate(path.checkout);
            }}
          >
            <span>Thanh toán</span>
            <IoBagCheckOutline className="checkout-icon" />
          </button>
        </div>
      ) : (
        <div className="cart-empty-wrapper">
          <BsCartXFill className="cart-empty-icon" />
          <h3>Giỏ hàng của bạn hiện trống</h3>
          <button
            className="continue-shopping-btn"
            onClick={handleNavigateProduct}
          >
            <span>Tiếp tục mua sắm</span>
            <FaLongArrowAltRight />
          </button>
        </div>
      )}
    </div>
  );
}