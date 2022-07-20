import React from "react";
import "./App.css";
import BaseRouter from "./router";
import { createStore } from "redux";
import allReducers from "./store/reducers";
import { Provider } from "react-redux";

const store = createStore(allReducers);

export default class App extends React.Component<any, any> {
  render() {
    return (
      <Provider store={store}>
        <BaseRouter />
      </Provider>
    );
  }
}
