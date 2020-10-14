import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import * as serviceWorker from './serviceWorker';


const root = document.getElementById("root");


/**
 * 1. react的style
 */
// const exampleStyle = {
//   backgroundColor: 'black',
//   border: '4px solid green'
// }

// const className = 'text-primary'

// ReactDOM.render(
//   <h1 style={exampleStyle} className={className}>哈哈哈哈</h1>
//   ,root)


/**
 * 2. react设置class
 */
// const className = 'text-primary'
// ReactDOM.render(
//   <h1 className={className}>Hello World！</h1>,
//   root
// )


/**
 * 3. react 设置数组类
 */

 // 错误示例
//  const classNames = ['text-primary','bg-primary']
//  ReactDOM.render(
//    <h1 className={classNames}>Hello World!</h1>,
//    root
//  )
 // 这样设置的class回将数组转化为字符串 text-primary,bg-primary

 // 正确示例
 const classNames = ['text-primary','bg-primary'].join(' ')
 ReactDOM.render(
   <h1 className={classNames}>Hello World!</h1>,
   root
 )


