import React from "react";
import ReactDOM from "react-dom";

const root = document.querySelector("#root");

// ------------------列表渲染-------------------
// 获取数据
let axios = require("axios");
const http = axios.create({
  baseURL: "/_api",
  timeout: 30000,
});


class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
    };
  }
  render() {
    return <List areaList={this.state.datas} />;
  }
  componentDidMount() {
    // 获取数据
    this.getData()
      .then((res) => {
        if (res.status === 200 && res.data.code === 10000) {
          return Promise.resolve(res.data.data.areaTree);
        } else {
          return Promise.reject(new Error(res.data.msg));
        }
      })
      .then((areaTree) => {
        return Promise.resolve(
          areaTree.find((item) => {
            return item.name === "中国";
          })
        );
      })
      .then((china) => {
        if (china) {
          console.log("中国各个地区", china.children);
          this.setState({
            datas: china.children.sort((a,b)=>b.today.confirm-a.today.confirm),
          });
        }
      })
      .catch((error) => {
        alert(error.message || "获取数据失败");
      });
  }

  /**
   * 获取实时得数据
   */
  async getData() {
    return http({
      url: "/ug/api/wuhan/app/data/list-total?t=320551346573",
      method: "get",
    });
  }
}

class List extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const tableRow = {
      width: "500px",
      display: "flex",
      textAlign: 'center'
    };
    const tableHead = {
      backgroundColor: '#f0f0f0'
    }
    const tableCol = {
      flex: "1",
      padding: "10px",
    };
    const confirmStyle = {
      color: 'red'
    }
    const deadStyle = {
      color: '#333'
    }
    const healStyle = {
      color: '#09bb07'
    }

    const list = [];
    list.push(
      <div style={{...tableRow,...tableHead}} key="row">
        <div style={tableCol}>地区</div>
        <div style={{...tableCol,...confirmStyle}}>确诊</div>
        <div style={{...tableCol,...deadStyle}}>死亡</div>
        <div style={{...tableCol,...healStyle}}>治愈</div>
      </div>
    );
    this.props.areaList.forEach((item) => {
      list.push(
        <div style={tableRow} key={item.id}>
          <div style={tableCol}>{item.name}</div>
          <div style={{...tableCol,...confirmStyle}}>{item.today.confirm}</div>
          <div style={{...tableCol,...deadStyle}}>{item.today.dead}</div>
          <div style={{...tableCol,...healStyle}}>{item.today.heal}</div>
        </div>
      );
    });

    return <div>{list}</div>;
  }
}

ReactDOM.render(<Parent />, root);
