import userLayout from "./layout/userLayout/userLayout";
import { userRoutes, anonymousRoutes } from "./utils/router";
import { Routes, Route } from "react-router-dom";

const RouterCustom = () => {
  return (
    <>
      <Routes>
        {userRoutes.map((route, index) => {
          const Layout = userLayout;
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page {...(route.isCategory ? { isCategory: route.isCategory } : {})} />
                </Layout>
              }
            ></Route>
          );
        })}
        {anonymousRoutes.map((route, index) => {
          const Page = route.component;
          return (
            <Route key={index} path={route.path} element={<Page />}></Route>
          );
        })}
        
      </Routes>
    </>
  );
};

export default RouterCustom;
