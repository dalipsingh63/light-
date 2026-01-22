// import express from "express";
// import multer from "multer";
// import {
//   getAllBannerImages,
//   addBannerImage,
// } from "../controllers/bannerImageController.js";

// const router = express.Router();

// /* ========= MULTER CONFIG ========= */
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// const upload = multer({ storage });

// /* ========= ROUTES ========= */

// // GET all images
// router.get("/", getAllBannerImages);

// // POST new image (LOCAL FILE)
// router.post("/", upload.single("image"), addBannerImage);

// export default router;


import express from "express";
import multer from "multer";
import {
  getAllBannerImages,
  addBannerImage,
  deleteBannerImage,
  setActiveBanner,
} from "../controllers/bannerImageController.js";

const router = express.Router();

/* ========= MULTER CONFIG ========= */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

/* ========= ROUTES ========= */

// GET all images
router.get("/", getAllBannerImages);

// POST new image (LOCAL FILE)
router.post("/", upload.single("image"), addBannerImage);

// DELETE an image by ID
router.delete("/:id", deleteBannerImage);

// SET an image as active
router.patch("/set-active/:id", setActiveBanner);

export default router;
