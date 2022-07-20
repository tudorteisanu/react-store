import * as types from "../types";

const initialBooks = {
  items: [] as Array<any>,
  loading: false,
};

const goodsReducer = (state = initialBooks, action: any) => {
  switch (action.type) {
    case types.LOAD_GOODS:
      state.items = action.payload;
      return { ...state, items: action.payload };
    case types.GOODS_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export { goodsReducer };
