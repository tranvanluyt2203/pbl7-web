import Product from "../../../components/Product/Product";
import "./Search.scss";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Search = ({ isCategory }) => {
  const { id } = useParams();
  const [isFilterShow, setFilterShow] = useState(false);
  const FilterOnOff = () => {
    setFilterShow(!isFilterShow);
  };
  return (
    <>
      {isCategory && (
        <>
          <div className="category_name">{id}</div>
        </>
      )}
      <div className="result__header">
        <div className="result__count">
          {isCategory ? (
            <>
              Có <span>1.234.567</span> sản phẩm
            </>
          ) : (
            <>
              Có <span>1.234.567</span> kết quả cho <span>điện thoại</span>
            </>
          )}
        </div>
        <div className="result__filter">
          <div className="filter" id="sort">
            <select name="sortSelect" id="sortSelect">
              <option value="1">Giá từ cao đến thấp</option>
              <option value="2">Giá từ thấp đến cao</option>
            </select>
          </div>
          <button
            className="filterOpen"
            onClick={FilterOnOff}
            style={isFilterShow ? { border: "1px solid #207bc1" } : {}}
          >
            <i className="fa-regular fa-filter"></i>
            Bộ lọc
          </button>
        </div>
      </div>
      {isFilterShow && (
        <>
          <div className="result__filter_detail">
            <select name="shopFilter" id="shopFilter">
              <option value="">Cửa hàng</option>
              <option value="shopee.vn">shopee.vn</option>
            </select>
            <select name="priceFilter" id="priceFilter">
              <option value="">Price</option>
            </select>
          </div>
        </>
      )}
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
