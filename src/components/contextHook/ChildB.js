import React, { useContext } from "react";
import { UserContext } from "../../App";

const ChildB = () => {
  const value = useContext(UserContext);
  return (
    <div>
      <h1>ChildB {value}</h1>
    </div>
  );
};

export default ChildB;
