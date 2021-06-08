import React from "react";
import ChildA from "./ChildA";

export const UserContext = React.createContext();

function Index() {
  return (
    <div>
      <UserContext.Provider value={"Kazi"}>
        <ChildA></ChildA>
      </UserContext.Provider>
    </div>
  );
}

export default Index;
