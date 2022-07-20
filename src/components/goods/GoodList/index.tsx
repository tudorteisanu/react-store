import { Component } from "react";
import { HttpService } from "../../../services/http";
import GoodCard from "./GoodCard";
import { ApiRoutes } from "../../../ts/enum";

interface IState {
  goods: [];
}

export default class GoodList extends Component<any, IState> {
  http: HttpService;

  constructor(props: any) {
    super(props);
    this.state = {
      goods: [] as any,
    };
    this.http = new HttpService();
  }

  async componentDidMount() {
    await this.loadData();
  }

  async loadData(): Promise<void> {
    try {
      const response: any = await this.http.setToken().get(ApiRoutes.Goods);
      this.setState({ goods: response });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {this.state.goods.map((good: any, index: number) => (
          <GoodCard good={good} key={index} />
        ))}
      </div>
    );
  }
}
