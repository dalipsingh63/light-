// src/services/user.js
import API from "./api"; // axios instance

// GET all users (admin panel ke liye)
export const getAllUsers = () => {
  return API.get("/user/get"); // ye backend route hai
};
