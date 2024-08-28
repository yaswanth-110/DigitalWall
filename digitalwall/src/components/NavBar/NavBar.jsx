import React, { useState } from "react";
import { Menu, User, X } from "lucide-react";
import "./NavBar.css";
import ProdCard from "./ProdCard";

const Products = [
  {
    title: "I&EProducts",
    subProducts: ["some", "some", "some"],
  },
  {
    title: "S365",
    subProducts: ["some", "some", "some"],
  },
  {
    title: "N360",
    subProducts: ["some", "some", "some"],
  },
  {
    title: "DATA OPS",
    subProducts: ["some", "some", "some"],
  },
];

function NavBar() {
  const [accountClick, setAccountClick] = useState(false);
  const handleAccount = () => {
    setAccountClick((prevValue) => !prevValue);
  };

  const [isHambergClick, setIsHamberClick] = useState(false);

  const [isProductTitle, setIsProductTitle] = useState("");

  const productClickHandler = (title, event) => {
    setIsProductTitle((prevState) => {
      if (prevState === title) {
        return "";
      } else {
        return title;
      }
    });
  };
  const hambergClickHandler = (event) => {
    setIsHamberClick(!isHambergClick);
  };
  return (
    <>
      <header className="navbar-header">
        <nav className="relative flex items-center justify-between p-4 text-white navbar bg-[#23629F] ">
          <div className="flex w-[100px] items-center justify-between font-bold text-xl">
            <div onClick={hambergClickHandler}>
              {isHambergClick ? <X /> : <Menu />}
            </div>
            <h2>Zelis</h2>
          </div>
          <div
            onClick={handleAccount}
            className="mr-[50px] cursor-pointer  font-bold flex pl-4 items-center justify-between w-[120px] text-xl"
          >
            <h1>Account</h1>
            <User style={{ height: "20px" }} />
          </div>
          <div className={`account ${accountClick ? "expanded" : ""}`}>
            <h1>Username</h1>
            <h1>Logout</h1>
          </div>
        </nav>
      </header>
      {isHambergClick && (
        <>
          <div
            className={`side-nav ${
              isHambergClick ? "active" : ""
            }    bg-white  font-semibold shadow-xl`}
          >
            {Products.map((product, idx) => {
              return (
                <ProdCard
                  key={idx}
                  title={product.title}
                  productClickHandler={productClickHandler}
                  isProductTitle={isProductTitle}
                  subProducts={product.subProducts}
                />
              );
            })}
          </div>
        </>
      )}
    </>
  );
}

export default NavBar;
