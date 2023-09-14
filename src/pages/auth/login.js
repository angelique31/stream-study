import LogoLink from "@/components/HomeAuthLinks/LogoLink/LogoLink";
import SignInButton from "@/components/HomeAuthLinks/SignInButton/SignInButton";

function login() {
  return (
    <>
      <LogoLink />

      <div>
        <h1>{`S'identifier`}</h1>
        <p>Créer le formulaire de connexion</p>
      </div>
    </>
  );
}

export default login;
