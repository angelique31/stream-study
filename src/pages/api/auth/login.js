// pages/api/auth/login.js

import dbConnect from "../../../db/db";
import User from "../../../models/user";
import bcrypt from "bcrypt";

// export default async function handler(req, res) {
//   const { method } = req;

//   await dbConnect();

//   if (method === "POST") {
//     try {
//       const { email, password } = req.body;
//       // Recherche de l'utilisateur par email
//       const user = await User.findOne({ email: email });
//       if (user && (await bcrypt.compare(password, user.password))) {
//         // Si l'utilisateur est trouvé et que le mot de passe correspond
//         res.status(200).json({ success: true, message: "Connexion réussie" });
//         // Ici, vous traiteriez également la logique de session ou de token
//       } else {
//         // Si l'utilisateur n'est pas trouvé ou que le mot de passe ne correspond pas
//         res
//           .status(401)
//           .json({
//             success: false,
//             message:
//               "Nous n'avons pas trouvé de compte avec cette adresse e-mail. Veuillez réessayer ou créez un nouveau compte.",
//           });
//       }
//     } catch (error) {
//       res.status(500).json({ success: false, error: error.message });
//     }
//   } else {
//     res.status(405).json({ message: "Méthode non autorisée" });
//   }
// }

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  if (method === "POST") {
    try {
      const { email, password } = req.body;
      // Recherche de l'utilisateur par email
      const user = await User.findOne({ email: email });
      if (user) {
        // Si l'utilisateur est trouvé, vérifiez le mot de passe
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
          // Si le mot de passe correspond
          res.status(200).json({ success: true, message: "Connexion réussie" });
          // Ici, vous traiteriez également la logique de session ou de token
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
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ message: "Méthode non autorisée" });
  }
}
