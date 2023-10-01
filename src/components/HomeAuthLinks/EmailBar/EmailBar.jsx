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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Traitez l'email si nécessaire
    // Puis, redirigez l'utilisateur
    router.push("/auth/signup/signup");
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
          />
          <Link href="/auth/signup/signup-details" passHref>
            <StyledLinkExtended type="submit">
              Commencer
              <ArrowRightIcon />
            </StyledLinkExtended>
          </Link>
        </EmailFormContainer>
      </AuthFormContainer>
    </form>
  );
}

export default EmailBar;
