import ArrowSvg from "./shared/ArrowSvg";
import GradientCircle from "./shared/GradientCircle";

export default function Footer() {
  return (
    <footer className="relative overflow-x-clip text-white side-padding pt-[220px] pb-[60px] ">
      {/* bg */}
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-clip">
        <div className="absolute left-0 right-0 top-[100px] -bottom-1/2 z-0 overflow-x-clip">
          <div className=" w-[120vw]! h-full bg-black -translate-x-[10vw] blur-[40px]"></div>
        </div>
      </div>
      <div className="absolute right-0 top-[100px]  translate-x-1/4 w-[50vw]">
        <GradientCircle className="blur-[120px]!" />
      </div>

      {/* content */}
      <div className="flex gap-[280px] relative">
        {/* newsletter */}
        <div className="w-[380px]">
          <p className="text-[28px] leading-[31px]">AI waits for no one.</p>
          <p className="text-[20px] leading-[31px]">
            We’ll keep you up to date with the latest.
          </p>
          <p className="text-[14px] leading-[22px]  text-light-gray mt-[20px]">
            Enter your business email below to receive updates from Gaiant.
            Please refer to our{" "}
            <span className="underline">privacy policy</span> for details or to
            contact us. You can unsubscribe at any time.
          </p>
          <div className="flex justify-between items-center pb-3 mt-[25px] relative">
            <p className="text-[18px] text-light-gray">Email Address</p>
            <ArrowSvg color="white" className="w-[18px]" />
            <div className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-dark-green-blue-gradient" />
          </div>
        </div>

        {/* links */}
        <div className="flex gap-32">
          {/* col 1 */}
          <div className="w-[72px]">
            <p className="font-ibm text-[13px] text-light-blue mb-6">
              PRODUCTS
            </p>
            <div className="leading-[21px] space-y-[20px] text-[14px]">
              <p>Archē</p>
            </div>
          </div>
          {/* col 2 */}
          <div className="w-[182px]">
            <p className="font-ibm text-[13px] text-light-blue mb-6">
              SOLUTIONS
            </p>
            <div className="leading-[21px] space-y-[20px] text-[14px]">
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
          <div className="w-[72px]">
            <p className="font-ibm text-[13px] text-light-blue mb-6">COMPANY</p>
            <div className="leading-[21px] space-y-[20px] text-[14px]">
              <p>About</p>
              <p>News</p>
              <p>Careers</p>
            </div>
          </div>
        </div>
      </div>

      {/* copyright */}
      <p className="mt-[50px] text-end whitespace-pre text-[11px] leading-[31px] relative">
        Gaiant © 2025 | Powered by Elites®
      </p>

      {/* logo */}
      <div className="absolute bottom-9 left-0 side-padding">
        <img className="w-[460px]" src="/gaiant-logo-gradient.svg" />
      </div>
    </footer>
  );
}
