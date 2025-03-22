import { useState, useContext } from "react";
import SearchButton from "../SearchButton/SearchButton";
import LoginForm from "../../pages/Login/LogIn";
import SidebarCocoon from "../Sidebar/SidebarCocoon";
import { Link } from "react-router-dom";
import { path } from "../../constants/path";
import Cart from "../Cart/Cart";
import { CartContext } from "../../context/cart";
import "./Header.css";
import Pay from "../Pay/Pay";

function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const [showCart, setShowCart] = useState(false);
  const { cartItems } = useContext(CartContext);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const togglePaymentModal = () => {
    setShowPaymentModal(!showPaymentModal);
  };

  return (
    <>
      <header className="header d-flex justify-content-between align-items-center p-3 ">
        <div className="header-left d-flex align-items-center gap-3">
          {/* <SearchButton/> */}
          <nav className="d-flex gap-3">
            <Link
              className="text-dark text-uppercase font-['Barlow Condensed']"
              to={path.product}
            >
              Sản phẩm
            </Link>
            <Link
              className="text-dark text-uppercase font-['Barlow Condensed']"
              onClick={() => setShowSidebar(true)}
            >
              Cocoon
            </Link>
            <Link className="text-dark text-uppercase font-['Barlow Condensed']">
              Khuyến mãi
            </Link>
            <Link
              to={path.article}
              className="text-dark text-uppercase font-['Barlow Condensed']"
            >
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
      {showCart && <div className="overlay" onClick={toggleCart}></div>}
      <Cart
        showCart={showCart}
        toggleCart={toggleCart}
        togglePaymentModal={togglePaymentModal}
        setShowPaymentModal={setShowPaymentModal}
      ></Cart>

      {showSidebar && (
        <div className="overlay" onClick={() => setShowSidebar(false)}></div>
      )}
      <SidebarCocoon show={showSidebar} onClose={() => setShowSidebar(false)} />
      <div className="content-placeholder"></div>

      {showPaymentModal && (
        <Pay togglePaymentModal={togglePaymentModal} cartItems={cartItems} />
      )}
    </>
  );
}
export default Header;
