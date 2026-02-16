import { Link, Outlet } from "react-router-dom";
import ArrowSvg from "../ui/ArrowSvg";
import GradientCircle from "../ui/GradientCircle";
import { LINKS } from "../../lib/data";
import { NavAccordionItem } from "./navbar/MobileNav";
import {
  CompanyFlyoutContent,
  ProductsFlyoutContent,
  SolutionsFlyoutContent,
} from "./navbar/FlyoutLink";
import { useState } from "react";

export default function Footer() {
  const [selectedAccordion, setSelectedAccordion] = useState<number>(0);

  return (
    <>
      <Outlet />
      <footer className="relative z-1 pt-[130px] pb-9 text-white xs:pt-[140px] sm:pt-[220px]">
        {/* bg */}
        <div className="absolute -top-[1000px] right-0 bottom-0 left-0 overflow-clip">
          <div className="absolute top-[1100px] right-0 -bottom-1/2 left-0 z-0 overflow-x-clip max-sm:overflow-clip">
            <div className="h-full w-[140vw]! -translate-x-[20vw] bg-black blur-[30px] xl:blur-[40px]"></div>
          </div>
        </div>
        <div className="absolute -top-[1000px] right-0 bottom-0 left-0 overflow-clip">
          <div className="absolute top-[1100px] right-0 w-[635px] translate-x-1/4 max-sm:overflow-y-clip max-sm:pb-[max(12vw,120px)] sm:top-[1200px] lg:w-[50vw] lg:min-w-[690px]">
            <GradientCircle className="blur-[max(12vw,120px)]! max-sm:-translate-y-1/4" />
          </div>
        </div>

        {/* content */}
        <div className="my-container side-padding relative flex gap-[78px] max-lg:flex-col max-lg:items-center xl:gap-[130px]">
          {/* newsletter */}
          <div className="w-full max-w-[380px]">
            <p className="text-[28px] leading-[31px]">AI waits for no one.</p>
            <p className="text-[20px] leading-[31px]">
              We’ll keep you up to date with the latest.
            </p>
            <p className="mt-[20px] max-w-[320px] text-[14px] leading-[22px] text-light-gray">
              Enter your business email below to receive updates from Gaiant.
              You can unsubscribe at any time.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Email Received!");
              }}
              className="relative mt-[25px] flex items-center justify-between pb-3"
            >
              <input
                placeholder="Email Address"
                className="w-full text-[18px] outline-none"
              />
              <button
                aria-label="Submit"
                className="cursor-pointer hover:opacity-60"
                type="submit"
              >
                <span className="hidden">Submit</span>
                <ArrowSvg color="white" className="w-[18px]" />
              </button>
              <div className="bg-dark-green-700-blue-gradient absolute right-0 bottom-0 left-0 h-[2px] rounded-full" />
            </form>
          </div>

          {/* links */}
          <div className="flex gap-20 max-lg:hidden max-md:flex-wrap lg:mx-auto xl:gap-[118px]">
            {/* col 1 */}
            <div className="w-[72px]">
              <p className="mb-9 font-ibm! text-[13px] text-light-blue">
                PRODUCTS
              </p>
              <div className="space-y-[20px] text-[14px] leading-[21px]">
                {LINKS.find((l) => l.name == "Products")?.sublinks?.map(
                  (link, i) => (
                    <Link
                      className="block cursor-pointer duration-200 ease-in-out hover:opacity-60"
                      key={i}
                      to={link.link}
                    >
                      <p>{link.name}</p>
                    </Link>
                  )
                )}
              </div>
              <p className="mt-20 mb-6 font-ibm! text-[13px] text-light-blue lg:hidden">
                COMPANY
              </p>
              <div className="space-y-[20px] text-[14px] leading-[21px] lg:hidden">
                {LINKS.find((l) => l.name == "Company")?.sublinks?.map(
                  (link, i) => (
                    <Link
                      className="block cursor-pointer duration-200 ease-in-out hover:opacity-60"
                      key={i}
                      to={link.link}
                    >
                      <p>{link.name}</p>
                    </Link>
                  )
                )}
              </div>
            </div>
            {/* col 2 */}
            <div className="w-[182px]">
              <p className="mb-9 font-ibm! text-[13px] text-light-blue">
                SOLUTIONS
              </p>
              <div className="space-y-[20px] text-[14px] leading-[21px]">
                {LINKS.find((l) => l.name == "Solutions")?.sublinks?.map(
                  (link, i) => (
                    <Link
                      className="block cursor-pointer duration-200 ease-in-out hover:opacity-60"
                      key={i}
                      to={link.link}
                    >
                      <p>{link.name}</p>
                    </Link>
                  )
                )}
              </div>
            </div>
            {/* col 3 */}
            <div className="w-[72px] max-lg:hidden">
              <p className="mb-9 font-ibm! text-[13px] text-light-blue">
                COMPANY
              </p>
              <div className="space-y-[20px] text-[14px] leading-[21px]">
                {LINKS.find((l) => l.name == "Company")?.sublinks?.map(
                  (link, i) => (
                    <Link
                      className="block cursor-pointer duration-200 ease-in-out hover:opacity-60"
                      key={i}
                      to={link.link}
                    >
                      <p>{link.name}</p>
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Accordion Links */}
          <nav className="divide-light-black mb-[70px] w-full max-w-[380px] divide-y-1 lg:hidden">
            <NavAccordionItem
              onOpen={() => setSelectedAccordion(1)}
              onClose={() => setSelectedAccordion(0)}
              open={selectedAccordion === 1}
              title="Products"
              content={<ProductsFlyoutContent color="teal" />}
              light
            />
            <NavAccordionItem
              onOpen={() => setSelectedAccordion(2)}
              onClose={() => setSelectedAccordion(0)}
              open={selectedAccordion === 2}
              title="Solutions"
              content={<SolutionsFlyoutContent color="teal" defaultSorting />}
              light
            />
            <NavAccordionItem
              onOpen={() => setSelectedAccordion(3)}
              onClose={() => setSelectedAccordion(0)}
              open={selectedAccordion === 3}
              title="Company"
              content={<CompanyFlyoutContent color="teal" />}
              light
            />
          </nav>
        </div>

        {/* copyright */}
        <div className="side-padding my-container relative pt-12 lg:pt-[7px]">
          <div className="mx-auto flex w-full items-end max-lg:max-w-[428px] max-lg:flex-col lg:justify-between">
            {/* logo */}
            <img
              className="w-full max-w-[428px]"
              src="/logos/gaiant-logo-gradient-new.svg"
              alt="Gaiant Logo"
            />
            <p
              className="-mt-5 text-center text-[11px] leading-[31px] whitespace-pre lg:-translate-y-[22px] lg:text-end"
              style={{ color: "#93939E" }}
            >
              {"Gaiant © 2025       |       Powered by "}
              <a
                href="https://weareelites.com/"
                className="not-hover:underline"
                target="_blank"
              >
                Elites®
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
