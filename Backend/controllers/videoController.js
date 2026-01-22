import Video from "../models/Video.js";
import cloudinary from "../utils/cloudinary.js";
import fs from "fs";

// ================== UPLOAD VIDEO ==================
export const uploadVideo = async (req, res) => {
  try {
    console.log("➡️ API HIT");

    if (!req.file) {
      return res.status(400).json({ message: "Video file required" });
    }

    console.log("⬆️ Uploading to Cloudinary...");

    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "video",
      folder: "videos",
      chunk_size: 6000000, // 6MB chunks
      timeout: 120000,     // 2 minutes
    });

    console.log("✅ Cloudinary Done");

    fs.unlink(req.file.path, (err) => {
      if (err) console.error("File delete error:", err);
    });

    const video = await Video.create({
      title: req.body.title,
      description: req.body.description,
      videoUrl: result.secure_url,
      publicId: result.public_id,
      duration: result.duration,
    });

    return res.status(201).json({
      success: true,
      message: "Video uploaded successfully",
      video,
    });
  } catch (err) {
    console.error("❌ ERROR:", err);
    if (req.file?.path && fs.existsSync(req.file.path)) fs.unlinkSync(req.file.path);

    return res.status(500).json({
      success: false,
      message: "Video upload failed",
    });
  }
};

// ================== GET ALL VIDEOS ==================
export const getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find().sort({ createdAt: -1 }); // latest first
    return res.status(200).json({
      success: true,
      videos,
    });
  } catch (err) {
    console.error("❌ ERROR:", err);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch videos",
    });
  }
};

// ================== DELETE VIDEO ==================
export const deleteVideo = async (req, res) => {
  try {
    const { id } = req.params;

    const video = await Video.findById(id);
    if (!video) {
      return res.status(404).json({ success: false, message: "Video not found" });
    }

    // 1️⃣ Delete from Cloudinary
    await cloudinary.uploader.destroy(video.publicId, { resource_type: "video" });

    // 2️⃣ Delete from MongoDB
    await video.deleteOne();

    return res.status(200).json({ success: true, message: "Video deleted successfully" });
  } catch (err) {
    console.error("❌ ERROR:", err);
    return res.status(500).json({ success: false, message: "Failed to delete video" });
  }
};
