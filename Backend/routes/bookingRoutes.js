import express from "express";
import { createBooking, getAllBookings } from "../controllers/bookingController.js";
// ✅ protect middleware remove kar diya, ab login nahi chahiye

const router = express.Router();

// 🔹 Create booking (Book Slot) — no login required
router.post("/", createBooking);

// 🔹 Get all bookings (Admin / Public)
router.get("/", getAllBookings);

export default router;
