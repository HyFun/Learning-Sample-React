import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import '@/style/index.css'
// ----
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// 组件
// import App from "./App";
// 路由
import routers from "@/router";
import RouterView from "@/router/RouterView";

class Loading extends React.Component {
  render() {
    return <div>Loading...</div>;
  }
}

class App extends React.Component {
  render() {
    return (
      <Suspense fallback={<Loading/>}>
        <Switch>
          <RouterView routes={routers} />
        </Switch>
      </Suspense>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
