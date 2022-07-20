import { LOGIN } from "../types";
import { PageRoutes } from "../../ts/enum";

export const login = (payload: any) => async (dispatch: any) => {
  localStorage.setItem("token", JSON.stringify(payload));

  dispatch({
    type: LOGIN,
    payload,
  });

  window.location.href = PageRoutes.Home;
};
