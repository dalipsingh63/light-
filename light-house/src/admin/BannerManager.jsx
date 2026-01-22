



// import { useEffect, useState } from "react";
// import {
//   getAllBanners,
//   uploadBanner,
//   deleteBanner,
//   setActiveBanner,
// } from "../services/banner";

// const BannerUpload = () => {
//   const [image, setImage] = useState(null);
//   const [banners, setBanners] = useState([]);
//   const [uploading, setUploading] = useState(false);

//   const loadBanners = async () => {
//     try {
//       const res = await getAllBanners();
//       setBanners(res.data);
//     } catch (err) {
//       console.error("Error loading banners", err);
//     }
//   };

//   useEffect(() => {
//     loadBanners();
//   }, []);

//   const handleUpload = async () => {
//     if (!image) {
//       alert("Please select an image");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("image", image);

//     try {
//       setUploading(true);
//       await uploadBanner(formData);
//       alert("Upload successful");
//       setImage(null);
//       loadBanners();
//     } catch (err) {
//       console.error(err);
//       alert("Upload failed");
//     } finally {
//       setUploading(false);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this banner?")) return;
//     await deleteBanner(id);
//     loadBanners();
//   };

//   const handleSetActive = async (id) => {
//     await setActiveBanner(id);
//     loadBanners();
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Upload Banner</h2>

//       {/* Upload section */}
//       <div style={{ marginBottom: "20px" }}>
//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) => setImage(e.target.files[0])}
//           style={{
//             padding: "8px",
//             border: "1px solid #ccc",
//             borderRadius: "6px",
//             marginRight: "10px",
//           }}
//         />

//         <button
//           type="button"
//           onClick={handleUpload}
//           disabled={uploading}
//           style={{
//             padding: "10px 20px",
//             background: uploading
//               ? "#aaa"
//               : "linear-gradient(135deg, #4CAF50, #2E7D32)",
//             color: "white",
//             border: "none",
//             borderRadius: "8px",
//             cursor: uploading ? "not-allowed" : "pointer",
//             fontWeight: "600",
//             fontSize: "14px",
//             boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
//             transition: "all 0.3s ease",
//           }}
//         >
//           {uploading ? "Uploading..." : "⬆ Upload Banner"}
//         </button>
//       </div>

//       {/* Banners */}
//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           gap: "40px",
//           marginTop: "36px",
//         }}
//       >
//         {banners.length === 0 && <p>No banners uploaded</p>}

//         {banners.map((b) => (
//           <div key={b._id} style={{ textAlign: "center" }}>
//             <img
//               src={b.url}
//               alt="banner"
//               style={{
//                 width: "200px",
//                 borderRadius: "6px",
//                 objectFit: "cover",
//                 border: b.isActive ? "3px solid green" : "1px solid #ccc",
//               }}
//             />

//             <div style={{ marginTop: "8px" }}>
//               <button
//                 onClick={() => handleSetActive(b._id)}
//                 style={{
//                   marginRight: "6px",
//                   padding: "6px 12px",
//                   background: b.isActive ? "green" : "#007bff",
//                   color: "white",
//                   border: "none",
//                   borderRadius: "4px",
//                   cursor: "pointer",
//                 }}
//               >
//                 {b.isActive ? "Active" : "Set Banner"}
//               </button>

//               <button
//                 onClick={() => handleDelete(b._id)}
//                 style={{
//                   padding: "6px 12px",
//                   background: "#dc3545",
//                   color: "white",
//                   border: "none",
//                   borderRadius: "4px",
//                   cursor: "pointer",
//                 }}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BannerUpload;


import { useEffect, useState } from "react";
import {
  getAllBanners,
  uploadBanner,
  deleteBanner,
  setActiveBanner,
} from "../services/banner";

const BannerUpload = () => {
  const [image, setImage] = useState(null);
  const [banners, setBanners] = useState([]);
  const [uploading, setUploading] = useState(false);

  const loadBanners = async () => {
    try {
      const res = await getAllBanners();
      setBanners(res.data);
    } catch (err) {
      console.error("Error loading banners", err);
    }
  };

  useEffect(() => {
    loadBanners();
  }, []);

  const handleUpload = async () => {
    if (!image) {
      alert("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    try {
      setUploading(true);
      await uploadBanner(formData);
      alert("Upload successful");
      setImage(null);
      loadBanners();
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this banner?")) return;
    await deleteBanner(id);
    loadBanners();
  };

  const handleSetActive = async (id) => {
    await setActiveBanner(id);
    loadBanners();
  };

  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">
        Banner Manager
      </h2>

      {/* ===== Upload Section ===== */}
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center mb-6">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full sm:w-auto border rounded-md p-2"
        />

        <button
          type="button"
          onClick={handleUpload}
          disabled={uploading}
          className={`px-4 py-2 rounded-md font-semibold text-white transition
            ${
              uploading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
        >
          {uploading ? "Uploading..." : "⬆ Upload Banner"}
        </button>
      </div>

      {/* ===== Banners Grid ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {banners.length === 0 && (
          <p className="text-gray-500">No banners uploaded</p>
        )}

        {banners.map((b) => (
          <div
            key={b._id}
            className="bg-white border rounded-lg p-3 text-center shadow-sm"
          >
            <img
              src={b.url}
              alt="banner"
              className={`w-full h-36 object-cover rounded-md mb-3 ${
                b.isActive ? "ring-4 ring-green-500" : "border"
              }`}
            />

            <div className="flex justify-center gap-2">
              <button
                onClick={() => handleSetActive(b._id)}
                className={`px-3 py-1 text-sm rounded-md text-white
                  ${
                    b.isActive
                      ? "bg-green-600 cursor-default"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
              >
                {b.isActive ? "Active" : "Set Banner"}
              </button>

              <button
                onClick={() => handleDelete(b._id)}
                className="px-3 py-1 text-sm rounded-md bg-red-600 hover:bg-red-700 text-white"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerUpload;
