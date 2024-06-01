import "./ProductShopShort.scss";
import shopee from "../../assets/img/shop/shopee.png"

const ProductShopShort = () => {
  return (
    <>
      <>
        <div className="product_short_container">
          <div className="recommended">Đề xuất</div>
          <div className="product_image_full">
            <img src={shopee} alt="ShopLogo" />
          </div>
          <div className="product_price">9.999.999đ</div>
          <div className="product_link">
            <button>Xem ngay</button>
          </div>
        </div>
      </>
    </>
  );
};

export default ProductShopShort;
