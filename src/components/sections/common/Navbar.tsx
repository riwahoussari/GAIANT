import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import { useEffect, useRef, useState } from "react";
import { motion as m, useMotionValueEvent, useScroll } from "motion/react";
import GaiantLogoSvg from "../../ui/GaiantLogoSvg";

export default function Navbar({
  transparentBg = false,
  textColor = "white",
}: {
  transparentBg?: boolean;
  textColor?: "white" | "black";
}) {
  const [hasMounted, setHasMounted] = useState(false);
  const [hideNavOnScroll, setHideNavOnScroll] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollY } = useScroll();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const burgerBtnRef = useRef<HTMLDivElement>(null);

  // Triggers on mount slide down animation for navbar
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Hide navbar when scrolling down, show when scrolling up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    setHideNavOnScroll(latest > previous && latest > 50);
  });

  // Close mobile menu if user clicks outside the menu
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node) &&
        !burgerBtnRef.current?.contains(e.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <m.header
      initial={{ y: "-100%" }}
      animate={{
        y: hideNavOnScroll && !mobileMenuOpen ? "-100%" : "0%",
      }}
      style={{
        backgroundColor: transparentBg
          ? "transparent"
          : "var(--color-background)",
        color:
          textColor == "black" ? textColor : transparentBg ? "white" : "black",
      }}
      transition={{
        ease: "easeInOut",
        duration: hasMounted ? 0.3 : 0.7,
        delay: hasMounted ? 0 : 0.3,
      }}
      className="fixed top-0 right-0 left-0 z-100 py-3 duration-500 ease-in-out"
    >
      <div className="my-container side-padding flex items-center justify-between">
        {/* logo */}
        <div className="lg:w-[160px]">
          <div className="w-24 translate-y-1 xs:w-32">
            <GaiantLogoSvg
              color={
                textColor == "black"
                  ? textColor
                  : transparentBg
                    ? "white"
                    : "black"
              }
              className="duration-500 ease-in-out"
            />
          </div>
        </div>

        {/* links */}
        <div className="hidden items-center justify-between gap-24 lg:flex">
          <Link to="/products">
            <p className="text-sm">Products</p>
          </Link>
          <Link to="/solutions">
            <p className="text-sm">Solutions</p>
          </Link>
          <Link to="/company">
            <p className="text-sm">Company</p>
          </Link>
        </div>

        <div className="lg:w-[160px]">
          <Button
            variant={
              textColor == "black"
                ? "black"
                : transparentBg
                  ? "primary"
                  : "black"
            }
          >
            REQUEST A DEMO
          </Button>
        </div>
      </div>
    </m.header>
  );
}
