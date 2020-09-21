import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import * as serviceWorker from './serviceWorker';

const root = document.getElementById("root");

// const time = new Date().toLocaleString();
// const str = "当前时间是：";
// const element = (
//   <div>
//     <h1>Hello World!</h1>
//     <h2>{1 + 1}</h2>
//     <h2>{str + time}</h2>
//   </div>
// );

// const hot = false
// const element2 = (
//   <div>
//     <h1>今天是否隔离？</h1>
//     <h2>{hot ? "隔离" : "躺着玩"}</h2>
//   </div>
// );

// console.log(<h1>111</h1>);

let sick = false;
const sickVie = <span style={{ backgroundColor: "red" }}>赶紧隔离</span>;
const healthView = (
  <span style={{ backgroundColor: "green" }}>麻溜在家呆着</span>
);
const element = (
  <div>
    <div>{sick ? sickVie : healthView}</div>
    <button onclick={(sick = !sick)}>点我</button>
  </div>
);

ReactDOM.render(element, root);
