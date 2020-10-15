import React from "react";
import ReactDOM from "react-dom";

const root = document.querySelector("#root");

// ------------------子组件传给父组件传值-------------------
/**
 * 调用父元素的函数，从而操作父元素数据。从而实现数据从子元素传递至父元素
 * 1. 在父组件中写一个修改state的方法
 * 2. 将此方法传递给子组件
 * 3. 子组件通过调用父组件传递过来的修改方法，来实现修改父组件的数据
 */
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "我是父组件",
      childrenData: {
        name: "我还是个孩子哟~",
        age: 20,
        height: 170,
      },
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.data}</h1>
        <h2>{JSON.stringify(this.state.childrenData)}</h2>
        <Child info={this.state.childrenData} setInfo={this.setInfo}/>
      </div>
    );
  }

  setInfo = (data) => {
    this.setState({
      childrenData: data,
    });
  };
}

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "我是子组件",
    };
  }
  render() {
    return (
      <div>
        <h2>{this.state.data}</h2>
        <h2>{JSON.stringify(this.props.info)}</h2>
        <div>
            <input value={this.props.info.name} onChange={this.onValueChange.bind(this)} data-field="name"/>
            <br />
            <input value={this.props.info.age} onChange={this.onValueChange.bind(this)} data-field="age"/>
            <br />
            <input value={this.props.info.height} onChange={this.onValueChange.bind(this)} data-field="height"/>
            <br />
        </div>
      </div>
    );
  }

  onValueChange(e){
      const field = e.target.dataset.field
      const info = this.props.info
      info[field] = e.target.value
      this.props.setInfo(info)
  }
}

ReactDOM.render(<Parent />, root);
