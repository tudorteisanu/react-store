import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "@reduxjs/toolkit";
import { goodsReducer } from "./reducers/goods";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/auth";

const reducers = combineReducers({
  goods: goodsReducer,
  auth: authReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export { store };
