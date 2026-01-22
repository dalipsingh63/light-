import API from "./api";

// ✅ Book Slot (create booking) — no auth needed
export const createBooking = (bookingData) => {
  return API.post("/bookings", bookingData);
};

// ✅ Get all bookings (public) — no auth needed
export const getAllBookings = () => {
  return API.get("/bookings");
};
