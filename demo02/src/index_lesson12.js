import React, { Component } from "react";
import ReactDOM from "react-dom";

const root = document.querySelector("#root");

// ------------------React生命周期-------------------
/**
 * 生命周期即是组件从实例化到渲染到最终从页面销毁，整个过程就是生命周期，在这生命周期中，我们有许多可以调用得事件，也俗称为钩子函数
 *
 * 生命周期的三个状态
 *  Mounting: 将组件插入DOM中
 *  Updating：将数据更新到DOM中
 *  Unmounting：将组件移除DOM中
 * 参考资料：https://juejin.im/post/6844903510538977287
 */
class Parent extends Component {
  constructor() {
    super();
    this.state = {
      show: true
    };
  }

  render() {
    console.log("父组件", "render");
    return (
      <div>
        <h1>我是父组件</h1>
        <div>
            显示子组件：
            <input type='radio' id='showchild' name='child' value='true' onChange={this.onRadioChange} checked={this.state.show}/>
            <label htmlFor='showchild'>true</label>
            <input type='radio' id='hidechild' name='child' value='false' onChange={this.onRadioChange} checked={!this.state.show}/>
            <label htmlFor='hidechild'>false</label>
        </div>
        {this.state.show ? <Child number={this.state.number} /> : ""}
      </div>
    );
  }
  onRadioChange=(e)=>{
      const value = e.target.value
        this.setState({
            show: value==='true'
        })
  }

  // 组件将要渲染
  componentWillMount() {
    console.log("父组件", "componentWillMount");
  }
  // 组件渲染完毕
  componentDidMount() {
    console.log("父组件", "componentDidMount");
  }
  // 组件将要接收props数据
  componentWillReceiveProps() {
    console.log("父组件", "componentWillReceiveProps");
  }
  // 组件接收到新的state|props 判断是否更新. 返回布尔值
  shouldComponentUpdate(newProps, newState) {
    console.log("父组件", "shouldComponentUpdate");
    return true
  }
  // 组件将要更新
  componentWillUpdate() {
    console.log("父组件", "componentWillUpdate");
  }
  // 组件已经更新
  componentDidUpdate() {
    console.log("父组件", "componentDidUpdate");
  }
  // 组件将要卸载
  componentWillUnmount() {
    console.log("父组件", "componentWillUnmount");
  }
}

class Child extends Component {
  render() {
    console.log("子组件", "render");
    return (
      <div>
        <h2>我是子组件</h2>
      </div>
    );
  }

  // 组件将要渲染
  componentWillMount() {
    console.log("子组件", "componentWillMount");
  }
  // 组件渲染完毕
  componentDidMount() {
    console.log("子组件", "componentDidMount");
  }
  // 组件将要接收props数据
  componentWillReceiveProps() {
    console.log("子组件", "componentWillReceiveProps");
  }
  // 组件接收到新的state|props 判断是否更新. 返回布尔值
  shouldComponentUpdate(newProps, newState) {
    console.log("子组件", "shouldComponentUpdate");
    return true;
  }
  // 组件将要更新
  componentWillUpdate() {
    console.log("子组件", "componentWillUpdate");
  }
  // 组件已经更新
  componentDidUpdate() {
    console.log("子组件", "componentDidUpdate");
  }
  // 组件将要卸载
  componentWillUnmount() {
    console.log("子组件", "componentWillUnmount");
  }
}

ReactDOM.render(<Parent />, root);
