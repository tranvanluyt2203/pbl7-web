import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar_container">
        <div className="sidebar_header">Danh mục sản phẩm</div>
        <div className="sidebar_items">
          <a href="#" className="sidebar_item">
            <div className="sidebar_item__icon">Icon</div>
            <div className="sidebar_item__name">
              Item Name Item Name Item Name Item Name
            </div>
          </a>
          <a href="#" className="sidebar_item">
            <div className="sidebar_item__icon">Icon</div>
            <div className="sidebar_item__name">
              Item Name Item Name Item Name Item Name
            </div>
          </a>
          <a href="#" className="sidebar_item">
            <div className="sidebar_item__icon">Icon</div>
            <div className="sidebar_item__name">
              Item Name Item Name Item Name Item Name
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
