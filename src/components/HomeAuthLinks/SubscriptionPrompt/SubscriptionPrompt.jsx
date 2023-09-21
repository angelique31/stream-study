import React from "react";
import EmailBar from "@/components/HomeAuthLinks/EmailBar/EmailBar";
import {
  ContentContainer,
  CenteredContentContainer,
  StyledParagraph,
} from "../landingPage.styled";

function SubscriptionPrompt() {
  return (
    <ContentContainer>
      <CenteredContentContainer>
        <StyledParagraph>
          Prêt à regarder Study Netifly ? Saisissez votre adresse e-mail pour
          vous abonner ou réactiver votre abonnement.
        </StyledParagraph>
        <EmailBar />
      </CenteredContentContainer>
    </ContentContainer>
  );
}

export default SubscriptionPrompt;
