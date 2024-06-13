import "./Header.scss";
import logo from "../../assets/img/logo.png";
import { useState } from "react";
const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <div className="header_container">
        <div className="logo_container">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <div className="search_bar_container">
          <input
            type="text"
            name="header_search"
            id="header_search"
            placeholder="Bạn muốn tìm gì?"
          />
          <button type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="account_container">
          {isLogin ? (
            <>
              <div className="account">
                <a href="#">
                  <i className="fa-solid fa-user"></i>
                  username
                </a>
              </div>
              <div className="logout">
                <a href="#">
                  <i className="fa-solid fa-right-from-bracket"></i>
                  Đăng xuất
                </a>
              </div>
            </>
          ) : (
            <div className="login">
              <a href="/login">
                <i className="fa-solid fa-right-to-bracket"></i>
                Đăng nhập
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
