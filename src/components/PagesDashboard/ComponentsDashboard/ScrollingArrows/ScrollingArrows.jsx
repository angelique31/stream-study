import React, { useState, useEffect } from "react";

import { Arrow } from "./ScrollingArrows.styled";
import ArrowLeftIcon from "@/assets/icons/arrowIcon/arrowLeftIcon";
import ArrowRightIcon from "@/assets/icons/arrowIcon/ArrowRightIcon";

import useImagesPerPage from "../UseImagesPerPage/UseImagesPerPage";
import useWindowWidth from "../UseWindowWidth/UseWindowWidth";

const ScrollingArrows = ({
  series,
  currentIndex,
  setCurrentIndex,
  onShowArrows,
  showArrows,
  onImagesPerPageChange,
}) => {
  const { windowWidth, isTabletOrLarger } = useWindowWidth();
  const imagesPerPage = useImagesPerPage();

  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // const [isTabletOrLarger, setIsTabletOrLarger] = useState(false);

  // Lorsque imagesPerPage change, remontez l'information
  useEffect(() => {
    if (onImagesPerPageChange) {
      onImagesPerPageChange(imagesPerPage);
    }
  }, [imagesPerPage, onImagesPerPageChange]);

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
