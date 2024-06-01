import ProductBlock from "../components/ProductBlock/ProductBlock";
import HomePage from "../containers/User/HomePage/HomePage";
import Search from "../containers/User/Search/Search";

const userRoutes = [
  { path: "/", component: HomePage },
  { path: "/search", component: Search },
];

const testRouters = [{ path: "/test", component: ProductBlock }];

export { userRoutes, testRouters };
