import React, { useState, useEffect } from "react";

export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Mettre en place un délai pour actualiser la valeur débouncée
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Annuler le délai s'il y a une mise à jour de la valeur (nettoyage du useEffect)
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Relancer seulement si la valeur ou le délai change

  return debouncedValue;
}
