import * as types from "../types";

const initialBooks = {
  credentials: JSON.parse(localStorage.getItem('token') as any) || null as any,
};

const authReducer = (state = initialBooks, action: any) => {
  switch (action.type) {
    case types.LOGIN:
      state.credentials = action.payload;

      return { ...state, credentials: action.payload };
    case types.LOGOUT:
      state.credentials = null;
      return { ...state, credentials: null };
    default:
      return state;
  }
};

export { authReducer };
