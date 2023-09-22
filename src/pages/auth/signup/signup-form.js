import { useState } from "react";
import { useRouter } from "next/router";
import LogoLink from "@/components/HomeAuthLinks/LogoLink/LogoLink";

function signUpForm() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Traitez le mot de passe si nécessaire (par exemple, envoyez-le à un backend)
    console.log("Password submitted:", password);

    // Redirigez vers la page de succès après avoir traité le formulaire
    router.push("/auth/signup/success");
  };

  return (
    <>
      <LogoLink />
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Créez votre mot de passe"
        />
        <button type="submit">Inscription</button>
      </form>
    </>
  );
}

export default signUpForm;
