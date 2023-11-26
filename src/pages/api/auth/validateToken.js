// pages/api/validateToken.js
import jwt from "jsonwebtoken";

export default function handler(req, res) {
  // Obtenir le token de l'en-tête d'autorisation
  const token = req.headers.authorization?.split(" ")[1]; // Bearer Token

  if (!token) {
    return res.status(401).json({ message: "Aucun token fourni" });
  }

  try {
    // Vérifier le token avec votre clé secrète
    jwt.verify(token, process.env.JWT_SECRET);
    res.status(200).json({ message: "Token valide" });
  } catch (error) {
    res.status(403).json({ message: "Token invalide" });
  }
}
