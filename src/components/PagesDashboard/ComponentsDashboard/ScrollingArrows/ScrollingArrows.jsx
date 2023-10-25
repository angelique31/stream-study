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

  const [isTabletOrLarger, setIsTabletOrLarger] = useState(false);

  // Lorsque imagesPerPage change, remontez l'information
  useEffect(() => {
    if (onImagesPerPageChange) {
      onImagesPerPageChange(imagesPerPage);
    }
  }, [imagesPerPage, onImagesPerPageChange]);

  useEffect(() => {
    const updateImagesPerPage = () => {
      const width = window.innerWidth;

      setIsTabletOrLarger(width < 768);

      if (width > 1870) setImagesPerPage(7);
      else if (width > 1500) setImagesPerPage(6);
      else if (width > 1300) setImagesPerPage(5);
      else if (width > 1100) setImagesPerPage(4);
      else if (width > 800) setImagesPerPage(3);
      else if (width > 530) setImagesPerPage(2);
      else setImagesPerPage(1);
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
    setShowRightArrow(currentIndex + imagesPerPage < series.length);
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

  useEffect(() => {
    setIsTabletOrLarger(window.innerWidth >= 768);
  }, []);

  return (
    <div>
      {(onShowArrows && showArrows && showLeftArrow) || isTabletOrLarger ? (
        <div onClick={handlePrev}>
          <Arrow left visible={showLeftArrow}>
            <ArrowLeftIcon color="red" size="40" />
          </Arrow>
        </div>
      ) : null}

      {(onShowArrows && showArrows && showRightArrow) || isTabletOrLarger ? (
        <div onClick={handleNext}>
          <Arrow right visible={showRightArrow}>
            <ArrowRightIcon color="red" size="40" />
          </Arrow>
        </div>
      ) : null}
    </div>
  );
};

export default ScrollingArrows;
