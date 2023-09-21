import React from "react";
import EmailBar from "@/components/HomeAuthLinks/EmailBar/EmailBar";

import {
  SubscriptionContainer,
  CenteredContentContainer,
  StyledParagraph,
} from "./SubscriptionPrompt.styled";

function SubscriptionPrompt() {
  return (
    <SubscriptionContainer>
      <CenteredContentContainer>
        <StyledParagraph>
          Prêt à regarder Study Netifly ? Saisissez votre adresse e-mail pour
          vous abonner ou réactiver votre abonnement.
        </StyledParagraph>
        <EmailBar />
      </CenteredContentContainer>
    </SubscriptionContainer>
  );
}

export default SubscriptionPrompt;
