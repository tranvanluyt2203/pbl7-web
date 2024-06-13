import Product from "../../../components/Product/Product";
import "./Search.scss";

const Search = () => {
  return (
    <>
      <div className="result__header">
        <div className="result__count">
          Có <span>1.234.567</span> kết quả cho <span>điện thoại</span>
        </div>
        <div className="result__filter">
          <div className="filter" id="sort">
            <select name="sortSelect" id="sortSelect">
              <option value="1">Giá từ cao đến thấp</option>
              <option value="2">Giá từ thấp đến cao</option>
            </select>
          </div>
          <button className="filterOpen">
            <i className="fa-regular fa-filter"></i>
            Bộ lọc
          </button>
        </div>
      </div>
      <div className="result__filter_detail">
        <select name="shopFilter" id="shopFilter">
          <option value="">Cửa hàng</option>
          <option value="shopee.vn">shopee.vn</option>
        </select>
        <select name="priceFilter" id="priceFilter">
          <option value="">Price</option>
        </select>
      </div>
      <div className="result__content">
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
      </div>
    </>
  );
};

export default Search;
