import React from "react";
import Link from "next/link";
import Router from "next/router";

import {
  NavBarContainer,
  StyledLink,
  LoginForm,
  StyledH1,
  Container,
  StyledInput,
  ButtonWrapper,
  Button,
  Flex,
  CheckboxLabel,
  Checkbox,
  TextCheckbox,
  Help,
  Text,
  TextSignIn,
  ReCAPTCHAText,
  TextMore,
  SignUpLink,
  ErrorMessage,
} from "./Login.styled";

import LogoLink from "../HomeAuthLinks/LogoLink/LogoLink";
import { LandingContainer } from "./Login.styled";
import Loader from "../Loader/Loader";

const Login = () => {
  // États pour l'e-mail et le mot de passe
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Pour éviter le rechargement de la page
    setIsLoading(true);
    setErrorMessage("");
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        // Utilisez Router.push pour rediriger après une connexion réussie
        Router.push("/dashboard/home");
      } else {
        // Affichez un message d'erreur
        setErrorMessage(data.message || "Une erreur est survenue.");
        setIsLoading(false); // Désactive le loader en cas d'échec
      }
    } catch (error) {
      // Gérez les erreurs de réseau ici
      console.error(
        "Il y a eu un problème avec votre opération de connexion: ",
        error
      );
      setIsLoading(false); // Désactive le loader en cas d'erreur
    }
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <LandingContainer>
        <NavBarContainer>
          <LogoLink />
          <StyledLink>{`S'identifier`}</StyledLink>
        </NavBarContainer>

        <LoginForm onSubmit={handleSubmit}>
          <StyledH1>{`S'identifier`}</StyledH1>
          <Container>
            {errorMessage && (
              <ErrorMessage>
                {errorMessage.split("créez un nouveau compte.")[0]}
                <Link href="/" passHref>
                  <SignUpLink>créez un nouveau compte.</SignUpLink>
                </Link>
              </ErrorMessage>
            )}
            <StyledInput
              type="email"
              placeholder="E-mail ou numéro de téléphone"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <StyledInput
              type="password"
              placeholder="Mot de passe"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <ButtonWrapper>
              <Button type="submit">{`S'identifier`}</Button>

              <Flex>
                <CheckboxLabel>
                  <Checkbox />
                  <TextCheckbox>Se souvenir de moi</TextCheckbox>
                </CheckboxLabel>

                <Help>{`Besoin d'aide?`}</Help>
              </Flex>
              <div>
                <Text>
                  Première visite sur Netflix?
                  <Link href="/auth/signup/signup" passHref>
                    <TextSignIn>Inscrivez-vous</TextSignIn>
                  </Link>
                </Text>
              </div>
              <ReCAPTCHAText>
                {`Cette page est protégée par Google reCAPTCHA pour nous assurer que
              vous n'êtes pas un robot.`}{" "}
                <br></br>
                <a
                  href="https://www.google.com/recaptcha/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TextMore>En savoir plus</TextMore>
                </a>
              </ReCAPTCHAText>
            </ButtonWrapper>
          </Container>
        </LoginForm>
      </LandingContainer>
    </>
  );
};

export default Login;
