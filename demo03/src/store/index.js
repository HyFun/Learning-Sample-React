import { createStore } from "redux";

import State from "./state";
import Actions from "./actions";
/**
 * 初始化状态，创建reducer函数
 */
const store = createStore((state = State, actions) => {
  // 判断Actons中是否有此操作
  if (Actions[actions.type]) {
    if (actions.data) {
      return { ...Actions[actions.type](state, actions.data) };
    } else {
      return { ...Actions[actions.type](state) };
    }
  }
  return state;
});

export default store;
