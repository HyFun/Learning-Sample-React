import React, { useReducer, useContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// -----------------useReducer、useContext--------------------
const Ctx = React.createContext(null);

const Parent = () => {
  const [count, dispatch] = useContext(Ctx);
  return (
    <div>
      <h1>我是父组件</h1>
      <h1>{count}</h1>
      <Child />
    </div>
  );
};

const Child = () => {
  // const [count, dispatch] = useReducer(reducer, 10);
  const [count, dispatch] = useContext(Ctx);
  return (
    <div>
      <h3>我是子组件</h3>
      <button
        onClick={() => {
          dispatch({ type: "SUB" });
        }}
      >
        -1
      </button>
      <span>{count}</span>
      <button
        onClick={() => {
          dispatch({ type: "ADD" });
        }}
      >
        +1
      </button>
    </div>
  );
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "SUB":
      return state - 1;
    default:
      return state;
  }
};

const App = () => {
  const [count, dispatch] = useReducer(reducer, 20);
  return (
    <Ctx.Provider value={[count, dispatch]}>
      <Parent />
    </Ctx.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
