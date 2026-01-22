import express from "express";
import multer from "multer";
import path from "path";
import {
  getAllCards,
  addCard,
  deleteCard,
  toggleActiveCard,
} from "../controllers/cardController.js";

const router = express.Router();

/* =========================
   MULTER CONFIG
========================= */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// optional: image filter (safe)
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed"), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
});

/* =========================
   ROUTES
========================= */

// GET all cards
router.get("/", getAllCards);

// ADD card (image optional, brand required)
router.post("/", upload.single("image"), addCard);

// DELETE card
router.delete("/:id", deleteCard);

// TOGGLE active/inactive
router.patch("/active/:id", toggleActiveCard);

export default router;
