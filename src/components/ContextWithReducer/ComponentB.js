import React, { useContext } from "react";
import { CountContext } from "./MyApp";
const ComponentB = () => {
  const countContext = useContext(CountContext);
  return (
    <div>
      <h1>ComponentB</h1>
      <button onClick={() => countContext.countDispatch("increment")}>+</button>
      <button onClick={() => countContext.countDispatch("decrement")}>-</button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
};

export default ComponentB;
