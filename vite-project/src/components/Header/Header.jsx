import SearchButton from '../SearchButton/SearchButton';
import './Header.css'
import LoginForm from "../../pages/Login/LogIn";
import { useState } from 'react';
import SidebarCocoon from "../Sidebar/SidebarCocoon";
import { Link } from 'react-router-dom';
import { path } from '../../constants/path';
function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
    return (
      <>
      <header className="header d-flex justify-content-between align-items-center p-3 ">
        <div className="header-left d-flex align-items-center gap-3">
          {/* <SearchButton/> */}
          <nav className="d-flex gap-3">
            <Link className="text-dark text-uppercase font-['Barlow Condensed']" to={path.product}>Sản phẩm</Link>
            <Link className="text-dark text-uppercase font-['Barlow Condensed']" onClick={() => setShowSidebar(true)}>Cocoon</Link>
            <Link className="text-dark text-uppercase font-['Barlow Condensed']">Khuyến mãi</Link>     
            <Link to={path.article} className="text-dark text-uppercase font-['Barlow Condensed']">Bài viết</Link>
          </nav>
        </div>
        <div className="header-mid d-flex align-items-center gap-3">
                <Link to="/cocoon" className='logo-link'>
                <img src="/images/logoCocoon.svg" alt="" />
                </Link>
        </div>
        <div className="header-right d-flex align-items-center gap-3">
          <a href="#" className="text-dark text-uppercase font-['Barlow Condensed']" onClick={() => {setShowLogin(true)}}>Đăng nhập</a>
          <a href="#" className="text-dark text-uppercase font-['Barlow Condensed']">Liên hệ</a>
          <a href="#" className="text-dark text-uppercase font-['Barlow Condensed']">Giỏ hàng (1)</a>
        </div>
      </header>
      {showLogin && <div className="overlay" onClick={() => setShowLogin(false)}></div>}

      {showLogin && (
          <div className="modal-container">
              <LoginForm setShowLogin={setShowLogin} />
          </div>
      )}
      {showSidebar && <div className="overlay" onClick={() => setShowSidebar(false)}></div>}
      <SidebarCocoon show={showSidebar} onClose={() => setShowSidebar(false)} />
      <div className="content-placeholder"></div>
      </>
    );
  }
  export default Header;
  