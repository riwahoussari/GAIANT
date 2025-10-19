import { Link } from "react-router-dom";
import { useState, type ReactNode } from "react";
import { AnimatePresence, motion as m } from "motion/react";
import ArrowSvg from "../../../ui/ArrowSvg";
import { INDUSTRIES } from "../../../../lib/constants";

export default function FlyoutLink({
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
      {/* Link */}
      <div className="relative">
        {/* link text */}
        <Link className="relative z-1" to={to}>
          {children}
        </Link>

        {/* bridge to maintain hover */}
        {open && (
          <div className="absolute top-0 -right-[50px] -bottom-[200%] -left-[50px] z-0 opacity-100"></div>
        )}
      </div>

      {/* Flyout Card/Content */}
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

export function ProductsFlyoutContent() {
  return (
    <div className="flex gap-14">
      <p
        style={{ letterSpacing: "1.5px" }}
        className="font-ibm! text-[12px] font-semibold text-black opacity-60"
      >
        PRODUCTS
      </p>
      <Link to="/arche" className="cursor-pointer">
        <div className="group/img relative flex aspect-square w-[300px] flex-col justify-end overflow-hidden rounded-lg bg-teal text-white">
          <img
            src="/images/mountains-landscape.webp"
            className="absolute h-full w-full origin-bottom scale-200 object-cover object-[70%_100%] duration-150 ease-in-out group-hover/img:scale-220"
          />
          <div className="space-y-5 p-4">
            <img src="/logos/arche-logo.svg" className="relative" alt="" />
            <p className="relative text-[15px]">
              An enterprise-ready AI platform that powers modern workplace
              productivity
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export function SolutionsFlyoutContent() {
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

export function CompanyFlyoutContent() {
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
