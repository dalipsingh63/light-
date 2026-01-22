import React, { useState } from "react";
import { createBooking } from "../services/bookingService";
import { useNavigate } from "react-router-dom";

export const MyBookings = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile) {
      alert("Please fill Name and Mobile");
      return;
    }

    try {
      setLoading(true);
      await createBooking({
        name: formData.name,
        mobile: formData.mobile,
        address: formData.address || "",
      });

      alert("Booking successful ✅");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Booking failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        min-h-screen
        bg-white
        flex
        justify-center
        px-4
        pt-6 md:pt-0
        pb-6 md:pb-0
      "
    >
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 md:p-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0a1f44] mb-6">
          wₑₗcₒₘₑ bₒₒₖᵢₙg yₒᵤ
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          />

          <input
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          />

          <textarea
            name="address"
            placeholder="Address (optional)"
            value={formData.address}
            onChange={handleChange}
            rows="3"
            className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-pink-600 hover:bg-pink-500 text-white font-semibold w-full py-3 rounded-xl transition active:scale-95"
          >
            {loading ? "Booking..." : "Submit Booking"}
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm mt-4">
          We respect your privacy. Your information is safe with us.
        </p>
      </div>
    </div>
  );
};
