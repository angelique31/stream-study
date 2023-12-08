// Route API complète qui gère la réinitialisation du mot de passe

// src/pages/api/reset-password.js

import dbConnect from "../../../db/db";
import User from "../../../models/user";
import jwt from "jsonwebtoken";
import { sendEmail } from "../../../utils/mailjetService";
import { renderToStaticMarkup } from "react-dom/server";
import ResetEmail from "@/components/ResetEmail/ResetEmail";

export default async function resetPassword(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }

  await dbConnect();

  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res
      .status(404)
      .json({ message: "Aucun utilisateur trouvé avec cet email." });
  }

  // Générer un token de réinitialisation avec une durée de vie courte
  const resetToken = jwt.sign(
    { userId: user._id, email: user.email }, // Payload du token
    process.env.JWT_SECRET, // Clé secrète pour signer le token
    { expiresIn: "1h" } // Le token expire après une heure
  );

  // Log pour vérifier le token
  console.log("JWT Token:", resetToken);

  // Créer le lien de réinitialisation du mot de passe
  const resetPasswordUrl = `${process.env.NEXT_PUBLIC_APP_URL}/auth/reset-password/${resetToken}`;

  try {
    const emailComponent = (
      <ResetEmail
        username={user.name} // Assurez-vous que l'utilisateur a une propriété 'name'
        resetLink={resetPasswordUrl}
      />
    );
    // Construire le contenu de l'email
    // Utilisez renderToStaticMarkup pour convertir le composant en HTML
    const emailContent = renderToStaticMarkup(emailComponent);

    // Envoyer l'email avec elescticEmail
    await sendEmail(
      user.email,
      "Réinitialisation de mot de passe",
      emailContent
    );
    res
      .status(200)
      .json({ message: "Email de réinitialisation envoyé avec succès." });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    res.status(500).json({ message: "Erreur lors de l'envoi de l'email." });
  }
}
