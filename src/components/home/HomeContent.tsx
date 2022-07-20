import { Component } from "react";
import http from "../../services/http";
import { ApiRoutes } from "../../ts/enum";
import CreateGoodForm from "./CreateGoodForm";

export default class HomeContent extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      goods: [],
    };
  }
  async componentDidMount() {
    await this.loadData();
  }

  async loadData(): Promise<void> {
    try {
      const goods = await http.setToken().get(ApiRoutes.Goods);
      this.setState({ goods });
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    return <CreateGoodForm />;
  }
}
