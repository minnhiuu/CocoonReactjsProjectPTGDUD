import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart";
import { useNavigate } from "react-router";
import { path } from "../../constants/path";
import { AiOutlineClose } from "react-icons/ai";

function CartModal({ toggleCart }) {
  const {
    cartItems,
    getCartTotal,
    getTotalItems,
    removeFromCart,
    calculateDiscountedPrice,
  } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <>
      <div
        className="fixed inset-0 bg-opacity-0 z-[99998]"
        onClick={toggleCart}
      ></div>

      <div className=" fixed top-27 right-6 p-4 bg-[#fefbf4] shadow-lg rounded-md w-full max-w-md mx-auto !z-99999">
        <h5 className="text-sm text-center font-semibold mb-4">
          GIỎ HÀNG ({cartItems.length})
        </h5>
        <div className="space-y-3 max-h-60 overflow-y-auto">
          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-center">
              Giỏ hàng của bạn đang trống
            </p>
          ) : (
            cartItems.map((cart) => (
              <div
                key={cart.id}
                className="cart-item mb-3 text-dark "
                style={{ textDecoration: "none" }}
              >
                <button
                  className="btn-closeCart"
                  onClick={() => removeFromCart(cart)}
                >
                  {" "}
                  <AiOutlineClose />
                </button>
                <Link
                  className="cardImg"
                  to={`/cocoon/san-pham/${cart.id}`}
                  onClick={toggleCart}
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src={cart.img}
                    alt={cart.title}
                    className=""
                    style={{ aspectRatio: "3/4" }}
                  />
                </Link>
                <div className="cardContent">
                  <h5>{cart.title}</h5>
                  <div className="flex justify-between items-baseline">
                    <div className="quantity">
                      <span>x{cart.quantity}</span>
                    </div>
                    <div className="flex items-baseline gap-1">
                      {cart.discount !== "0%" ? (
                        <>
                          <p className="!text-[12px] text-gray-500 line-through">
                            {cart.price.toLocaleString()}
                          </p>
                          <p className="!text-red-500 ">
                            {calculateDiscountedPrice(
                              cart.price,
                              cart.discount
                            ).toLocaleString()}{" "}
                            đ
                          </p>
                        </>
                      ) : (
                        <p className="!text-red-500 ">
                          {cart.price.toLocaleString()}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="mt-4 flex justify-between items-center border-t pt-4">
          <span className="font-semibold">Tổng tiền:</span>
          <span className="text-red-600 font-bold">
            {getCartTotal().toLocaleString()}
          </span>
        </div>
        <button
          className="w-full mt-4 bg-[#c3a15c] text-white py-2 rounded hover:!opacity-75 hover:scale-105 hover:shadow-lg 
             transition duration-300 ease-in-out"
          onClick={() => {
            navigate(path.cart);
            toggleCart();
          }}
        >
          XEM GIỎ HÀNG
        </button>
        {/* Nút nhọn giả (tam giác chỉ xuống) */}
        <div className="absolute -top-2 right-8 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white !z-[99999]" />
      </div>
    </>
  );
}

export default CartModal;
