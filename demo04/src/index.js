import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import myApp from './helper'

// -----------------useSelector、useDispatch--------------------

const App = () => {
  const [name, setName] = useState("");
  const nameRef = useRef();
  useEffect(() => {
    const onBlurListener = (e) => {
      setName(e.target.value)
    };
    nameRef.current.addEventListener("blur",onBlurListener);
    return () => {
      nameRef.current.removeEventListener("blur",onBlurListener);
    };
  }, []);
  return (
    <div>
      <p>{JSON.stringify(myApp)}</p>
      名字：
      <input ref={nameRef} />
      <p>名字：{name}</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
