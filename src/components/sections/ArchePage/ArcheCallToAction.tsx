import Button from "../../ui/Button";
import GradientCircle from "../../ui/GradientCircle";
import { SectionSubTitle, SectionTitle } from "../../ui/Titles";

export default function ArcheCallToAction() {
  return (
    <section className="relative mt-[120px] overflow-x-clip">
      {/* gradient circle */}
      <div className="absolute top-1/2 left-1/2 z-0 -translate-1/2 opacity-80">
        <GradientCircle className="blur-[max(6vw,60px)]!" colorr={"beige"} />
      </div>

      {/* titles */}
      <div className="my-container side-padding relative z-1 mx-auto space-y-5 text-center sm:top-5 xl:top-10">
        <SectionSubTitle>LET’S ARCHĒ</SectionSubTitle>
        <SectionTitle big>Ready to put AI to work?</SectionTitle>
      </div>

      {/* arche logo */}
      <div className="relative max-sm:mt-5">
        <div className="absolute top-0 right-1/2 w-[100vw] min-w-[350px] translate-x-1/2 xl:max-w-[1280px] 2xl:max-w-[1536px]">
          <img src="/arche-logo-teal.svg" className="w-full opacity-30" />
          <img
            src="/arche-logo-beige.svg"
            className="absolute top-0 w-full opacity-30"
          />
        </div>
        {/* placeholder to maintain height */}
        <div className="w-[100vw] min-w-[350px] xl:max-w-[1280px] 2xl:max-w-[1536px]">
          <img src="/arche-logo-teal.svg" className="w-full opacity-0" />
        </div>
      </div>

      {/* button */}
      <div className="relative mt-12 flex justify-center sm:mt-16">
        <Button variant={"black"}>REQUEST A DEMO</Button>
      </div>
    </section>
  );
}
