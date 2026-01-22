// src/pages/routes/AdminRoutes.jsx

import { Routes, Route, Navigate } from "react-router-dom";
import { AdminLayout } from "../../layouts/AdminLayout";
import { Dashboard } from "../admin/Dashboard";
import Users from "../admin/Users";
import BannerManager from "../../admin/BannerManager";
import CardManager from "../../admin/CardManager";
import AdminVideoManager from "../../admin/AdminVideoManager";
import AllBookings from "../admin/AllBookings";


const AdminRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/login" />;

  const payload = JSON.parse(atob(token.split(".")[1]));
  return payload.role === "admin" ? children : <Navigate to="/login" />;
};

const AdminRoutes = () => {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        {/* Dashboard */}
        <Route
          path="/admin-dashboard"
          element={
            <AdminRoute>
              <Dashboard />
            </AdminRoute>
          }
        />

        {/* Users */}
        <Route
          path="/admin/users"
          element={
            <AdminRoute>
              <Users />
            </AdminRoute>
          }
        />

        {/* Banner Manager */}
        <Route
          path="/admin/banner"
          element={
            <AdminRoute>
              <BannerManager />
            </AdminRoute>
          }
        />

        {/* Video Manager */}
        <Route
          path="/admin/videos"
          element={
            <AdminRoute>
              <AdminVideoManager />
            </AdminRoute>
          }
        />

        {/* Card Manager */}
        <Route
          path="/admin/cards"
          element={
            <AdminRoute>
              <CardManager />
            </AdminRoute>
          }
        />

        {/* ✅ All Bookings */}
        <Route
          path="/admin/bookings"
          element={
            <AdminRoute>
              <AllBookings />
            </AdminRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;


