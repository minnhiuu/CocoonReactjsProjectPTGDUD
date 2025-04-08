import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../../context/cart";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";

const CartProduct = () => {
  
    const {
        cartItems,
        addToCart,
        decreaseItem,
        removeFromCart,
        clearCart,
        getCartTotal,
        updateItemQuantity,
        getTotalProduct
      } = useContext(CartContext);
    
      const navigate = useNavigate();

      const onCartUpdate = () => {
        setCarts([...cartItems]);
      }
    
      const handleBookNow = () => {
        if (cartItems.length == 0) {
          alert("Giỏ hàng trống, vui lòng thêm sản phẩm!");
          return;
        }
        navigate("/cocoon/checkout");
      }
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="font-semibold mb-4" style={{ fontSize: "22px" }}>
            GIỎ HÀNG <span className="text-gray-500"> - {cartItems.length} sản phẩm</span>
          </h2>
          {cartItems.map((item, index) => (
            <CartItem key={item.id} cart={item} onCartUpdate = {onCartUpdate}/>
          ))}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className=" font-semibold mb-4" style={{fontSize:"22px"}}>Thông tin đơn hàng</h2>
          
          <div className="border-t pt-4">
            <p>
              Tổng sản phẩm: <span className="float-right">{cartItems.length}</span>
            </p>
            <p>
              Tạm tính:{" "}
              <span className="float-right text-red-500">
                {getCartTotal()}
              </span>
            </p>
            <p className="text-green-600">Miễn phí giao hàng</p>
            <p>
              Tổng thanh toán:{" "}
              <span className="float-right text-red-500">
                {getCartTotal()}
              </span>
            </p>
            <p className="text-sm text-gray-500 mt-2">Đã bao gồm VAT</p>
          </div>
          <div className="mt-4">
            <button className="w-full bg-orange-500 text-white py-2 rounded" onClick={() => handleBookNow()}>
              ĐẶT HÀNG
            </button>
            <p className="text-sm text-gray-500 mt-2 text-center">
              Vui lòng kiểm tra thông tin Số lượng trước khi thanh toán
            </p>
          </div>
        </div>
      </div>
    </div>
  );
  s;
};

export default CartProduct;
