// import React from "react";
// import { useDispatch } from "react-redux";
// import {
//   setScrollPosition,
//   toggleLeftArrow,
//   toggleRightArrow,
// } from "../../../../store/actions/carousselActions";

// import { Arrow } from "./ScrollingArrows.styled";
// import ArrowLeftIcon from "@/assets/icons/arrowIcon/arrowLeftIcon";
// import ArrowRightIcon from "@/assets/icons/arrowIcon/ArrowRightIcon";

// const ScrollingArrows = ({
//   series,
//   scrollPosition,
//   showLeftArrow,
//   showRightArrow,
//   showArrows,
// }) => {
//   const dispatch = useDispatch();

//   const handleScrollRight = () => {
//     const widthToScroll = 266;
//     const totalWidth = series.length * widthToScroll;

//     if (scrollPosition + 2 * widthToScroll >= totalWidth - widthToScroll * 3) {
//       const newPosition = totalWidth - widthToScroll * 4;
//       dispatch(setScrollPosition(newPosition));
//       dispatch(toggleRightArrow(false));
//     } else {
//       const newPosition = scrollPosition + widthToScroll;
//       dispatch(setScrollPosition(newPosition));
//       dispatch(toggleLeftArrow(true));
//     }
//   };

//   const handleScrollLeft = () => {
//     const widthToScroll = 266;

//     if (scrollPosition - widthToScroll <= 0) {
//       dispatch(setScrollPosition(0));
//       dispatch(toggleLeftArrow(false));
//     } else {
//       const newPosition = scrollPosition - widthToScroll;
//       dispatch(setScrollPosition(newPosition));
//       dispatch(toggleRightArrow(true));
//     }
//   };

//   return (
//     <div>
//       {showArrows && showLeftArrow && (
//         <div onClick={handleScrollLeft}>
//           <Arrow left visible={showArrows && showLeftArrow}>
//             <ArrowLeftIcon color="red" size="40" />
//           </Arrow>
//         </div>
//       )}

//       {showArrows && showRightArrow && (
//         <div onClick={handleScrollRight}>
//           <Arrow right visible={showArrows && showRightArrow}>
//             <ArrowRightIcon color="red" size="40" />
//           </Arrow>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ScrollingArrows;

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
}) => {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  useEffect(() => {
    // Logic to toggle visibility of arrows
    setShowLeftArrow(currentIndex > 0);
    setShowRightArrow(currentIndex < series.length - 1);
  }, [currentIndex, series.length]);

  const handlePrev = () => {
    setCurrentIndex((oldIndex) => Math.max(oldIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((oldIndex) => Math.min(oldIndex + 1, series.length - 1));
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
