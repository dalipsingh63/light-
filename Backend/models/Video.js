import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    videoUrl: {
      type: String,
      required: true, // Cloudinary URL
    },

    publicId: {
      type: String, // Cloudinary public_id (delete/update ke kaam aata hai)
    },

    duration: {
      type: Number, // seconds (optional)
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, // createdAt & updatedAt auto
  }
);

export default mongoose.model("Video", videoSchema);
