import React, { useState, useCallback, memo } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// -----------------useEffect--------------------
/**
 * useMemo实现类似vue的计算属性
 */
const Parent = () => {
  const [text, setText] = useState("");
  const change = useCallback((e) => {
    let value = e.target.value
    value = value.trim()
    setText(value);
  }, []);

  return (
    <div>
      <h1>我是父组件</h1>
      <h1>text: {text}</h1>
      <Child value={text} onChange={change} />
    </div>
  );
};

const Child = memo((props) => {
  console.log(props);
  return (
    <div>
      <h2>我是子组件</h2>
      <input value={props.value} onChange={props.onChange} />
    </div>
  );
},(pre,next)=>{
  return pre.value===next.value
});

ReactDOM.render(<Parent />, document.getElementById("root"));
