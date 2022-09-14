import { legacy_createStore as createStore } from "redux";

//初始状态
const defaultState = {
  count: 233,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD":
      return { count: state.count + action.data };
    case "MINUS":
      return { count: state.count - action.data };
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actions = {
  add(data) {
    return {
      type: "ADD",
      data,
    };
  },
  minus(data) {
    return {
      type: "MINUS",
      data,
    };
  },
};
export default store;
