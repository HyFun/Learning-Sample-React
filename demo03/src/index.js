import React from 'react';
import ReactDOM from 'react-dom';

// ----
import {Provider} from 'react-redux'
import store from './store'
import {BrowserRouter as Router,Route} from 'react-router-dom'
// 组件
import App from './App'


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path='/' exact component={App}></Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
