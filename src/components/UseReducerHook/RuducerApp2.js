import React, { useReducer } from "react";

const initialState = {
  firstState: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstState: state.firstState + 1 };
    case "decrement":
      return { ...state, firstState: state.firstState - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const ReducerApp = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default ReducerApp;
