import { motion as m, AnimatePresence, type Variants } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";
import ArrowSvg from "../../ui/ArrowSvg";
import {
  CompanyFlyoutContent,
  ProductsFlyoutContent,
  SolutionsFlyoutContent,
} from "./FlyoutLink";
import Button from "../../ui/Button";
import { useIsMobile } from "../../../lib/useIsMobile";

// MOBILE NAVBAR
export default function MobileNavMenu({
  isOpen,
  ref,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  ref: React.RefObject<HTMLDivElement | null>;
}) {
  const isSm = useIsMobile(640);

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
          variants={
            isSm
              ? (menuSlideVertical as Variants)
              : (menuSlideHorizontal as Variants)
          }
          initial="initial"
          animate="enter"
          exit="exit"
          className="absolute top-0 right-0 z-99 max-h-[95dvh] overflow-x-clip overflow-y-auto rounded-[20px] bg-white/50 px-6 py-2 text-white max-sm:left-0 max-sm:pt-[140px] sm:top-[140px] sm:right-[20px] sm:w-[428px] md:right-[40px] lg:hidden"
        >
          <nav className="divide-light-black divide-y-1">
            <NavAccordionItem
              onOpen={() => setSelectedAccordion(1)}
              onClose={() => setSelectedAccordion(0)}
              open={selectedAccordion === 1}
              title="Products"
              content={<ProductsFlyoutContent color="white" />}
            />
            <NavAccordionItem
              onOpen={() => setSelectedAccordion(2)}
              onClose={() => setSelectedAccordion(0)}
              open={selectedAccordion === 2}
              title="Solutions"
              content={<SolutionsFlyoutContent color="white" defaultSorting />}
            />
            <NavAccordionItem
              onOpen={() => setSelectedAccordion(3)}
              onClose={() => setSelectedAccordion(0)}
              open={selectedAccordion === 3}
              title="Company"
              content={<CompanyFlyoutContent color="white" />}
            />
            {isSm && (
              <div className="mt-10 mb-8 flex scale-110 justify-center sm:hidden">
                <Button variant={"black"}>Request a demo</Button>
              </div>
            )}
          </nav>
        </m.div>
      )}
    </AnimatePresence>
  );
}

export function NavAccordionItem({
  title,
  content,
  onOpen,
  onClose,
  open,
}: {
  title: string;
  content: ReactNode;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  light?: boolean;
}) {
  return (
    <div className={"space-y- py-5"}>
      <div
        className="flex cursor-pointer items-center justify-between"
        onClick={() => {
          if (open) {
            onClose();
          } else {
            onOpen();
          }
        }}
      >
        <div className="flex items-center gap-3">
          <p className="text-[24px]">{title}</p>
        </div>
        <div className="h-5 w-5">
          <ArrowSvg
            color="white"
            className={
              "rotate-90 duration-150 ease-in-out " +
              (open ? " -rotate-90!" : "")
            }
          />
        </div>
      </div>

      <div
        className="overflow-hidden"
        style={open ? { marginTop: "14px" } : { height: 0 }}
      >
        {content}
      </div>
    </div>
  );
}

// Motion animation variants for the menu slide-in effect
const menuSlideVertical = {
  initial: { y: "-100%" }, // Start off-screen to the right
  enter: { y: "0%", transition: { duration: 0.6, ease: "easeInOut" } },
  exit: { y: "-100%", transition: { duration: 0.6, ease: "easeInOut" } },
};
const menuSlideHorizontal = {
  initial: { x: "120%" }, // Start off-screen to the right
  enter: { x: "0%", transition: { duration: 0.6, ease: "easeInOut" } },
  exit: { x: "120%", transition: { duration: 0.6, ease: "easeInOut" } },
};

// FlyoutLinks
// function ProductsFlyoutContent() {
//   return (
//     <div className="grid xl:grid-cols-4 gap-4 xl:gap-8 pb-2 xl:max-w-[90dvw]">
//       {/* Generative AI */}
//       <div className="flex flex-col gap-4 xl:min-w-[260px] w-full xl:max-w-[310px]">
//         <div className="rounded-[10px] overflow-hidden relative aspect-3/1 w-full min-h-[100px]">
//           <img src="/images/landscape-background.webp" />
//         </div>

//         <div className="flex flex-col gap-2 xl:gap-5">
//           <div className="ps-3">
//             <FTitle text="GENERATIVE AI" />
//           </div>

//           <PLink
//             color="#4000FF"
//             title="Horion For Sales"
//             text="AI meeting co-pilot to close deals and improve performance"
//             link="/products/generative-ai/horion-for-sales"
//           />
//         </div>
//       </div>

//     </div>
//   );
// }
// function SolutionsFlyoutContent() {
//   return (
//     <div className="flex xl:min-w-[320px] flex-col gap-5 ">
//       <FTitle text="CASE STUDIES" />
//       <div className="flex flex-col">
//         {INDUSTRIES.map((industry, i) => (
//           <FLink
//             key={i}
//             text={industry.name}
//             link={`/solutions/${industry.id}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
// function CompanyFlyoutContent() {
//   return (
//     <div className="flex xl:min-w-[320px] flex-col gap-5 ">
//       <FTitle text="CASE STUDIES" />
//       <div className="flex flex-col">
//         {INDUSTRIES.map((industry, i) => (
//           <FLink
//             key={i}
//             text={industry.name}
//             link={`/solutions/${industry.id}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// function FTitle({ text }: { text: string }) {
//   return (
//     <p
//       style={{ letterSpacing: "1px" }}
//       className="ps-2 text-[12px] xl:text-[14px] uppercase text-primary"
//     >
//       {text}
//     </p>
//   );
// }

// function FLink({
//   link,
//   text,
//   target,
//   rel
// }: {
//   link: string;
//   text: string;
//   target?: React.HTMLAttributeAnchorTarget;
//   rel?: string;
// }) {
//   return (
//     <Link rel={rel} target={target} className="cursor-point group/link" to={link}>
//       <p className="w-full rounded-sm bg-white/0 p-3 duration-150 ease-in-out group-hover/link:bg-blue-500/15 text-[18px] max-xl:leading-none xl:text-xl">
//         {text}
//       </p>
//     </Link>
//   );
// }

// function PLink({
//   color,
//   title,
//   text,
//   link,
// }: {
//   color: string;
//   title: string;
//   text: string;
//   link: string;
// }) {
//   return (
//     <Link to={link}>
//       <div className="flex flex-col px-3 py-3 gap-1 xl:gap-2 hover:bg-secondary/15 ease-in-out duration-150 rounded-md overflow-hidden">
//         <div className="flex gap-2 items-start">
//           <div
//             className="aspect-square rounded-full w-2 translate-y-[7px]"
//             style={{ backgroundColor: color }}
//           />
//           <p className="text-[20px] leading-[1.1]">{title}</p>
//         </div>
//         <p className="text-[14px]">{text}</p>
//       </div>
//     </Link>
//   );
// }
