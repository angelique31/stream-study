import EmailBar from "@/components/HomeAuthLinks/EmailBar/EmailBar";
import LogoLink from "@/components/HomeAuthLinks/LogoLink/LogoLink";
import SignInButton from "@/components/HomeAuthLinks/SignInButton/SignInButton";

import {
  LandingContainer,
  LogoNavigation,
} from "../components/HomeAuthLinks/landingPage.styled";
import DropdownButton from "@/components/HomeAuthLinks/DropdownButton/DropdownButton";

function landingPage() {
  return (
    <LandingContainer>
      <LogoNavigation>
        <LogoLink />
        <div>
          <DropdownButton />
          <SignInButton />
        </div>
      </LogoNavigation>
      <EmailBar />
      <h1>Accueil</h1>
      <p>Bienvenue sur la page accueil!</p>
    </LandingContainer>
  );
}

export default landingPage;
