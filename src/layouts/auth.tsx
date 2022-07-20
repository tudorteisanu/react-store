import React from "react";
import { useNavigate } from "react-router-dom";
import { GlobalProvider } from "../context";

interface IProps {
  children: any;
}
interface IState {}

function Main({ children }: any) {
  let navigate = useNavigate();

  return <GlobalProvider value={navigate}>{children}</GlobalProvider>;
}

export default class Auth extends React.Component<IProps, IState> {
  render() {
    return (
      <Main>
        <div className="w-full  min-h-screen bg-gray-200">
          <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-md w-full">
              {this.props.children}
            </div>
          </div>
        </div>
      </Main>
    );
  }
}
