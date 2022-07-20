import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import goods from "./modules/goods";
import general from "./modules/general";
import auth from "./modules/auth";
import { PageLayout } from "../ts/enum";
import { GlobalProvider } from "../context";
import { LoadingSpinner } from "../components/base/Loading";

const routes = [...general, ...goods, ...auth];

const LayoutType = {
  auth: React.lazy(() => import("../layouts/auth")),
  default: React.lazy(() => import("../layouts/default")),
} as any;

class Layout extends React.Component<any, any> {
  render() {
    const layoutName = this.props.route.layout || PageLayout.Default;

    const Default = LayoutType[layoutName];
    return (
      <Default>
        <Main>{this.props.children}</Main>
      </Default>
    );
  }
}

function Main({ children }: any) {
  let navigate = useNavigate();

  return (
    <GlobalProvider value={{ navigate, user: { id: 2 }, token: "asdfasd" }}>
      {children}
    </GlobalProvider>
  );
}

export default class BaseRouter extends React.Component<any, any> {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          {routes.map((route: any, index: number) => (
            <Route
              key={index}
              path={route.path}
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Layout route={route}>{<route.element />}</Layout>
                </Suspense>
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    );
  }
}
