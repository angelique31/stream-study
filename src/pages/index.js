import EmailBar from "@/components/HomeAuthLinks/EmailBar/EmailBar";
import LogoLink from "@/components/HomeAuthLinks/LogoLink/LogoLink";
import SignInButton from "@/components/HomeAuthLinks/SignInButton/SignInButton";

import {
  LandingContainer,
  LogoNavigation,
  ButtonContainer,
  ContentContainer,
  MainTitle,
  Subtitle,
  StyledParagraph,
} from "../components/HomeAuthLinks/landingPage.styled";
import DropdownButton from "@/components/HomeAuthLinks/DropdownButton/DropdownButton";

function landingPage() {
  return (
    <LandingContainer>
      <LogoNavigation>
        <LogoLink />
        <ButtonContainer>
          <DropdownButton />
          <SignInButton />
        </ButtonContainer>
      </LogoNavigation>
      <ContentContainer>
        <MainTitle>Films et séries en illimité, et bien plus</MainTitle>
        <Subtitle>Où que vous soyez. Annulez à tout moment.</Subtitle>
        <StyledParagraph>
          Prêt à regarder Study Netifly ? Saisissez votre adresse e-mail pour
          vous abonner ou réactiver votre abonnement.
        </StyledParagraph>

        <EmailBar />
      </ContentContainer>
    </LandingContainer>
  );
}

export default landingPage;
