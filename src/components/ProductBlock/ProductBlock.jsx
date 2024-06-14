import "./ProductBlock.scss";
import "../Product/Product";
import Product from "../Product/Product";
import { useEffect, useState } from "react";
import { getProductByID } from "../../service/userService";

const ProductBlock = ({ title, data }) => {
  const [listProduct, setListProduct] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const promises = data.map(async (element) => {
        const res = await getProductByID(element);
        if (res.status === 200) return res.data.data.detailProduct;
      });
      const products = await Promise.all(promises);
      setListProduct(products.filter(product => product)); // Filter out undefined values
    };
  
    fetchProducts();
  }, [data]);
  
  return (
    <>
      <div className="productBlock">
        <div className="header">{title}</div>
        <div className="content">
          {listProduct.map((item, index) => (
            <Product key={index} data={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductBlock;
