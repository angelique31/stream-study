// components/ForgotPasswordModal.js
import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  NavBarContainer,
  StyledLink,
  LandingContainer,
  Backdrop,
  ModalContainer,
  ModalTitle,
  InstructionText,
  ModalForm,
  Input,
  Button,
  OptionText,
  OptionLink,
  SpanContainer,
  TextMore,
} from "./ForgotPasswordModal.styled";
import LogoLink from "../HomeAuthLinks/LogoLink/LogoLink";

const ForgotPasswordModal = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'envoi de l'email
    console.log(email);
  };

  return (
    <>
      <LandingContainer>
        <NavBarContainer>
          <LogoLink />
          <StyledLink as="a" href="/auth/login">{`S'identifier`}</StyledLink>
        </NavBarContainer>
        <Backdrop onClick={onClose}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <ModalTitle>E-mail ou mot de passe oublié</ModalTitle>
            <InstructionText>
              Nous vous enverrons les instructions de réinitialisation de votre
              mot de passe par e-mail.
            </InstructionText>
            <ModalForm onSubmit={handleSubmit}>
              <Input
                type="email"
                placeholder="nom@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit">Envoyez-moi un e-mail</Button>
            </ModalForm>
            <OptionText>
              {/* <OptionLink onClick={onClose}>Retour</OptionLink> */}
              <OptionLink onClick={() => router.push("/login")}>
                Retour à la page de connexion
              </OptionLink>
            </OptionText>
            <SpanContainer>
              <span>
                {`L'identification est protégée par Google reCAPTCHA pour nous assurer que vous n'êtes pas un robot.`}{" "}
              </span>
              <a
                href="https://www.google.com/recaptcha/about/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TextMore>En savoir plus</TextMore>
              </a>
            </SpanContainer>
          </ModalContainer>
        </Backdrop>
      </LandingContainer>
    </>
  );
};

export default ForgotPasswordModal;
