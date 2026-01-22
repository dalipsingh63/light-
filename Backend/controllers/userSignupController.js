import User from "../models/User.js";
import jwt from "jsonwebtoken";

/* =========================
   🔹 SIGNUP (USER)
========================= */
export const userSignupController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({
      name,
      email,
      password,
      role: "user", // 👈 default user
    });

    // 🔥 Generate token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(201).json({
      message: "User signup successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token, // ✅ Token bhi response me milega
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// /* =========================
//    🔹 LOGIN (USER + ADMIN)
// ========================= */


// export const loginController = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({ message: "Email & password required" });
//     }

//     // ✅ Admin login hardcoded  adminrajasthan@gmail.com
//     if (email === "Dalip@gmail.com" && password === "123") {
//       const token = jwt.sign({ role: "admin" }, process.env.JWT_SECRET, { expiresIn: "1d" });
//       return res.status(200).json({
//         message: "Admin login successful",
//         token,
//         redirectTo: "/admin-dashboard",
//       });
//     }

//     // 🔹 Normal user login
//     const user = await User.findOne({ email });
//     if (!user) return res.status(401).json({ message: "Invalid credentials" });

//     const isMatch = await user.matchPassword(password);
//     if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

//     const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });

//     return res.status(200).json({
//       message: "User login successful",
//       token,
//       redirectTo: "/user-panel", // ✅ Home route
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

/* =========================
   🔹 LOGIN (USER + ADMIN)
========================= */
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email & password required" });
    }

    // ✅ Admin login (env variables)
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(
        { role: "admin" },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );

      return res.status(200).json({
        message: "Admin login successful",
        token,
        redirectTo: "/admin/dashboard", // ✅ Exact frontend admin route
      });
    }

    // 🔹 Normal user login
    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await user.matchPassword(password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.status(200).json({
      message: "User login successful",
      token,
      redirectTo: "/", // ✅ User → Home
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* =========================
   🔹 GET ALL USERS
========================= */
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* =========================
   🔹 GET USER BY ID
========================= */
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
