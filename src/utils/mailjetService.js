// src/utils/mailjetService.js
import nodemailer from "nodemailer";

// Créez le transporteur Nodemailer une seule fois en dehors de la fonction sendEmail
// const transporter = nodemailer.createTransport({
//   host: process.env.EMAIL_SERVER,
//   port: Number(process.env.EMAIL_PORT),
//   secure: Number(process.env.EMAIL_PORT) === 465, // true pour le port 465, false pour les autres ports
//   auth: {
//     user: process.env.EMAIL_USERNAME,
//     pass: process.env.EMAIL_PASSWORD,
//   },
// });
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_ADDRESS, // Remplacez par votre adresse e-mail Gmail
    pass: process.env.GMAIL_APP_PASSWORD, // Remplacez par votre mot de passe Gmail
  },
});

export const sendEmail = async (email, subject, content) => {
  // Configurez les options d'e-mail pour le message à envoyer
  const mailOptions = {
    // from: process.env.EMAIL_USERNAME,
    from: process.env.GMAIL_ADDRESS,
    to: email, // Destinataire
    subject: subject, // Sujet de l'e-mail
    html: content, // Corps de l'e-mail au format HTML
  };

  try {
    // Utilisez le transporteur pour envoyer l'e-mail
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent, API response:", info);
    return info; // Retournez les informations de la réponse de l'API, utile pour la journalisation ou la confirmation
  } catch (error) {
    console.error("Error when sending email with Gmail: ", error);
    throw error; // Renvoyez l'erreur pour un traitement ultérieur
  }
};
