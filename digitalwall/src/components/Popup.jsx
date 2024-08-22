import React, { useState } from "react";
import { X } from "lucide-react";

const Popup = ({ label, position, onClose }) => {
  const [xIsHovered, setXISHovered] = useState(false);
  const style = {
    position: "absolute",
    top: position.y - 80,
    left: position.x - 40,
    backgroundColor: "white",
    border: "1px solid #ccc",
    padding: "10px",
    zIndex: 10,
    borderRadius: "5px",
    height: "auto",
    boxShadow: "1px 1px 5px",
  };

  const handleMouseEnter = () => {
    setXISHovered(true);
  };
  const handleMouseLeave = () => {
    setXISHovered(false);
  };

  return (
    <div className="relative" style={style}>
      <button onClick={onClose} className="absolute right-1 top-1">
        <svg
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill={xIsHovered ? "blue" : "black"}
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-x"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
      <p className="w-[200px] mt-4 text-sm font-md">
        "This file consists of service costs,offered plans".
      </p>
      {/* Add more content to your popup here */}
    </div>
  );
};

export default Popup;
