import React, { useContext } from "react";
import { CountContext } from "./MyApp";
const ComponentE = () => {
  const countContext = useContext(CountContext);
  return (
    <div>
      <h1>ComponentE {countContext.countState}</h1>
      <button onClick={() => countContext.countDispatch("increment")}>+</button>
      <button onClick={() => countContext.countDispatch("decrement")}>-</button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
};

export default ComponentE;
