import React from "react";
import FormInput from "../form/FormInput";
import { NavLink } from "react-router-dom";
import { ApiRoutes, PageRoutes } from "../../ts/enum";
import Button from "../form/Button";
import Checkbox from "../form/Checkbox";
import Card from "../base/Card";
import LoginFooter from "./LoginFooter";
import CardHeading from "../base/CardHeading";
import HttpService from "../../services/http";
import { GlobalContext } from "../../context";

export default class RegisterForm extends React.Component<any, any> {
  private http;
  static contextType = GlobalContext;

  constructor(props: any) {
    super(props);
    this.state = {
      form: { email: "", password: "" },
    };
    this.http = HttpService;
  }

  onInput(event: any, key: string): void {
    this.setState({
      ...this.state,
      form: { ...this.state.form, [key]: event.target.value },
    });
  }

  navigate(url: string) {
    (this.context as any)(url);
  }

  register = async (event: any): Promise<void> => {
    try {
      event.preventDefault();
      await this.http.post(ApiRoutes.Register, this.state.form);
      this.navigate(PageRoutes.Login);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <Card
        footer={<LoginFooter />}
        header={<CardHeading title={"Create New Account"} />}
      >
        {" "}
        <form className="space-y-6" onSubmit={this.register}>
          <FormInput
            label={"Name"}
            onInput={(e: any) => this.onInput(e, "name")}
          />
          <FormInput
            label={"Email"}
            type="email"
            onInput={(e: any) => this.onInput(e, "email")}
          />
          <FormInput
            label="Passowrd"
            type="password"
            onInput={(e: any) => this.onInput(e, "password")}
          />

          <div className="flex items-center justify-between">
            <Checkbox label="Remember me" />
            <div className="text-sm">
              <NavLink
                to={PageRoutes.Login}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Already have an account?
              </NavLink>
            </div>
          </div>

          <div>
            <Button>Create account</Button>
          </div>
        </form>
      </Card>
    );
  }
}
