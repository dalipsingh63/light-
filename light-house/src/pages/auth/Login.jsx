// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { loginUser } from "../../services/authService";

// const Login = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await loginUser(formData);

//       // 🔐 token save
//       const token = res.data.token;
//       localStorage.setItem("token", token);

//       // 🔓 token decode
//       const decoded = JSON.parse(atob(token.split(".")[1]));

//       // 🔀 ROLE BASED REDIRECT
//       if (decoded.role === "admin") {
//         navigate("/admin-dashboard"); // ✅ ADMIN
//       } else {
//         navigate("/"); // ✅ USER → Home.jsx
//       }

//     } catch (error) {
//       alert(error.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto">
//       <h2 className="text-2xl mb-4">Login</h2>

//       <input
//         name="email"
//         type="email"
//         placeholder="Email"
//         onChange={handleChange}
//         className="border p-2 w-full mb-2"
//         required
//       />

//       <input
//         name="password"
//         type="password"
//         placeholder="Password"
//         onChange={handleChange}
//         className="border p-2 w-full mb-2"
//         required
//       />

//       <button className="bg-green-500 text-white px-4 py-2 w-full">
//         Login
//       </button>
//     </form>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authService";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(formData);
      const token = res.data.token;
      localStorage.setItem("token", token);
      const decoded = JSON.parse(atob(token.split(".")[1]));

      if (decoded.role === "admin") navigate("/admin-dashboard");
      else navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-2xl rounded-2xl p-6 sm:p-8 w-full max-w-md"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-[#0a1f44]">
            Login
          </h2>

          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            className="border border-gray-300 p-3 w-full mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="border border-gray-300 p-3 w-full mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            required
          />

          <button
            type="submit"
            className="bg-pink-600 hover:bg-pink-500 text-white font-semibold w-full py-3 rounded-xl transition active:scale-95"
          >
            Login
          </button>
        </form>
      </main>
    </div>
  );
};

export default Login;
