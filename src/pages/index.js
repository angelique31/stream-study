import EmailBar from "@/components/HomeAuthLinks/EmailBar/EmailBar";
import LogoLink from "@/components/HomeAuthLinks/LogoLink/LogoLink";
import SignInButton from "@/components/HomeAuthLinks/SignInButton/SignInButton";

function home() {
  return (
    <div>
      <LogoLink />
      <SignInButton />
      <EmailBar />
      <h1>Accueil</h1>
      <p>Bienvenue sur la page accueil!</p>
    </div>
  );
}

export default home;
