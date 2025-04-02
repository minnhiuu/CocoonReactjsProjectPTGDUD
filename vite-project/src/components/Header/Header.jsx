import { useState, useContext } from "react";
import SearchButton from "../SearchButton/SearchButton";
import LoginForm from "../../pages/Login/LogIn";
import SidebarCocoon from "../Sidebar/SidebarCocoon";
import { Link } from "react-router-dom";
import { path } from "../../constants/path";
import { CartContext } from "../../context/cart";
import "./Header.css";
import Pay from "../Pay/Pay";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from "../../pages/Login/LogIn";
import SidebarCocoon from "../Sidebar/SidebarCocoon";
import UserProfile from '../profile/userProfile';

function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [user, setUser] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  useEffect(() => {
    console.log("User updated:", user);
  }, [user]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (!event.target.closest(".profile-menu") && !event.target.closest(".avatar-container")) {
        setShowProfile(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [showProfile]);

  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const [showCart, setShowCart] = useState(false);
  const { cartItems, animatedItem, getTotalItems } = useContext(CartContext);

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
            <Link
              to={path.promotion}
              className="text-dark text-uppercase font-['Barlow Condensed']"
            >
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
          {!user ? (
            <a href="#" className="text-dark" onClick={() => setShowLogin(true)}>Đăng nhập</a>
          ) : (
            <div className="position-relative avatar-container">
              <img
                src={user.avatar || "/images/default-avatar.png"}
                alt="Avatar"
                className="rounded-circle cursor-pointer"
                width="40"
                height="40"
                onClick={() => setShowProfile(!showProfile)}
              />
              {showProfile && (
                <div className="profile-menu position-absolute">
                  <UserProfile user={user} setUser={setUser} />
                </div>
              )}
            </div>
          )}
          <Link to="/contact" className="text-dark ">
            Liên hệ
          </Link>
          <Link to={path.cart} className="text-dark " >
          Giỏ hàng ({cartItems.length})
          </Link>
        </div>
      </header>

      {showLogin && <div className="overlay" onClick={() => setShowLogin(false)}></div>}
      {showLogin && (
        <div className="modal-container">
          <LoginForm setShowLogin={setShowLogin} setUser={setUser} />
        </div>
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
