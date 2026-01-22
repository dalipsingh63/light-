import fs from "fs";
import Card from "../models/Card.js";

/* =========================
   GET ALL CARDS
========================= */
export const getAllCards = async (req, res) => {
  try {
    const cards = await Card.find().sort({ createdAt: -1 });

    const fullUrlCards = cards.map((card) => ({
      _id: card._id,
      brand: card.brand,
      title: card.title || "",
      description: card.description || "",
      capacity: card.capacity || "",
      type: card.type || "",
      price: card.price || null,
      imageUrl: card.imageUrl
        ? `${req.protocol}://${req.get("host")}${card.imageUrl}`
        : "",
      isActive: card.isActive || false,
      createdAt: card.createdAt,
    }));

    res.status(200).json(fullUrlCards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* =========================
   ADD CARD (LOCAL UPLOAD)
========================= */
export const addCard = async (req, res) => {
  try {
    const { brand, title, description, capacity, type, price } = req.body;

    // 🔴 only brand required
    if (!brand) {
      return res.status(400).json({ message: "Brand is required" });
    }

    let imagePath = "";
    if (req.file) {
      imagePath = `/uploads/${req.file.filename}`;
    }

    const card = new Card({
      brand,
      title,
      description,
      capacity,
      type,
      price,
      imageUrl: imagePath,
    });

    const savedCard = await card.save();
    res.status(201).json(savedCard);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* =========================
   DELETE CARD
========================= */
export const deleteCard = async (req, res) => {
  try {
    const { id } = req.params;
    const card = await Card.findById(id);

    if (!card) {
      return res.status(404).json({ message: "Card not found" });
    }

    if (card.imageUrl && card.imageUrl.startsWith("/uploads")) {
      const filePath = `.${card.imageUrl}`;
      fs.unlink(filePath, (err) => {
        if (err) console.log("Image delete error:", err);
      });
    }

    await Card.findByIdAndDelete(id);
    res.status(200).json({ message: "Card deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* =========================
   TOGGLE ACTIVE
========================= */
export const toggleActiveCard = async (req, res) => {
  try {
    const { id } = req.params;
    const card = await Card.findById(id);

    if (!card) {
      return res.status(404).json({ message: "Card not found" });
    }

    card.isActive = !card.isActive;
    await card.save();

    res.status(200).json(card);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
