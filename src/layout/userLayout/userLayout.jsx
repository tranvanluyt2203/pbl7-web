import Header from "../../components/Header/Header";
import { memo } from "react";
import "./userLayout.scss";
const userLayout = ({ children, ...props }) => {
  return (
    <div {...props}>
      <div className="UserPageContainer">
        <Header />
        <div className="UserPageContent">
          {children}
        </div>
      </div>
    </div>
  );
};

export default memo(userLayout);
