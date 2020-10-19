import React from 'react';
import {HashRouter as Router,Link,Route} from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>首页</h1>
    </div>
  )
}

function Message() {
  return (
    <div>
      <h1>消息</h1>
    </div>
  )
}

/**
 * 接收路由参数
 */
class Me extends React.Component {
  constructor(props) {
    super(props);
    console.log('id的值：',props.match.params.id);
  }
  
  render() {
    return (
      <div>
      <h1>Me</h1>
    </div>
    )
  }
}


function Contract() {
  return (
    <div>
      <h1>联系人</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Router basename='project'>
        <div>
          <Link to='/'>Home</Link> | 
          <Link to='/message'>Message</Link> | 
          <Link to='/contract'>Contract</Link> | 
          <Link to={{pathname:'/me/12345678',search:'?username=张三',state:{age:'17岁'}}}>Me</Link> |
          <Link to='/news/123456' >News</Link>
        </div>
        <Route path='/' exact component={Home}/>
        <Route path='/message' component={Message}/>
        <Route path='/contract' component={Contract}/>
        <Route path='/me/:id' component={Me}/>
        <Route path='/news' component={()=>('新闻页面')}/>
      </Router>
    </div>
  );
}

export default App;
