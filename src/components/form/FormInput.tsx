import React from "react";
interface IProps {
  type?: string;
  label?: string;
  onInput?: any;
  onChange?: any;
  value?: any;
}

export default class FormInput extends React.Component<IProps> {
  render() {
    return (
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          {this.props.label}
        </label>
        <div className="mt-1">
          <input
            value={this.props.value}
            onInput={this.props.onInput}
            type={this.props.type}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm
                       placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
                       sm:text-sm"
          />
        </div>
      </div>
    );
  }
}
