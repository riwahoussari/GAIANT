import { useRef } from "react";

export function useSwipe(
  onSwipeLeft: (steps?: number) => void,
  onSwipeRight: (steps?: number) => void
) {
  const startX = useRef<number | null>(null);

  const minDistance = 50; // px threshold

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return;
    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;
    if (Math.abs(diff) > minDistance * 3) {
      if (diff > 0) {
        onSwipeLeft(2);
      } else {
        onSwipeRight(2);
      }
    } else if (Math.abs(diff) > minDistance) {
      diff > 0 ? onSwipeLeft(1) : onSwipeRight(1);
    }

    startX.current = null;
  };

  return {
    onTouchStart,
    onTouchEnd,
  };
}
