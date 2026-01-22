

import React, { useEffect, useState } from "react";
import { getAllBookings } from "../../services/bookingService";

const AllBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBookings = async () => {
    try {
      const res = await getAllBookings();
      setBookings(res.data);
    } catch (error) {
      console.error(error);
      alert("Failed to fetch bookings");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  if (loading) {
    return <div className="p-4">Loading bookings...</div>;
  }

  return (
    <div className="p-3 sm:p-4 md:p-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-4">
        All Bookings
      </h1>

      {bookings.length === 0 ? (
        <p>No bookings found</p>
      ) : (
        <>
          {/* ================= Desktop / Tablet Table ================= */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full border border-gray-300 bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-2 text-left">#</th>
                  <th className="border p-2 text-left">Name</th>
                  <th className="border p-2 text-left">Mobile</th>
                  <th className="border p-2 text-left">Address</th>
                  <th className="border p-2 text-left">Status</th>
                  <th className="border p-2 text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b, index) => (
                  <tr key={b._id} className="hover:bg-gray-50">
                    <td className="border p-2">{index + 1}</td>
                    <td className="border p-2">{b.name}</td>
                    <td className="border p-2">{b.mobile}</td>
                    <td className="border p-2">
                      {b.address || "—"}
                    </td>
                    <td className="border p-2">{b.status}</td>
                    <td className="border p-2">
                      {new Date(b.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ================= Mobile Cards ================= */}
          <div className="md:hidden space-y-3">
            {bookings.map((b, index) => (
              <div
                key={b._id}
                className="bg-white border rounded-lg p-3 shadow-sm"
              >
                <div className="text-sm text-gray-500 mb-1">
                  #{index + 1}
                </div>

                <p>
                  <span className="font-semibold">Name:</span>{" "}
                  {b.name}
                </p>
                <p>
                  <span className="font-semibold">Mobile:</span>{" "}
                  {b.mobile}
                </p>
                <p>
                  <span className="font-semibold">Address:</span>{" "}
                  {b.address || "—"}
                </p>
                <p>
                  <span className="font-semibold">Status:</span>{" "}
                  {b.status}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {new Date(b.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AllBookings;
