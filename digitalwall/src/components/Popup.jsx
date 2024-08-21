import React from "react";

const Popup = ({ label, position, onClose }) => {
  const style = {
    position: "absolute",
    top: position.y,
    left: position.x,
    backgroundColor: "white",
    border: "1px solid #ccc",
    padding: "30px",
    zIndex: 10,
  };

  return (
    <div style={style}>
      <button onClick={onClose} style={{ float: "right" }}>
        Close
      </button>
      <p>Label: {label}</p>
      {/* Add more content to your popup here */}
    </div>
  );
};

export default Popup;
