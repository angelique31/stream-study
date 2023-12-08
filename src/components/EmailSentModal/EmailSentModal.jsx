import React from "react";
import {
  LandingContainer,
  ModalBackdrop,
  ModalContent,
  Message,
  Title,
  ContactLink,
} from "./EmailSentModal.styled";

const EmailSentModal = ({ email, onClose }) => {
  return (
    <>
      <LandingContainer>
        <ModalBackdrop onClick={onClose}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <Title> E-mail envoyé </Title>
            <Message>
              Un email contenant les instructions pour réinitialiser votre mot
              de passe a été envoyé à <strong>{email}</strong>. Vérifiez votre
              dossier spam ou courrier indésirable si vous ne voyez pas
              l&rsquo;e-mail dans votre boîte de réception.
            </Message>
            <Message>
              {`Si vous n'avez plus accès à ce compte de messagerie, `}
              <ContactLink href="#">contactez nous.</ContactLink>
            </Message>
          </ModalContent>
        </ModalBackdrop>
      </LandingContainer>
    </>
  );
};

export default EmailSentModal;
