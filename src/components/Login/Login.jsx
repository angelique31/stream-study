import React from "react";
import Link from "next/link";

import useAuth from "../../hooks/useAuth";

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
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");
  const [rememberMe, setRememberMe] = React.useState(false);
  // const [isLoading, setIsLoading] = React.useState(false);
  const { login, isLoading } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault(); // Pour éviter le rechargement de la page
    console.log("Email:", email);
    console.log("Mot de passe:", password);
    console.log("Se souvenir de moi:", rememberMe);

    setErrorMessage("");
    setPasswordErrorMessage("");

    try {
      await login(email, password, rememberMe);
      console.log("Login réussi");
      // Redirection ou autre logique en cas de succès
    } catch (error) {
      console.error("Login error:", error);
      // Affichez le message d'erreur approprié
      if (error.message.includes("Mot de passe incorrect")) {
        setPasswordErrorMessage(error.message);
      } else {
        setErrorMessage(error.message);
      }
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
            {passwordErrorMessage && (
              <ErrorMessage>
                {passwordErrorMessage}
                <Link href="#" passHref>
                  <SignUpLink>réinitialiser votre mot de passe.</SignUpLink>
                </Link>
              </ErrorMessage>
            )}
            <StyledInput
              type="email"
              placeholder="E-mail ou numéro de téléphone"
              autoComplete="off"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (e.target.value === "") {
                  setErrorMessage(""); // Réinitialise le message d'erreur pour l'email
                }
              }}
            />
            <StyledInput
              type="password"
              placeholder="Mot de passe"
              autoComplete="new-password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (e.target.value === "") {
                  setPasswordErrorMessage(""); // Réinitialise le message d'erreur pour le mot de passe
                }
              }}
            />
            <ButtonWrapper>
              <Button type="submit">{`S'identifier`}</Button>

              <Flex>
                {/* <CheckboxLabel>
                    <Checkbox />
                  <TextCheckbox>Se souvenir de moi</TextCheckbox>
                </CheckboxLabel> */}

                <CheckboxLabel>
                  <Checkbox
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
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
