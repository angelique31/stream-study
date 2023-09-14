import { useState } from "react";
import { useRouter } from "next/router";

function EmailBar() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Traitez l'email si nécessaire
    // Puis, redirigez l'utilisateur
    router.push("/auth/signup/signup");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Entrez votre email"
      />
      <button type="submit">Continuer</button>
    </form>
  );
}

export default EmailBar;
