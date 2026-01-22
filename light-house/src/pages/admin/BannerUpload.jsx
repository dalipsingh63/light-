


// import { useEffect, useState } from "react";
// import {
//   getAllBanners,
//   uploadBanner,
//   deleteBanner,
//   setActiveBanner,
// } from "../../services/banner";

// const BannerUpload = () => {
//   const [image, setImage] = useState(null);
//   const [banners, setBanners] = useState([]);

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
//       alert("Please select image");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("image", image);

//     try {
//       await uploadBanner(formData);
//       alert("Upload successful");
//       setImage(null);
//       loadBanners();
//     } catch (err) {
//       console.error(err);
//       alert("Upload failed");
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Delete this banner?")) return;
//     await deleteBanner(id);
//     loadBanners();
//   };

//   const handleSetActive = async (id) => {
//     await setActiveBanner(id);
//     loadBanners();
//   };

//   return (
//     <div>
//       <input
//         type="file"
//         accept="image/*"
//         onChange={(e) => setImage(e.target.files[0])}
//       />

//       <button onClick={handleUpload}>Upload</button>

//       <div
//         style={{
//           marginTop: "20px",
//           display: "flex",
//           gap: "20px",
//           flexWrap: "wrap",
//         }}
//       >
//         {banners.length === 0 && <p>No banners uploaded</p>}

//         {banners.map((b) => (
//           <div key={b._id} style={{ textAlign: "center" }}>
//             <img
//               src={b.url}   // ✅ CORRECT
//               width="200"
//               alt="banner"
//               style={{
//                 border: b.isActive ? "3px solid green" : "1px solid #ccc",
//                 borderRadius: "4px",
//               }}
//             />

//             <div style={{ marginTop: "8px" }}>
//               <button
//                 onClick={() => handleSetActive(b._id)}
//                 disabled={b.isActive}
//                 style={{ marginRight: "5px" }}
//               >
//                 {b.isActive ? "Active" : "Set Active"}
//               </button>

//               <button onClick={() => handleDelete(b._id)}>
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
} from "../../services/banner";

const BannerUpload = () => {
  const [image, setImage] = useState(null);
  const [banners, setBanners] = useState([]);

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
      alert("Please select image");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    try {
      await uploadBanner(formData);
      alert("Upload successful");
      setImage(null);
      loadBanners();
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this banner?")) return;
    await deleteBanner(id);
    loadBanners();
  };

  const handleSetActive = async (id) => {
    await setActiveBanner(id);
    loadBanners();
  };

  return (
    <div className="p-3 sm:p-4 md:p-6">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">
        Banner Upload
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
          onClick={handleUpload}
          className="px-4 py-2 rounded-md bg-green-600 hover:bg-green-700 text-white font-semibold"
        >
          Upload
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
                disabled={b.isActive}
                className={`px-3 py-1 text-sm rounded-md text-white
                  ${
                    b.isActive
                      ? "bg-green-600 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
              >
                {b.isActive ? "Active" : "Set Active"}
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
