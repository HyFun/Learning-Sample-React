import React from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch, Provider } from "react-redux";
import { createStore } from "redux";
import "./index.css";

// -----------------useSelector、useDispatch--------------------
const store = createStore((state = { name: "", tel: "" }, action) => {
  if (action.type === "name") {
    return { ...state, name: action.data };
  } else if (action.type === "tel") {
    return { ...state, tel: action.data };
  }
  return state;
});

const Form = () => {
  const formData = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <h1>表单组件</h1>
      名字：
      <input
        value={formData.name}
        onChange={(e) => {
          dispatch({ type: "name", data: e.target.value });
        }}
      />
      <br />
      电话：
      <input
        value={formData.tel}
        onChange={(e) => {
          dispatch({ type: "tel", data: e.target.value });
        }}
      />
      <br />
    </div>
  );
};

const Panel = () => {
  const formData = useSelector((state) => {
    return state;
  });

  return (
    <div>
      <h1>展示内容</h1>
      <p>姓名：{formData.name}</p>
      <p>电话：{formData.tel}</p>
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <Form />
      <Panel />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
