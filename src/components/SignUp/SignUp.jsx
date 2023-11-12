import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { clearUserEmail } from "../../store/actions/emailActions";

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
  const [password, setPassword] = useState(""); // Ajoutez le state pour le mot de passe
  const router = useRouter();
  const dispatch = useDispatch();
  const email = useSelector((state) => state.email.email);

  // Pré-remplir le champ email si l'email est dans le store Redux
  useEffect(() => {
    if (!email) {
      // S'il n'y a pas d'email dans Redux, redirigez vers la page précédente
      router.push("/"); // ou la page que vous souhaitez
    }
  }, [email, router]);

  // Fonction pour effacer l'email de Redux et autres nettoyages
  useEffect(() => {
    return () => {
      dispatch(clearUserEmail());
    };
  }, [dispatch]);

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
        <StyledLink as="a" href="/login">{`S'identifier`}</StyledLink>
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
              value={email || ""} // valeur récupérée de Redux est toujours une chaîne de caractères
              readOnly // L'email ne doit pas être modifiable
            />
            <StyledInput
              type="password"
              placeholder="Mot de passe"
              autocomplete="new-password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit">Suivant</Button>
          </MarginLeftDiv>
        </form>
      </Container>
    </>
  );
};

export default SignUp;
