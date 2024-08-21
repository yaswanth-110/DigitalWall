import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TechStack from "./pages/TechStack";
// import "./App.css";

function App() {
  // const [enteredValues, setEnteredValues] = useState({
  //   email: "",
  //   password: "",
  // });

  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   console.log(enteredValues);
  //   const fd = new FormData(event.target);
  //   console.log(fd.get("email"));
  //   const data = Object.fromEntries(fd.entries());
  //   event.target.reset();
  // };

  // const handleInputChange = (identifier, value) => {
  //   setEnteredValues((prevValues) => ({ ...prevValues, [identifier]: value }));
  // };

  return (
    <>
      {/* <div className="flex items-center  justify-center  h-[100vh]">
        <div className="w-[200px] p-4   bg-indigo-500 border-2 h-52">
          <form
            onSubmit={submitHandler}
            className="flex flex-col space-y-4"
            action="/login"
            method="post"
          >
            <h1>Login Page</h1>
            <input
              name="email"
              onChange={(e) => handleInputChange("email", e.target.value)}
              value={enteredValues.email}
              type="text"
              placeholder="Enter your email id"
            />
            <input
              value={enteredValues.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              type="password"
              placeholder="Enter your password"
            />
            <button
              className="bg-white border-2 border-black rounder-md"
              type="reset"
            >
              Reset
            </button>
            <button
              className="bg-white border-2 border-black rounder-md"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div> */}
      <Router>
        <Routes>
          <Route path="/techstack" element={<TechStack />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
