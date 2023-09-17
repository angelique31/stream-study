import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  AuthFormContainer,
  EmailFormContainer,
  EmailInput,
  StyledLinkExtended,
} from "./EmailBar.styled";

import ArrowRight from "../../../assets/icons/arrow-right.svg";

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
          <StyledLinkExtended type="submit">
            Commencer <Image src={ArrowRight} alt="arrow right" />
          </StyledLinkExtended>
        </EmailFormContainer>
      </AuthFormContainer>
    </form>
  );
}

export default EmailBar;
