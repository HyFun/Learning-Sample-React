import React from "react";
import ReactDOM from "react-dom";
import Redux, { createStore } from "redux";
// import App from './App'

const root = document.querySelector("#root");

// ------------------Redux使用-------------------
/**
 * 一种状态管理的解决方案
 * Store 数据仓库，保存数据的地方
 * State 保存data数据的地方，包含整个应用所有的数据
 * Action 动作，触发数据改变的方法
 * Dispatch 触发动作的方法
 * Reduce 通过获取action，改变数据，生成一个新的state，从而改变页面
 */
// 创建仓库
const store = createStore((state = { num: 0 }, actions) => {
  switch (actions.type) {
    case "add":
      state.num++;
      break;
    case "reduce":
      state.num--;
      break;
    default:
      break;
  }
  return { ...state };
});
// 监听数据变化
store.subscribe(()=>{
    ReactDOM.render(<Counter />, root);
})

function add() {
  // 通过仓库的方法修改数据
  store.dispatch({ type: "add" });
}

function reduce() {
  // 通过仓库的方法修改数据
  store.dispatch({ type: "reduce" });
}

const Counter = function (props) {
  return (
    <div>
      <h1>计数数量：{store.getState().num}</h1>
      <button onClick={reduce}>-</button>
      <button onClick={add}>+</button>
    </div>
  );
};

ReactDOM.render(<Counter />, root);
