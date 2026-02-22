import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // ensures hard refresh also starts at top
    window.history.scrollRestoration = "manual";

    // scroll to top on navigation
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // "smooth" if you want smooth scroll
    });
  }, [pathname]);

  return null;
}