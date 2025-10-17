import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  AnimatePresence,
  motion as m,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import GaiantLogoSvg from "../../ui/GaiantLogoSvg";
import { INDUSTRIES } from "../../../lib/constants";
import ArrowSvg from "../../ui/ArrowSvg";

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

  // Flyout Links
  const [hovering, setHovering] = useState(false);

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
      <div className="my-container side-padding relative z-100 flex items-center justify-between">
        {/* logo */}
        <Link to="/">
          <div className="w-24 lg:min-w-[160px] translate-y-1 xs:w-32">
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
        </Link>

        {/* links */}
        <div className="hidden items-center justify-between gap-24 lg:flex">
          <FlyoutLink
            setHovering={setHovering}
            FlyoutContent={
              <Link to="/arche" className="cursor-pointer">
                <ProductsFlyoutContent />
              </Link>
            }
            to="/arche"
          >
            <p className="min-w-16 text-start text-sm">Products</p>
          </FlyoutLink>
          <FlyoutLink
            setHovering={setHovering}
            FlyoutContent={<SolutionsFlyoutContent />}
            to="/industries"
          >
            <p className="min-w-16 text-center text-sm">Solutions</p>
          </FlyoutLink>
          <FlyoutLink
            setHovering={setHovering}
            FlyoutContent={<CompanyFlyoutContent />}
            to="/about"
          >
            <p className="min-w-16 text-end text-sm">Company</p>
          </FlyoutLink>
        </div>

        {/* button */}
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
      {/* overlay */}
      <AnimatePresence>
        {hovering && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 left-0 z-99 backdrop-blur-xl"
          />
        )}
      </AnimatePresence>
    </m.header>
  );
}

function FlyoutLink({
  children,
  to,
  FlyoutContent,
  setHovering,
}: {
  children: ReactNode;
  to: string;
  FlyoutContent: ReactNode;
  setHovering: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setOpen(true);
        setHovering(true);
      }}
      onMouseLeave={() => {
        setOpen(false);
        setHovering(false);
      }}
      className="group"
    >
      <div className="relative">
        <Link className="relative z-1" to={to}>
          {children}
        </Link>
        {/* bridge */}
        {open && (
          <div className="absolute top-0 -right-[50px] -bottom-[200%] -left-[50px] z-0 opacity-100"></div>
        )}
      </div>
      <AnimatePresence>
        {open && (
          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ ease: "easeOut", duration: 0.3, delay: 0.1 }}
            className="absolute top-[60px] right-1/2 z-1 w-max translate-x-1/2 rounded-[14px] bg-white/50 p-5"
          >
            {FlyoutContent}
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ProductsFlyoutContent() {
  return (
    <div className="flex gap-14">
      <p
        style={{ letterSpacing: "1.5px" }}
        className="font-ibm! text-[12px] font-semibold text-black opacity-60"
      >
        PRODUCTS
      </p>
      <div className="group/img relative flex aspect-square w-[300px] flex-col justify-end overflow-hidden rounded-lg bg-teal text-white">
        <img
          src="/landing-page-banner.jpg"
          className="absolute h-full w-full origin-bottom scale-200 object-cover object-[70%_100%] duration-150 ease-in-out group-hover/img:scale-220"
        />
        <div className="space-y-5 p-4">
          <img src="/arche-logo.svg" className="relative" alt="" />
          <p className="relative text-[15px]">
            An enterprise-ready AI platform that powers modern workplace
            productivity
          </p>
        </div>
      </div>
    </div>
  );
}

function SolutionsFlyoutContent() {
  return (
    <div className="flex flex-col gap-5 text-black">
      <p
        style={{ letterSpacing: "1.5px" }}
        className="ps-4 font-ibm! text-[12px] font-semibold opacity-60"
      >
        INDUSTRIES
      </p>
      <div className="grid grid-cols-3 gap-x-4 gap-y-6 text-[18px] leading-[20px]">
        {INDUSTRIES.slice(0, 8).map((industry, i) => (
          <Link
            key={i}
            className="cursor-point group/link"
            to={`/industries/${i + 1}`}
          >
            <p className="max-w-[280px] rounded-md bg-white/0 px-4 py-3 duration-150 ease-in-out group-hover/link:bg-white/50">
              {industry.name}
            </p>
          </Link>
        ))}
        <Link
          to="/industries"
          className="group/link flex items-center gap-5 px-4"
        >
          <div className="relative">
            <p className="text-[18px] font-bold">View All</p>
            <div className="absolute right-0 -bottom-1 left-0 h-[2px] origin-bottom bg-black duration-200 ease-in-out group-hover/link:scale-y-0" />
          </div>

          <ArrowSvg
            color="black"
            className="w-[18px] stroke-[1.5px] duration-200 ease-in-out group-hover/link:translate-x-1/4"
          />
        </Link>
      </div>
    </div>
  );
}

function CompanyFlyoutContent() {
  return (
    <div className="flex min-w-[320px] flex-col gap-5 text-black">
      <p
        style={{ letterSpacing: "1.5px" }}
        className="ps-4 font-ibm! text-[12px] font-semibold opacity-60"
      >
        COMPANY
      </p>
      <div className="flex flex-col gap-y-6 text-[18px] leading-[20px]">
        <Link className="cursor-point group/link" to="/about">
          <p className="max-w-[280px] rounded-md bg-white/0 px-4 py-3 duration-150 ease-in-out group-hover/link:bg-white/50">
            About
          </p>
        </Link>
        <Link className="cursor-point group/link" to="/news">
          <p className="max-w-[280px] rounded-md bg-white/0 px-4 py-3 duration-150 ease-in-out group-hover/link:bg-white/50">
            News
          </p>
        </Link>
        <Link className="cursor-point group/link" to="/careers">
          <p className="max-w-[280px] rounded-md bg-white/0 px-4 py-3 duration-150 ease-in-out group-hover/link:bg-white/50">
            Careers
          </p>
        </Link>
      </div>
    </div>
  );
}
