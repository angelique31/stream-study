import { useState } from "react";

/**
 * A container component that detects swipe gestures and calls appropriate callback functions.
 * It takes a sensitivity value of 50 to differentiate between a tap and a swipe gesture.
 *
 * @component
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Child elements to be rendered within the container.
 * @param {Function} props.onSwipeLeft - Function to be executed when a left swipe is detected.
 * @param {Function} props.onSwipeRight - Function to be executed when a right swipe is detected.
 *
 * @returns {JSX.Element} A div element which wraps the child elements and provides swipe functionality.
 */
const SwipeableContainer = ({ children, onSwipeLeft, onSwipeRight }) => {
  const [startX, setStartX] = useState(0);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const sensitivity = 50;

    if (startX - endX > sensitivity) {
      onSwipeLeft();
    } else if (endX - startX > sensitivity) {
      onSwipeRight();
    }
  };

  return (
    <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      {children}
    </div>
  );
};

export default SwipeableContainer;
