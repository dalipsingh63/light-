import express from "express";
import {
  userSignupController,
  loginController,
  getAllUsers,
  getUserById
} from "../controllers/userSignupController.js";

const router = express.Router();

// 🔹 SIGNUP
router.post("/signup", userSignupController);

// 🔹 LOGIN (USER + ADMIN)
router.post("/login", loginController);

// 🔹 GET USERS
router.get("/get", getAllUsers);
router.get("/:id", getUserById);

export default router;
