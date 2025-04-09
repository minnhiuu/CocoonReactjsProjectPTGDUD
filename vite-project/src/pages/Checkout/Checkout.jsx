import React, { useContext } from 'react'
import { useAuth } from '../../context/auth'
import { CartContext } from '../../context/cart'
import CartItem from '../../components/Cart/CartItem'

export default function () {
    const { showLogin, setShowLogin, user, setUser } = useAuth()
    const { cartItems, getTotalItems } = useContext(CartContext)

  return (
    <div className="checkout-page-container py-4" style={{ backgroundColor: '#FEFBF4' }}>
        <div className="checkout-header d-flex align-items-center gap-3 mb-4 p-2 shadow-2xs" style={{ backgroundColor: '#FFF', borderBottom: '1px solid #E0E0E0' }}>
            <img className='w-[200px] object-cover' src="/images/logoCocoon.svg" alt="logo" />
            <span className='' style={{color:"#C5A25D", height:"20px", margin:"10px"}}>|</span>
            <h2 className='text-1xl font-bold' style={{color:"#C5A25D"}}>Thanh Toán</h2>
        </div>
        <div className="checkout-product p-3 shadow-2xs bg-white rounded-lg me-3 ms-3 mb-4" style={{border:"1px solid #E0E0E0", borderRadius:"5px"}}>
        <h2 className='font-bold mb-3' style={{color:"#C5A25D",fontSize:"20px"}}>Địa Chỉ Nhận Hàng</h2>
        <div className="delivery-info d-flex align-items-center gap-3 mb-4">
            <div className="text-dark font-bold me-2">
                {user ? `${user.name} - ${user.phone}` : "Thông tin người dùng không khả dụng"}
            </div>
            <div className="text-dark me-2">
                {user ? user.address : "Địa chỉ không khả dụng"}
            </div>
        </div>
        </div>
        <div className="checkout-product p-3 shadow-2xs bg-white rounded-lg me-3 ms-3" style={{border:"1px solid #E0E0E0", borderRadius:"5px"}}>
        <h2 className='font-bold mb-3' style={{color:"#C5A25D", fontSize:"20px"}}>Sản phẩm</h2>
        {cartItems.length === 0 ? (
            <div className="empty-cart-message text-center mt-4">
                <img src="/images/empty-cart.png" alt="Empty Cart" className="w-1/2 mx-auto mb-4" />
                <h3 className="text-lg font-semibold">Giỏ hàng của bạn đang trống</h3>
                <p className="text-gray-500">Hãy thêm sản phẩm vào giỏ hàng để thanh toán.</p>
            </div>
        ) : (
            cartItems.map((item, index) => (
                <CartItem key={item.id} cart={item}/>
            ))
        )}
        </div>
        <div className="checkout-delivery">
            <div className="message" style={{width:"30%"}}>
                <input type="text" name="" id="" placeholder='Lưu ý dành cho người bán' style={{width:"100%"}}/>
            </div>
        </div>
    </div>
  )
}
