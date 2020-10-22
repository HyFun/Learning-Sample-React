import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// -----------------useEffect--------------------
/**
 *
 */

const Example = (props) => {
  const [count,setCount] = useState(0)
  const [time, setTime] = useState(new Date().toLocaleString());
  useEffect(() => {
    let timmer = setInterval(() => {
      setCount(count+1)
      setTime(new Date().toLocaleString());
    }, 1000);
    return () => {
      clearInterval(timmer);
    };
  }, []);
  return (
    <div>
      <h2>当前count：{count}</h2>
      <h2>当前时间：{time}</h2>
    </div>
  );
};

ReactDOM.render(<Example />, document.getElementById("root"));
