import React, { useContext, useState } from "react";
import { CartContext } from "../../context/cart";
import "./Cart.css";
import Pay from "../Pay/Pay"; // Đường dẫn đã được điều chỉnh

export default function Cart({ showCart, toggleCart }) {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const togglePaymentModal = () => {
    setShowPaymentModal(!showPaymentModal);
  };

  return (
    showCart && (
      <div className="cart-wrapper">
        <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>Cart</h1>
        <div className="close-cart-btn-wrapper">
          <button className="close-cart-btn" onClick={toggleCart}>
            Close
          </button>
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
                />
                <div className="cart-item-info">
                  <h1 className="cart-item-title">{item.title}</h1>
                  <p className="cart-item-price">{item.price}</p>
                </div>
              </div>
              {/* btn remove */}
              <div className="remove-item-btn">
                <button
                  className="decrease-quantity-btn"
                  onClick={() => removeFromCart(item)}
                >
                  -
                </button>
                <p>{item.quantity}</p>
                <button
                  className="increase-quantity-btn"
                  onClick={() => addToCart(item)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* cart length > 0 */}
        {cartItems.length > 0 ? (
          <div className="total-cart">
            <h1 className="total-price">Total: {getCartTotal()}</h1>
            <div className="cart-actions">
              <button
                className="clear-cart-btn"
                onClick={() => {
                  clearCart();
                }}
              >
                Clear cart
              </button>
              <button className="pay-btn" onClick={togglePaymentModal}>
                Pay
              </button>
            </div>
          </div>
        ) : (
          // {/* or empty cart */}
          <div>
            <h1>Your cart empty</h1>
          </div>
        )}

        {/* Modal Thanh toán */}
        {showPaymentModal && (
          <Pay togglePaymentModal={togglePaymentModal} cartItems={cartItems} />
        )}
      </div>
    )
  );
}