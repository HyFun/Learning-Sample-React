import React, { Component } from "react";
// ----
import { Button, WingBlank, WhiteSpace } from "antd-mobile";
class Home extends Component {
  render() {
    return (
      <WingBlank size="md">
        <WhiteSpace size="md"></WhiteSpace>
        <Button onClick={this.clickToRandom}>随机答题</Button>
      </WingBlank>
    );
  }

  // 点击跳转到随机答题
  clickToRandom=()=>{
      this.props.history.push('/random')
  }
}

export default Home;
