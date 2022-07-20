import { Component } from "react";
import http from "../../services/http";
import { ApiRoutes } from "../../ts/enum";

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
      const goods = await http.get(ApiRoutes.Goods);
      this.setState({ goods });
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    return <div>Home </div>;
  }
}
