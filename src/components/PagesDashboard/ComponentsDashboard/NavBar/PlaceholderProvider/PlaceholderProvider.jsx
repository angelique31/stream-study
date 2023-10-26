import { useState, useEffect } from "react";

const PlaceholderProvider = ({ children }) => {
  const getPlaceholderText = () => {
    return window.innerWidth < 586
      ? "Rechercher"
      : "Titres, personnes, genres...";
  };

  const [isMounted, setIsMounted] = useState(false);
  const [placeholderText, setPlaceholderText] = useState(
    "Titres, personnes, genres..."
  );

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const correctPlaceholderText = getPlaceholderText();
    setPlaceholderText(correctPlaceholderText);
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const handleResize = () => {
        setPlaceholderText(getPlaceholderText());
      };

      // Appel immédiat pour définir la valeur initiale
      handleResize();

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [isMounted]);

  return children({ placeholderText, isVisible });
};

export default PlaceholderProvider;
