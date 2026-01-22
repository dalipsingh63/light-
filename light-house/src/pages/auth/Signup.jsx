// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { signupUser } from "../../services/authService";

// const Signup = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await signupUser(formData);

//       // 🔥 (Optional) token save — signup ke baad bhi mil raha ho to
//       if (res?.token) {
//         localStorage.setItem("token", res.token);
//       }

//       alert("Signup successful");

//       // ✅ Signup ke baad LOGIN page
//       navigate("/login");
//     } catch (error) {
//       alert(error.response?.data?.message || "Signup failed");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto">
//       <h2 className="text-2xl mb-4">Signup</h2>

//       <input
//         name="name"
//         placeholder="Name"
//         onChange={handleChange}
//         className="border p-2 w-full mb-2"
//         required
//       />

//       <input
//         name="email"
//         placeholder="Email"
//         type="email"
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

//       <button className="bg-blue-500 text-white px-4 py-2 w-full">
//         Signup
//       </button>
//     </form>
//   );
// };

// export default Signup;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../../services/authService";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signupUser(formData);

      if (res?.token) {
        localStorage.setItem("token", res.token);
      }

      alert("Signup successful");
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 sm:px-6 lg:px-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-md mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-[#0a1f44]">
          Signup
        </h2>

        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="border border-gray-300 p-3 w-full mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          required
        />

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
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;

