// pages/api/get-email.js

// import dbConnect from "../../../db/db";
// import User from "../../../models/user";
// import jwt from "jsonwebtoken";

// export default async function getEmail(req, res) {
//   if (req.method === "GET") {
//     const { token } = req.query;
//     console.log("Token reçu dans /api/auth/get-email:", token);
//     try {
//       console.log("Connexion à la base de données...");
//       await dbConnect();

//       // Utilisez jwt.verify ou votre méthode de validation de token pour obtenir l'identifiant de l'utilisateur
//       // const payload = jwt.verify(token, process.env.JWT_SECRET);
//       // console.log("Payload JWT décodé:", payload);
//       // Modifier la recherche pour utiliser resetPasswordToken
//       console.log("Recherche de l'utilisateur avec le token:", token);
//       const user = await User.findOne({ resetPasswordToken: token });
//       console.log("Recherche utilisateur avec le token:", token);
//       console.log("Utilisateur trouvé:", user);
//       // const user = await User.findById(payload.userId);

//       if (!user) {
//         console.log("Aucun utilisateur trouvé pour ce token.");
//         return res.status(404).json({ message: "Utilisateur non trouvé." });
//       }
//       console.log("Utilisateur trouvé:", user.email);

//       // Retournez l'email de l'utilisateur si le token est valide
//       return res.status(200).json({ email: user.email });
//     } catch (error) {
//       console.error("Erreur lors de la récupération de l'email:", error);
//       return res.status(500).json({ message: "Erreur interne du serveur." });
//     }
//   } else {
//     console.log("Méthode non autorisée pour /api/get-email");
//     return res.status(405).end(); // Méthode non autorisée
//   }
// }
