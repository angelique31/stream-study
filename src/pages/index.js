import EmailBar from "@/components/HomeAuthLinks/EmailBar/EmailBar";
import LogoLink from "@/components/HomeAuthLinks/LogoLink/LogoLink";
import SignInButton from "@/components/HomeAuthLinks/SignInButton/SignInButton";

import { LandingContainer } from "../components/HomeAuthLinks/landingPage.styled";

function landingPage() {
  return (
    <LandingContainer>
      <LogoLink />
      <SignInButton />
      <EmailBar />
      <h1>Accueil</h1>
      <p>Bienvenue sur la page accueil!</p>
    </LandingContainer>
  );
}

export default landingPage;
