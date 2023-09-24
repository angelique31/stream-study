import React from "react";
import Link from "next/link";

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
} from "./Login.styled";

import LogoLink from "../HomeAuthLinks/LogoLink/LogoLink";
import { LandingContainer } from "./Login.styled";

const Login = () => {
  return (
    <>
      <LandingContainer>
        <NavBarContainer>
          <LogoLink />
          <StyledLink>{`S'identifier`}</StyledLink>
        </NavBarContainer>

        <LoginForm>
          <StyledH1>{`S'identifier`}</StyledH1>
          <Container>
            <StyledInput
              type="email"
              placeholder="E-mail ou numéro de téléphone"
              autoComplete="off"
            />
            <StyledInput
              type="password"
              placeholder="Mot de passe"
              autoComplete="new-password"
            />
            <ButtonWrapper>
              <Link href="#" passHref>
                <Button>{`S'identifier`}</Button>
              </Link>

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
