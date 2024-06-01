import "./Header.scss";
import logo from "../../assets/img/logo.png"
const Header = () => {
  return (
    <>
      <div className="header_container">
        <div className="logo_container">
          <a href="/"><img src={logo} alt="Logo" /></a>
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
          <i className="fa-solid fa-user"></i>
          Tài khoản
        </div>
      </div>
    </>
  );
};

export default Header;
