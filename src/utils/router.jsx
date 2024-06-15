import Login from "../containers/Anonymous/Login/Login";
import Register from "../containers/Anonymous/Register/Register";
import HomePage from "../containers/User/HomePage/HomePage";
import Search from "../containers/User/Search/Search";
import UserPage from "../containers/User/UserPage/UserPage";

const userRoutes = [
  { path: "/", component: HomePage },
  { path: "/category/:id", component: Search, isCategory: true },
  { path: "/search/:id", component: Search, isCategory: false },
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

export { userRoutes, anonymousRoutes };
