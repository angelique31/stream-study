import React from "react";
import {
  LandingContainer,
  ModalBackdrop,
  ModalContent,
  Message,
  Title,
  ContactLink,
} from "./EmailSentModal.styled";

import {
  NavBarContainer,
  StyledLink,
} from "../ForgotPasswordModal/ForgotPasswordModal.styled";
import LogoLink from "../HomeAuthLinks/LogoLink/LogoLink";

const EmailSentModal = ({ email, onClose }) => {
  return (
    <>
      <LandingContainer>
        <NavBarContainer>
          <LogoLink />
          <StyledLink as="a" href="/auth/login">{`S'identifier`}</StyledLink>
        </NavBarContainer>
        <ModalBackdrop onClick={onClose}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <Title> Email envoyé </Title>
            <Message>
              {`Un email contenant les instructions pour réinitialiser
          votre mot de passe a été envoyé à ${email}. Vérifiez votre dossier spam
          ou courrier indésirable si vous ne voyez pas l'e-mail dans votre boîte
          de réception.`}
            </Message>
            <Message>
              {`Si vous n'avez plus accès à ce compte email, `}
              <ContactLink href="#">contactez nous.</ContactLink>
            </Message>
          </ModalContent>
        </ModalBackdrop>
      </LandingContainer>
    </>
  );
};

export default EmailSentModal;
