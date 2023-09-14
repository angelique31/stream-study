import LogoLink from "@/components/HomeAuthLinks/LogoLink/LogoLink";
import SignInButton from "@/components/HomeAuthLinks/SignInButton/SignInButton";
import Link from "next/link";

function signup() {
  return (
    <>
      <LogoLink />
      <SignInButton />
      <div>
        <h1>Complétez la configuration de votre compte.</h1>
        <p>
          Study Netifly est personnalisé selon vos goûts. Créez un mot de passe
          pour commencer à regarder Study Netifly.
        </p>

        <Link href="/auth/signup/signup-form" passHref>
          <button>Suivant</button>
        </Link>
      </div>
    </>
  );
}

export default signup;
