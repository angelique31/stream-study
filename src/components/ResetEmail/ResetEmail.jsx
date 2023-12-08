import React from "react";
import {
  EmailContainer,
  Title,
  Greeting,
  Instruction,
} from "./RestEmail.styled";

const ResetEmail = ({ username, resetLink }) => {
  const buttonStyle = {
    backgroundColor: "#E50914",
    color: "white",
    fontWeight: 700,
    padding: "14px 20px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "14px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    width: "50%",
    marginBottom: "30px",
  };
  const title = { width: "70%" };
  return (
    <EmailContainer>
      <h1 style={title}>Réinitialisation du mot de passe</h1>
      <Greeting>Bonjour {username},</Greeting>
      <Instruction>
        Réinitialisons votre mot de passe afin que vous puissiez continuer à
        regarder Netflix.
      </Instruction>
      {/* <ResetButton href={resetLink}>Réinitialiser le mot de passe</ResetButton> */}
      <a href={resetLink} style={buttonStyle}>
        Réinitialiser le mot de passe
      </a>
      <Instruction>
        {`Si vous n'avez pas demandé à réinitialiser votre mot de passe, nous vous conseillons de consulter les derniers accès au compte afin de détecter toute éventuelle activité inhabituelle.`}
      </Instruction>
    </EmailContainer>
  );
};

export default ResetEmail;
