import { Component } from "react";

interface IProps {
  good: any;
}

export default class GoodCard extends Component<IProps> {
  render() {
    return (
      <div className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
        <div className="flex-1 flex flex-col p-4">
          <img
            className="w-full object-cover h-40 flex-shrink-0 mx-auto rounded-2xl"
            src={this.props.good?.photo?.url}
            alt={this.props.good.name}
          />
          <h3 className="mt-6 text-gray-900 text-sm font-medium">
            {this.props.good.name}
          </h3>
          <dl className="mt-1 flex-grow flex flex-col justify-between">
            <dt className="sr-only">Title</dt>
            <dd className="text-gray-500 text-sm">{this.props.good.description}</dd>
            <dd className="text-gray-900 text-xl font-black mt-4">{this.props.good.price} MDL</dd>
          </dl>
        </div>
      </div>
    );
  }
}
