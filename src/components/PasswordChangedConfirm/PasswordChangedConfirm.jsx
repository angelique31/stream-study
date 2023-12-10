import React from "react";
import {
  NavBar,
  ConfirmationPageContainer,
  ConfirmationBox,
  Icon,
  AccountTitle,
  ConfirmationMessage,
} from "./PasswordChangedConfirm.styled";
import LogoLink from "../HomeAuthLinks/LogoLink/LogoLink";

export default function PasswordChangedConfirmation() {
  return (
    <>
      <NavBar>
        <LogoLink />
      </NavBar>
      <ConfirmationPageContainer>
        <AccountTitle>Compte</AccountTitle>
        <ConfirmationMessage>
          <ConfirmationBox>
            <Icon>✔</Icon>
            Votre mot de passe a été modifié.
          </ConfirmationBox>
        </ConfirmationMessage>
      </ConfirmationPageContainer>
    </>
  );
}
