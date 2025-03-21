import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import SearchButton from "../SearchButton/SearchButton";
import LoginForm from "../../pages/Login/LogIn";
import SidebarCocoon from "../Sidebar/SidebarCocoon";
import Cart from "../Cart/Cart";
import { CartContext } from "../../context/cart";
import "./Header.css";
function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const [showCart, setShowCart] = useState(false);
  const { cartItems } = useContext(CartContext);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <header className="header d-flex justify-content-between align-items-center p-3 ">
        <div className="header-left d-flex align-items-center gap-3">
          <SearchButton />
          <nav className="d-flex gap-3">
            <Link className="text-dark ">Sản phẩm</Link>
            <Link className="text-dark " onClick={() => setShowSidebar(true)}>
              Cocoon
            </Link>
            <Link className="text-dark ">Khuyến mãi</Link>
            <Link to="/cocoon/bai-viet" className="text-dark ">
              Bài viết
            </Link>
          </nav>
        </div>
        <div className="header-mid d-flex align-items-center gap-3">
          <Link to="/cocoon" className="logo-link">
            <img src="/images/logoCocoon.svg" alt="" />
          </Link>
        </div>
        <div className="header-right d-flex align-items-center gap-3">
          <a
            href="#"
            className="text-dark "
            onClick={() => {
              setShowLogin(true);
            }}
          >
            Đăng nhập
          </a>    
          <Link to="/contact" className="text-dark ">  
            Liên hệ      
          </Link>
          <a href="#" className="text-dark " onClick={toggleCart}>
            Giỏ hàng ({cartItems.length})
          </a>
        </div>
      </header>
      {showLogin && (
        <div className="overlay" onClick={() => setShowLogin(false)}></div>
      )}

      {showLogin && (
        <div className="modal-container">
          <LoginForm setShowLogin={setShowLogin} />
        </div>
      )}

      {/* Cart */}
      {showCart && <div className="overlay" onClick={toggleCart}></div>}
      <Cart showCart={showCart} toggleCart={toggleCart}></Cart>

      {showSidebar && (
        <div className="overlay" onClick={() => setShowSidebar(false)}></div>
      )}
      <SidebarCocoon show={showSidebar} onClose={() => setShowSidebar(false)} />
      <div className="content-placeholder"></div>
    </>
  );
}
export default Header;
