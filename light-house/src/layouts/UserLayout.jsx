// // src/layouts/UserLayout.jsx
// import { Outlet } from "react-router-dom";
// import { Navbar } from "../components/Navbar";
// import { Footer } from "../components/Footer";

// const UserLayout = () => {
//   return (
//     <>
//       <Navbar />

//       {/* Navbar fixed hai, isliye padding-top zaruri */}
//       <div className="pt-16 min-h-[80vh]">
//         <Outlet />
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default UserLayout;


// src/layouts/UserLayout.jsx
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const UserLayout = () => {
  const location = useLocation();
  const [navbarHeight, setNavbarHeight] = useState(80);

  // Page checks
  const isHomePage = location.pathname === "/";
  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/my-bookings";

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Navbar height on scroll
  useEffect(() => {
    const handleScroll = () => {
      setNavbarHeight(window.scrollY > 50 ? 56 : 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="flex flex-col min-h-screen overflow-x-hidden bg-white"
    >
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main
        style={{ paddingTop: `${navbarHeight}px` }}
        className="flex-1 flex flex-col px-4 sm:px-6 md:px-8 py-4"
      >
        <Outlet key={location.pathname} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default UserLayout;

