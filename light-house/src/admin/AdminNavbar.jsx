


// // src/admin/AdminNavbar.jsx
// import { useState, useEffect, useRef } from "react";
// import { IoMenu } from "react-icons/io5";
// import { FiMoreVertical } from "react-icons/fi";
// import { TbUserCircle, TbLogin } from "react-icons/tb";
// import { useNavigate } from "react-router-dom";

// export const AdminNavbar = ({ toggleSidebar }) => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const navigate = useNavigate();
//   const dropdownRef = useRef(null);

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate("/login");
//     setIsDropdownOpen(false);
//   };

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setIsDropdownOpen(false);
//       }
//     };
//     document.addEventListener("click", handleClickOutside);
//     return () => document.removeEventListener("click", handleClickOutside);
//   }, []);

//   return (
//     <>
//       {/* ================= Mobile Header ================= */}
//       <div className="lg:hidden flex items-center text-[#F5E7C6] sticky top-0 z-50 justify-between bg-[#0a1f44] px-4 h-[50px] w-full">
//         <button className="p-2" onClick={toggleSidebar}>
//           <IoMenu size={24} />
//         </button>

//         <div className="text-lg font-bold">
//           <img width={100} src="images/logo.jpeg" alt="Logo" />
//         </div>

//         <div className="relative" ref={dropdownRef}>
//           <button
//             className="p-2"
//             onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//           >
//             <FiMoreVertical size={24} />
//           </button>

//           {isDropdownOpen && (
//             <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
//               <button
//                 className="flex items-center space-x-2 p-2 hover:bg-gray-100 w-full text-left"
//                 onClick={() => {
//                   navigate("/admin/profile"); // future profile page
//                   setIsDropdownOpen(false);
//                 }}
//               >
//                 <TbUserCircle size={18} /> <span>My Profile</span>
//               </button>

//               <div className="border-t">
//                 <button
//                   className="flex items-center space-x-2 p-2 hover:bg-gray-100 w-full text-left"
//                   onClick={handleLogout}
//                 >
//                   <TbLogin size={18} /> <span>Logout</span>
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* ================= Desktop Header ================= */}
//       <div className="hidden lg:flex items-center sticky top-0 z-50 w-full h-[50px] bg-gray-300 px-4">
//         <div className="flex-1"></div>

//         <div className="text-base font-semibold text-[#0a1f44]">
//           Admin Panel
//         </div>

//         <div className="flex-1 flex justify-end relative" ref={dropdownRef}>
//           <button
//             className="flex items-center space-x-2"
//             onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//           >
//             <img
//               src="images/logo.jpeg"
//               alt="Avatar"
//               className="w-8 h-8 rounded-full cursor-pointer"
//             />
//           </button>

//           {isDropdownOpen && (
//             <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
//               <button
//                 className="flex items-center space-x-2 p-2 hover:bg-gray-100 w-full text-left"
//                 onClick={() => {
//                   navigate("/admin/profile"); // future profile page
//                   setIsDropdownOpen(false);
//                 }}
//               >
//                 <TbUserCircle size={12} /> <span>My Profile</span>
//               </button>

//               <div className="border-t">
//                 <button
//                   className="flex items-center space-x-2 p-2 hover:bg-gray-100 w-full text-left"
//                   onClick={handleLogout}
//                 >
//                   <TbLogin size={12} /> <span>Logout</span>
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };


// src/admin/AdminNavbar.jsx
import { useState, useEffect, useRef } from "react";
import { IoMenu } from "react-icons/io5";
import { FiMoreVertical } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export const AdminNavbar = ({ toggleSidebar, avatar }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* ================= Mobile + Tablet Header ================= */}
      <div className="lg:hidden flex items-center justify-between sticky top-0 z-50 w-full h-[52px] bg-[#0a1f44] px-4 text-[#F5E7C6]">
        {/* Sidebar toggle */}
        <button className="p-2" onClick={toggleSidebar}>
          <IoMenu size={24} />
        </button>

        {/* Logo */}
        <img
          src="images/logo.png"
          alt="Logo"
          className="h-8 sm:h-9 object-contain"
        />

        {/* Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            className="flex items-center p-1 rounded-full overflow-hidden border-2 border-transparent hover:border-white transition"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <img
              src={avatar || "images/logo.jpeg"} // fallback logo
              alt="Admin Avatar"
              className="h-8 w-8 rounded-full object-cover"
            />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-md z-[10000] text-black">
              <button
                className="flex items-center gap-2 p-2 hover:bg-green-500 hover:text-white w-full text-left transition"
                onClick={() => {
                  navigate("/admin/profile");
                  setIsDropdownOpen(false);
                }}
              >
                Profile
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ================= Desktop Header ================= */}
      <div className="hidden lg:flex items-center sticky top-0 w-full h-[52px] bg-gray-300 px-6">
        <div className="flex-1" />
        <div className="text-base font-semibold text-[#0a1f44]">𝓐𝓭𝓶𝓲𝓷 𝓟𝓪𝓷𝓮𝓵</div>
        <div className="flex-1 flex justify-end relative" ref={dropdownRef}>
          <button
            className="flex items-center p-1 rounded-full overflow-hidden border-2 border-transparent hover:border-gray-400 transition"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <img
              src={avatar || "images/logo.png"}
              alt="Admin Avatar"
              className="w-8 h-8 rounded-full object-cover"
            />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-md z-[10000]">
              <button
                className="flex items-center gap-2 p-2 hover:bg-green-500 hover:text-white w-full text-left transition"
                onClick={() => {
                  navigate("/admin/profile");
                  setIsDropdownOpen(false);
                }}
              >
                Profile
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
