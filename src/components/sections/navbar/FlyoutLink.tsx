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

export function ProductsFlyoutContent({ light = false }: { light?: boolean }) {
  return (
    <div className="flex gap-14">
      <p
        style={{ letterSpacing: "2.5px" }}
        className="font-ibm! text-[12px] font-medium text-dark-green-900 max-lg:hidden"
      >
        PRODUCTS
      </p>
      <Link to="/arche" className="group cursor-pointer max-lg:w-full">
        {!light && (
          <div className="group/img relative flex w-full flex-col justify-end overflow-hidden rounded-lg bg-teal text-white lg:aspect-square lg:w-[300px]">
            <div className="absolute inset-0 duration-300 ease-in-out group-hover/img:scale-110">
              <img
                src="/images/mountains-landscape.jpg"
                className="absolute h-full w-full origin-bottom scale-160 object-cover object-[50%_75%] max-lg:-translate-x-22/100 lg:scale-190 lg:object-[73%_100%]"
                alt="Landscape filled with mountains and a girl standing on a rock"
              />
            </div>
            <div className="items-end p-4 max-lg:flex max-lg:h-[110px]">
              <img
                src="/logos/arche-logo.svg"
                className="relative w-[110px] lg:w-[100px]"
                alt="Arche Logo"
              />
              <p className="relative mt-3 max-w-[200px] text-[15px] leading-[1.2] max-lg:hidden">
                The intelligent operating system for enterprise
              </p>
            </div>
          </div>
        )}
        <p
          className="relative my-3 text-[15px] leading-[1.2] max-lg:group-hover:opacity-60 lg:hidden"
          style={{ color: light ? "#86F8FF" : "#000" }}
        >
          <span className="mb-2 block origin-bottom-left scale-115">Arche</span>
          The intelligent operating system for enterprise
        </p>
      </Link>
    </div>
  );
}

export function SolutionsFlyoutContent({
  defaultSorting = false,
  light = false,
}: {
  defaultSorting?: boolean;
  light?: boolean;
}) {
  const industries = defaultSorting
    ? INDUSTRIES
    : INDUSTRIES_FLYOUTLINK_ORDER.slice(0, 11).map(
        (index) => INDUSTRIES[index]
      );
  return (
    <div className="flex flex-col gap-1 text-black lg:gap-5">
      {!light && (
        <p
          style={{ letterSpacing: "2.5px" }}
          className="font-ibm! text-[14px] font-medium text-dark-green-900 lg:ps-4 lg:text-[12px]"
        >
          INDUSTRIES
        </p>
      )}
      <div className="grid gap-x-4 text-[18px] leading-[20px] lg:grid-cols-3 lg:gap-y-6">
        {industries.map((industry, i) => (
          <Link
            key={i}
            className="group/link"
            to={`/industries/${industry.id}`}
          >
            <p
              className="max-w-[280px] rounded-md bg-white/0 py-3 duration-150 ease-in-out max-lg:group-hover/link:opacity-60 lg:px-4 lg:group-hover/link:bg-white/50"
              style={{ color: light ? "#86F8FF" : "#000" }}
            >
              {industry.name}
            </p>
          </Link>
        ))}
        <Link
          to="/industries"
          className="group/link flex items-center gap-5 py-3 lg:items-start lg:px-4"
        >
          <div className="relative">
            <p
              style={{ color: light ? "#86F8FF" : "#000" }}
              className="text-[18px] duration-150 ease-in-out max-lg:group-hover/link:opacity-60"
            >
              View All
            </p>
            <div
              className="absolute right-0 -bottom-1 left-0 h-px origin-bottom scale-y-150 duration-200 ease-in-out group-hover/link:scale-y-0"
              style={{ backgroundColor: light ? "#86F8FF" : "#000" }}
            />
          </div>

          <ArrowSvg
            color={light ? "#86F8FF" : "#000"}
            className="w-[18px] translate-y-0.5 stroke-[1px] duration-200 ease-in-out group-hover/link:translate-x-1/4 max-lg:hidden"
          />
        </Link>
      </div>
    </div>
  );
}

export function CompanyFlyoutContent({ light = false }: { light?: boolean }) {
  return (
    <div className="flex min-w-[320px] flex-col gap-1 text-black lg:gap-5">
      {!light && (
        <p
          style={{ letterSpacing: "2.5px" }}
          className="font-ibm! text-[14px] font-medium text-dark-green-900 lg:ps-4 lg:text-[12px]"
        >
          COMPANY
        </p>
      )}
      <div className="flex flex-col text-[18px] leading-[20px] lg:gap-y-6">
        <Link className="cursor-point group/link" to="/about">
          <p
            className="w-full rounded-md bg-white/0 py-3 duration-150 ease-in-out max-lg:group-hover/link:opacity-60 lg:px-4 lg:group-hover/link:bg-white/50"
            style={{ color: light ? "#86F8FF" : "#000" }}
          >
            About
          </p>
        </Link>
        <Link className="cursor-point group/link" to="/news">
          <p
            className="w-full rounded-md bg-white/0 py-3 duration-150 ease-in-out max-lg:group-hover/link:opacity-60 lg:px-4 lg:group-hover/link:bg-white/50"
            style={{ color: light ? "#86F8FF" : "#000" }}
          >
            News
          </p>
        </Link>
        <Link className="cursor-point group/link" to="/careers">
          <p
            className="w-full rounded-md bg-white/0 py-3 duration-150 ease-in-out max-lg:group-hover/link:opacity-60 lg:px-4 lg:group-hover/link:bg-white/50"
            style={{ color: light ? "#86F8FF" : "#000" }}
          >
            Careers
          </p>
        </Link>
      </div>
    </div>
  );
}
