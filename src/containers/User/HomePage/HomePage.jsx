import Sidebar from "../../../components/Sidebar/Sidebar";
import ProductBlock from "../../../components/ProductBlock/ProductBlock";
import "./HomePage.scss";
import { useEffect, useState } from "react";
import { getCategories, getRecommended } from "../../../service/userService";

const HomePage = () => {
  const [sidebarData, setSidebarData] = useState([]);
  const [recProductData, setRecProductData] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const res = await getCategories();
      if (res.status === 200) {
        setSidebarData(res.data.data.result);
      }
    };

    fetchCategories();
  }, []);
  useEffect(() => {
    const fetchRecProductData = async () => {
      const res = await getRecommended();
      if (res.status === 201) {
        setRecProductData(res.data.result);
      }
    };

    fetchRecProductData();
  }, []);
  return (
    <>
      <div className="homePage__container">
        <div className="homePage__sidebar">
          <Sidebar data={sidebarData}></Sidebar>
        </div>
        <div className="homePage__content">
          {recProductData.length > 0 && (
            <ProductBlock
              title="Có thể bạn sẽ thích"
              data={recProductData}
            ></ProductBlock>
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
