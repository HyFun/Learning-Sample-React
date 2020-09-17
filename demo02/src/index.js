import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root')

/**
 * 1. 元素和组件
 */
// const app = <App />; // 组件
// const app1 = <h1>Hello React</h1>; // 元素，元素是组件的最小单位
// ReactDOM.render(app1, root);

/**
 * 2. 实现页面中实时时间的展示
 */
function Clock () {
  ReactDOM.render(<h1>现在时间：{new Date().toLocaleString()}</h1>, root)
}
Clock()
setInterval(Clock, 1000)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
