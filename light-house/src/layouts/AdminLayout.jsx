
// import { useState, useEffect } from "react";
// import { Outlet, useLocation } from "react-router-dom";
// import { AdminNavbar } from "../admin/AdminNavbar";
// import { AdminSidebar } from "../admin/AdminSidebar";
// import { AdminFooter } from "../admin/AdminFooter";

// export const AdminLayout = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const location = useLocation();

//   // Detect mobile vs desktop
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 1024); // lg breakpoint
//     };
//     handleResize(); // initial
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Optional: auto open sidebar on route change for desktop
//   useEffect(() => {
//     if (!isMobile) setIsSidebarOpen(true);
//   }, [location.pathname, isMobile]);

//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Navbar */}
//       <AdminNavbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

//       <div className="flex flex-1">
//         {/* Sidebar */}
//         <AdminSidebar
//           isOpen={isSidebarOpen}
//           closeSidebar={() => setIsSidebarOpen(false)}
//           isMobile={isMobile}
//           currentPath={location.pathname}
//         />

//         {/* Content + Footer */}
//         <div className="flex-1 flex flex-col bg-gray-100 min-h-screen lg:ml-80">
//           <div className="flex-1 overflow-y-auto content-scroll p-6 h-full">
//             <Outlet key={location.pathname} />
//           </div>

//           <AdminFooter />
//         </div>
//       </div>
//     </div>
//   );
// };

// // src/admin/AdminNavbar.jsx

// // import { useState } from "react";
// // import { IoMenu } from "react-icons/io5";
// // import { FiMoreVertical } from "react-icons/fi";
// // import { TbUserCircle, TbLogin } from "react-icons/tb";
// // import { useNavigate } from "react-router-dom";

// // export const AdminNavbar = ({ toggleSidebar }) => {
// //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// //   const navigate = useNavigate();

// //   const handleLogout = () => {
// //     localStorage.clear();
// //     navigate("/login");
// //     setIsDropdownOpen(false);
// //   };

// //   return (
// //     <>
// //       {/* ================= Mobile Header ================= */}
// //       <div className="lg:hidden flex items-center text-[#F5E7C6] sticky top-0 z-50 justify-between bg-[#0a1f44] px-4 h-[50px] w-full">
// //         <button className="p-2" onClick={toggleSidebar}>
// //           <IoMenu size={24} />
// //         </button>

// //         <img width={100} src="images/logo.jpeg" alt="Logo" />

// //         <div className="relative">
// //           <button
// //             className="p-2"
// //             onClick={() => setIsDropdownOpen(!isDropdownOpen)}
// //           >
// //             <FiMoreVertical size={24} />
// //           </button>

// //           {isDropdownOpen && (
// //             <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
// //               <button
// //                 className="flex items-center space-x-2 p-2 hover:bg-gray-100 w-full text-left"
// //                 onClick={() => {
// //                   navigate("/admin/profile");
// //                   setIsDropdownOpen(false);
// //                 }}
// //               >
// //                 <TbUserCircle size={18} /> <span>My Profile</span>
// //               </button>

// //               <div className="border-t">
// //                 <button
// //                   className="flex items-center space-x-2 p-2 hover:bg-gray-100 w-full text-left"
// //                   onClick={handleLogout}
// //                 >
// //                   <TbLogin size={18} /> <span>Logout</span>
// //                 </button>
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </div>

// //       {/* ================= Desktop Header ================= */}
// //       <div className="hidden lg:flex items-center sticky top-0 z-50 w-full h-[50px] bg-gray-300 px-4">
// //         <div className="flex-1"></div>

// //         <div className="text-base font-semibold text-[#0a1f44]">
// //           Admin Panel
// //         </div>

// //         <div className="flex-1 flex justify-end relative">
// //           <button
// //             onClick={() => setIsDropdownOpen(!isDropdownOpen)}
// //           >
// //             <img
// //               src="images/logo.jpeg"
// //               alt="Avatar"
// //               className="w-8 h-8 rounded-full cursor-pointer"
// //             />
// //           </button>

// //           {isDropdownOpen && (
// //             <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
// //               <button
// //                 className="flex items-center space-x-2 p-2 hover:bg-gray-100 w-full text-left"
// //                 onClick={() => {
// //                   navigate("/admin/profile");
// //                   setIsDropdownOpen(false);
// //                 }}
// //               >
// //                 <TbUserCircle size={12} /> <span>My Profile</span>
// //               </button>

// //               <div className="border-t">
// //                 <button
// //                   className="flex items-center space-x-2 p-2 hover:bg-gray-100 w-full text-left"
// //                   onClick={handleLogout}
// //                 >
// //                   <TbLogin size={12} /> <span>Logout</span>
// //                 </button>
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </>
// //   );
// // };
// src/layouts/AdminLayout.jsx
import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AdminNavbar } from "../admin/AdminNavbar";
import { AdminSidebar } from "../admin/AdminSidebar";
import { AdminFooter } from "../admin/AdminFooter";

export const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  // Detect mobile based on window width
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024); // lg breakpoint
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Desktop: always open sidebar
  useEffect(() => {
    if (!isMobile) setIsSidebarOpen(true);
  }, [isMobile, location.pathname]);

  // Mobile: close sidebar on route change
  useEffect(() => {
    if (isMobile) setIsSidebarOpen(false);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <AdminNavbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

      <div className="flex flex-1 relative">
        {/* Sidebar */}
        <AdminSidebar
          isOpen={isSidebarOpen}
          closeSidebar={() => setIsSidebarOpen(false)}
          isMobile={isMobile}
          currentPath={location.pathname}
        />

        {/* Main Content */}
        <main
          className={`
            flex-1 flex flex-col bg-gray-100 min-h-screen
            transition-all duration-300
            ${!isMobile ? "lg:ml-80" : ""}
          `}
        >
          {/* Page content */}
          <div className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-8 py-4">
            <Outlet key={location.pathname} />
          </div>

          {/* Footer */}
          <AdminFooter />
        </main>
      </div>
    </div>
  );
};
