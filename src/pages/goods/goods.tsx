import React from "react";
import Default from "../../layouts/default";
import GoodList from "../../components/goods/GoodList";

export default class Goods extends React.Component {
  render() {
    return (
      <Default>
        <div className="m-10">
          <GoodList />
        </div>
      </Default>
    );
  }
}
