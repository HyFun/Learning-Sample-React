
import '@/styles/normalize.css'

// react
import React from 'react'
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'

// 路由
import Login from '@/views/login/index'

class App extends React.Component {
  render() {
    return (
      <Router >
        <Switch>
          <Route path="/login" exact component={Login}/>
          <Redirect path="/" to={{pathname: '/login'}} />
        </Switch>
      </Router>
    )
  }
}

export default App;
