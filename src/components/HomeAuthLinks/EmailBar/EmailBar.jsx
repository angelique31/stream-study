// import { useState } from "react";
// import { useRouter } from "next/router";

// import Link from "next/link";
// import {
//   AuthFormContainer,
//   EmailFormContainer,
//   EmailInput,
//   StyledLinkExtended,
// } from "./EmailBar.styled";

// import ArrowRightIcon from "../../../assets/icons/arrowIcon/ArrowRightIcon";

// function EmailBar() {
//   const [email, setEmail] = useState("");
//   const router = useRouter();

//   //   const handleSubmit = (e) => {
//   //     e.preventDefault();
//   //     // Traitez l'email si nécessaire
//   //     // Puis, redirigez l'utilisateur
//   //     router.push("/auth/signup/signup");
//   //   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Appel de l'API d'inscription
//     try {
//       const response = await fetch("/api/auth/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email: email,
//           password: "unMotDePasseTemporaire",
//         }), // Remplacez par la logique appropriée pour le mot de passe
//       });

//       const data = await response.json();

//       if (data.success) {
//         // Redirigez vers la page suivante si l'inscription est réussie
//         router.push("/auth/signup/signup-details");
//       } else {
//         // Gérez l'erreur ici, peut-être montrer un message à l'utilisateur
//         console.error(
//           "Une erreur est survenue lors de l’inscription:",
//           data.error
//         );
//       }
//     } catch (error) {
//       // Gérez l'erreur ici
//       console.error("Erreur lors de la connexion au serveur:", error);
//     }
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <AuthFormContainer>
//         <EmailFormContainer>
//           <EmailInput
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Adresse e-mail"
//           />
//           <Link href="/auth/signup/signup-details" passHref>
//             <StyledLinkExtended type="submit">
//               Commencer
//               <ArrowRightIcon />
//             </StyledLinkExtended>
//           </Link>
//         </EmailFormContainer>
//       </AuthFormContainer>
//     </form>
//   );
// }
// export default EmailBar;

import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  AuthFormContainer,
  EmailFormContainer,
  EmailInput,
  StyledLinkExtended,
} from "./EmailBar.styled";
import ArrowRightIcon from "../../../assets/icons/arrowIcon/ArrowRightIcon";

function EmailBar() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Appel de l'API d'inscription
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: "unMotDePasseTemporaire", // Remplacez par la logique appropriée pour le mot de passe
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Redirigez vers la page suivante si l'inscription est réussie
        router.push("/auth/signup/signup-details");
      } else {
        // Gérez l'erreur ici, peut-être montrer un message à l'utilisateur
        console.error(
          "Une erreur est survenue lors de l’inscription:",
          data.error
        );
      }
    } catch (error) {
      // Gérez l'erreur ici
      console.error("Erreur lors de la connexion au serveur:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <AuthFormContainer>
        <EmailFormContainer>
          <EmailInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Adresse e-mail"
            required // Assurez-vous que l'utilisateur ne peut pas soumettre un champ vide
          />
          <StyledLinkExtended as="button" type="submit">
            Commencer
            <ArrowRightIcon />
          </StyledLinkExtended>
        </EmailFormContainer>
      </AuthFormContainer>
    </form>
  );
}

export default EmailBar;
