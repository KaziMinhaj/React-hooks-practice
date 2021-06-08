import React from "react";
import "./App.css";
import WithUseState from "./components/DataFetching/WithUseState";

function App() {
  return (
    <div className="App">
      {/* <ReducerApp></ReducerApp> */}
      {/* <ReducerApp2></ReducerApp2> */}
      {/* <MultipleUseReducers></MultipleUseReducers> */}
      {/* <MyApp></MyApp> */}
      <WithUseState></WithUseState>
    </div>
  );
}

export default App;
