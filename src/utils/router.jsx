import HomePage from "../containers/User/HomePage";
import ProductShopList from "../components/ProductShopList/ProductShopList";

const userRoutes = [{ path: "/", component: HomePage }];

const testRouters = [{ path: "/test", component: ProductShopList }];

export { userRoutes, testRouters };
