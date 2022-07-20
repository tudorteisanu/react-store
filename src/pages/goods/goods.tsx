import React from "react";
import { connect } from "react-redux";
import { fetchGoods } from "../../store/actions/goods";
import GoodList from "../../components/goods/GoodList";
import Loading from "../../components/base/Loading";

interface IState {
  goods: Array<any>;
}

class Goods extends React.Component<any, IState> {
  async componentDidMount() {
    await this.props.fetchGoods();
  }

  render() {
    return (
      <Loading loading={this.props.loading}>
        <div>
          <div className="m-10">
            <GoodList goods={this.props.goods} />
          </div>
          <button onClick={() => this.props.fetchGoods()}> fetch</button>
        </div>
      </Loading>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    goods: state.goods.items,
    loading: state.goods.loading,
  };
};

export default connect(mapStateToProps, { fetchGoods })(Goods);
