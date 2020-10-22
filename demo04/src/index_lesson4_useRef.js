import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// -----------------useEffect--------------------
/**
 * 使用useRef给按钮元素绑定事件
 */
const Example = () =>{
  const [count,setCount] = useState(0)
  const btnRef = useRef(null)

  useEffect(()=>{
    console.log('执行了',count);
    const click = () => {
      setCount(count+1)
    }
    btnRef.current.addEventListener('click',click)
    return ()=>{
      btnRef.current.removeEventListener('click',click)
    }
  },[])

  return (
    <div>
      <h1>当前的count：{count}</h1>
      <button ref={btnRef}>点我</button>
    </div>
  )
}



ReactDOM.render(<Example />, document.getElementById("root"));
