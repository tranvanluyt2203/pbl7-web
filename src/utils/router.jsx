import HomePage from "../containers/User/HomePage";
import ProductDetailItem from "../components/ProductDetailItem/ProductDetailItem";

const userRoutes = [{ path: "/", component: HomePage }];

const testRouters = [{ path: "/test", component: ProductDetailItem }];

export { userRoutes, testRouters };
