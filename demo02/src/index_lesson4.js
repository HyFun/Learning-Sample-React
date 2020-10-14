import React from "react";
import ReactDOM from "react-dom";

const root = document.querySelector('#root')

// ------------------组件-------------------

/**
 * 1. 函数式组件
 */

// 函数式组件
// function Hello() {
//   return <div><h1>Hello World!</h1></div>
// }

// ReactDOM.render(<Hello/>,root)


// 类组件
// class HelloWorld extends React.Component {
//   render() {
//     const style = {
//       backgroundColor: 'pink',
//       color: 'white'
//     }
//     return (
//       <div>
//         <h1 style={style}>HelloWorld!</h1>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<HelloWorld/>,root)



/**
 * 2. 组件传参
 */

// 函数式组件
//  function Child(props) {
//   console.log('props>>>>', props);
//   return (
//     <div>
//       <h1>
//         {props.sick?'不出门，老实在家呆着':'出门出去耍'}
//       </h1>
//     </div>
//   )
//  }

//  ReactDOM.render(<Child sick={true}/>,root)


// 类组件传参
class HelloWorld extends React.Component {
  render() {
    console.log('类组件', this);
    const style = {
      backgroundColor: 'pink',
      color: 'white'
    }
    return (
      <div>
        <h1 style={style}>HelloWorld!</h1>
        <h2>{this.props.name}</h2>
      </div>
    )
  }
}

ReactDOM.render(
  <HelloWorld name="我是helloworld~" />,
  root
)