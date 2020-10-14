import React from "react";
import ReactDOM from "react-dom";

const root = document.querySelector('#root')

// ------------------state和点击事件-------------------
/**
 * 1. state
 */
// class Clock extends React.Component {
//   constructor(props) {
//     super(props)
//     // 初始化state
//     this.state = {
//       time: new Date().toLocaleString()
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h1>
//           当前时间： {this.state.time}
//         </h1>
//       </div>
//     )
//   }

//   componentDidMount() {
//     setInterval(() => {
//       // 修改数据使用setState()方法，切勿直接修改state里面的数据
//       this.setState({time: new Date().toLocaleString()})
//     }, 1000);
//   }
// }

// ReactDOM.render(<Clock />,root)


/**
 * 2. 点击事件
 */

 class Clock extends React.Component {
   constructor(props) {
     super(props)
     this.state = {
       time: new Date().toLocaleString(),
       timer: undefined
     }

     // 点击事件
     this.clickToggle = this.clickToggle.bind(this)
   }

   render() {
     return (
       <div>
         <button onClick={this.clickToggle}>{this.state.timer?'暂停':'开始'}</button>
         <h1>当前时间：{this.state.time}</h1>
       </div>
     )
   }

   clickToggle() {
    if(this.state.timer) {
      clearInterval(this.state.timer)
      this.setState({
        timer: undefined
      })
    }else {
      // 立即执行
      this.setState({
        time: new Date().toLocaleString()
      })
      // 再隔1s更新一次
      let t = setInterval(() => {
        this.setState({
          time: new Date().toLocaleString()
        })
      }, 1000);
      this.setState({
        timer: t
      })
    }
   }
 }

 ReactDOM.render(<Clock />, root)