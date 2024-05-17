import "./Product.scss";

const Product = () => {
  return (
    <>
      <div className="product_container">
        <div className="product_image_full">Img</div>
        <div className="product_details">
          <button>So sánh giá</button>
        </div>
        <div className="product_name">
          Item Name Item Name Item Name Item Name{" "}
        </div>
        <div className="product_price">
          Giá từ <span>9.999.999đ</span>
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
