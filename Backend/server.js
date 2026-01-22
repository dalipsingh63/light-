


// import express from "express";
// import dotenv from "dotenv";



// import cors from "cors";
// import connectDB from "./config/db.js";
// import path from "path";
// import { fileURLToPath } from "url";

// import userSignupRoute from "./routes/userSignupRoute.js";
// import bannerImagesRoute from "./routes/bannerImages.js";
// import cardsRoute from "./routes/cards.js"; // ✅ Cards route
// import bookingRoutes from "./routes/bookingRoutes.js";

// import videoRoutes from "./routes/videoRoutes.js";



// dotenv.config();
// const app = express();

// app.use(cors());
// app.use(express.json());

// connectDB();

// /* ===== STATIC UPLOADS ===== */
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// /* ===== ROUTES ===== */
// app.use("/api/user", userSignupRoute);
// app.use("/api/banner-images", bannerImagesRoute);
// app.use("/api/cards", cardsRoute); // ✅ Cards route mount

// app.use("/api/bookings", bookingRoutes);


// // Routes
// app.use("/api/videos", videoRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import path from "path";
import { fileURLToPath } from "url";

// Routes
import userSignupRoute from "./routes/userSignupRoute.js";
import bannerImagesRoute from "./routes/bannerImages.js";
import cardsRoute from "./routes/cards.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import videoRoutes from "./routes/videoRoutes.js";

dotenv.config();

const app = express();

// ===== MIDDLEWARE =====
app.use(cors());
app.use(express.json());

// ===== DB =====
connectDB();

// ===== PATH FIX =====
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ===== STATIC UPLOADS =====
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ===== API ROUTES =====
app.use("/api/user", userSignupRoute);
app.use("/api/banner-images", bannerImagesRoute);
app.use("/api/cards", cardsRoute);
app.use("/api/bookings", bookingRoutes);
app.use("/api/videos", videoRoutes);

// ===== FRONTEND BUILD =====
const frontendPath = path.join(__dirname, "../light-house/dist");
app.use(express.static(frontendPath));

// ⚠️ React Router fallback (API excluded)
app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// ===== SERVER =====
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

