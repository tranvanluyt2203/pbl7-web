import HomePage from "../containers/User/HomePage";
import Product from "../components/Product/Product";

const userRoutes = [{ path: "/", component: HomePage }];

const testRouters = [{ path: "/test", component: Product }];

export { userRoutes, testRouters };
