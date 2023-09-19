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
  CenteredContentContainer,
  StyledParagraph,
} from "../components/HomeAuthLinks/landingPage.styled";
import DropdownButton from "@/components/HomeAuthLinks/DropdownButton/DropdownButton";
import RichBanner from "@/components/RichBanner/RichBanner";
import WatchOnTv from "@/components/WatchOnTv/WatchOnTv";
import WatchOnDevice from "@/components/WatchOnDevice/WatchOnDevice";
import AnimationKids from "@/components/AnimationKids/AnimationKids";
import DownloadSeries from "@/components/DownloadSeries/DownloadSeries";

function landingPage() {
  return (
    <>
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
          <CenteredContentContainer>
            <StyledParagraph>
              Prêt à regarder Study Netifly ? Saisissez votre adresse e-mail
              pour vous abonner ou réactiver votre abonnement.
            </StyledParagraph>
            <EmailBar />
          </CenteredContentContainer>
        </ContentContainer>
      </LandingContainer>
      <RichBanner />
      <WatchOnTv />
      <WatchOnDevice />
      <AnimationKids />
      <DownloadSeries />
    </>
  );
}

export default landingPage;
