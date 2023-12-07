// hook/UsePasswordReset.js
import { useState } from "react";

const usePasswordReset = () => {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendPasswordResetEmail = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      // Ajouter un log pour vérifier la réponse de l'API
      console.log("Response from API:", response);

      if (!response.ok) {
        throw new Error(`Erreur: ${response.status}`);
      }

      setEmailSent(true);
    } catch (error) {
      // Afficher les détails de l'erreur
      console.error("Error in password reset:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    setEmail,
    emailSent,
    sendPasswordResetEmail,
    loading,
    error,
  };
};

export default usePasswordReset;
