import { Link } from "react-router-dom";
import { useState, type ReactNode } from "react";
import { AnimatePresence, motion as m } from "motion/react";
import ArrowSvg from "../../ui/ArrowSvg";
import { INDUSTRIES, INDUSTRIES_FLYOUTLINK_ORDER } from "../../../lib/data";

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
        style={{ letterSpacing: "2.5px" }}
        className="font-ibm! text-[12px] font-medium text-dark-green-900"
      >
        PRODUCTS
      </p>
      <Link to="/arche" className="cursor-pointer">
        <div className="group/img relative flex aspect-square w-[300px] flex-col justify-end overflow-hidden rounded-lg bg-teal text-white">
          <div className="absolute inset-0 duration-300 ease-in-out group-hover/img:scale-110">
            <img
              src="/images/mountains-landscape.jpg"
              className="absolute h-full w-full origin-bottom scale-190 object-cover object-[73%_100%]"
              alt="Landscape filled with mountains and a girl standing on a rock"
            />
          </div>
          <div className="space-y-3 p-4">
            <img
              src="/logos/arche-logo.svg"
              className="relative w-[100px]"
              alt="Arche Logo"
            />
            <p className="relative max-w-[200px] text-[15px] leading-[1.2]">
              The intelligent operating system for enterprise
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
        style={{ letterSpacing: "2.5px" }}
        className="ps-4 font-ibm! text-[12px] font-medium text-dark-green-900"
      >
        INDUSTRIES
      </p>
      <div className="grid grid-cols-3 gap-x-4 gap-y-6 text-[18px] leading-[20px]">
        {INDUSTRIES_FLYOUTLINK_ORDER.slice(0, 11).map((index) => INDUSTRIES[index]).map((industry, i) => (
          <Link
            key={i}
            className="cursor-point group/link"
            to={`/industries/${industry.id}`}
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
            <p className="text-[18px] ">View All</p>
            <div className="absolute right-0 -bottom-1 left-0 h-px origin-bottom bg-black duration-200 ease-in-out group-hover/link:scale-y-0 scale-y-150" />
          </div>

          <ArrowSvg
            color="black"
            className="w-[18px] stroke-[1px] duration-200 ease-in-out group-hover/link:translate-x-1/4"
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
        style={{ letterSpacing: "2.5px" }}
        className="ps-4 font-ibm! text-[12px] font-medium text-dark-green-900"
      >
        COMPANY
      </p>
      <div className="flex flex-col gap-y-6 text-[18px] leading-[20px]">
        <Link className="cursor-point group/link" to="/about">
          <p className="w-full rounded-md bg-white/0 px-4 py-3 duration-150 ease-in-out group-hover/link:bg-white/50">
            About
          </p>
        </Link>
        <Link className="cursor-point group/link" to="/news">
          <p className="w-full rounded-md bg-white/0 px-4 py-3 duration-150 ease-in-out group-hover/link:bg-white/50">
            News
          </p>
        </Link>
        <Link className="cursor-point group/link" to="/careers">
          <p className="w-full rounded-md bg-white/0 px-4 py-3 duration-150 ease-in-out group-hover/link:bg-white/50">
            Careers
          </p>
        </Link>
      </div>
    </div>
  );
}
