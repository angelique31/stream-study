import React from "react";
import useSignUp from "../../hooks/useSignUp";
import usePasswordValidation from "../../hooks/usePasswordValidation";
import useEmailRedirect from "../../hooks/useEmailRedirect";

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
  PasswordRequirement,
  Button,
} from "./SignUp.styled";

import LogoLink from "../HomeAuthLinks/LogoLink/LogoLink";

const SignUp = () => {
  const {
    password,
    setPassword,
    formSubmitted,
    setFormSubmitted,
    isValidPassword,
  } = usePasswordValidation();

  const register = useSignUp();

  const email = useEmailRedirect();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormSubmitted(true); // Indiquer que le formulaire a été soumis

    if (!isValidPassword) {
      // Si le mot de passe est invalide, ne pas continuer l'inscription
      return;
    }

    // Si le mot de passe est valide, procéder à l'inscription
    try {
      await register(email, password);
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
              value={email || ""} // valeur récupérée de Redux est toujours une chaîne de caractères
              readOnly // L'email ne doit pas être modifiable
            />
            <StyledInput
              type="password"
              placeholder="Mot de passe"
              autocomplete="new-password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
                if (formSubmitted) {
                  // Réinitialiser l'état de soumission si l'utilisateur modifie le mot de passe
                  setFormSubmitted(false);
                }
              }}
              isValid={isValidPassword && !formSubmitted}
              isInvalid={formSubmitted && !isValidPassword}
            />
            {formSubmitted && !isValidPassword && (
              <PasswordRequirement>
                Le mot de passe doit contenir 6 caractères minimum.
              </PasswordRequirement>
            )}
            <Button type="submit">Suivant</Button>
          </MarginLeftDiv>
        </form>
      </Container>
    </>
  );
};

export default SignUp;
