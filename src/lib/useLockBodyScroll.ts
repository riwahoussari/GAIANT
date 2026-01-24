import { useEffect } from "react";

export function useLockBodyScroll(isLocked: boolean) {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    if (isLocked) {
      document.body.style.overflow = "hidden"; // lock scroll
      document.body.style.touchAction = "none"; // optional for touch devices
    } else {
      document.body.style.overflow = originalStyle;
      document.body.style.touchAction = "";
    }

    return () => {
      document.body.style.overflow = originalStyle;
      document.body.style.touchAction = "";
    };
  }, [isLocked]);
}