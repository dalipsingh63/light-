// // models/BannerImage.js
// import mongoose from "mongoose";

// const bannerImageSchema = new mongoose.Schema({
//   url: { type: String, required: true }, // image URL
//   createdAt: { type: Date, default: Date.now },
// });

// const BannerImage = mongoose.model("BannerImage", bannerImageSchema);

// export default BannerImage; // <-- default export



// models/BannerImage.js
import mongoose from "mongoose";

const bannerImageSchema = new mongoose.Schema({
  url: { type: String, required: true }, // image URL
  createdAt: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: false }, // optional: mark banner as active
});

const BannerImage = mongoose.model("BannerImage", bannerImageSchema);

export default BannerImage; // <-- default export
