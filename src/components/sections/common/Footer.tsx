import { Outlet } from "react-router-dom";
import ArrowSvg from "../../ui/ArrowSvg";
import GradientCircle from "../../ui/GradientCircle";

export default function Footer() {
  return (
    <>
      <Outlet />
      <footer className="relative pt-[220px] pb-[20px] text-white">
        {/* bg */}
        <div className="absolute -top-[1000px] right-0 bottom-0 left-0 overflow-clip">
          <div className="absolute top-[1100px] right-0 -bottom-1/2 left-0 z-0 overflow-x-clip">
            <div className="h-full w-[140vw]! -translate-x-[20vw] bg-black blur-[max(4vw,40px)]"></div>
          </div>
        </div>
        <div className="absolute -top-[1000px] right-0 bottom-0 left-0 overflow-clip">
          <div className="absolute top-[1200px] right-0 w-[635px] translate-x-1/4 lg:w-[50vw] lg:min-w-[690px]">
            <GradientCircle className="blur-[max(12vw,120px)]!" />
          </div>
        </div>

        {/* content */}
        <div className="my-container side-padding relative flex gap-22 max-md:flex-col">
          {/* newsletter */}
          <div className="max-w-[380px]">
            <p className="text-[28px] leading-[31px]">AI waits for no one.</p>
            <p className="text-[20px] leading-[31px]">
              We’ll keep you up to date with the latest.
            </p>
            <p className="mt-[20px] text-[14px] leading-[22px] text-light-gray">
              Enter your business email below to receive updates from Gaiant.
              Please refer to our{" "}
              <span className="underline">privacy policy</span> for details or
              to contact us. You can unsubscribe at any time.
            </p>
            <div className="relative mt-[25px] flex items-center justify-between pb-3">
              <p className="text-[18px] text-light-gray">Email Address</p>
              <ArrowSvg color="white" className="w-[18px]" />
              <div className="bg-dark-green-blue-gradient absolute right-0 bottom-0 left-0 h-[2px] rounded-full" />
            </div>
          </div>

          {/* links */}
          <div className="flex gap-20 max-md:flex-wrap lg:mx-auto xl:gap-32">
            {/* col 1 */}
            <div className="w-[72px]">
              <p className="mb-6 font-ibm text-[13px] text-light-blue">
                PRODUCTS
              </p>
              <div className="space-y-[20px] text-[14px] leading-[21px]">
                <p>Archē</p>
              </div>
              <p className="mt-20 mb-6 font-ibm text-[13px] text-light-blue lg:hidden">
                COMPANY
              </p>
              <div className="space-y-[20px] text-[14px] leading-[21px] lg:hidden">
                <p>About</p>
                <p>News</p>
                <p>Careers</p>
              </div>
            </div>
            {/* col 2 */}
            <div className="w-[182px]">
              <p className="mb-6 font-ibm text-[13px] text-light-blue">
                SOLUTIONS
              </p>
              <div className="space-y-[20px] text-[14px] leading-[21px]">
                <p>Banking & Financial Services</p>
                <p>Insurance</p>
                <p>Healthcare & Life Sciences</p>
                <p>Technology, Media & Telecommunications (TMT)</p>
                <p>Public Sector & Government</p>
                <p>Energy & Utilities</p>
                <p>Legal Services</p>
                <p>Real Estate & Construction</p>
                <p>Retail & Consumer Goods</p>
                <p>Hospitality & Leisure</p>
                <p>Education</p>
              </div>
            </div>
            {/* col 3 */}
            <div className="w-[72px] max-lg:hidden">
              <p className="mb-6 font-ibm text-[13px] text-light-blue">
                COMPANY
              </p>
              <div className="space-y-[20px] text-[14px] leading-[21px]">
                <p>About</p>
                <p>News</p>
                <p>Careers</p>
              </div>
            </div>
          </div>
        </div>

        {/* copyright */}
        <div className="side-padding my-container relative flex items-center gap-5 pt-12 max-md:flex-col md:justify-between">
          {/* logo */}
          <img
            className="w-full max-w-[450px]"
            src={`${import.meta.env.BASE_URL}gaiant-logo-gradient.svg`}
          />
          <p className="text-center text-[11px] leading-[31px] whitespace-pre md:text-end">
            {"Gaiant © 2025       |       Powered by Elites®"}
          </p>
        </div>
      </footer>
    </>
  );
}
