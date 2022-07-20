import React from "react";
import Error from "../../components/auth/Error";

export default class SuccessChangePassword extends React.Component<any, any> {
  render() {
    return (
      <Error
        title="Successful changed password!"
        text="Next go to login for auth."
      />
    );
  }
}
