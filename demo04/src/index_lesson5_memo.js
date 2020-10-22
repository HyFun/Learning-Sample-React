import React, { useState, useEffect, memo } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// -----------------useEffect--------------------
/**
 * 使用useRef给按钮元素绑定事件
 */
const Parent = () => {
  const [count, setCount] = useState(0);
  const [clickCurrentTime, setTime] = useState(true);

  return (
    <div>
      <h1>我是父组件</h1>
      <h1>count: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        点我
      </button>
      <button
        onClick={() => {
          setTime(!clickCurrentTime);
        }}
      >
        获取当前时间
      </button>
      <Child clickCurrentTime={clickCurrentTime} />
    </div>
  );
};

const Child = memo(
  () => {
    // const [time, setTime] = useState(new Date().toLocaleString());
    const time = new Date().toLocaleString();
    return (
      <div>
        <h2>我是子组件</h2>
        <h2>{time}</h2>
      </div>
    );
  },
  (pre, next) => {
    console.log(pre, next);
    // 默认返回undefined 表示false 会更新
    // 返回true 表示不会更新
    // return true
    // 返回false 会更新
    // return false
    return pre.clickCurrentTime === next.clickCurrentTime;
  }
);

ReactDOM.render(<Parent />, document.getElementById("root"));
