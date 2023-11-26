// hooks/useAuth.js
// Gestion de la logique "se souvenir de moi"

import { useState } from "react";
import Router from "next/router";
import nookies from "nookies";

const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email, password, rememberMe) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Unauthorized");
      }

      const { token } = await response.json();
      console.log("Token reçu de l'API:", token);

      // Gestion des cookies
      const cookieOptions = {
        path: "/",
      };
      if (rememberMe) {
        console.log("Se souvenir de moi activé");
        cookieOptions.maxAge = 30 * 24 * 60 * 60; // 30 jours
      }
      nookies.set(null, "token", token, cookieOptions);

      // Redirection
      console.log("Redirection vers /dashboard/home");
      Router.push("/dashboard/home");
    } catch (error) {
      // Propagez l'erreur pour la gérer dans le composant
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading };
};

export default useAuth;
