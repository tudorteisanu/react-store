import React from "react";
import Error from "../../components/auth/Error";

export default class InvalidResetToken extends React.Component<any, any> {
  render() {
    return (
      <Error
        title="Invalid reset token"
        text="Token validity expired or bad token, please, try again"
      />
    );
  }
}
