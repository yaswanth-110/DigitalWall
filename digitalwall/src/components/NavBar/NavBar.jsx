import React, { useState } from "react";
import { Menu, User } from "lucide-react";
import "./NavBar.css";

function NavBar() {
  const [accountClick, setAccountClick] = useState(false);
  const handleAccount = () => {
    console.log("clicked");
    setAccountClick((prevValue) => !prevValue);
  };
  return (
    <>
      <header className="navbar-header">
        <nav className="relative flex items-center justify-between p-4 text-white bg-[#23629F] navbar ">
          <div className="flex w-[100px] items-center justify-between font-bold text-xl">
            <Menu />
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
    </>
  );
}

export default NavBar;
