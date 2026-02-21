import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion as m,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import Button from "../../ui/Button";
import GaiantLogoSvg from "../../ui/GaiantLogoSvg";
import FlyoutLink, {
  ProductsFlyoutContent,
  SolutionsFlyoutContent,
  CompanyFlyoutContent,
} from "./FlyoutLink";
import BurgerMenuSvg from "./BurgerMenuSvg";
import MobileNavMenu from "./MobileNav";
import ArrowSvg from "../../ui/ArrowSvg";
import { BlurredTealGradientOverlay } from "../../ui/Backgrounds";

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
  const [hovering, setHovering] = useState(false);

  const { scrollY } = useScroll();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const burgerBtnRef = useRef<HTMLDivElement>(null);

  // Triggers on mount slide down animation for navbar
  useEffect(() => setHasMounted(true), []);

  // Hide navbar when scrolling down, show when scrolling up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() || 0;
    setHideNavOnScroll(latest > prev && latest > 50);
  });

  // Close mobile menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node) &&
        !burgerBtnRef.current?.contains(e.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen)
      document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <m.header
      initial={{ y: "-100%" }}
      animate={{
        y: hideNavOnScroll && !mobileMenuOpen && !hovering ? "-100%" : "0%",
      }}
      style={{
        backgroundColor: transparentBg
          ? "transparent"
          : "var(--color-background)",
        color:
          textColor === "black" ? textColor : transparentBg ? "white" : "black",
      }}
      transition={{
        ease: "easeInOut",
        duration: hasMounted ? 0.3 : 0.7,
        delay: hasMounted ? 0 : 0.3,
      }}
      className="fixed top-0 right-0 left-0 z-100 duration-500 ease-in-out"
    >
      {/* Announcement Bar */}
      <div className="bg-green-gradient relative z-100 w-full p-3 text-center text-[min(14px,3.4vw)] whitespace-pre text-white xs:text-[15px]">
        Introducing <span className="font-bold">archē</span>: The New Operating
        Layer for Enterprise
        <span className="max-sm:hidden">{"    "}</span>
        <Link to="/arche" className="group relative max-sm:hidden">
          Learn More
          <span className="absolute right-0 -bottom-px left-0 block h-px origin-bottom translate-y-px scale-y-100 bg-white duration-300 ease-in-out group-hover:scale-y-0" />
        </Link>
        <Link to="/arche" className="sm:hidden">
          {"  "}
          <ArrowSvg className="inline w-[min(16px,3.7vw)] -translate-y-px stroke-[1.5] duration-200 ease-in-out hover:translate-x-1" />
        </Link>
      </div>
      {/* Navbar Content */}
      <div className="my-container side-padding relative z-100 flex items-center justify-between py-3">
        {/* logo */}
        <Link to="/" aria-label="homepage">
          <span className="hidden">Homepage</span>
          <div className="w-24 translate-y-1 xs:w-32 lg:min-w-[160px]">
            <GaiantLogoSvg
              color={
                mobileMenuOpen
                  ? "white"
                  : textColor === "black"
                    ? "black"
                    : transparentBg
                      ? "white"
                      : "black"
              }
              className="duration-500 ease-in-out"
            />
          </div>
        </Link>

        {/* Flyout Links (large screens) */}
        <div className="hidden items-center justify-between gap-24 lg:flex">
          <FlyoutLink
            setHovering={setHovering}
            FlyoutContent={<ProductsFlyoutContent />}
            to="/arche"
          >
            <div className="relative flex min-w-16 justify-start">
              <p className="relative text-sm">
                Products
                <span
                  style={{
                    backgroundColor:
                      textColor === "black"
                        ? textColor
                        : transparentBg
                          ? "white"
                          : "black",
                  }}
                  className="absolute right-0 -bottom-px left-0 block h-px origin-center scale-x-0 duration-300 ease-in-out group-hover:scale-x-100"
                />
              </p>
            </div>
          </FlyoutLink>
          <FlyoutLink
            setHovering={setHovering}
            FlyoutContent={<SolutionsFlyoutContent />}
            to="/industries"
          >
            <div className="flex min-w-16 justify-center">
              <p className="relative text-sm">
                Solutions
                <span
                  style={{
                    backgroundColor:
                      textColor === "black"
                        ? textColor
                        : transparentBg
                          ? "white"
                          : "black",
                  }}
                  className="absolute right-0 -bottom-px left-0 block h-px origin-center scale-x-0 duration-300 ease-in-out group-hover:scale-x-100"
                />
              </p>
            </div>
          </FlyoutLink>
          <FlyoutLink
            setHovering={setHovering}
            FlyoutContent={<CompanyFlyoutContent />}
            to="/about"
          >
            <div className="flex min-w-16 justify-end">
              <p className="relative text-sm">
                Company
                <span
                  style={{
                    backgroundColor:
                      textColor === "black"
                        ? textColor
                        : transparentBg
                          ? "white"
                          : "black",
                  }}
                  className="absolute right-0 -bottom-px left-0 block h-px origin-center scale-x-0 duration-300 ease-in-out group-hover:scale-x-100"
                />
              </p>
            </div>
          </FlyoutLink>
        </div>

        {/* CTA - Mobile Menu Trigger Btn */}
        <div className="relative z-1 flex items-center justify-end gap-5 lg:min-w-[160px]">
          <Button
            className="max-sm:hidden"
            variant={
              textColor === "black" || mobileMenuOpen
                ? "black"
                : transparentBg
                  ? "primary"
                  : "black"
            }
          >
            Request a demo
          </Button>

          <div
            ref={burgerBtnRef}
            className="w-7 lg:hidden"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            <BurgerMenuSvg
              color={
                mobileMenuOpen
                  ? "white"
                  : textColor === "black"
                    ? "black"
                    : transparentBg
                      ? "white"
                      : "black"
              }
              isOpen={mobileMenuOpen}
            />
          </div>
        </div>
      </div>

      {/* blurred overlay */}
      <AnimatePresence>
        {hovering && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 left-0 z-98 backdrop-blur-xl max-lg:hidden"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 left-0 z-98 backdrop-blur-md lg:hidden"
            ></m.div>
            <div className="fixed top-0 right-0 bottom-0 left-0 z-99 opacity-60 lg:hidden">
              <BlurredTealGradientOverlay />
            </div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Nav Menu */}
      <MobileNavMenu
        ref={mobileMenuRef}
        isOpen={mobileMenuOpen}
        setIsOpen={setMobileMenuOpen}
      />
    </m.header>
  );
}
