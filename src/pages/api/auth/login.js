// pages/api/auth/login.js

import dbConnect from "../../../db/db";
import User from "../../../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  if (method === "POST") {
    try {
      // Récupère l'e-mail et le mot de passe envoyés par le client
      const { email, password } = req.body;
      // Recherche de l'utilisateur dans la bdd pour email
      const user = await User.findOne({ email: email });
      if (user) {
        // Si l'utilisateur est trouvé, vérifiez le mot de passe
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
          // Si le mot de passe correspond, créez un token JWT avec jwt.sign
          // Ce jeton contient l'ID de l'utilisateur et son e-mail
          const token = jwt.sign(
            { userId: user._id, email: user.email }, // Payload du token
            process.env.JWT_SECRET, // La clé secrète pour signer le token
            { expiresIn: "30d" } // Option pour définir la durée de vie du token
          );

          //Le jeton est envoyé au client sous forme de cookie
          res.setHeader(
            "Set-Cookie",
            `token=${token};  Path=/; Max-Age=${60 * 60 * 24 * 7};`
          );

          // Si le mot de passe correspond
          return res
            .status(200)
            .json({ success: true, message: "Connexion réussie" });
        } else {
          // Si l'utilisateur est trouvé mais que le mot de passe ne correspond pas
          res.status(401).json({
            success: false,
            message: "Mot de passe incorrect. Veuillez réessayer ou ",
          });
        }
      } else {
        // Si l'utilisateur n'est pas trouvé
        res.status(401).json({
          success: false,
          message:
            "Nous n'avons pas trouvé de compte avec cette adresse e-mail. Veuillez réessayer ou créez un nouveau compte.",
        });
      }
    } catch (error) {
      console.error("Error in login:", error);
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ message: "Méthode non autorisée" });
  }
}
