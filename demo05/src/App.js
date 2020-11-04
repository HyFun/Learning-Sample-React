
import '@/App.scss'

// react
import React from 'react'
import {HashRouter as Router,Route,Switch} from 'react-router-dom'

// 路由
import Login from '@/views/login/index'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Login}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
