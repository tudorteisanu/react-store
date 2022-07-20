import React from "react";
import Auth from "../../layouts/auth";
import ResetPasswordForm from "../../components/auth/ResetPasswordForm";

export default class ResetPassword extends React.Component<any, any> {
  render() {
    return (
      <Auth>
        <ResetPasswordForm />
      </Auth>
    );
  }
}
