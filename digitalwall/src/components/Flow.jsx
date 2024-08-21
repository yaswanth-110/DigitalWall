import React, { useState } from "react";
import ReactFlow, { ReactFlowProvider, addEdge } from "react-flow-renderer";
import Popup from "./Popup"; // Import the popup component

const initialNodes = [
  {
    id: "1",
    type: "input", // input node type
    data: { label: "Node 1" },
    position: { x: 250, y: 0 },
  },
  {
    id: "2",
    data: { label: "Node 2" },
    position: { x: 100, y: 100 },
  },
  {
    id: "3",
    data: { label: "Node 3" },
    position: { x: 400, y: 100 },
  },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2", label: "Click Me", animated: true },
  { id: "e1-3", source: "1", target: "3", animated: true },

  // add more edges as needed
];

const FlowWithPopup = () => {
  const [edges, setEdges] = useState(initialEdges);
  const [popupData, setPopupData] = useState(null);

  const onEdgeClick = (event, edge) => {
    const { clientX: x, clientY: y } = event;
    setPopupData({ label: edge.label, position: { x, y } });
  };

  const onClosePopup = () => {
    setPopupData(null);
  };

  return (
    <>
      <div className="w-[100%] h-[100vh] mt-[10rem]">
        <ReactFlowProvider>
          <ReactFlow
            nodes={initialNodes}
            edges={initialEdges}
            onEdgeClick={onEdgeClick}
            onEdgeMouseEnter={onEdgeClick}
          />
          {popupData && (
            <Popup
              label={popupData.label}
              position={popupData.position}
              onClose={onClosePopup}
            />
          )}
        </ReactFlowProvider>
      </div>
    </>
  );
};

export default FlowWithPopup;
