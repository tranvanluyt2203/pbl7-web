import userLayout from "./layout/userLayout/userLayout";
import { userRoutes, testRouters } from "./utils/router";
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
                  <Page />
                </Layout>
              }
            ></Route>
          );
        })}
        {testRouters.map((route, index) => {
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
