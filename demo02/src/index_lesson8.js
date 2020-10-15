import React from "react";
import ReactDOM from "react-dom";

const root = document.querySelector("#root");

// ------------------React事件-------------------
/**
 * 1. 绑定事件的命名，使用驼峰命名法
 * 2. 传入一个函数，而不是字符串   <button onClick={this.clickEvent}>点我</button>
 * 3. 阻止默认事件：e.preventDefault()
 * 4. 传值：使用匿名函数再调用传值
 */
class Parent extends React.Component {
  render() {
    const parent = {
      width: "400px",
      height: "400px",
      background: "pink",
    };
    const child = {
      width: "200px",
      height: "200px",
      background: "purple",
    };

    return (
      <div onClick={this.clickParent} style={parent}>
        <a
          href="https://www.baidu.com"
          target="_blank"
          onClick={this.clickLink}
        >
          跳转到百度
        </a>
        <br />
        <button onClick={this.clickButton}>点我(冒泡)</button>
        <br />
        <button onClick={this.clickButtonStop}>点我(阻止冒泡)</button>
        <br />
        <button
          onClick={(e) => {
            this.clickParam(e, 1, 2, 3, 4, 5);
          }}
        >
          传值(使用箭头函数)
        </button>
        <br />
        <button
          onClick={function (e) {
            this.clickParam(e, 1, 2, 3, 4, 5);
          }.bind(this)}
        >
          传值(不使用箭头函数)
        </button>
        <br />
      </div>
    );
  }
  clickParent = (e) => {
    // react 返回的事件对象，是原生的事件对象，如果想查看事件对象的具体值，必须直接输出事件对象的属性
    console.log("点击了parent", e);
  };

  clickButton = () => {
    console.log("点击了button");
  };

  clickButtonStop = (e) => {
    console.log("点击了button");
    // 阻止事件冒泡
    e.stopPropagation();
  };

  /**
   * 点击链接
   * 阻止默认事件
   */
  clickLink = (e) => {
    e.preventDefault();
  };
  /**
   * 传递多个参数
   */
  clickParam = (e, ...param) => {
    console.log("多个参数传递", e, ...param);
  };
}
ReactDOM.render(<Parent />, root);
