import React from "react";
import Header from "../components/navigation/Header";
import { UserInterface } from "../ts/interfaces";

interface IProps {
  children?: any;
}
interface IState {
  user: UserInterface;
}

export default class Default extends React.Component<IProps, IState> {
  render() {
    return (
      <div className="w-full  min-h-screen bg-gray-700">
        <Header />
        <div>{this.props.children}</div>
      </div>
    );
  }
}
