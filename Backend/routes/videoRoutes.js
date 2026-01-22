import express from "express";
import upload from "../middlewares/multer.js";
import { uploadVideo, getAllVideos, deleteVideo } from "../controllers/videoController.js";

const router = express.Router();

// Upload video
router.post("/upload", upload.single("video"), uploadVideo);

// Get all videos
router.get("/", getAllVideos);

// Delete video
router.delete("/:id", deleteVideo);

export default router;
