import React, { useState } from "react";
import ChildComponent from "./ChildComponent";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const [isClick, setIsClick] = useState(false);
  const onClick = (target) => {
    console.log(target);
    // style = target.style;
    setIsClick(true);
  };
  return (
    <div>
      <NavBar />
    </div>
  );
}

export default App;
