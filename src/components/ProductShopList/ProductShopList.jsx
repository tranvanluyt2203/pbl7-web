import shopee from "../../assets/img/shop/shopee.png"

import "./ProductShopList.scss";

const ProductShopList = () => {
  return (
    <>
      <div className="product_list_container">
        <div className="product_shop">
          <div className="product_shop_avt">
            <img src={shopee} alt="ShopLogo" />
          </div>
          <div className="product_shop_name">example.com</div>
        </div>
        <div className="product_name">
          Item Name Item Name Item Name Item Name
        </div>
        <div className="product_price">9.999.999 đ</div>
        <div className="product_link">
          <button>Tới nơi bán</button>
        </div>
      </div>
    </>
  );
};

export default ProductShopList;
