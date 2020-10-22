import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// -----------------useEffect--------------------
/**
 * 使用useRef解决重复
 */
const Example = () =>{
  const [count,setCount] = useState(0)
  const countRef = useRef(null)

  useEffect(()=>{
    countRef.current = count
  },[count])

  useEffect(()=>{
    const timer = setInterval(() => {
      setCount(countRef.current+1)
    }, 1000);

    return ()=>{
      clearInterval(timer)
    }
  },[])


  useEffect(()=>{
    console.log('当前的count：',count);
  })
  return (
    <div>
      <h1>当前的count：{count}</h1>
    </div>
  )
}



ReactDOM.render(<Example />, document.getElementById("root"));
