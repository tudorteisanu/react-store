import React, { Component } from "react";

export default class Loading extends Component<any, any> {
  render() {
    return (
      <div>{this.props.loading ? <LoadingSpinner /> : this.props.children}</div>
    );
  }
}

export class LoadingSpinner extends Component<any, any> {
  render() {
    return (
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className={"flex items-center justify-center flex-col"}>
          <div className="inline-block animate-spin rounded-full p-2 bg-teal-400 text-white text-sm">
            <svg
              className="w-6 h-6 mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
          <div className="text-white mt-2">Loading...</div>
        </div>
      </div>
    );
  }
}
