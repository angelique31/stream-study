import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setUserEmail } from "../../../store/actions/emailActions";
import Link from "next/link";
import {
  AuthFormContainer,
  EmailFormContainer,
  EmailInput,
  StyledLinkExtended,
} from "./EmailBar.styled";
import ArrowRightIcon from "../../../assets/icons/arrowIcon/ArrowRightIcon";

function EmailBar() {
  const [emailInput, setEmail] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Dispatch l'email avant de faire l'appel API ou la redirection
    dispatch(setUserEmail(emailInput));

    try {
      const response = await fetch("/api/auth/check-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailInput }),
      });

      const data = await response.json();

      if (data.exists) {
        // Si l'utilisateur existe, redirigez vers la page de connexion
        router.push("auth/login");
      } else {
        // Si l'utilisateur n'existe pas, redirigez vers la page de détails d'inscription
        router.push("/auth/signup/signup-details");
      }
    } catch (error) {
      console.error(
        "Une erreur est survenue lors de la vérification de l’email:",
        error
      );
      // Vous pouvez également afficher une notification d'erreur à l'utilisateur ici
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <AuthFormContainer>
        <EmailFormContainer>
          <EmailInput
            type="email"
            value={emailInput}
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
