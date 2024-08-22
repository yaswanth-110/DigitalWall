import React from "react";
import NavBar from "../components/NavBar/NavBar";
import ProductCard from "../components/UI/ProductCard";
import FlowWithPopup from "../components/Flow";
import "./TechStack.css";

function TechStack() {
  return (
    <>
      <NavBar />
      <div className="m-4 mrf-container">
        <h1 className="moderustic-mrf-container text-indigo-500 text-xl font-bold mb-2">
          WHAT IS A MRF FILE?
        </h1>
        <p className="moderustic-mrf-container">
          MRF(Mahine Readable File) is in the form JSON, CSV, XML files.These
          files can easily parse by the machine for mapping.
        </p>
      </div>
      <FlowWithPopup />
    </>
  );
}

export default TechStack;
