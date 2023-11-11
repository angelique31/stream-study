import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import {
  NavBarContainer,
  StyledLink,
  Container,
  MarginLeftDiv,
  CenteredContainer,
  StyledSpan,
  TextContainer,
  StyledInput,
  Title,
  Paragraph,
  Button,
} from "./SignUp.styled";

import LogoLink from "../HomeAuthLinks/LogoLink/LogoLink";

const SignUp = () => {
  const [email, setEmail] = useState(""); // Ajoutez le state pour l'email
  const [password, setPassword] = useState(""); // Ajoutez le state pour le mot de passe
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      // const data = await response.json();
      // console.log(data);

      // if (data.success) {
      //   // Redirigez vers la page de succès après l'inscription
      //   router.push("/auth/signup/success");
      // } else {
      //   // Gérez l'erreur ici, par exemple en affichant un message
      //   console.error(data.error);
      // }
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        // Redirigez vers la page de succès après l'inscription
        router.push("/auth/signup/success");
      } else {
        console.error(
          "Réponse du serveur:",
          response.status,
          response.statusText
        );
        const text = await response.text(); // Pour voir le contenu de la réponse.
        console.error(text);
        // Ici, vous pouvez définir un état pour afficher l'erreur sur l'interface utilisateur
      }
    } catch (error) {
      console.error(
        "Une erreur est survenue lors de la création du compte:",
        error
      );
    }
  };

  return (
    <>
      <NavBarContainer>
        <LogoLink />
        <StyledLink>{`S'identifier`}</StyledLink>
      </NavBarContainer>

      <Container>
        <form onSubmit={handleSubmit}>
          <MarginLeftDiv>
            <CenteredContainer>
              <StyledSpan>ETAPE 1 SUR 3</StyledSpan>
            </CenteredContainer>
            <TextContainer>
              <Title>Créez un mot de passe pour activer votre abonnement</Title>
              <Paragraph>
                {`Plus que quelques étapes et c'est fini !
                Plus rien à remplir.`}
              </Paragraph>
            </TextContainer>

            <StyledInput
              type="email"
              placeholder="Adresse e-mail"
              autocomplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />
            <StyledInput
              type="password"
              placeholder="Mot de passe"
              autocomplete="new-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit">Suivant</Button>
            <div>
              <Link href="/auth/signup/success" passHref>
                {/* <Button type="submit">Suivant</Button> */}
              </Link>
            </div>
          </MarginLeftDiv>
        </form>
      </Container>
    </>
  );
};

export default SignUp;
