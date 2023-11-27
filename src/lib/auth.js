// lib/auth.js

const loginUser = async (email, password) => {
  try {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    return { data, response };
  } catch (error) {
    // Gérer les erreurs de réseau ici
    console.error("Erreur lors de la connexion : ", error);
    throw error; // Renvoyer l'erreur pour la gérer dans le composant
  }
};

export { loginUser };
