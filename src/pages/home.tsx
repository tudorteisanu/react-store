import React from "react";
import Default from "../layouts/default";
import HomeContent from "../components/home/HomeContent";

export default class Home extends React.Component {
  render() {
    return (
      <Default>
        <div className="sm:max-w-lg mx-auto">
          <HomeContent />
        </div>
      </Default>
    );
  }
}
