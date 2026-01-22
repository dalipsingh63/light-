import { Routes, Route, Navigate } from "react-router-dom";
import UserLayout from "../../layouts/UserLayout";
import Home from "../Home";
import Services from "../Services";
import About from "../About"; // ✅ ABOUT IMPORT
import Login from "../auth/Login";
import Signup from "../auth/Signup";
import { MyBookings } from "../MyBookings";
import ScrollToTop from "../../components/ScrollToTop";

// 🔐 Private route wrapper (UNCHANGED)
const UserRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  try {
    const decoded = JSON.parse(atob(token.split(".")[1]));
    if (decoded.role === "admin") return <Navigate to="/login" />;
    return children;
  } catch (err) {
    return <Navigate to="/login" />;
  }
};

const UserRoutes = () => {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route element={<UserLayout />}>

          {/* 🌍 PUBLIC ROUTES */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} /> {/* ✅ ABOUT FIXED */}
          <Route path="/my-bookings" element={<MyBookings />} />

          {/* 🔐 PRIVATE ROUTES (future use) */}
          {/* 
          <Route
            path="/profile"
            element={
              <UserRoute>
                <Profile />
              </UserRoute>
            }
          /> 
          */}

        </Route>
      </Routes>
    </>
  );
};

export default UserRoutes;
