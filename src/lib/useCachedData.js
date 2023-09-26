// hooks/useCachedData.js
import { useState, useEffect } from "react";

function useCachedData(fetchDataFunction, cacheKey, initialData) {
  const [data, setData] = useState(initialData || []);

  useEffect(() => {
    if (!initialData) {
      const cachedData = localStorage.getItem(cacheKey);
      if (cachedData) {
        console.log("Data fetched from cache:", JSON.parse(cachedData));
        setData(JSON.parse(cachedData));
      } else {
        fetchDataFunction()
          .then((fetchedData) => {
            if (fetchedData && fetchedData.length > 0) {
              // Vérifiez que les données ne sont pas vides
              console.log("Data fetched from API:", fetchedData);
              setData(fetchedData);
              localStorage.setItem(cacheKey, JSON.stringify(fetchedData));
            } else {
              console.warn("Fetched data is empty or incorrect");
            }
          })
          .catch((error) => {
            console.error("Error while fetching data:", error);
          });
      }
    }
  }, [initialData, cacheKey, fetchDataFunction]);

  return data;
}

export default useCachedData;
