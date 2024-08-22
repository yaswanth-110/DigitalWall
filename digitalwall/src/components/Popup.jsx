import React, { useState } from "react";
import { X } from "lucide-react";
import "./Popup.css";

const Popup = ({ label, position, onClose, data, id }) => {
  const [isHover, setIsHover] = useState(false);
  const style = {
    position: "absolute",
    top: position.y - data.positions?.x,
    left: position.x - data?.positions?.y,
    backgroundColor: "#ECECEC",
    border: "1px solid #ccc",
    padding: "10px",
    zIndex: 20,
    borderRadius: "5px",
    height: "auto",
    boxShadow: "2px 2px 5px",
    ...data.style,
  };

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseDown = () => {
    setIsHover(false);
  };
  console.log(data);
  return (
    <div className="relative" style={style}>
      <button onClick={onClose} className="absolute right-1 top-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseDown}
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
          stroke={isHover ? "#23629F" : "black"}
          strokeWidth={2}
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
      {id === "3a" ? (
        <>
          <p className="text-small font-semibold">
            This is How {label} file looks{" "}
          </p>
          <img
            className="w-[300px] h-[300px] mt-2"
            src={data.imageUrl}
            alt="mrf file "
          />
        </>
      ) : (
        <p className="w-[200px] mt-4 text-sm font-md">{data.description}</p>
      )}
    </div>
  );
};

export default Popup;
