import React from "react";
import HomeContent from "../components/home/HomeContent";

export default class Home extends React.Component {
  render() {
    return (
      <div className="sm:max-w-lg mx-auto">
        <HomeContent />
      </div>
    );
  }
}
