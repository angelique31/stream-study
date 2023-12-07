// // src/utils/sendinblueService.js

// import SibApiV3Sdk from "sib-api-v3-sdk";

// // Configurez l'instance Sendinblue API Client avec votre clé API
// const sendinblueClient = SibApiV3Sdk.ApiClient.instance;
// const apiKey = sendinblueClient.authentications["api-key"];
// apiKey.apiKey = process.env.SENDINBLUE_API_KEY;

// // Créez une instance de l'API TransactionalEmailsApi pour envoyer des emails
// const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

// // Fonction pour envoyer un email
// export const sendEmail = async (email, subject, content) => {
//   console.log("Sendinblue API Key:", process.env.SENDINBLUE_API_KEY);
//   console.log("Email to send to:", email);
//   console.log("Email subject:", subject);
//   console.log("Email content:", content);
//   let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail({
//     sender: {
//       email: "angie1979.capucine@yahoo.fr",
//       name: "Angelique", // Ajoutez le nom de l'expéditeur ici
//     },
//     // to: [{ email: email }],
//     to: [
//       {
//         email: "angie1979.capucine@yahoo.fr",
//         name: "Angelique",
//       },
//     ],
//     // subject: subject,
//     subject: "Réinitialisation de mot de passe",
//     // htmlContent: content,
//     htmlContent: `<p>Pour réinitialiser votre mot de passe, cliquez sur ce lien`,
//   });

//   // Ajouter un log pour voir la structure de l'email à envoyer
//   console.log("Email data being sent:", JSON.stringify(sendSmtpEmail, null, 2));

//   try {
//     const res = await apiInstance.sendTransacEmail(sendSmtpEmail);
//     console.log("Email sent, API response:", res);
//   } catch (error) {
//     console.error("Error when calling Sendinblue API: ", error);
//     if (error.response) {
//       console.error("Response status:", error.response.status);
//       console.error("Response headers:", error.response.headers);
//       console.error("Response body:", error.response.body);
//     }

//     throw error;
//   }
// };

// src/utils/mailjetService.js
import nodemailer from "nodemailer";

// Créez le transporteur Nodemailer une seule fois en dehors de la fonction sendEmail
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER,
  port: Number(process.env.EMAIL_PORT),
  secure: Number(process.env.EMAIL_PORT) === 465, // true pour le port 465, false pour les autres ports
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendEmail = async (email, subject, content) => {
  // Configurez les options d'e-mail pour le message à envoyer
  const mailOptions = {
    from: process.env.EMAIL_USERNAME, // Expéditeur, doit être identique à l'authentification du transporteur
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
    console.error("Error when sending email with Elastic Email: ", error);
    throw error; // Renvoyez l'erreur pour un traitement ultérieur
  }
};
