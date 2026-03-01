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

export function ProductsFlyoutContent({
  color = "black",
}: {
  color?: "black" | "white" | "teal";
}) {
  return (
    <div className="flex gap-14">
      <p
        style={{ letterSpacing: "2.5px" }}
        className="font-ibm! text-[12px] font-medium text-dark-blue max-lg:hidden"
      >
        PRODUCTS
      </p>
      <div
        className={
          "flex max-lg:flex-col lg:gap-5 " +
          (color === "teal" ? " gap-2 pt-0.5" : " w-full gap-4 pt-3")
        }
      >
        {/* Arche Link */}
        <Link to="/arche" className="group cursor-pointer max-lg:w-full">
          {color !== "teal" && (
            <div className="group/img relative flex w-full flex-col justify-end overflow-hidden rounded-lg bg-teal text-white lg:aspect-square lg:w-[300px]">
              <div className="absolute inset-0 duration-300 ease-in-out group-hover/img:scale-110">
                <img
                  src="/images/mountains-landscape.webp"
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
                <p className="relative mt-3 max-w-[200px] text-[15px] leading-[1.2] max-xs:text-[13px] max-lg:hidden">
                  The intelligent operating system for enterprise
                </p>
              </div>
            </div>
          )}
          <p
            className="relative my-3 text-[15px] leading-[1.2] duration-150 max-lg:group-hover:opacity-60 max-sm:text-[clamp(13px,3.5vw,16px)] lg:hidden"
            style={{
              color: color === "teal" ? "var(--color-light-blue)" : color,
            }}
          >
            {color === "teal" && (
              <span className="mb-2.5 block origin-bottom-left scale-115 text-[18px] leading-[18px]">
                archē
              </span>
            )}
            <span>The intelligent operating system for enterprise</span>
          </p>
        </Link>

        {/* Horion Link */}
        <div className="max-lg:w-full">
          {color !== "teal" && (
            <div className="group/img relative flex w-full flex-col justify-end overflow-hidden rounded-lg bg-teal text-white lg:aspect-square lg:w-[300px]">
              <div className="absolute inset-0">
                <img
                  src="/images/horion-bg.webp"
                  className="absolute h-full w-full origin-bottom scale-175 object-cover object-[50%_56%] max-[370px]:scale-200 max-[370px]:object-[50%_54%] max-lg:translate-x-1/10 lg:scale-180 lg:object-[50%_70%]"
                  alt="Landscape filled with mountains and a girl standing on a rock"
                />
              </div>
              <div className="items-end p-4 max-lg:flex max-lg:h-[110px]">
                <div className="relative">
                  <p className="text-[12px] leading-[12px] mb-2 lg:mb-3.5">SOON</p>
                  <img
                    src="/logos/horion-logo.svg"
                    className="relative block w-[110px] lg:w-[100px]"
                    alt="Horion Logo"
                  />
                </div>
                <p className="relative mt-3 max-w-[210px] text-[15px] leading-[1.2] max-xs:text-[13px] max-lg:hidden">
                  The intelligent meeting co-pilot for modern sales teams
                </p>
              </div>
            </div>
          )}
          <p
            className="relative my-3 text-[15px] leading-[1.2] duration-150 max-lg:group-hover:opacity-60 max-sm:text-[clamp(13px,3.5vw,16px)] lg:hidden"
            style={{
              color: color === "teal" ? "var(--color-light-blue)" : color,
            }}
          >
            {color === "teal" && (
              <span className="mb-2.5 flex origin-bottom-left scale-115 items-center text-[18px] leading-[18px] whitespace-pre">
                horion{" "}
                <span className="flex -translate-x-0 translate-y-px items-center rounded-full bg-white/20 px-[8px] py-[4px] text-[12px] leading-[12px] text-white">
                  SOON
                </span>
              </span>
            )}
            <span>The intelligent meeting co-pilot for modern sales teams</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export function SolutionsFlyoutContent({
  defaultSorting = false,
  color = "black",
}: {
  defaultSorting?: boolean;
  color?: "black" | "white" | "teal";
}) {
  const industries = defaultSorting
    ? INDUSTRIES
    : INDUSTRIES_FLYOUTLINK_ORDER.slice(0, 11).map(
        (index) => INDUSTRIES[index]
      );
  return (
    <div className="flex flex-col gap-1 text-black lg:gap-5">
      {color !== "teal" && (
        <p
          style={{ letterSpacing: "2.5px" }}
          className="font-ibm! text-[14px] font-medium text-dark-blue lg:ps-4 lg:text-[12px]"
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
              style={{
                color: color === "teal" ? "var(--color-light-blue)" : color,
              }}
            >
              {industry.name}
            </p>
          </Link>
        ))}

        {/* view all */}
        <Link
          to="/industries"
          className="group/link flex items-center gap-5 py-3 lg:items-start lg:px-4"
        >
          <div className="relative">
            <p
              style={{
                color: color === "teal" ? "var(--color-light-blue)" : color,
              }}
              className="text-[18px] duration-150 ease-in-out max-lg:group-hover/link:opacity-60"
            >
              View All
            </p>
            <div
              className="absolute right-0 -bottom-1 left-0 h-px origin-bottom scale-y-150 duration-200 ease-in-out group-hover/link:scale-y-0"
              style={{
                backgroundColor:
                  color === "teal" ? "var(--color-light-blue)" : color,
              }}
            />
          </div>

          <ArrowSvg
            color={color === "teal" ? "var(--color-light-blue)" : color}
            className="w-[18px] translate-y-0.5 stroke-[1px] duration-200 ease-in-out group-hover/link:translate-x-1/4 max-lg:hidden"
          />
        </Link>
      </div>
    </div>
  );
}

export function CompanyFlyoutContent({
  color = "black",
}: {
  color?: "black" | "white" | "teal";
}) {
  return (
    <div className="flex min-w-[320px] flex-col gap-1 text-black lg:gap-5">
      {color !== "teal" && (
        <p
          style={{ letterSpacing: "2.5px" }}
          className="font-ibm! text-[14px] font-medium text-dark-blue max-lg:hidden lg:ps-4 lg:text-[12px]"
        >
          COMPANY
        </p>
      )}
      <div className="flex flex-col text-[18px] leading-[20px] lg:gap-y-6">
        <Link className="cursor-point group/link" to="/about">
          <p
            className="w-full rounded-md bg-white/0 py-3 duration-150 ease-in-out max-lg:group-hover/link:opacity-60 lg:px-4 lg:group-hover/link:bg-white/50"
            style={{
              color: color === "teal" ? "var(--color-light-blue)" : color,
            }}
          >
            About
          </p>
        </Link>
        <Link className="cursor-point group/link" to="/news">
          <p
            className="w-full rounded-md bg-white/0 py-3 duration-150 ease-in-out max-lg:group-hover/link:opacity-60 lg:px-4 lg:group-hover/link:bg-white/50"
            style={{
              color: color === "teal" ? "var(--color-light-blue)" : color,
            }}
          >
            News
          </p>
        </Link>
        <Link className="cursor-point group/link" to="/careers">
          <p
            className="w-full rounded-md bg-white/0 py-3 duration-150 ease-in-out max-lg:group-hover/link:opacity-60 lg:px-4 lg:group-hover/link:bg-white/50"
            style={{
              color: color === "teal" ? "var(--color-light-blue)" : color,
            }}
          >
            Careers
          </p>
        </Link>
      </div>
    </div>
  );
}
