import React, { useState, useCallback } from "react";
import ReactFlow, { ReactFlowProvider, addEdge } from "react-flow-renderer";
import Popup from "./Popup";
import { fontWeight } from "@mui/system";

import AnimatedSVGEdge from "./AnimatedSvg";

// const edgeTypes = {
//   animatedSvg: AnimatedSVGEdge,
// };

const initialNodes = [
  {
    id: "1",
    type: "input",

    data: { label: "Healthcare Providers" },
    position: { x: 0, y: 0 },
    style: {
      backgroundColor: "lightgray",
      fontWeight: "bold",
      color: "black",
      border: "2px solid #3E8E41",
      borderRadius: "5px",
      padding: "10px",
    },
  },

  {
    id: "2",
    data: { label: "Insurance Companies" },
    position: { x: 300, y: 0 },
  },
  {
    id: "3",
    position: { x: 300, y: 100 },
    data: { label: "mrf data" },
    style: {
      backgroundColor: "#4CAF50",
      color: "white",
      border: "2px solid #3E8E41",
      borderRadius: "5px",
      padding: "10px",
      width: "500px",
      height: "200px",
    },
  },
  {
    id: "2a",
    data: { label: "MRF" },
    position: { x: 500, y: 120 },
    parentId: "3",
    style: {
      width: "100px",
    },
  },
  {
    id: "2b",
    data: { label: "Data Extraction & parsing" },
    position: { x: 300, y: 200 },
    parentId: "3",
    style: {
      width: "100px",
    },
  },
  {
    id: "2c",
    data: { label: "Data Validation & checks" },
    position: { x: 500, y: 200 },
    parentId: "3",
    style: {
      width: "100px",
    },
  },
  {
    id: "2d",
    data: { label: "Node A.1" },
    position: { x: 700, y: 200 },
    parentId: "3",
    style: {
      width: "100px",
    },
  },
];

const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    label: "Click Me",
    animated: true,
    sourcePosition: "right", // connect from the right side of node 1
    targetPositon: "left",
    type: "animatedSvg",
  },
  { id: "e2-3", source: "2", target: "3", animated: true },
  { id: "e2a-2b", source: "2a", target: "2b", animated: true },

  { id: "e2b-2c", source: "2b", target: "2c", animated: true },

  { id: "e2c-2d", source: "2c", target: "2d", animated: true },

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

  const onConnect = useCallback((connection) => {
    setEdges((eds) => addEdge(connection, eds));
  }, []);

  return (
    <>
      <div className="w-[100%] h-[100vh] mt-[10rem]">
        <ReactFlowProvider>
          <ReactFlow
            nodesConnectable={true}
            nodes={initialNodes}
            edges={initialEdges}
            onEdgeClick={onEdgeClick}
            onEdgeMouseEnter={onEdgeClick}
            onConnect={onConnect}
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
