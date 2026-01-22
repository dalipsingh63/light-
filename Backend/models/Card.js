import mongoose from "mongoose";

const cardSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,   // 🟢 optional
    },

    description: {
      type: String,
      trim: true,   // 🟢 optional
    },

    imageUrl: {
      type: String,
      trim: true,   // 🟢 optional
    },

    brand: {
      type: String,
      required: true, // 🔴 ONLY mandatory field
      trim: true,
    },

    capacity: {
      type: String,   // 🟢 optional
      trim: true,
    },

    type: {
      type: String,   // 🟢 optional
      trim: true,
    },

    price: {
      type: Number,   // 🟢 optional
    },

    isActive: {
      type: Boolean,
      default: false, // 🟢 optional
    },
  },
  {
    timestamps: true,
  }
);

const Card = mongoose.model("Card", cardSchema);

export default Card;
