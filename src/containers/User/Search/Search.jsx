import Product from "../../../components/Product/Product";
import {
  getProductByID,
  getProductInCategory,
} from "../../../service/userService";
import "./Search.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Search = ({ isCategory }) => {
  const { id } = useParams();
  const [isFilterShow, setFilterShow] = useState(false);
  const [productList, setProductsList] = useState([]);
  const [productRawData, setProductRawData] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [count, setCount] = useState(12);
  const FilterOnOff = () => {
    setFilterShow(!isFilterShow);
  };

  const expand = () => {
    console.log(productsData)
    if (count + 12 > productRawData.length) {
      setProductsData(productRawData);
      setCount(productRawData.length);
    } else {
      setProductsData(productRawData.slice(0, count + 12));
      setCount(count + 12);
    }
  };
  useEffect(() => {
    if (isCategory) {
      const fetchProductList = async () => {
        const res = await getProductInCategory(id);
        if (res.status === 200) {
          setProductsList(res.data.data.result);
        }
      };
      fetchProductList();
    }
  }, []);

  useEffect(() => {
    if (productList.length > 0) {
      const fetchProducts = async () => {
        const promises = productList.map(async (element) => {
          const res = await getProductByID(element);
          if (res.status === 200) return res.data.data.detailProduct;
        });
        const products = await Promise.all(promises);
        const filteredProducts = products.filter((product) => product); // Filter out undefined values
        setProductRawData(filteredProducts);
        setProductsData(filteredProducts.slice(0, 12)); // Update productsData with the first 12 items
      };

      fetchProducts();
    }
  }, [productList]);
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
        {productsData.map((item, index) => (
          <Product key={index} data={item} />
        ))}
      </div>
      <div className="expand">
        <button onClick={expand}>Xem thêm</button>
      </div>
    </>
  );
};

export default Search;
