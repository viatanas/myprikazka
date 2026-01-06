// models/Product.js
import mongoose from "mongoose";

const CharacterSchema = new mongoose.Schema(
  {
    name: { type: String, default: null },
    gender: {
      type: String,
      default: null,
    },
    age: { type: Number, default: null },
    email: { type: String, default: null },
    phoneNumber: { type: Number, default: null },
  },
  {
    timestamps: true,
  }
);

// Avoid model overwrite issues in Next.js dev
const Character =
  mongoose.models.Character || mongoose.model("Character", CharacterSchema);

export default Character;
