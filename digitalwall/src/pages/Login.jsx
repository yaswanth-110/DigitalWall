// import React from "react";
// import { useState } from "react";

// function Login() {
//   // <div id="container" className="h-[100vh] flex items-center justify-center">
//   //   <div
//   //     id="login-container"
//   //     className="w-[300px] min-h-[400px] border-2 bg-[#111827] text-white"
//   //   >
//   //     <form
//   //       action="/home"
//   //       id="login-form"
//   //       className="flex flex-col justify-center items-center space-y-4"
//   //     >
//   //       <label htmlFor="username">username</label>
//   //       <input type="text" id="username" />
//   //       <label htmlFor="password">password</label>
//   //       <input type="password" id="password" />

//   //       <button
//   //         className="mt-[200px] w-[100px] px-[2rem] py-2 rounded-md bg-[#4F46E5]"
//   //         type="submit"
//   //         id="submit-button"
//   //       >
//   //         Login
//   //       </button>
//   //     </form>
//   //   </div>
//   // </div>
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (event) => {
//     event.preventDefault();
//     // Add your login logic here
//     console.log("Logging in with", username, password);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="flex flex-col justify-between w-full max-w-sm p-8 bg-white border border-gray-300 rounded shadow-md h-96">
//         <div>
//           <h1 className="mb-6 text-2xl font-bold text-center">Login</h1>
//           <form id="login-form" onSubmit={handleLogin}>
//             <div className="mb-4">
//               <label
//                 htmlFor="username"
//                 className="block mb-2 text-sm font-medium text-gray-700"
//               >
//                 Username
//               </label>
//               <input
//                 type="text"
//                 id="username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
//               />
//             </div>
//             <div className="mb-6">
//               <label
//                 htmlFor="password"
//                 className="block mb-2 text-sm font-medium text-gray-700"
//               >
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
//               />
//             </div>
//           </form>
//         </div>
//         <button
//           type="submit"
//           className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
//         >
//           Login
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Login;
// src/pages/Login.js
import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    // Add your login logic here
    console.log("Logging in with", username, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col justify-between w-full max-w-sm p-8 bg-white border border-gray-300 rounded shadow-md h-96">
        <h1 className="mb-6 text-2xl font-bold text-center">Login</h1>
        <form
          id="login-form"
          onSubmit={handleLogin}
          className="flex flex-col justify-between flex-1"
        >
          <div>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
