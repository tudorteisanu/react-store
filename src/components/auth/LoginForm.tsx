import React from "react";
import FormInput from "../form/FormInput";
import { NavLink } from "react-router-dom";
import { PageRoutes } from "../../ts/enum";
import Button from "../form/Button";
import Checkbox from "../form/Checkbox";
import Card from "../base/Card";
import LoginFooter from "./LoginFooter";
import CardHeading from "../base/CardHeading";
import http from "../../services/http";
import { GlobalContext } from "../../context";

export default class LoginForm extends React.Component<any, any> {
  static contextType = GlobalContext;

  constructor(props: any) {
    super(props);
    this.state = {
      form: { email: "", password: "" },
    };
  }

  navigate(url: string): void {
    (this.context as any)(url);
  }

  onInput(event: any, key: string): void {
    this.setState({
      ...this.state,
      form: { ...this.state.form, [key]: event.target.value },
    });
  }

  login = async (event: any): Promise<void> => {
    try {
      event.preventDefault();
      const response: any = await http.post("/auth/login", this.state.form);
      const { token } = response;
      localStorage.setItem("token", token);
      this.navigate(PageRoutes.Home);
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return (
      <Card
        footer={<LoginFooter />}
        header={
          <CardHeading
            title={"Sign in to your account"}
            subTitle={"or start your 14-day free trial"}
          />
        }
      >
        {" "}
        <form className="space-y-6" onSubmit={this.login}>
          <FormInput
            label={"Email"}
            onInput={(e: any) => this.onInput(e, "email")}
          />
          <FormInput
            label="Password"
            type="password"
            onInput={(e: any) => this.onInput(e, "password")}
          />

          <div className="flex items-center justify-between">
            <Checkbox label="Remember me" />
            <div className="text-sm">
              <NavLink
                to={PageRoutes.ForgotPassword}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </NavLink>
            </div>
          </div>

          <div>
            <Button>Sing in</Button>
          </div>
        </form>
      </Card>
    );
  }
}
