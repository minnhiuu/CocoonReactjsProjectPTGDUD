import { useState, useContext, useEffect } from "react";
import LoginForm from "../../pages/Login/LogIn";
import SidebarCocoon from "../Sidebar/SidebarCocoon";
import { Link } from "react-router-dom";
import { path } from "../../constants/path";
import { CartContext } from "../../context/cart";
import "./Header.css";
import UserProfile from "../profile/userProfile";
import Search from "../Search/Search";
import CartModal from "../CartModal/CartModal";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";

function Header() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const { showLogin, setShowLogin, user, setUser } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        !event.target.closest(".profile-menu") &&
        !event.target.closest(".avatar-container")
      ) {
        setShowProfile(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [showProfile]);
  const { cartItems, animatedItem, getTotalItems } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);
  const toggleCart = () => {
    setShowCart(!showCart);
  };
  return (
    <>
      <header className="header d-flex justify-content-between align-items-center p-3 ">
        <div className="header-left d-flex align-items-center gap-3">
          <nav className="d-flex gap-3">
            <Link
              className="text-dark  font-['Barlow Condensed']"
              to={path.product}
            >
              Sản phẩm
            </Link>
            <Link
              className="text-dark  font-['Barlow Condensed']"
              onClick={() => setShowSidebar(true)}
            >
              Cocoon
            </Link>
            <Link
              to={path.promotion}
              className="text-dark  font-['Barlow Condensed']"
            >
              Khuyến mãi
            </Link>
            <Link
              to={path.article}
              className="text-dark font-['Barlow Condensed']"
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
          <Search />
          {!user ? (
            <a
              href="#"
              className="text-dark font-['Barlow Condensed']"
              onClick={() => setShowLogin(true)}
            >
              Đăng nhập
            </a>
          ) : (
              <Link to={path.account}
              className="text-dark font-['Barlow Condensed'] text-center">
                {user.phone}
          </Link>
          )}
          <Link to={path.contact} className="text-dark font-['Barlow Condensed']">
            Liên hệ
          </Link>
          <Link className="text-dark font-['Barlow Condensed']" onClick={toggleCart}>
            Giỏ hàng ({cartItems.length})
          </Link>
        </div>
      </header>
      {showCart && <CartModal toggleCart={toggleCart} />}

      {showLogin && (
        <div className="overlay" onClick={() => setShowLogin(false)}></div>
      )}
      {showLogin && (
        <div className="modal-container">
          <LoginForm setShowLogin={setShowLogin} setUser={setUser} />
        </div>
      )}

      <SidebarCocoon show={showSidebar} onClose={() => setShowSidebar(false)} />
      <div className="content-placeholder"></div>
    </>
  );
}
export default Header;
