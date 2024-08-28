import React from "react";

function ChildComponent({ onClick }) {
  const someValue = "Let's go to the parent component";
  const handleClickhandler = (event) => {
    if (event.target === "P" || event.target === "I") {
      onClick(event.target);
    }
  };
  return (
    <div onClick={handleClickhandler}>
      <p id="text1" style={{ color: "blue", fontWeight: "bold" }}>
        Text 1
      </p>
      <i id="text2" style={{ color: "green" }}>
        Text 2
      </i>
      <p>Text 3</p>
    </div>
  );
}

export default ChildComponent;
