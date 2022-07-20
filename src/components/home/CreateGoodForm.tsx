import { Component } from "react";
import { HttpService } from "../../services/http";
import { ApiRoutes } from "../../ts/enum";
import FormInput from "../form/FormInput";
import Card from "../base/Card";
import CardHeading from "../base/CardHeading";
import FileUploader from "../form/FIleUploader";
import Button from "../form/Button";

export default class CreateGoodForm extends Component<any, any> {
  http: HttpService;

  constructor(props: any) {
    super(props);
    this.state = {
      model: {} as any,
    };
    this.http = new HttpService();
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
      await this.http.setToken().post(ApiRoutes.Goods, model);
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return (
      <Card>
        <CardHeading title={"Create good"} />
        <form onSubmit={this.submit}>
          <FormInput
            label="Name"
            onInput={(e: any) => this.onInput(e, "name")}
          />
          <FormInput
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
      </Card>
    );
  }
}
