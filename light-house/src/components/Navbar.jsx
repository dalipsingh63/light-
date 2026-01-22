// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { HiMenu, HiX } from "react-icons/hi";

// export const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 shadow-lg transition-all duration-300 ${
//         scrolled ? "h-14 md:h-16" : "h-16 md:h-20"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 md:px-6 h-full flex justify-between items-center transition-all duration-300">

//         {/* Logo */}
//         <Link to="/" className="flex items-center space-x-2">
//           <img
//             src="images\logo.png"
//             alt="KUSUM Solar"
//             className={`object-contain transition-all duration-300 ${
//               scrolled ? "w-8 h-8 md:w-12 md:h-12" : "w-10 h-10 md:w-14 md:h-14"
//             }`}
//           />
//           <span
//             className={`font-extrabold text-white tracking-wide transition-all duration-300 ${
//               scrolled ? "text-lg md:text-2xl" : "text-xl md:text-3xl"
//             }`}
//           >
//             KUSUM <span className="text-yellow-300">⚡</span>
//           </span>
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex items-center space-x-6 md:space-x-8 text-white font-medium">
//           <li>
//             <Link className="hover:text-yellow-300 transition" to="/">Home</Link>
//           </li>
//           <li>
//             <Link className="hover:text-yellow-300 transition" to="/services">Services</Link>
//           </li>
//           <li>
//             <Link className="hover:text-yellow-300 transition" to="/about">About</Link>
//           </li>
//           <li>
//             <Link className="hover:text-yellow-300 transition" to="/login">Login</Link>
//           </li>
//           <li>
//             <Link
//               to="/signup"
//               className="bg-yellow-400 text-black px-4 py-1.5 md:px-5 md:py-2 rounded-full font-semibold hover:bg-yellow-300 transition"
//             >
//               Get Started
//             </Link>
//           </li>
//         </ul>

//         {/* Mobile Hamburger */}
//         <div className="md:hidden flex items-center">
//           <button onClick={() => setMobileOpen(!mobileOpen)}>
//             {mobileOpen ? (
//               <HiX className="w-7 h-7 text-white" />
//             ) : (
//               <HiMenu className="w-7 h-7 text-white" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {mobileOpen && (
//         <div className="md:hidden bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 text-white px-4 py-3 space-y-3">
//           <Link onClick={() => setMobileOpen(false)} className="block hover:text-yellow-300 transition" to="/">Home</Link>
//           <Link onClick={() => setMobileOpen(false)} className="block hover:text-yellow-300 transition" to="/services">Services</Link>
//           <Link onClick={() => setMobileOpen(false)} className="block hover:text-yellow-300 transition" to="/about">About</Link>
//           <Link onClick={() => setMobileOpen(false)} className="block hover:text-yellow-300 transition" to="/login">Login</Link>
//           <Link
//             onClick={() => setMobileOpen(false)}
//             to="/signup"
//             className="block bg-yellow-400 text-black px-4 py-1.5 rounded-full font-semibold hover:bg-yellow-300 transition text-center"
//           >
//             Get Started
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// };
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-all duration-300 ${
        scrolled ? "h-14 md:h-16" : "h-16 md:h-20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 md:px-4 lg:px-6 h-full flex justify-between items-center transition-all duration-300">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-4 lg:space-x-6">
          <img
            src="images/logo.png"
            alt="KUSUM Solar"
            className={`object-contain transition-all duration-300 rounded-full shadow-md ${
              scrolled ? "w-12 h-12 md:w-16 md:h-16" : "w-16 h-16 md:w-20 md:h-20"
            }`}
          />
          <span
            className={`font-extrabold text-black tracking-wide transition-all duration-300 ${
              scrolled ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl"
            }`}
          >
            Ќ𝓊𝐒𝓊𝓂<span className="text-yellow-500">⚡</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 md:space-x-8 text-black font-medium">
          <li>
            <Link className="hover:text-yellow-500 transition font-semibold" to="/">Home</Link>
          </li>
          <li>
            <Link className="hover:text-yellow-500 transition font-semibold" to="/services">Services</Link>
          </li>
          <li>
            <Link className="hover:text-yellow-500 transition font-semibold" to="/about">About</Link>
          </li>
          <li>
            <Link className="hover:text-yellow-500 transition font-semibold" to="/login">Login</Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-300 transition shadow-md"
            >
              Get Started
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? (
              <HiX className="w-7 h-7 text-black" />
            ) : (
              <HiMenu className="w-7 h-7 text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white text-black px-4 py-3 space-y-3 shadow-lg">
          <Link onClick={() => setMobileOpen(false)} className="block hover:text-yellow-500 transition font-semibold" to="/">Home</Link>
          <Link onClick={() => setMobileOpen(false)} className="block hover:text-yellow-500 transition font-semibold" to="/services">Services</Link>
          <Link onClick={() => setMobileOpen(false)} className="block hover:text-yellow-500 transition font-semibold" to="/about">About</Link>
          <Link onClick={() => setMobileOpen(false)} className="block hover:text-yellow-500 transition font-semibold" to="/login">Login</Link>
          <Link
            onClick={() => setMobileOpen(false)}
            to="/signup"
            className="block bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-300 transition text-center shadow-md"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};
