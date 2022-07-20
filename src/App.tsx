import React from "react";
import "./App.css";
import BaseRouter from "./router";
import { Provider } from "react-redux";
import { store } from "./store";
import { Outlet } from "react-router-dom";

export default class App extends React.Component<any, any> {
  render() {
    return (
      <React.StrictMode>
        <Provider store={store}>
          <BaseRouter />
          <Outlet />
        </Provider>
      </React.StrictMode>
    );
  }
}
