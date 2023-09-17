import LogoLink from "@/components/HomeAuthLinks/LogoLink/LogoLink";
import SignInButton from "@/components/HomeAuthLinks/SignInButton/SignInButton";
import Link from "next/link";

function signupDetails() {
  return (
    <>
      <LogoLink />
      <SignInButton />
      <div>
        <h1>Choisissez votre offre.</h1>
        <p>Sans engagement. Annulable à tout moment.</p>
        <p>Du divertissement à volonté pour un prix très attractif.</p>
        <p>Profitez de Study Netifly sur tous vos appareils.</p>
        <Link href="/auth/signup/signup" passHref>
          <button>Suivant</button>
        </Link>
      </div>
    </>
  );
}

export default signupDetails;
