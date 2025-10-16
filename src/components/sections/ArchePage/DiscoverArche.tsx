import { BlurredLandscapeBg } from "../../ui/Backgrounds";
import { TitleBlock } from "../../ui/Titles";

export default function DiscoverArche() {
  return (
    <section className="relative mt-[200px] overflow-x-clip pb-24">
      {/* bg */}
      <BlurredLandscapeBg blur={"lg"} />

      <div className="side-padding my-container py-[10px]">
        {/* title */}
        <div className="relative max-w-[520px] space-y-3 sm:space-y-5">
          <TitleBlock title="Accelerate impact \nand outcomes" />
          <p className="text-16">
            Enable seamless human-agent collaboration, automate routine tasks,
            and transform fragmented data into actionable insights.
          </p>
        </div>
        {/* card */}
        <div className="bg-linear-white-transparent-70 mt-12 sm:mt-16 flex items-center justify-between gap-x-5 gap-y-10 rounded-xl px-4 py-10 backdrop-blur-[100px] max-lg:flex-col sm:gap-y-14 sm:px-10 sm:py-16 xl:p-20">
          {/* text */}
          <div className="max-w-[380px] text-white max-lg:text-center">
            <p className="font-ibm! text-[11px] xs:text-[12px]">
              ADVANCED SEARCH & RETRIEVAL
            </p>
            <p className="text-[50px] xs:text-[60px]">Discover</p>
            <p className="text-16">
              From basic Q&A to complex decision making, Archē surfaces
              verifiable insights grounded in your data.
            </p>
          </div>
          {/* image */}
          <img
            src="/patient-history-dashboard-beige.svg"
            className="w-full max-w-[700px] min-w-[320px] lg:w-6/10"
          />
        </div>
      </div>
    </section>
  );
}
