// hooks/useImagesPerPage.js
import { useState, useEffect } from "react";

// const useImagesPerPage = () => {
//   const [imagesPerPage, setImagesPerPage] = useState(4);

//   const adjustImagesPerPage = () => {
//     const width = window.innerWidth;

//     if (width > 1870) setImagesPerPage(7);
//     else if (width > 1500) setImagesPerPage(6);
//     else if (width > 1300) setImagesPerPage(5);
//     else if (width > 1100) setImagesPerPage(4);
//     else if (width > 800) setImagesPerPage(3);
//     else if (width > 530) setImagesPerPage(2);
//     else setImagesPerPage(1);
//   };

//   useEffect(() => {
//     adjustImagesPerPage();

//     window.addEventListener("resize", adjustImagesPerPage);

//     return () => window.removeEventListener("resize", adjustImagesPerPage);
//   }, []);

//   return imagesPerPage;
// };

const useImagesPerPage = () => {
  const [imagesPerPage, setImagesPerPage] = useState(4);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const updateImagesPerPage = () => {
      const width = window.innerWidth;

      if (width > 1870) setImagesPerPage(7);
      else if (width > 1500) setImagesPerPage(6);
      else if (width > 1300) setImagesPerPage(5);
      else if (width > 1100) setImagesPerPage(4);
      else if (width > 800) setImagesPerPage(3);
      else if (width > 530) setImagesPerPage(2);
      else setImagesPerPage(1);
    };

    const handleMount = () => {
      setTimeout(() => {
        updateImagesPerPage();
        setMounted(true);
      }, 100);
    };

    if (!mounted) {
      handleMount();
    } else {
      window.addEventListener("resize", updateImagesPerPage);
      return () => window.removeEventListener("resize", updateImagesPerPage);
    }
  }, [mounted]);

  return imagesPerPage;
};

export default useImagesPerPage;
