import React from "react";
import FormInput from "../form/FormInput";
import Button from "../form/Button";
import Card from "../base/Card";
import CardHeading from "../base/CardHeading";
import { HttpService } from "../../services/http";
import { ApiRoutes, PageRoutes } from "../../ts/enum";
import { GlobalContext } from "../../context";

class ResetPasswordForm extends React.Component<any, any> {
  private http;

  constructor(props: any) {
    super(props);
    this.state = {
      form: { password: "", passwordConfirmation: "" },
      token: this.setToken(),
    };
    this.http = new HttpService();
  }

  async componentDidMount() {
    await this.checkResetToken();
  }

  navigate(url: string) {
    (this.context as any)(url);
  }

  onInput(event: any, key: string): void {
    this.setState({
      ...this.state,
      form: { ...this.state.form, [key]: event.target.value },
    });
  }

  submit = async (event: any): Promise<void> => {
    try {
      event.preventDefault();
      await this.http.post(ApiRoutes.ResetPassword, {
        ...this.state.form,
        token: this.state.token,
      });
      this.navigate(PageRoutes.Login);
    } catch (e) {
      console.log(e);
    }
  };

  setToken = () => {
    const search = window.location.search;
    return new URLSearchParams(search).get("token");
  };

  checkResetToken = async (): Promise<void> => {
    try {
      console.log(this.state);
      await this.http.post(ApiRoutes.CheckResetPassword, {
        token: this.state.token,
      });
    } catch (e) {
      this.navigate(PageRoutes.InvalidResetPassword);
    }
  };

  render() {
    return (
      <Card header={<CardHeading title={"Reset your password"} />}>
        <form className="space-y-6" onSubmit={this.submit}>
          <FormInput
            label={"New Password"}
            type="password"
            onInput={(e: any) => this.onInput(e, "password")}
          />
          <FormInput
            label={"Repeat new password"}
            type="password"
            onInput={(e: any) => this.onInput(e, "passwordConfirmation")}
          />

          <div>
            <Button>Reset password</Button>
          </div>
        </form>
      </Card>
    );
  }
}

ResetPasswordForm.contextType = GlobalContext;

export default ResetPasswordForm;
