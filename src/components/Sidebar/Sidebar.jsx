import phone_icon from "../../assets/img/label/23a87860d12ab078ca3f.png"
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar_container">
        <div className="sidebar_header">Danh mục sản phẩm</div>
        <div className="sidebar_items">
          <a href="#" className="sidebar_item">
            <div className="sidebar_item__icon">
              <img src={phone_icon} alt="Icon" />
            </div>
            <div className="sidebar_item__name">
              Điện thoại - Máy Tính Bảng
            </div>
          </a>
          <a href="#" className="sidebar_item">
            <div className="sidebar_item__icon">
              <img src={phone_icon} alt="Icon" />
            </div>
            <div className="sidebar_item__name">
            Điện thoại - Máy Tính Bảng
            </div>
          </a>
          <a href="#" className="sidebar_item">
            <div className="sidebar_item__icon">
              <img src={phone_icon} alt="Icon" />
            </div>
            <div className="sidebar_item__name">
            Điện thoại - Máy Tính Bảng
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
