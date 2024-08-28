import React from "react";
import { ChevronUp } from "lucide-react";
import "./NavBar.css";

function ProdCard({ title, productClickHandler, isProductTitle, subProducts }) {
  return (
    <>
      <div className="block dropdown-container">
        <div
          onClick={() => productClickHandler(title)}
          className="flex item-center justify-between  dropdown w-[100%] px-4 py-2 hover:bg-[#f1f1f1]"
        >
          <div>{title}</div>
          <ChevronUp
            className={`chevron ${isProductTitle === title ? "rotated" : ""}`}
          />
        </div>
        {isProductTitle === title && (
          <>
            <ul className="list-items">
              {subProducts.map((prod) => (
                <li>{prod}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
}

export default ProdCard;
