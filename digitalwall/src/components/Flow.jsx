import React, { useState, useCallback } from "react";
import ReactFlow, { ReactFlowProvider, addEdge } from "react-flow-renderer";
import CustomEdge from "./CustomEdge";

import Popup from "./Popup";
import "./Flow.css";

import { initialNodes, initialEdges } from "../mrfdata";

const FlowWithPopup = () => {
  const [popupData, setPopupData] = useState(null);

  const onEdgeClick = (event, edge) => {
    console.log(edge);
    const { clientX: x, clientY: y } = event;
    setPopupData({
      label: edge.label,
      position: { x, y },
      data: edge.data ? edge.data : edge,
      id: edge.id,
    });
  };

  const handleNodeClick = (event, node) => {
    const { clientX: x, clientY: y } = event;
    if (node.id === "3a") {
      setPopupData({
        label: node.data.label,
        position: { x, y },
        data: node.data,
        id: node.id,
      });
    }
  };
  const onClosePopup = () => {
    setPopupData(null);
  };

  const edgeTypes = {
    "custom-edge": CustomEdge,
  };

  return (
    <>
      <ReactFlowProvider>
        <div className="w-[100%] h-[85vh] font-semibold pt-[50px] pl-[100px] ">
          <ReactFlow
            nodesConnectable={true}
            nodes={initialNodes}
            edges={initialEdges}
            onEdgeClick={onEdgeClick}
            onNodeClick={handleNodeClick}
            // edgeTypes={edgeTypes}
          />
          {popupData && (
            <Popup
              label={popupData.label}
              position={popupData.position}
              onClose={onClosePopup}
              data={popupData.data}
              id={popupData.id}
            />
          )}
        </div>
      </ReactFlowProvider>
    </>
  );
};

export default FlowWithPopup;
