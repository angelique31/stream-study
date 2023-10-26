// hooks/useImagesPerPage.js
import { useState, useEffect } from "react";

const useImagesPerPage = () => {
  const getWidthImagesPerPage = (width) => {
    if (width > 1870) return 7;
    else if (width > 1500) return 6;
    else if (width > 1300) return 5;
    else if (width > 1100) return 4;
    else if (width > 800) return 3;
    else if (width > 630) return 2;
    else return 1;
  };

  // Utilisez une fonction pour initialiser `imagesPerPage` de manière sûre.
  const [imagesPerPage, setImagesPerPage] = useState(() => {
    if (typeof window !== "undefined") {
      return getWidthImagesPerPage(window.innerWidth);
    }
    return 4; // Valeur par défaut pour le rendu côté serveur
  });

  const [mounted, setMounted] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateImagesPerPage = () => {
      setImagesPerPage(getWidthImagesPerPage(window.innerWidth));
    };

    const handleMount = () => {
      setTimeout(() => {
        updateImagesPerPage();
        setMounted(true);
        setIsVisible(true);
      }, 100);
    };

    if (!mounted) {
      handleMount();
    } else {
      window.addEventListener("resize", updateImagesPerPage);
      return () => window.removeEventListener("resize", updateImagesPerPage);
    }
  }, [mounted, isVisible]);

  useEffect(() => {}, [mounted, isVisible]);

  return { imagesPerPage, isVisible };
};

export default useImagesPerPage;
