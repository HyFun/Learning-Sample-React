import React,{useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// -----------------useState--------------------
const Example = (props)=>{
  const [count,setCount] = useState(0)
  return (
    <div>
      <h2>You click：{count} times</h2>
      <button onClick={()=>{setCount(count+1)}}>click me</button>
    </div>
  )
}



ReactDOM.render(
    <Example />,
  document.getElementById('root')
);
