import React, { useState, useEffect, useMemo } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// -----------------useEffect--------------------
/**
 * useMemo实现类似vue的计算属性
 */
const Parent = () =>{
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const fullName = useMemo(()=>{return (firstName+' | '+lastName)},[firstName,lastName])

  return (
    <div>
      FirstName：<input value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/> <br/>
      LastName：<input value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/> <br/>
      <h1>{fullName}</h1>
    </div>
  )
}

ReactDOM.render(<Parent />, document.getElementById("root"));
