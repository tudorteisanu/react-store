import { SET_LAYOUT } from "../actions/types";
import Default from "../../layouts/default";

const initialState = {
  layout: Default,
};

const layoutReducer =  function (state = initialState, action: { type: any; }) {
  switch (action.type) {
    case SET_LAYOUT:
      return {
        layout: state.layout
      };
    default:
      return state;
  }
}

export default layoutReducer;
