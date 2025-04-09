import React, { useContext, useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { CartContext } from "../../context/cart";
import CartItem from "../../components/Cart/CartItem";
import { toast } from "react-toastify";
import api from "../../api/axiosConfig";

export default function () {
  const { showLogin, setShowLogin, user, setUser } = useAuth();
  const { cartItems, getTotalItems, clearCart, getCartTotal, getTotalCheckout } = useContext(CartContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await api.get("/orders"); 
        if (response.status === 200) {
          setOrders(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };
    fetchOrders();
  }, []);

  const handleOrder = async () => {
    if (!user) {
      toast.error("🦄 Bạn cần đăng nhập để đặt hàng!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      return;
    }

    if(cartItems.length === 0) {
        toast.error("🦄 Vui lòng thêm sản phẩm vào giỏ hàng!", 
            {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
        return;
    }
    const order = {
      id: orders.length + 1, 
      userId: user.id,
      userName: user.name,
      userPhone: user.phone,
      userAddress: user.address,
      items: cartItems,
      totalItems: getTotalItems(),
      totalPrice: getCartTotal(),
      shippingFee: 51100,
      voucherDiscount: 2000,
      finalPrice: getTotalCheckout(),
      orderDate: new Date().toISOString(),
    };

    try {
      const response = await api.post("/orders", order);
      if (response.status === 201) {
        toast.success("🦄 Đặt hàng thành công!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
        clearCart();
        setOrders([...orders, order]); 
      } else {
        throw new Error("Tạo order thất bại");
      }
    } catch (error) {
      toast.error("🦄 Đặt hàng thất bại, vui lòng thử lại!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      console.error("Tạo order thất bại:", error);
    }
  };

  return (
    <div
      className="checkout-page-container py-4"
      style={{ backgroundColor: "#FEFBF4" }}
    >
      <div
        className="checkout-header d-flex align-items-center gap-3 mb-4 p-2 shadow-2xs"
        style={{ backgroundColor: "#FFF", borderBottom: "1px solid #E0E0E0" }}
      >
        <img
          className="w-[200px] object-cover"
          src="/images/logoCocoon.svg"
          alt="logo"
        />
        <span
          className=""
          style={{ color: "#C5A25D", height: "20px", margin: "10px" }}
        >
          |
        </span>
        <h2
          className="font-bold"
          style={{ color: "#C5A25D", fontSize: "20px" }}
        >
          Thanh Toán
        </h2>
      </div>
      <div
        className="checkout-product p-3 shadow-2xs bg-white rounded-lg me-2 ms-2 mb-2"
        style={{ border: "1px solid #E0E0E0", borderRadius: "5px" }}
      >
        <h2
          className="font-bold mb-3"
          style={{ color: "#C5A25D", fontSize: "20px" }}
        >
          Địa Chỉ Nhận Hàng
        </h2>
        <div className="delivery-info d-flex align-items-center gap-3 mb-4">
          <div className="text-dark font-bold me-2">
            {user
              ? `${user.name} - ${user.phone}`
              : "Thông tin người dùng không khả dụng"}
          </div>
          <div className="text-dark me-2">
            {user ? user.address : "Địa chỉ không khả dụng"}
          </div>
        </div>
      </div>
      <div
        className="checkout-product p-3 shadow-2xs bg-white rounded-lg me-2 ms-2 "
        style={{ border: "1px solid #E0E0E0", borderRadius: "5px" }}
      >
        <h2
          className="font-bold mb-3"
          style={{ color: "#C5A25D", fontSize: "20px" }}
        >
          Sản phẩm
        </h2>
        {cartItems.length === 0 ? (
          <div className="empty-cart-message text-center mt-4">
            <img
              src="https://newnet.vn/themes/newnet/assets/img/empty-cart.png"
              alt="Empty Cart"
              className="w-1/2 mx-auto mb-4"
            />
            <p className="text-gray-500">
              Hãy thêm sản phẩm vào giỏ hàng để thanh toán.
            </p>
          </div>
        ) : (
          cartItems.map((item, index) => <CartItem key={item.id} cart={item} />)
        )}
      </div>
      <div
        className="checkout-delivery p-3 shadow-2xs bg-white rounded-lg me-2 ms-2 "
        style={{
          border: "1px solid #E0E0E0",
          borderRadius: "5px",
          borderTop: "none",
        }}
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Lời nhắn:
          </label>
          <input
            type="text"
            placeholder="Lưu ý cho Người bán..."
            className="w-full border px-3 py-2 rounded-md text-gray-600 focus:outline-blue-500"
            style={{ border: "1px solid #E0E0E0" }}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Mã Voucher:
          </label>
          <input
            type="text"
            placeholder="Nhập mã giảm giá..."
            className="w-full border px-3 py-2 rounded-md text-gray-600 focus:outline-blue-500"
            style={{ border: "1px solid #E0E0E0" }}
          />
        </div>
        <div className="flex justify-between items-center border-t pt-4">
          <div>
            <p className="text-gray-700 font-semibold">
              Phương thức vận chuyển:{" "}
              <span className="text-green-600">Nhanh</span>
            </p>
            <p className="text-blue-500 text-sm cursor-pointer">Thay Đổi</p>
            <p className="text-gray-500 text-sm">
              🚚 Đảm bảo nhận hàng từ{" "}
              <span className="text-green-600 font-medium">
                12 Tháng 4 - 14 Tháng 4
              </span>
            </p>
            <p className="text-gray-500 text-sm">
              Nhận Voucher trị giá{" "}
              <span className="text-green-600 font-medium">₫15.000</span> nếu
              đơn hàng được giao đến bạn sau ngày 14 Tháng 4 2025.
            </p>
          </div>
          <p className="text-gray-700 font-semibold">₫{cartItems.length > 0 ?"51.000":0}</p>
        </div>
        <div className="mt-6 border-t pt-4">
          <div className="flex justify-between">
            <p className="text-md font-semibold text-gray-700">
              Tổng tiền sản phẩm:
            </p>
            <p className="text-md font-semibold text-gray-700">{getCartTotal()}</p>
          </div>
          <div className="flex justify-between mt-2">
            <p className="text-md font-semibold text-gray-700">
              Tổng tiền phí vận chuyển:
            </p>
            <p className="text-md font-semibold text-gray-700">{cartItems.length > 0  ? "51.100" : 0} đ</p>
          </div>
          <div className="flex justify-between mt-2">
            <p className="text-md font-semibold text-gray-700">
              Tổng cộng Voucher giảm giá:
            </p>
            <p className="text-md font-semibold text-red-500">-{cartItems.length > 0 ? "2.000" :0} đ</p>
          </div>
        </div>
        <div className="mt-6 border-t pt-4 flex justify-between items-center">
          <p className="text-lg font-semibold text-gray-700">Tổng thanh toán:</p>
          <p className="text-2xl font-bold text-red-500">{getTotalCheckout()}</p>
        </div>
        <div className="mt-4 text-center">
          <button
            className="w-full py-3 px-4 rounded-lg text-white font-bold"
            style={{
              backgroundColor: "#C5A25D",
              hover: { backgroundColor: "#A58C4D" },
            }}
            onClick={handleOrder} 
          >
            Đặt Hàng
          </button>
        </div>
      </div>
    </div>
  );
}
