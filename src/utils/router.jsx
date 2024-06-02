import Login from "../components/Login/Login";
import HomePage from "../containers/User/HomePage/HomePage";
import ProductPage from "../containers/User/Product/Product";
import Search from "../containers/User/Search/Search";

const userRoutes = [
  { path: "/", component: HomePage },
  { path: "/search", component: Search },
  { path: "/product", component: ProductPage },
];

const testRouters = [{ path: "/test", component: Login }];

export { userRoutes, testRouters };
