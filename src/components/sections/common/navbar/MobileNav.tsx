import { ChevronDown } from "lucide-react";
import { motion as m, AnimatePresence, type Variants } from "motion/react";
import { useEffect, useRef, useState, type MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import { LINKS, type TLinkRecord } from "../../../../lib/constants";

// MOBILE NAVBAR
export default function MobileNavMenu({
  isOpen,
  setIsOpen,
  ref,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  ref: React.RefObject<HTMLDivElement | null>;
}) {
  const [selectedAccordion, setSelectedAccordion] = useState<number>(0);

  // stop scrolling when mobile menu is opened
  useEffect(() => {
    if (isOpen) {
      // Save scroll position so it doesn’t jump when unlocked
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      // Restore scroll position
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }, [isOpen]);

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <m.div
          ref={ref} // Attach the ref to track clicks outside
          variants={menuSlide as Variants}
          initial="initial"
          animate="enter"
          exit="exit"
          className="absolute top-0 right-0 left-0 z-99 max-h-dvh overflow-y-scroll bg-white pt-30 pb-6 text-black shadow-lg lg:hidden"
        >
          <nav>
            {LINKS.map((link, i) => (
              <MobileNavLink
                key={i} // Use unique key for better React reconciliation
                index={i}
                {...link}
                selected={i + 1 == selectedAccordion}
                closeMenu={() => setIsOpen(false)}
                onClick={() => {
                  // close/open accordion on click
                  setSelectedAccordion((prev) => (prev === i + 1 ? 0 : i + 1));
                }}
              />
            ))}
          </nav>
        </m.div>
      )}
    </AnimatePresence>
  );
}

// Motion animation variants for the menu slide-in effect
const menuSlide = {
  initial: { y: "-100%" }, // Start off-screen above
  enter: { y: "0%", transition: { duration: 0.5, ease: "easeInOut" } },
  exit: { y: "-100%", transition: { duration: 0.5, ease: "easeInOut" } },
};

// Component for individual navigation links
function MobileNavLink({
  index,
  onClick,
  closeMenu,
  link,
  name,
  sublinks,
  selected,
}: {
  selected: boolean;
  index: number;
  onClick: MouseEventHandler<HTMLDivElement>;
  closeMenu: () => void;
} & TLinkRecord) {
  const sublinksRef = useRef<HTMLDivElement>(null); // to calculate height for accordion animation to work
  return (
    <m.div
      custom={LINKS.length - index} // Pass custom value for staggered animation
      variants={linkSlide as Variants}
      initial="initial"
      animate="enter"
      exit="exit"
      onClick={onClick} // open-close accordion
      className={`px-4 py-8`}
    >
      {/* Main link */}
      <div className="flex justify-between">
        <Link onClick={closeMenu} to={link} className="relative text-3xl">
          {name}
          <div className="absolute right-0 -bottom-0 left-0 h-[2px] rounded-full bg-black" />
        </Link>

        {/* open/close chevron */}
        {sublinks && (
          <ChevronDown
            style={{ rotate: selected ? "180deg" : "0deg" }}
            className="h-8 w-8 duration-300 ease-in-out"
          />
        )}
      </div>

      {/* Sublinks */}
      {sublinks && (
        <div
          style={{
            height: selected ? sublinksRef.current?.clientHeight || 0 : 0,
          }}
          className={
            "overflow-y-hidden px-6 text-xl transition-all duration-300 ease-in-out"
          }
        >
          <div className="flex flex-col gap-2 pt-6" ref={sublinksRef}>
            {sublinks.map((sublink, i) => (
              <Link
                onClick={closeMenu}
                key={i}
                className="py-3"
                to={sublink.link}
              >
                {sublink.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </m.div>
  );
}

// Motion animation variants for individual link slide-in animations
const linkSlide = {
  initial: { y: "-200%" }, // Start off-screen above
  enter: (i: number) => ({
    y: "0%", // Animate to normal position
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delay: 0.1 * i, // Staggered effect for each link
    },
  }),
};
