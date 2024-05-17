import Header from "../../components/Header/Header";
import { memo } from "react";
import "./userLayout.scss";
const userLayout = ({ children, ...props }) => {
  return (
    <div {...props}>
      <div className="UserPageContainer">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default memo(userLayout);
