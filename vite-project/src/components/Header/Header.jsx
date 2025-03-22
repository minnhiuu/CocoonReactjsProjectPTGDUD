import SearchButton from '../SearchButton/SearchButton';
import './Header.css'
import LoginForm from "../../pages/Login/LogIn";
import { useState, useEffect } from 'react';
import SidebarCocoon from "../Sidebar/SidebarCocoon";
import { Link } from 'react-router-dom';
import UserProfile from '../profile/userProfile'; // Đảm bảo rằng đường dẫn là chính xác

import { FaUser } from "react-icons/fa";
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
    return (
      <>
      <header className="header d-flex justify-content-between align-items-center p-3 ">
        <div className="header-left d-flex align-items-center gap-3">
          <SearchButton/>
          <nav className="d-flex gap-3">
            <Link className="text-dark ">Sản phẩm</Link>
            <Link className="text-dark " onClick={() => setShowSidebar(true)}>Cocoon</Link>
            <Link className="text-dark ">Khuyến mãi</Link>     
            <Link to="/cocoon/bai-viet" className="text-dark ">Bài viết</Link>
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
  <div className="position-relative">
    <FaUser className="fs-3 cursor-pointer" onClick={() => setShowProfile(!showProfile)} />
    {showProfile && user && (
  <div className="position-relative">
    <UserProfile user={user} setUser={setUser} showProfile={showProfile} />
  </div>
)}

  </div>
)}
          <a href="#" className="text-dark ">Liên hệ</a>
          <a href="#" className="text-dark ">Giỏ hàng (1)</a>
        </div>
        <div>
        
       

        </div>
      </header>
      {showLogin && <div className="overlay" onClick={() => setShowLogin(false)}></div>}

      {showLogin && (
          <div className="modal-container">
              <LoginForm setShowLogin={setShowLogin} setUser={setUser}/>
          </div>
      )}
      {showSidebar && <div className="overlay" onClick={() => setShowSidebar(false)}></div>}
      <SidebarCocoon show={showSidebar} onClose={() => setShowSidebar(false)} />
      <div className="content-placeholder"></div>
      </>
    );
  }
  export default Header;
  