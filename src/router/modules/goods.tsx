import React from "react";
import { PageRoutes } from "../../ts/enum";

const goodsRoutes = [
  {
    path: PageRoutes.GoodsList,
    element: React.lazy(() => import("../../pages/goods/goods")),
  },
  {
    path: PageRoutes.GoodsCreate,
    element: React.lazy(() => import("../../pages/goods/CreateGood")),
  },
];

export default goodsRoutes;
