import Sidebar from "../../../components/Sidebar/Sidebar";
import ProductBlock from "../../../components/ProductBlock/ProductBlock";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <>
      <div className="homePage__container">
        <div className="homePage__sidebar">
          <Sidebar></Sidebar>
        </div>
        <div className="homePage__content">
          <ProductBlock></ProductBlock>
          <ProductBlock></ProductBlock>
        </div>
      </div>
    </>
  );
};

export default HomePage;
