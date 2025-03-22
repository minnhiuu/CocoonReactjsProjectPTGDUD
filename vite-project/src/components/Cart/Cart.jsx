
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaRegTrashAlt,
  FaShoppingCart,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { BsCartXFill } from "react-icons/bs";
import "./Cart.css";
import { CartContext } from "../../context/cart";
import { Link, Outlet } from "react-router-dom";
import { path } from "../../constants/path";
import Pay from "../Pay/Pay"; 

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
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const togglePaymentModal = () => {
    setShowPaymentModal(!showPaymentModal);
  };

  const [closing, setClosing] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!showCart) {
      setClosing(true);
      const timer = setTimeout(() => setClosing(false), 300);
      return () => clearTimeout(timer);
    }
  }, [showCart]);

  const handleNavigateProduct = () => {
    toggleCart();
    // navigate(path.product)
    navigate(path.cocoon);
  };

  const handleNavigateCheckout = () => {
    toggleCart();
    navigate(path.cocoon);
  };

  const handleNavigateProductDetails = (id) => {
    toggleCart();
    // navigate(`${path.product}/${id}`);
    navigate(path.cocoon);
  };

  return (
    (showCart || closing) && (
      <div className={`cart-wrapper ${showCart ? "active" : "inactive"}`}>
        <h1 className="cart-title">
          <FaShoppingCart />
          Cart ({cartItems.length})
        </h1>
        <div className="close-cart-btn-wrapper">
          <button className="btn-close" onClick={toggleCart}></button>

        </div>

        {/* item list*/}
        <div className="cart-list">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <div style={{ display: "flex", gap: "16px" }}>
                <img
                  src={item.img}
                  alt={item.title}
                  className="cart-item-img"
                  onClick={() => handleNavigateProductDetails(item.id)}
                />
                <div
                  className="cart-item-info"
                  onClick={() => handleNavigateProductDetails(item.id)}
                >

                  <h1 className="cart-item-title">{item.title}</h1>
                  <p className="cart-item-price">{item.price}</p>
                </div>
              </div>

              <div className="quantity-control-wrapper">
                <div className="quantity-control-btn">
                  <button
                    className="decrease-quantity-btn"
                    onClick={() => decreaseItem(item)}
                  >
                    -
                  </button>
                  <input
                    className="item-quantity"
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      updateItemQuantity(item.id, e.target.value)
                    }
                    onClick={(e) => e.target.select()}
                  />
                  <button
                    className="increase-quantity-btn"
                    onClick={() => addToCart(item)}
                  >
                    +
                  </button>
                </div>
                <div
                  className="remove-item-btn"
                  onClick={() => {
                    removeFromCart(item);
                  }}
                >
                  remove
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* cart length > 0 */}
        {cartItems.length > 0 ? (
          <div className="footer-cart">
            <div className="total-cart">
              <h1 className="total-price">Tổng tiền: {getCartTotal()}</h1>

              <button
                className="clear-cart-btn"
                onClick={() => {
                  clearCart();
                }}
              >

                <FaRegTrashAlt />
                <span>Clear cart</span>
              </button>
            </div>
            <button className="checkout-btn" onClick={togglePaymentModal}>
              <span>Checkout</span>
              <IoBagCheckOutline className="checkout-icon" />
            </button>
            {/* Modal Thanh toán */}
        {showPaymentModal && (
          <Pay togglePaymentModal={togglePaymentModal} cartItems={cartItems} />
        )}
          </div>
        ) : (
          // {/* or empty cart */}
          <div className="cart-empty-wrapper">
            <BsCartXFill className="cart-empty-icon" />
            <h3>Giỏ hàng của bạn hiện trống</h3>
            <button
              className="continue-shopping-btn"
              onClick={handleNavigateProduct}
            >
              <span>Tiếp tục mua sắm</span>
              <FaLongArrowAltRight />
            </button>
          </div>
        )}
      </div>
    )
  );
}

   
