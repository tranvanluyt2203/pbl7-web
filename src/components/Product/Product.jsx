import phone from "../../assets/img/product/xvybrlcyllnt1.jpg";
import shopee_icon from "../../assets/img/shop/shopee_icon.png";
import "./Product.scss";

const Product = () => {
  return (
    <>
      <div className="product_full_container">
        <div className="product_image_full">
          <img src={phone} alt="" />
        </div>
        <div className="product_details">
          <button>Xem chi tiết</button>
        </div>
        <div className="product_name">
          Item Name Item Name Item Name Item Name
        </div>
        <div className="product_price">
          <div className="promo_price">9.999.999đ</div>
          <div className="price_original">
            <div className="original">9.999.999đ</div>
            <div className="discount">-5%</div>
          </div>
        </div>
        <div className="product_shop_count">
          <a href="http://shopee.com">
            <span id="shop_icon">
              <img src={shopee_icon} alt="Shop Mini Icon" />
            </span>
            <span>shopee.com</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Product;
