import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../../context/cart";
import { useNavigate } from "react-router-dom";
import CartItem from "../../components/Cart/CartItem";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../../context/auth";

const Cart = () => {
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
    const [loading, setLoading] = useState(true);
    const { showLogin, setShowLogin, user, setUser } = useAuth();

    const onCartUpdate = () => {
        setCarts([...cartItems]);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false); 
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const handleBookNow = () => {
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
            setShowLogin(true);
            return;
        }
        if (cartItems.length === 0) {
            toast.error("🦄 Vui lòng thêm sản phẩm!", {
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
        navigate("/cocoon/checkout");
    };

    return (
        <>
            {loading ? (
                <div className="loading-overlay">
                    <div className="loading-logo">
                        <img src="/images/cocoon1.png" alt="Loading" className="logo-image" />
                        <div className="progress-circle"></div>
                    </div>
                </div>
            ) : (
                <div className="container mx-auto p-3">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
                            <h2 className="font-semibold mb-4" style={{ fontSize: "22px" }}>
                                GIỎ HÀNG <span className="text-gray-500"> - {getTotalProduct()} sản phẩm</span>
                            </h2>
                            {cartItems.map((item, index) => (
                                <CartItem key={item.id} cart={item} onCartUpdate={onCartUpdate} />
                            ))}
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="font-semibold mb-4" style={{ fontSize: "22px" }}>
                                Thông tin đơn hàng
                            </h2>

                            <div className="border-t pt-4">
                                <p>
                                    Tổng sản phẩm: <span className="float-right">{getTotalProduct()}</span>
                                </p>
                                <p>
                                    Tạm tính:{" "}
                                    <span className="float-right text-red-500">{getCartTotal()}</span>
                                </p>
                                <p className="text-green-600">Miễn phí giao hàng</p>
                                <p>
                                    Tổng thanh toán:{" "}
                                    <span className="float-right text-red-500">{getCartTotal()}</span>
                                </p>
                                <p className="text-sm text-gray-500 mt-2">Đã bao gồm VAT</p>
                            </div>
                            <div className="mt-4">
                                <button className="mt-auto w-100 py-2 px-4 rounded-xl bg-[#E3D0AC] text-gray-700 hover:bg-[#d1bb8f] transition " onClick={() => handleBookNow()}>
                                    ĐẶT HÀNG
                                </button>
                                <p className="text-sm text-gray-500 mt-2 text-center">
                                    Vui lòng kiểm tra thông tin Số lượng trước khi thanh toán
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* <ToastContainer /> */}
        </>
    );
};

export default Cart;
