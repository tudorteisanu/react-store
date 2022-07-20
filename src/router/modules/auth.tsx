import React from "react";
import { PageLayout, PageRoutes } from "../../ts/enum";

const authRoutes = [
  {
    path: PageRoutes.Login,
    element: React.lazy(() => import("../../pages/auth/login")),
    layout: PageLayout.Auth,
  },
  {
    path: PageRoutes.Register,
    element: React.lazy(() => import("../../pages/auth/register")),
    layout: PageLayout.Auth,
  },
  {
    path: PageRoutes.ForgotPassword,
    element: React.lazy(() => import("../../pages/auth/forgot-password")),
    layout: PageLayout.Auth,
  },
  {
    path: PageRoutes.InvalidResetPassword,
    element: React.lazy(() => import("../../pages/auth/invalid-reset-token")),
    layout: PageLayout.Auth,
  },
  {
    path: PageRoutes.ResetPassword,
    element: React.lazy(() => import("../../pages/auth/reset-password")),
    layout: PageLayout.Auth,
  },
];

export default authRoutes;
