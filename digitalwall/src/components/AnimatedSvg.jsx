import React from "react";
import { BaseEdge, getSmoothStepPath } from "@xyflow/react";

const AnimatedSVGEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
}) => {
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <BaseEdge id={id} path={edgePath} />
      <svg width="30" height="30" viewBox="0 0 30 30">
        <defs>
          <path id={`path-${id}`} d={edgePath} />
        </defs>
        <image href="path/to/your/file-icon.svg" width="30" height="30">
          <animateMotion dur="2s" repeatCount="indefinite">
            <mpath href={`#path-${id}`} />
          </animateMotion>
        </image>
      </svg>
    </>
  );
};

export default AnimatedSVGEdge;
