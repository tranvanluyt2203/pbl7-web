import "./ProductShopFull.scss";

const ProductShopFull = () => {
  return (
    <>
      <div className="product_full_container">
        <div className="product_image_full">Img</div>
        <div className="product_details">
          <button>Tới nơi bán</button>
        </div>
        <div className="product_name">
          Item Name Item Name Item Name Item Name{" "}
        </div>
        <div className="product_price">9.999.999đ</div>
        <div className="product_shop_count">
          <span id="shop_icon">avt</span>
          example.com
        </div>
      </div>
    </>
  );
};

export default ProductShopFull;
