

// import fs from "fs";
// import BannerImage from "../models/BannerImage.js";

// // GET all banner images
// export const getAllBannerImages = async (req, res) => {
//   try {
//     const images = await BannerImage.find().sort({ createdAt: -1 });

//     const fullUrlImages = images.map(img => ({
//       _id: img._id,
//       url: `${req.protocol}://${req.get("host")}${img.url}`,
//       createdAt: img.createdAt,
//       isActive: img.isActive || false, // include active status
//     }));

//     res.status(200).json(fullUrlImages);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // POST banner image (LOCAL UPLOAD)
// export const addBannerImage = async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ message: "Image file is required" });
//     }

//     const imagePath = `/uploads/${req.file.filename}`;

//     const bannerImage = new BannerImage({
//       url: imagePath,
//     });

//     const savedImage = await bannerImage.save();
//     res.status(201).json(savedImage);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // DELETE banner image by ID
// export const deleteBannerImage = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const image = await BannerImage.findById(id);
//     if (!image) {
//       return res.status(404).json({ message: "Image not found" });
//     }

//     // Delete file from uploads folder
//     const filePath = `.${image.url}`; // url = /uploads/filename
//     fs.unlink(filePath, (err) => {
//       if (err) console.log("File deletion error:", err);
//     });

//     // Delete from DB
//     await BannerImage.findByIdAndDelete(id);

//     res.status(200).json({ message: "Banner image deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // SET a banner image as active
// export const setActiveBanner = async (req, res) => {
//   try {
//     const { id } = req.params;

//     // First reset all images
//     await BannerImage.updateMany({}, { isActive: false });

//     // Set selected image as active
//     const activeBanner = await BannerImage.findByIdAndUpdate(
//       id,
//       { isActive: true },
//       { new: true }
//     );

//     res.status(200).json(activeBanner);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


import fs from "fs";
import BannerImage from "../models/BannerImage.js";

// GET all banner images
export const getAllBannerImages = async (req, res) => {
  try {
    const images = await BannerImage.find().sort({ createdAt: -1 });

    const fullUrlImages = images.map(img => ({
      _id: img._id,
      url: `${req.protocol}://${req.get("host")}${img.url}`,
      createdAt: img.createdAt,
      isActive: img.isActive || false, // include active status
    }));

    res.status(200).json(fullUrlImages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST banner image (LOCAL UPLOAD)
export const addBannerImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Image file is required" });
    }

    const imagePath = `/uploads/${req.file.filename}`;

    const bannerImage = new BannerImage({
      url: imagePath,
    });

    const savedImage = await bannerImage.save();
    res.status(201).json(savedImage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE banner image by ID
export const deleteBannerImage = async (req, res) => {
  try {
    const { id } = req.params;
    const image = await BannerImage.findById(id);
    if (!image) return res.status(404).json({ message: "Image not found" });

    // Only try to delete if image is local (starts with /uploads)
    if (image.url.startsWith("/uploads")) {
      const filePath = `.${image.url}`;
      fs.unlink(filePath, (err) => {
        if (err) console.log("File deletion error:", err);
      });
    } else {
      console.log("Skipping file deletion for external URL:", image.url);
    }

    // Delete from DB
    await BannerImage.findByIdAndDelete(id);

    res.status(200).json({ message: "Banner image deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// // SET a banner image as active
// export const setActiveBanner = async (req, res) => {
//   try {
//     const { id } = req.params;

//     // First reset all images
//     await BannerImage.updateMany({}, { isActive: false });

//     // Set selected image as active
//     const activeBanner = await BannerImage.findByIdAndUpdate(
//       id,
//       { isActive: true },
//       { new: true }
//     );

//     res.status(200).json(activeBanner);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


export const setActiveBanner = async (req, res) => {
  try {
    const { id } = req.params;

    const banner = await BannerImage.findById(id);
    if (!banner) {
      return res.status(404).json({ message: "Banner not found" });
    }

    banner.isActive = !banner.isActive; // 🔥 toggle
    await banner.save();

    res.status(200).json(banner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

