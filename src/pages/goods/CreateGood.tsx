import React from "react";
import Default from "../../layouts/default";
import CreateGoodForm from "../../components/goods/CreateGoodForm";

export default class CreateGood extends React.Component {
  render() {
    return (
      <Default>
        <div className="sm:max-w-lg mx-auto">
          <CreateGoodForm />
        </div>
      </Default>
    );
  }
}
