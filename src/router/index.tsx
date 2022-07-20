import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageRoutes } from "../ts/enum";

import Home from "../pages/home";
import About from "../pages/about";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import ForgotPassword from "../pages/auth/forgot-password";
import ResetPassword from "../pages/auth/reset-password";
import InvalidResetToken from "../pages/auth/invalid-reset-token";
import CreateGood from "../pages/goods/CreateGood";
import Goods from "../pages/goods/goods";

export default class BaseRouter extends React.Component<any, any> {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          {/*auth*/}
          <Route path={PageRoutes.Login} element={<Login />} />
          <Route path={PageRoutes.Register} element={<Register />} />
          <Route
            path={PageRoutes.ForgotPassword}
            element={<ForgotPassword />}
          />
          <Route path={PageRoutes.ResetPassword} element={<ResetPassword />} />
          <Route
            path={PageRoutes.InvalidResetPassword}
            element={<InvalidResetToken />}
          />
          {/*auth end*/}

          {/*goods*/}
          <Route path={PageRoutes.GoodsList} caseSensitive element={<Goods />} />
          <Route path={PageRoutes.GoodsCreate} caseSensitive element={<CreateGood />} />
          {/*end*/}
          <Route path={PageRoutes.Home} caseSensitive element={<Home />} />
          <Route path={PageRoutes.About} element={<About />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
