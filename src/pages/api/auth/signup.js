// pages/api/auth/signup.js
import dbConnect from "../../../../src/db/db";
import User from "../../../../src/models/user.js";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  if (method === "POST") {
    try {
      // console.log("Requête reçue:", req.body);
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const user = await User.create({
        email: req.body.email,
        password: hashedPassword,
      });
      res.status(201).json({ success: true, user });
    } catch (error) {
      // console.error("Erreur lors de la création de l’utilisateur:", error);
      res.status(400).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).end(); // Méthode non autorisée
  }
}
