import { LOAD_GOODS, GOODS_LOADING } from "../types";
import http from "../../services/http";
import { ApiRoutes } from "../../ts/enum";

export const fetchGoods = () => async (dispatch: any) => {
  try {
    dispatch({
      type: GOODS_LOADING,
      payload: true,
    });
    const payload = await http.get(ApiRoutes.Goods);
    dispatch({
      type: LOAD_GOODS,
      payload,
    });
  } catch (e) {
    console.log(e);
  } finally {
    dispatch({
      type: GOODS_LOADING,
      payload: false,
    });
  }
};
