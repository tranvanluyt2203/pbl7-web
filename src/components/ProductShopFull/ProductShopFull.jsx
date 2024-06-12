import phone from "../../assets/img/product/xvybrlcyllnt1.jpg";
import shopee_icon from "../../assets/img/shop/shopee_icon.png";
import "./ProductShopFull.scss";

const ProductShopFull = () => {
  return (
    <>
      <div className="product_full_container">
        <div className="product_image_full">
          <img src={phone} alt="" />
        </div>
        <div className="product_details">
          <button>Tới nơi bán</button>
        </div>
        <div className="product_name">
          Item Name Item Name Item Name Item Name
        </div>
        <div className="product_price">9.999.999đ</div>
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

export default ProductShopFull;
