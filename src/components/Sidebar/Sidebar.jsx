import "./Sidebar.scss";

const Sidebar = ({ data }) => {
  const generateLink = (string) => {
    return "/category/" + string;
  }
  return (
    <>
      <div className="sidebar_container">
        <div className="sidebar_header">Danh mục sản phẩm</div>
        <div className="sidebar_items">
          {data.map((item, index) => (
            <a key={index} href={generateLink(item)} className="sidebar_item">
              <div className="sidebar_item__name">
                {item}
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
