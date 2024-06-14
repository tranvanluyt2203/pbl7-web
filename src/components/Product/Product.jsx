import { useEffect } from "react";
import "./Product.scss";

const Product = ({ key, data }) => {
  const gotoLink = (link) => {
    window.location.href = link;
  };
  return (
    <>
      <div className="product_full_container" key={key}>
        <div className="product_image_full">
          <img src={data.image_product} alt="" />
        </div>
        <div className="product_details">
          <button onClick={() => gotoLink(data.link_product)}>
            Xem chi tiết
          </button>
        </div>
        <div className="product_name">{data.name}</div>
        <div className="product_price">
          <div className="promo_price">{data.price}</div>

          <div className="price_original">
            <div className="original">
              {data.discount === "0%" ? <></> : data.price_original}
            </div>
            <div className="discount">
              {data.discount === "0%" ? <></> : <>-{data.discount}</>}
            </div>
          </div>
        </div>
        <div className="product_shop_count">
          <a href={data.link_sale}>
            <span id="shop_icon">
              <img src={data.image_logo} alt="Shop Mini Icon" />
            </span>
            <span>{data.link_sale}</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Product;
