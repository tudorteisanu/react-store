import React from "react";
import { NavLink } from "react-router-dom";
import { PageRoutes } from "../../ts/enum";

interface IProps {}
interface IState {}

export default class Header extends React.Component<IProps, IState> {
  protected readonly links = [
    { to: PageRoutes.Home, name: "Home" },
    { to: PageRoutes.About, name: "About" },
    { to: PageRoutes.GoodsCreate, name: "Post" },
    { to: PageRoutes.GoodsList, name: "Goods" },
  ];

  linkClass(link: { isActive: boolean }): string {
    console.log(link)
    if (link.isActive) {
      return "font-bold text-red-500 mx-2";
    }

    return "font-normal text-white mx-2";
  }

  render() {
    return (
      <div className="w-full p-5 bg-blue-800">
        {this.links.map((link, i) => (
          <NavLink to={link.to} key={i} className={this.linkClass}>
            {link.name}
          </NavLink>
        ))}
      </div>
    );
  }
}
