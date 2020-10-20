import React from "react";
import { HashRouter as Router, Link, Route, Redirect } from "react-router-dom";
/**
 * 重定向
 */
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginSuccess: false,
    };
  }

  render() {
    return (
      <div>
        <button>
          <Link to={{ pathname: "/middle", state: { login: false } }}>
            点我登录
          </Link>
        </button>
      </div>
    );
  }

  clickLogin = () => {
    // 跳转
  };
}

// 中间跳转页面
class Middle extends React.Component {
  render() {
    if (this.props.location.state.login) {
      return <Redirect to="/welcome" />;
    } else {
      return <Redirect to="/" />;
    }
  }
}

// 登录成功页面
function Welcome() {
  return <div>登录成功</div>;
}


/**
 * Switch组件。如果路由中有相同的路由路径，那么指挥匹配到一个，剩余的路由就不会匹配到了
 */


 /**
  * js跳转
  */




class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Router>
          <Route path="/" exact component={Main}></Route>
          <Route path="/middle" component={Middle} />
          <Route path="/welcome" component={Welcome} />
        </Router>
      </div>
    );
  }
}

export default App;
