import "./Header.scss";
import logo from "../../assets/img/logo.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logout } from "../../service/userService";
const Header = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const logOut = async () => {
    const res = await logout();
    if (res.status === 200) {
      localStorage.removeItem("token");
      localStorage.removeItem("profile");
      setIsLogin(false);
      navigate("/");
      toast.success("Đăng xuất thành công");
    } else {
      toast.error("Có lỗi xảy ra, vui lòng thử lại lại");
    }
  };
  useEffect(() => {
    const profile = localStorage.getItem("profile");
    if (profile !== null) {
      setIsLogin(true);
    }
  }, []);
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
                <a href="/myinfo">
                  <i className="fa-solid fa-user"></i>
                  Cập nhật thông tin
                </a>
              </div>
              <div className="logout">
                <button onClick={logOut}>
                  <i className="fa-solid fa-right-from-bracket"></i>
                  Đăng xuất
                </button>
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
