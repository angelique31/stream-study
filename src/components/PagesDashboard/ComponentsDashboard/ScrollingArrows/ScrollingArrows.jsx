import React, { useState, useEffect } from "react";

import { Arrow } from "./ScrollingArrows.styled";
import ArrowLeftIcon from "@/assets/icons/arrowIcon/arrowLeftIcon";
import ArrowRightIcon from "@/assets/icons/arrowIcon/ArrowRightIcon";

const ScrollingArrows = ({
  series,
  currentIndex,
  setCurrentIndex,
  onShowArrows,
  showArrows,
  onImagesPerPageChange,
}) => {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const [imagesPerPage, setImagesPerPage] = useState(4);

  // Lorsque imagesPerPage change, remontez l'information
  useEffect(() => {
    if (onImagesPerPageChange) {
      onImagesPerPageChange(imagesPerPage);
    }
  }, [imagesPerPage, onImagesPerPageChange]);

  useEffect(() => {
    const updateImagesPerPage = () => {
      const width = window.innerWidth;

      if (width > 1870) setImagesPerPage(7);
      else if (width > 1500) setImagesPerPage(6);
      else if (width > 1300) setImagesPerPage(5);
      else setImagesPerPage(4);
    };

    updateImagesPerPage();
    // Ajoutez un écouteur d'événement pour gérer le redimensionnement de la fenêtre
    window.addEventListener("resize", updateImagesPerPage);

    // Supprimez l'écouteur lorsque le composant est démonté
    return () => window.removeEventListener("resize", updateImagesPerPage);
  }, []);

  useEffect(() => {
    // Logic to toggle visibility of arrows
    setShowLeftArrow(currentIndex > 0);
    setShowRightArrow(currentIndex < series.length - 1);
  }, [currentIndex, series.length, imagesPerPage]);

  const handlePrev = () => {
    setCurrentIndex((oldIndex) => Math.max(oldIndex - imagesPerPage, 0));
  };

  const handleNext = () => {
    const potentialNextIndex = currentIndex + imagesPerPage;
    const remainingImages = series.length - potentialNextIndex;

    // Si le nombre d'images restantes est inférieur à `imagesPerPage`
    if (remainingImages < imagesPerPage && remainingImages > 0) {
      setCurrentIndex(series.length - imagesPerPage);
    } else {
      setCurrentIndex((oldIndex) =>
        Math.min(oldIndex + imagesPerPage, series.length - imagesPerPage)
      );
    }
  };

  return (
    <div>
      {onShowArrows && showArrows && showLeftArrow && (
        <div onClick={handlePrev}>
          <Arrow left visible={showLeftArrow}>
            <ArrowLeftIcon color="red" size="40" />
          </Arrow>
        </div>
      )}
      {onShowArrows && showArrows && showRightArrow && (
        <div onClick={handleNext}>
          <Arrow right visible={showRightArrow}>
            <ArrowRightIcon color="red" size="40" />
          </Arrow>
        </div>
      )}
    </div>
  );
};

export default ScrollingArrows;
