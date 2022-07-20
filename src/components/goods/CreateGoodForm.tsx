import { Component } from "react";
import http from "../../services/http";
import { ApiRoutes, PageRoutes } from "../../ts/enum";
import FormInput from "../form/FormInput";
import Card from "../base/Card";
import CardHeading from "../base/CardHeading";
import FileUploader from "../form/FIleUploader";
import Button from "../form/Button";
import FormTextarea from "../form/FormTextarea";
import { NavLink } from "react-router-dom";

export default class CreateGoodForm extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      model: {} as any,
      submitted: false,
    };
  }

  setFile(photoId: number) {
    this.setState({ ...this.state, model: { ...this.state.model, photoId } });
  }

  onInput(event: any, key: string): void {
    this.setState({
      ...this.state,
      model: { ...this.state.model, [key]: event.target.value },
    });
  }

  submit = async (e: any): Promise<void> => {
    try {
      const model = {} as Record<string, string | number>;

      Object.keys(this.state.model).map((key: string) => {
        if (Number(this.state.model[key])) {
          model[key] = Number(this.state.model[key]);
        } else {
          model[key] = this.state.model[key];
        }
        return key;
      });
      e.preventDefault();
      await http.post(ApiRoutes.Goods, model);
      this.setState({ submitted: true, model: {} });
    } catch (e) {
      console.log(e);
    }
  };

  toggle = (): void => {
    this.setState({ ...this.state, submitted: !this.state.submitted });
  };

  get title() {
    if (this.state.submitted) {
      return "Successful added good";
    }
    return "Create good";
  }

  render() {
    const { submitted } = this.state;
    return (
      <Card>
        <CardHeading title={this.title} />
        {submitted ? (
          <div>
            <Button onClick={ this.toggle}> Add one more</Button>

            <NavLink to={PageRoutes.GoodsList}>
              <button className="w-full p-1 mt-2 rounded-md border border-gray-400 text-gray-500">
                To list
              </button>
            </NavLink>
          </div>
        ) : (
          <form onSubmit={this.submit}>
            <FormInput
              label="Name"
              onInput={(e: any) => this.onInput(e, "name")}
            />
            <FormTextarea
              label="Description"
              onInput={(e: any) => this.onInput(e, "description")}
            />
            <FormInput
              label="Price"
              type="number"
              onInput={(e: any) => this.onInput(e, "price")}
            />
            <FormInput
              label="Discount"
              type="number"
              onInput={(e: any) => this.onInput(e, "discount")}
            />
            <FileUploader onUpload={(e: any) => this.setFile(e)} />
            <Button>Submit</Button>
          </form>
        )}
      </Card>
    );
  }
}
