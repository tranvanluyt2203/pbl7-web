import Login from "../containers/Anonymous/Login/Login";
import Register from "../containers/Anonymous/Register/Register";
import HomePage from "../containers/User/HomePage/HomePage";
import ProductPage from "../containers/User/Product/Product";
import Search from "../containers/User/Search/Search";

const userRoutes = [
  { path: "/", component: HomePage },
  { path: "/search", component: Search },
  { path: "/product", component: ProductPage },
];

const anonymousRoutes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
];

const testRouters = [{ path: "/test", component: Login }];

export { userRoutes, testRouters, anonymousRoutes };
