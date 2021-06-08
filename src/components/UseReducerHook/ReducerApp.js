import React, { useReducer } from "react";

const initailState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initailState;
    default:
      return state;
  }
};

const ReducerApp = () => {
  const [count, dispatch] = useReducer(reducer, initailState);
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch("increment")}>+</button>
      <button onClick={() => dispatch("decrement")}>-</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};

export default ReducerApp;
