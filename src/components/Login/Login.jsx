// src/components/login.jsx

import React, { useEffect } from "react";
import Link from "next/link";

import { Router, useRouter } from "next/router";
import { setCookie, getCookie, destroyCookie } from "../../utils/cookieManager";
import { loginUser } from "../../lib/auth";

import useForgotPasswordModal from "../../hooks/useForgotPasswordModal";

import {
  LandingContainer,
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

import Loader from "../Loader/Loader";
import ForgotPasswordModal from "../ForgotPasswordModal/ForgotPasswordModal";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");
  const [rememberMe, setRememberMe] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const { isModalOpen, toggleModal } = useForgotPasswordModal();

  const router = useRouter();

  const handleForgotPassword = () => {
    router.push("/auth/loginHelp");
  };

  useEffect(() => {
    const email = getCookie("userEmail");
    const rememberMeStatus = getCookie("rememberMe") === "true";

    if (rememberMeStatus) {
      setEmail(email);
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Pour éviter le rechargement de la page
    setErrorMessage("");

    setIsLoading(true);

    try {
      const { data, response } = await loginUser(email, password);

      if (response.ok) {
        if (rememberMe) {
          setCookie("userEmail", email);
          setCookie("rememberMe", "true");
        } else {
          destroyCookie("userEmail");
          destroyCookie("rememberMe");
        }

        // Utilisez Router.push pour rediriger après une connexion réussie
        router.push("/dashboard/home");
      } else {
        // Affichez un message d'erreur
        if (data.message.includes("Mot de passe incorrect")) {
          setPasswordErrorMessage(data.message);
        } else {
          setErrorMessage(data.message);
        }
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
            {passwordErrorMessage && (
              <ErrorMessage>
                {passwordErrorMessage}

                {/* <Link href="#" onClick={toggleModal} passHref>
                  <SignUpLink>réinitialiser votre mot de passe.</SignUpLink>
                </Link> */}

                <SignUpLink onClick={handleForgotPassword}>
                  réinitialiser votre mot de passe.
                </SignUpLink>

                {isModalOpen && <ForgotPasswordModal onClose={toggleModal} />}
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
                <CheckboxLabel>
                  <Checkbox
                    type="checkbox"
                    checked={rememberMe} // L'état actuel de 'rememberMe' détermine si la case est cochée
                    onChange={(e) => setRememberMe(e.target.checked)} // Mettre à jour l'état lors du clic
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
              vous n'êtes pas un robot.`}
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
