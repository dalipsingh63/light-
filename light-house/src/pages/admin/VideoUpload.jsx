


import { useEffect, useState } from "react";
import {
  getVideos,
  uploadVideo,
  deleteVideo,
} from "../../services/videoService";

const VideoUpload = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videos, setVideos] = useState([]);
  const [uploading, setUploading] = useState(false);

  const loadVideos = async () => {
    try {
      const res = await getVideos();
      setVideos(res.data);
    } catch (err) {
      console.error("Error loading videos", err);
    }
  };

  useEffect(() => {
    loadVideos();
  }, []);

  const handleUpload = async () => {
    if (!title || !videoFile) {
      alert("Title and video are required");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("video", videoFile);

    try {
      setUploading(true);
      const adminToken = localStorage.getItem("adminToken");
      await uploadVideo(formData, adminToken);

      alert("Video uploaded successfully");
      setTitle("");
      setDescription("");
      setVideoFile(null);
      loadVideos();
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this video?")) return;
    try {
      const adminToken = localStorage.getItem("adminToken");
      await deleteVideo(id, adminToken);
      loadVideos();
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    }
  };

  return (
    <div className="p-3 sm:p-4 md:p-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-4">
        Video Manager
      </h1>

      {/* ===== Upload Form ===== */}
      <div className="bg-white shadow rounded-lg p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Video Title *"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded px-3 py-2 w-full"
          />

          <input
            type="text"
            placeholder="Description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded px-3 py-2 w-full"
          />

          <input
            type="file"
            accept="video/*"
            onChange={(e) => setVideoFile(e.target.files[0])}
            className="border rounded px-3 py-2 w-full"
          />
        </div>

        <button
          onClick={handleUpload}
          disabled={uploading}
          className={`mt-4 px-5 py-2 rounded text-white font-semibold transition
            ${
              uploading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
        >
          {uploading ? "Uploading..." : "⬆ Upload Video"}
        </button>
      </div>

      {/* ===== Videos Grid ===== */}
      {videos.length === 0 ? (
        <p className="text-gray-500">No videos uploaded</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v) => (
            <div
              key={v._id}
              className="bg-white shadow rounded-lg p-3"
            >
              <video
                controls
                className="w-full h-48 object-cover rounded"
              >
                <source
                  src={`http://localhost:5000${v.videoUrl}`}
                  type="video/mp4"
                />
              </video>

              <div className="mt-3">
                <h3 className="font-semibold">{v.title}</h3>
                {v.description && (
                  <p className="text-sm text-gray-600">
                    {v.description}
                  </p>
                )}

                <button
                  onClick={() => handleDelete(v._id)}
                  className="mt-3 px-3 py-1.5 text-sm bg-red-600 hover:bg-red-700 text-white rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoUpload;
