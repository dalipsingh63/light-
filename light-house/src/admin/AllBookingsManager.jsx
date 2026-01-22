// import { useEffect, useState } from "react";
// import { getAllBookings } from "../services/bookingService";

// const AllBookingsManager = () => {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const loadBookings = async () => {
//     try {
//       setLoading(true);
//       const res = await getAllBookings();
//       setBookings(res.data);
//     } catch (err) {
//       console.error("Error loading bookings", err);
//       alert("Failed to load bookings");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadBookings();
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>All Bookings (Admin)</h2>

//       {loading && <p>Loading bookings...</p>}

//       {/* ===== Bookings List ===== */}
//       <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
//         {bookings.length === 0 && !loading && <p>No bookings found</p>}

//         {bookings.map((b) => (
//           <div
//             key={b._id}
//             style={{
//               width: "260px",
//               border: "1px solid #ccc",
//               padding: "12px",
//               borderRadius: "6px",
//             }}
//           >
//             <h4 style={{ marginBottom: "6px" }}>{b.name}</h4>

//             <p>
//               <strong>Mobile:</strong> {b.mobile}
//             </p>

//             <p>
//               <strong>Address:</strong>{" "}
//               {b.address ? b.address : "—"}
//             </p>

//             <p>
//               <strong>Status:</strong> {b.status}
//             </p>

//             <p style={{ fontSize: "12px", color: "#555" }}>
//               {new Date(b.createdAt).toLocaleString()}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllBookingsManager;





import { useEffect, useState } from "react";
import { getAllBookings } from "../services/bookingService";

const AllBookingsManager = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadBookings = async () => {
    try {
      setLoading(true);
      const res = await getAllBookings();
      setBookings(res.data);
    } catch (err) {
      console.error("Error loading bookings", err);
      alert("Failed to load bookings");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBookings();
  }, []);

  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">
        All Bookings (Admin)
      </h2>

      {loading && (
        <p className="text-gray-500">Loading bookings...</p>
      )}

      {/* ===== Bookings List ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {bookings.length === 0 && !loading && (
          <p className="text-gray-500">No bookings found</p>
        )}

        {bookings.map((b) => (
          <div
            key={b._id}
            className="bg-white border rounded-lg p-4 shadow-sm"
          >
            <h4 className="font-semibold text-lg mb-2">
              {b.name}
            </h4>

            <p className="text-sm">
              <span className="font-semibold">Mobile:</span>{" "}
              {b.mobile}
            </p>

            <p className="text-sm">
              <span className="font-semibold">Address:</span>{" "}
              {b.address ? b.address : "—"}
            </p>

            <p className="text-sm">
              <span className="font-semibold">Status:</span>{" "}
              {b.status}
            </p>

            <p className="text-xs text-gray-500 mt-2">
              {new Date(b.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBookingsManager;
