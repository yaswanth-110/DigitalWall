import React from "react";
import { getBezierPath } from "react-flow-renderer";
import logo from "./../assets/logo192.png";

function CustomEdge({ id, sourceX, sourceY, targetX, targetY, data, style }) {
  const [path] = getBezierPath({ sourceX, sourceY, targetX, targetY });
  return (
    <>
      <path
        id={id}
        style={{ ...style, strokeWidth: 4 }}
        d={path}
        fill="transparent"
      />
      {data && (
        <image
          height="30"
          width="30"
          x={(sourceX + targetX) / 2 - 15}
          y={(sourceY + targetY) / 2 - 15}
          href={logo}
        />
      )}
    </>
  );
}

export default CustomEdge;
