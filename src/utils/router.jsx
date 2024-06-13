import Login from "../containers/Anonymous/Login/Login";
import Register from "../containers/Anonymous/Register/Register";
import HomePage from "../containers/User/HomePage/HomePage";
import ProductPage from "../containers/User/Product/Product";
import Search from "../containers/User/Search/Search";
import UserPage from "../containers/User/UserPage/UserPage";

const userRoutes = [
  { path: "/", component: HomePage },
  { path: "/search", component: Search },
  { path: "/category/:id", component: Search, isCategory: true },
  { path: "/product", component: ProductPage },
  { path: "/myinfo", component: UserPage },
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
