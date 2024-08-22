import { fontSize, fontWeight } from "@mui/system";
import logo from "./assets/logo192.png";

import mrflogo from "./assets/MRF.PNG";

export const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
    label: "Data",
    style: {
      stroke: "#23629F",
      strokWidth: 20,
    },
    data: {
      description: "This file contains service costs and offered plans.",
      positions: {
        x: 80,
        y: 40,
      },
    },
    type: "animatedSvg",
  },
  {
    id: "e2-3a",
    source: "2",
    target: "3a",
    animated: true,
    data: {
      description:
        "The insurance company will send MRF file that consisits of either of these types of data like IN, OON or TOC",

      positions: {
        x: 60,
        y: 10,
      },
    },
    label: "Data(IN/OON/TOC)",
    style: { stroke: "green", strokWidth: 10 },
  },

  {
    id: "e3a-3b",
    source: "3a",
    target: "3b",
    animated: true,

    style: { stroke: "red", strokWidth: 10 },
  },

  {
    id: "e3b-3c",
    source: "3b",
    target: "3c",
    animated: true,
    style: { stroke: "red", strokWidth: 10 },
  },

  {
    id: "e3c-3d",
    source: "3c",
    target: "3d",
    animated: true,
    style: { stroke: "red", strokWidth: 10 },
  },
  {
    id: "e4-6",
    source: "4",
    target: "6",
    animated: true,

    style: { stroke: "green", strokWidth: 10 },
  },
  {
    id: "e5-7",
    source: "5",
    target: "7",
    animated: true,

    style: { stroke: "green", strokWidth: 10 },
  },
  {
    id: "e3d-4",
    source: "3d",
    target: "4",
    label: "Data",
    data: {
      description: "The Data will be published in Public/Govt websites. ",

      positions: {
        x: 60,
        y: 10,
      },
    },
    animated: true,

    style: { stroke: "green", strokWidth: 10 },
  },
  {
    id: "e3d-5",
    source: "3d",
    target: "5",
    label: "Data",
    data: {
      description:
        "After mrf file validation & normalization then the file will be collected by the Third-party Insurance companies and they will do data analysis and make reports. If there are any changes they reflect changes to mrf file and pass to the payers.",

      positions: {
        x: 60,
        y: 10,
      },
    },
    animated: true,

    style: { stroke: "green", strokWidth: 10 },
  },
];

export const initialNodes = [
  {
    id: "1",
    type: "input",

    data: { label: "Healthcare Providers" },
    position: { x: 0, y: 0 },
    sourcePosition: "right",
    targetPositon: "left",
    style: {
      backgroundColor: "#85C8DF",
      fontWeight: "bold",
      color: "black",
      border: "2px solid #3E8E41",
      borderRadius: "5px",
      padding: "10px",
      fontSize: "1rem",
    },
  },

  {
    id: "2",
    data: { label: "Insurance Companies" },
    position: { x: 500, y: 0 },
    style: {
      backgroundColor: "#85C8DF",
      fontSize: "1rem",
      fontWeight: "500",
    },

    sourcePosition: "bottom",
    targetPosition: "left",
  },
  {
    id: "3",
    position: { x: 325, y: 200 },
    type: "group",
    style: {
      color: "white",
      border: "2px solid #3E8E41",
      borderRadius: "5px",
      padding: "10px",
      width: "500px",
      height: "200px",
    },
  },
  {
    id: "3a",
    data: {
      label: "MRF",
      imageUrl: mrflogo,
      positions: {
        x: 40,
        y: 50,
      },
    },
    position: { x: 525, y: 220 },
    parentId: "3",
    extent: "parent",
    sourcePosition: "bottom",
    style: {
      width: "100px",
      backgroundColor: "lightgray",
    },
  },
  {
    id: "3b",
    data: { label: "Data Extraction & parsing" },
    position: { x: 330, y: 300 },
    parentId: "3",
    sourcePosition: "right",
    extent: "parent",

    style: {
      width: "100px",
      backgroundColor: "lightgray",
    },
  },
  {
    id: "3c",
    data: { label: "Data Validation & checks" },
    position: { x: 520, y: 300 },
    parentId: "3",
    sourcePosition: "right",
    targetPosition: "left",
    extent: "parent",
    className: "light",
    style: {
      width: "100px",
      backgroundColor: "lightgray",
    },
  },
  {
    id: "3d",
    data: { label: "Data Transformation and Normalization" },
    position: { x: 720, y: 291 },
    parentId: "3",
    targetPosition: "left",
    extent: "parent",
    style: {
      width: "100px",
      backgroundColor: "lightgray",
    },
  },

  {
    id: "4",
    data: { label: "Public Websites" },
    style: {
      fontSize: "1rem",
      fontWeight: "500",
      backgroundColor: "#D4DDE6",
    },
    position: { x: 300, y: 500 },
  },
  {
    id: "5",
    data: { label: "Third Party Companies" },
    position: { x: 720, y: 500 },
    style: {
      width: "170px",
      fontSize: "1rem",
      fontWeight: "500",
      backgroundColor: "#D4DDE6",
    },
  },
  {
    id: "6",
    data: { label: "Members" },
    style: {
      fontSize: "1rem",
      fontWeight: "500",
      backgroundColor: "#B6D0D8",
    },
    position: { x: 300, y: 600 },
  },
  {
    id: "7",
    data: { label: "Data Analysis & Reporting" },
    position: { x: 720, y: 600 },
    style: {
      width: "170px",
      fontSize: "1rem",
      fontWeight: "500",
      backgroundColor: "#B6D0D8",
    },
  },
];
