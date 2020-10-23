import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {useWindowResize} from './hooks'

// -----------------自定义hooks--------------------
const Parent = () =>{
  const [width,height] = useWindowResize()

  return (
    <div>
      窗口宽高：{width} * {height}
    </div>
  )
}

ReactDOM.render(<Parent />, document.getElementById("root"));
