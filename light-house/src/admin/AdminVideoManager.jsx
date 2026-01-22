// import { useEffect, useState } from "react";
// import { getVideos, uploadVideo, deleteVideo } from "../services/videoService";

// const AdminVideoManager = () => {
//   const [videoFile, setVideoFile] = useState(null);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [videos, setVideos] = useState([]);
//   const [uploading, setUploading] = useState(false);

//   // ======================
//   // Load all videos
//   // ======================
//   const loadVideos = async () => {
//     try {
//       const res = await getVideos();
//       setVideos(res.videos); // ✅ FIXED
//     } catch (err) {
//       console.error("Error loading videos", err);
//     }
//   };

//   useEffect(() => {
//     loadVideos();
//   }, []);

//   // ======================
//   // Upload video (Cloudinary)
//   // ======================
//   const handleUpload = async () => {
//     if (!title || !videoFile) {
//       alert("Title aur video dono required hai");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("description", description);
//     formData.append("video", videoFile); // backend expects "video"

//     try {
//       setUploading(true);
//       await uploadVideo(formData);
//       alert("✅ Video uploaded successfully");
//       setTitle("");
//       setDescription("");
//       setVideoFile(null);
//       loadVideos();
//     } catch (err) {
//       console.error(err);
//       alert("❌ Upload failed");
//     } finally {
//       setUploading(false);
//     }
//   };

//   // ======================
//   // Delete video
//   // ======================
//   const handleDelete = async (id) => {
//     if (!window.confirm("Video delete karna hai?")) return;
//     try {
//       await deleteVideo(id);
//       loadVideos();
//     } catch (err) {
//       console.error(err);
//       alert("Delete failed");
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Admin Video Manager (Cloudinary)</h2>

//       {/* ================= Upload Section ================= */}
//       <div style={{ marginBottom: "20px" }}>
//         <input
//           type="text"
//           placeholder="Video Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           style={{
//             padding: "8px",
//             border: "1px solid #ccc",
//             borderRadius: "6px",
//             marginRight: "10px",
//             width: "220px",
//           }}
//         />

//         <input
//           type="text"
//           placeholder="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           style={{
//             padding: "8px",
//             border: "1px solid #ccc",
//             borderRadius: "6px",
//             marginRight: "10px",
//             width: "280px",
//           }}
//         />

//         <input
//           type="file"
//           accept="video/*"
//           onChange={(e) => setVideoFile(e.target.files[0])}
//           style={{ marginRight: "10px" }}
//         />

//         <button
//           onClick={handleUpload}
//           disabled={uploading}
//           style={{
//             padding: "10px 20px",
//             background: uploading ? "#aaa" : "#198754",
//             color: "white",
//             border: "none",
//             borderRadius: "8px",
//             cursor: uploading ? "not-allowed" : "pointer",
//             fontWeight: "600",
//           }}
//         >
//           {uploading ? "Uploading..." : "⬆ Upload Video"}
//         </button>
//       </div>

//       {/* ================= Video List ================= */}
//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           gap: "32px",
//           marginTop: "30px",
//         }}
//       >
//         {videos.length === 0 && <p>No videos uploaded</p>}

//         {videos.map((v) => (
//           <div key={v._id} style={{ textAlign: "center", width: "300px" }}>
//             <video
//               width="300"
//               height="180"
//               preload="metadata"
//               controls
//               playsInline
//               muted
//               controlsList="nodownload noplaybackrate noremoteplayback"
//               disablePictureInPicture
//               style={{
//                 borderRadius: "8px",
//                 border: "1px solid #ccc",
//                 objectFit: "cover",
//                 background: "#000",
//               }}
//             >
//               <source src={v.videoUrl} type="video/mp4" />
//               Your browser does not support video.
//             </video>

//             <p style={{ fontWeight: "600", marginTop: "6px" }}>
//               {v.title}
//             </p>
//             <p style={{ fontSize: "12px", color: "#666" }}>
//               {v.description}
//             </p>

//             <button
//               onClick={() => handleDelete(v._id)}
//               style={{
//                 marginTop: "6px",
//                 padding: "6px 12px",
//                 background: "#dc3545",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "4px",
//                 cursor: "pointer",
//               }}
//             >
//               Delete
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdminVideoManager;




import { useEffect, useState } from "react";
import { getVideos, uploadVideo, deleteVideo } from "../services/videoService";

const AdminVideoManager = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videos, setVideos] = useState([]);
  const [uploading, setUploading] = useState(false);

  // ======================
  // Load all videos
  // ======================
  const loadVideos = async () => {
    try {
      const res = await getVideos();
      setVideos(res.videos);
    } catch (err) {
      console.error("Error loading videos", err);
    }
  };

  useEffect(() => {
    loadVideos();
  }, []);

  // ======================
  // Upload video
  // ======================
  const handleUpload = async () => {
    if (!title || !videoFile) {
      alert("Title aur video dono required hai");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("video", videoFile);

    try {
      setUploading(true);
      await uploadVideo(formData);
      alert("✅ Video uploaded successfully");
      setTitle("");
      setDescription("");
      setVideoFile(null);
      loadVideos();
    } catch (err) {
      console.error(err);
      alert("❌ Upload failed");
    } finally {
      setUploading(false);
    }
  };

  // ======================
  // Delete video
  // ======================
  const handleDelete = async (id) => {
    if (!window.confirm("Video delete karna hai?")) return;
    try {
      await deleteVideo(id);
      loadVideos();
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    }
  };

  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">
        Admin Video Manager (Cloudinary)
      </h2>

      {/* ================= Upload Section ================= */}
      <div className="bg-white rounded-xl shadow p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-3 md:items-center">
          <input
            type="text"
            placeholder="Video Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded-lg px-3 py-2 w-full md:w-48"
          />

          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded-lg px-3 py-2 w-full md:w-64"
          />

          <input
            type="file"
            accept="video/*"
            onChange={(e) => setVideoFile(e.target.files[0])}
            className="w-full md:w-auto"
          />

          <button
            onClick={handleUpload}
            disabled={uploading}
            className={`px-4 py-2 rounded-lg font-semibold text-white transition
              ${
                uploading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-500"
              }`}
          >
            {uploading ? "Uploading..." : "⬆ Upload Video"}
          </button>
        </div>
      </div>

      {/* ================= Video List ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.length === 0 && (
          <p className="text-gray-500">No videos uploaded</p>
        )}

        {videos.map((v) => (
          <div
            key={v._id}
            className="bg-white rounded-xl shadow p-3 text-center"
          >
            <video
              className="w-full h-44 object-cover rounded-lg bg-black"
              preload="metadata"
              controls
              playsInline
              muted
              controlsList="nodownload noplaybackrate noremoteplayback"
              disablePictureInPicture
            >
              <source src={v.videoUrl} type="video/mp4" />
              Your browser does not support video.
            </video>

            <p className="font-semibold mt-2">{v.title}</p>
            <p className="text-xs text-gray-500">{v.description}</p>

            <button
              onClick={() => handleDelete(v._id)}
              className="mt-2 px-3 py-1 bg-red-600 hover:bg-red-500 text-white rounded-md text-sm"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminVideoManager;
