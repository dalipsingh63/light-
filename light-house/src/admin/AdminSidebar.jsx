
// src/admin/AdminSidebar.jsx
import React from "react";
import {
  Users as UsersIcon,
  Image,
  LayoutDashboard,
  CreditCard,
  Video,
  LogOut,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import "./AdminSidebar.css";

export const AdminSidebar = ({
  isOpen,
  closeSidebar,
  isMobile,
  currentPath,
}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    if (isMobile) closeSidebar();
  };

  const handleMenuClick = (path) => {
    if (currentPath === path) return;
    if (isMobile) closeSidebar();
  };

  const isActive = (path) =>
    currentPath === path
      ? "bg-[#1b2e5a] text-white font-semibold"
      : "hover:bg-[#1b2e5a] hover:text-white";

  return (
    <div
      className={`
        fixed top-0 left-0 z-[9999]
        h-screen
        w-full sm:w-72 lg:w-80
        bg-[#0a1f44] text-[#F5E7C6]
        p-4
        sidebar-scroll
        transition-transform duration-300
        overflow-hidden
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
      `}
    >
      {/* ================= Logo ================= */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <img
            src="images/logo.png"
            alt="Logo"
            className="h-10 sm:h-12 object-contain"
          />
          <div className="text-base sm:text-lg leading-tight">
            <span className="font-bold">𝒦𝒰𝒮𝒰𝑀</span> 𝒮𝒪𝐿𝒜𝑅 𝐸𝒩𝐸𝑅𝒢𝒴
          </div>
        </div>

        {/* Close button only mobile */}
        <button className="lg:hidden text-2xl" onClick={closeSidebar}>
          ✖
        </button>
      </div>

      {/* ================= Menu ================= */}
      <div className="flex flex-col h-[calc(100vh-80px)]">
        <div className="flex-1 overflow-y-auto space-y-2 pr-1">
          <Link
            to="/admin-dashboard"
            onClick={() => handleMenuClick("/admin-dashboard")}
          >
            <div
              className={`flex items-center p-4 rounded-lg text-base transition ${isActive(
                "/admin-dashboard"
              )}`}
            >
              <LayoutDashboard size={24} className="mr-4" />
              Dashboard
            </div>
          </Link>

          <Link
            to="/admin/banner"
            onClick={() => handleMenuClick("/admin/banner")}
          >
            <div
              className={`flex items-center p-4 rounded-lg text-base transition ${isActive(
                "/admin/banner"
              )}`}
            >
              <Image size={24} className="mr-4" />
              Banner Manager
            </div>
          </Link>

          <Link
            to="/admin/videos"
            onClick={() => handleMenuClick("/admin/videos")}
          >
            <div
              className={`flex items-center p-4 rounded-lg text-base transition ${isActive(
                "/admin/videos"
              )}`}
            >
              <Video size={24} className="mr-4" />
              Video Manager
            </div>
          </Link>

          <Link
            to="/admin/cards"
            onClick={() => handleMenuClick("/admin/cards")}
          >
            <div
              className={`flex items-center p-4 rounded-lg text-base transition ${isActive(
                "/admin/cards"
              )}`}
            >
              <CreditCard size={24} className="mr-4" />
              Card Manager
            </div>
          </Link>

          <Link
            to="/admin/bookings"
            onClick={() => handleMenuClick("/admin/bookings")}
          >
            <div
              className={`flex items-center p-4 rounded-lg text-base transition ${isActive(
                "/admin/bookings"
              )}`}
            >
              <CreditCard size={24} className="mr-4" />
              All Bookings
            </div>
          </Link>

          <Link
            to="/admin/users"
            onClick={() => handleMenuClick("/admin/users")}
          >
            <div
              className={`flex items-center p-4 rounded-lg text-base transition ${isActive(
                "/admin/users"
              )}`}
            >
              <UsersIcon size={24} className="mr-4" />
              Users
            </div>
          </Link>
        </div>

        {/* ================= Logout ================= */}
        <div className="mt-auto">
          <button
            onClick={handleLogout}
            className="flex items-center p-4 rounded-lg w-full text-left text-red-600 font-semibold hover:bg-red-700 hover:text-white transition text-lg"
          >
            <LogOut size={24} className="mr-4" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
