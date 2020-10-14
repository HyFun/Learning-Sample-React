import React from "react";
import ReactDOM from "react-dom";

const root = document.querySelector('#root')

// ------------------父组件传递给子组件-------------------
class Parent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showChildren: true
    }
    
    // 点击事件
    this.clickToggleChild = this.clickToggleChild.bind(this)
  }

  render() {
    return (
      <div>
        <button onClick={this.clickToggleChild}>点击切换子组件</button>
        <Child show={this.state.showChildren}/>
      </div>

    )
  }

  clickToggleChild() {
    this.setState({
      showChildren: !this.state.showChildren
    })
  }
}

class Child extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const contentStyle = {
      width: '200px',
      height: '200px',
      backgroundColor: 'black',
      color: 'white'
    }
    const hideStyle = {...contentStyle,display: 'none'}
    return (
      <div style={this.props.show?contentStyle:hideStyle}>
        <h1>我是孩子组件哦~</h1>
      </div>
    )
  }
}

ReactDOM.render(<Parent />, root)