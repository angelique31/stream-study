// pages/api/auth/register.js
import dbConnect from "../../../../src/db/db";
import User from "../../../../src/models/user.js";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await dbConnect();
      const { email, password } = req.body;

      // Vérifier si l'utilisateur existe déjà
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res
          .status(409)
          .json({ success: false, error: "Email already in use" });
      }

      // Hasher le mot de passe
      const hashedPassword = await bcrypt.hash(password, 10);

      // Créer un nouvel utilisateur
      console.log("Tentative de création d'utilisateur avec email:", email);
      const newUser = await User.create({
        email,
        password: hashedPassword,
      });
      console.log("Utilisateur créé:", newUser);

      res.status(201).json({ success: true, user: newUser });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
