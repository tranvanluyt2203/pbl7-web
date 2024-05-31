import ProductBlock from "../components/ProductBlock/ProductBlock";
import HomePage from "../containers/User/HomePage/HomePage";


const userRoutes = [{ path: "/", component: HomePage }];

const testRouters = [{ path: "/test", component: ProductBlock }];

export { userRoutes, testRouters };
