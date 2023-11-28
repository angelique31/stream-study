// components/ForgotPasswordModal.js
import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  LandingContainer,
  // Backdrop,
  ModalContainer,
  ModalTitle,
  InstructionText,
  ModalForm,
  Input,
  Button,
  OptionText,
  OptionLink,
} from "./ForgotPasswordModal.styled";

const ForgotPasswordModal = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'envoi de l'email
    console.log(email);
  };

  return (
    <LandingContainer>
      {/* <Backdrop onClick={onClose}> */}
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalTitle>E-mail ou mot de passe oublié</ModalTitle>
        <InstructionText>
          Nous vous enverrons les instructions de réinitialisation de votre mot
          de passe par e-mail.
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
            Retour à la connexion
          </OptionLink>
        </OptionText>
      </ModalContainer>
      {/* </Backdrop> */}
    </LandingContainer>
  );
};

export default ForgotPasswordModal;
