import React from "react";
import "./Login.css";
import { useState } from "react";

function Login() {
  const [isLogging, setIsLogging] = useState(false);
  const formSubmitHandler = (e) => {
    e.preventDefault();
    setIsLogging(true);
  };

  return (
    <div
      className="flex items-center justify-center h-[100vh]"
      id="container"
      onSubmit={formSubmitHandler}
    >
      <div
        id="login-container"
        className="shadow-md border-2 bg-[#111827] text-center min-w-[500px] min-h-[400px] rounded-sm"
      >
        <h2 className="text-white font-bold text-2xl my-10 ">LOGIN</h2>
        <form
          className="w-full flex flex-col items-center justify-between flex-grow"
          action="/home"
          id="login-form"
        >
          <div
            className="w-full flex flex-col space-y-4 items-center"
            id="form-input-container"
          >
            <input
              className="outline-none shadow-xl rounded-md"
              type="text"
              id="username"
              placeholder="Enter username"
            />
            <input
              className="outline-none shadow-xl rounded-md "
              type="password"
              id="password"
              placeholder="Enter password"
            />
          </div>
          <div className="mt-[50px]" id="form-submit-button">
            <button
              className="text-white w-52 font-bold text-md bg-[#6366F1] px-4 py-2 rounded-md mb-10"
              type="submit"
            >
              {isLogging ? "Logging..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
