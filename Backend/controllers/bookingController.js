import Booking from "../models/Booking.js";

// ✅ Create Booking (Book Slot)
export const createBooking = async (req, res) => {
  try {
    const { name, mobile, address } = req.body;

    // 🔹 validation: name aur mobile required, address optional
    if (!name || !mobile) {
      return res.status(400).json({ message: "Name and Mobile are required" });
    }

    const booking = await Booking.create({
      name,
      mobile,
      address, // optional
    });

    res.status(201).json({
      message: "Booking successful",
      booking,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Booking failed" });
  }
};

// ✅ Get all bookings
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch bookings" });
  }
};
