// hooks/useSignUp.js
import { useRouter } from "next/router";

const useSignUp = () => {
  const router = useRouter();

  const registerUser = async (email, password) => {
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Redirigez vers la page de succès après l'inscription
        router.push("/auth/signup/success");
      } else {
        // Gérer les erreurs de réponse
        const errorText = await response.text();
        throw new Error(
          `Server error: ${response.status} ${response.statusText} - ${errorText}`
        );
      }
    } catch (error) {
      // Gérer les erreurs d'exception
      throw error;
    }
  };

  return registerUser;
};

export default useSignUp;
