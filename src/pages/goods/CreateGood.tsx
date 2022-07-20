import React from "react";
import CreateGoodForm from "../../components/goods/CreateGoodForm";

export default class CreateGood extends React.Component {
  render() {
    return (
      <div className="sm:max-w-lg mx-auto">
        <CreateGoodForm />
      </div>
    );
  }
}
