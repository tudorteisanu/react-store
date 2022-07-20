import React from "react";
import { PageRoutes } from "../../ts/enum";

const generalRoutes = [
  {
    path: PageRoutes.Home,
    element: React.lazy(() => import("../../pages/home")),
  },
  {
    path: PageRoutes.About,
    element: React.lazy(() => import("../../pages/about")),
  },
];

export default generalRoutes;
