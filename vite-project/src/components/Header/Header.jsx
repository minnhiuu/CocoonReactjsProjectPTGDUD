import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchButton from '../SearchButton/SearchButton';
import './Header.css';
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

  return (
    <>
      <header className="header d-flex justify-content-between align-items-center p-3">
        <div className="header-left d-flex align-items-center gap-3">
          <SearchButton />
          <nav className="d-flex gap-3">
            <Link className="text-dark">Sản phẩm</Link>
            <Link className="text-dark" onClick={() => setShowSidebar(true)}>Cocoon</Link>
            <Link className="text-dark">Khuyến mãi</Link>
            <Link to="/cocoon/bai-viet" className="text-dark">Bài viết</Link>
          </nav>
        </div>
        <div className="header-mid d-flex align-items-center gap-3">
          <Link to="/cocoon" className='logo-link'>
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
          <a href="#" className="text-dark">Liên hệ</a>
          <a href="#" className="text-dark">Giỏ hàng (1)</a>
        </div>
      </header>
      {showLogin && <div className="overlay" onClick={() => setShowLogin(false)}></div>}
      {showLogin && (
        <div className="modal-container">
          <LoginForm setShowLogin={setShowLogin} setUser={setUser} />
        </div>
      )}
      {showSidebar && <div className="overlay" onClick={() => setShowSidebar(false)}></div>}
      <SidebarCocoon show={showSidebar} onClose={() => setShowSidebar(false)} />
      <div className="content-placeholder"></div>
    </>
  );
}

export default Header;