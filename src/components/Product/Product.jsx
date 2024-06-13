import phone from "../../assets/img/product/xvybrlcyllnt1.jpg"
import "./Product.scss";

const Product = () => {
  return (
    <>
      <div className="product_container">
        <div className="product_image_full">
          <img src={phone} alt="" />
        </div>
        <div className="product_details">
          <a href="#" className="goto_button">Xem ngay</a>
        </div>
        <div className="product_name">
          Item Name Item Name Item Name Item Name
        </div>
        <div className="product_price">
          9.999.999đ
        </div>
        <div className="product_shop_count">
          <span id="shop_icon">
            <i className="fa-light fa-cart-shopping"></i>
          </span>
          Có <span id="shop_count">123</span> nơi bán
        </div>
      </div>
    </>
  );
};

export default Product;
