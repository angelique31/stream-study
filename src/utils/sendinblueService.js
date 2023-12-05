// src/utils/sendinblueService.js

import SibApiV3Sdk from "sib-api-v3-sdk";

// Configurez l'instance Sendinblue API Client avec votre clé API
const sendinblueClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = sendinblueClient.authentications["api-key"];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY;

// Créez une instance de l'API TransactionalEmailsApi pour envoyer des emails
const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

// Fonction pour envoyer un email
export const sendEmail = async (email, subject, content) => {
  console.log("Sendinblue API Key:", process.env.SENDINBLUE_API_KEY);
  console.log("Email to send to:", email);
  console.log("Email subject:", subject);
  console.log("Email content:", content);
  let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail({
    sender: {
      email: "angie1979.capucine@yahoo.fr",
      name: "Angelique", // Ajoutez le nom de l'expéditeur ici
    },
    // to: [{ email: email }],
    to: [
      {
        email: "angie1979.capucine@yahoo.fr",
        name: "Angelique",
      },
    ],
    // subject: subject,
    subject: "Réinitialisation de mot de passe",
    // htmlContent: content,
    htmlContent: `<p>Pour réinitialiser votre mot de passe, cliquez sur ce lien`,
  });

  // Ajouter un log pour voir la structure de l'email à envoyer
  console.log("Email data being sent:", JSON.stringify(sendSmtpEmail, null, 2));
  // Afficher les en-têtes juste avant l'envoi de l'e-mail
  // console.log("Headers being set:", {
  //   "Content-Type": "application/json",
  //   "api-key": process.env.SENDINBLUE_API_KEY,
  // });

  try {
    const res = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log("Email sent, API response:", res);
  } catch (error) {
    console.error("Error when calling Sendinblue API: ", error);
    if (error.response) {
      console.error("Response status:", error.response.status);
      console.error("Response headers:", error.response.headers);
      console.error("Response body:", error.response.body);
    }

    throw error;
  }
};
