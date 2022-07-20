import React from "react";
import { NavLink } from "react-router-dom";
import { PageRoutes } from "../../ts/enum";

interface IProps {
  title?: string;
  subTitle?: string;
}

export default class CardHeading extends React.Component<IProps, any> {
  render() {
    return (
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {this.props.title}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          <NavLink
            to={PageRoutes.Register}
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            {this.props.subTitle}
          </NavLink>
        </p>
      </div>
    );
  }
}
