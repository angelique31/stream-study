import { useState, useEffect } from "react";

const useWindowWidth = () => {
  // Initialiser avec `undefined` car la largeur de la fenêtre n'est pas connue côté serveur
  const [windowWidth, setWindowWidth] = useState(undefined);

  useEffect(() => {
    // Mettre à jour la largeur de la fenêtre lors du montage et lors de son redimensionnement
    const updateWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    updateWidth(); // Pour obtenir la valeur initiale

    window.addEventListener("resize", updateWidth);

    // N'oubliez pas de nettoyer après vous
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []); // Le tableau vide comme dépendance signifie que cet effet ne s'exécute qu'une fois (comme componentDidMount)

  // Définir si la largeur de la fenêtre indique une tablette ou un appareil plus grand
  const isTabletOrLarger = windowWidth ? windowWidth > 768 : false;

  return { windowWidth, isTabletOrLarger };
};

export default useWindowWidth;
