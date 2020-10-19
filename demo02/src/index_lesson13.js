import React from "react";
import ReactDOM from "react-dom";

const root = document.querySelector("#root");

// ------------------react插槽-------------------
/**
 * 使用props.children获取组件中的插槽
 */
// class Parent extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log(props);
//   }
//   render() {
//     return (
//       <div>
//         <h1>组件插槽</h1>
//         {this.props.children}
//       </div>
//     )
//   }

// }

// ReactDOM.render(<Parent>
//   <h2>插槽1</h2>
//   <h2>插槽2</h2>
//   <h2>插槽333</h2>
// </Parent>,root)

/**
 * 2. 具名插槽。根据插槽不同的属性，分别放置插槽的位置
 */

class Parent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let header = "";
    let main = "";
    let footer = "";
    // let header=main=footer=''
    if (Array.isArray(this.props.children)) {
      this.props.children.forEach((item) => {
        if (item.props.name === "header") {
          header = item;
        } else if (item.props.name === "main") {
          main = item;
        } else if (item.props.name === "footer") {
          footer = item;
        }
      });
    }

    return (
      <div>
        <h1>我是父组件</h1>
        <div>{header}</div>

        <div>{main}</div>

        <div>{footer}</div>
      </div>
    );
  }
}

ReactDOM.render(<Parent>
  <h2 name='main'>我是main</h2>
  <h2 name='footer'>我是footer</h2>
  <h2 name='header'>我是header</h2>
</Parent>, root);
