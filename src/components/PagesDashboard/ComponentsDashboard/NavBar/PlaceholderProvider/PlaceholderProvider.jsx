import { useState, useEffect } from "react";

const PlaceholderProvider = ({ children }) => {
  const [placeholderText, setPlaceholderText] = useState(
    "Titres, personnes, genres..."
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 586) {
        setPlaceholderText("Rechercher");
      } else {
        setPlaceholderText("Titres, personnes, genres...");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return children({ placeholderText });
};

export default PlaceholderProvider;
