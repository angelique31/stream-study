// src/models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Vous pouvez ajouter d'autres champs si nécessaire
});

export default mongoose.models.User || mongoose.model("User", userSchema);
