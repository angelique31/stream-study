// pages/api/validateToken.js

import jwt from "jsonwebtoken";

export default function handler(req, res) {
  console.log("Requête reçue pour validation du token:", req.body);
  const { token } = req.body;
  console.log("Token reçu pour validation:", token);
  console.log(
    "Clé secrète JWT utilisée pour validation:",
    process.env.JWT_SECRET
  );

  if (!token) {
    console.log("No token received");
    return res.status(400).json({ isValid: false });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    console.log("Token is valid");
    // Si la vérification est réussie, le token est valide
    res.status(200).json({ isValid: true });
  } catch (error) {
    console.error("Erreur lors de la vérification du token:", error);
    // Si une erreur survient, le token n'est pas valide
    res.status(200).json({ isValid: false });
  }
}
