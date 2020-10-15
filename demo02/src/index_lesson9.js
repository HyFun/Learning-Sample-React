import React from "react";
import ReactDOM from "react-dom";

const root = document.querySelector("#root");

// ------------------条件渲染-------------------
class Welcome extends React.Component {
    render() {
        return (
            <div>
                <h1>欢迎登录</h1>
            </div>
        )
    }
}

class Login extends React.Component {
    render() {
        return (
            <div>
                <h1>请先登录</h1>
            </div>
        )
    }
}


class Parent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: false
        }
    }
    render() {
        return (
            <div>
                {this.state.isLogin?<Welcome/>:<Login />}
            </div>
        );
    }
}

ReactDOM.render(<Parent />, root);
