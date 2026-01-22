import API from "./api";

// ================================
// 🎬 GET ALL VIDEOS (Public - Home)
// ================================
export const getVideos = async () => {
  try {
    const res = await API.get("/videos");
    return res.data; // ✅ only data return
  } catch (error) {
    console.error("❌ Error fetching videos:", error.response?.data || error.message);
    throw error;
  }
};

// ================================
// ⬆️ UPLOAD VIDEO (Admin Panel)
// ================================
export const uploadVideo = async (formData) => {
  try {
    const res = await API.post("/videos/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return res.data; // ✅
  } catch (error) {
    console.error("❌ Error uploading video:", error.response?.data || error.message);
    throw error;
  }
};

// ================================
// 🗑️ DELETE VIDEO (Admin Panel)
// ================================
export const deleteVideo = async (id) => {
  try {
    const res = await API.delete(`/videos/${id}`);
    return res.data; // ✅
  } catch (error) {
    console.error("❌ Error deleting video:", error.response?.data || error.message);
    throw error;
  }
};
