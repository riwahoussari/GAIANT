import Button from "../../ui/Button";
import GradientCircle from "../../ui/GradientCircle";
import { SectionSubTitle, SectionTitle } from "../../ui/Titles";

export default function ArcheCallToAction() {
  return (
    <section className="my-container side-padding relative mt-[120px]">
      {/* gradient circle */}
      <div className="absolute top-1/2 left-1/2 z-0 -translate-1/2">
        <GradientCircle className="blur-[max(6vw,60px)]!" colorr={"beige"} />
      </div>

      {/* titles */}
      <div className="relative z-1 mx-auto mb-5 text-center">
        <SectionSubTitle>LET’S ARCHĒ</SectionSubTitle>
      </div>
      <div className="relative z-1 mx-auto text-center">
        {/* arche logo */}
        <div className="absolute top-4 -right-[2vw] -left-[2vw] z-0 block opacity-100">
          <img
            src="/arche-logo-teal.svg"
            className="absolute top-0 w-full min-w-[1000px] opacity-30"
          />
          <img
            src="/arche-logo-beige.svg"
            className="absolute top-0 w-full min-w-[1000px] opacity-30"
          />
        </div>
        <div className="relative z-1">
          <SectionTitle big>Ready to put AI to work?</SectionTitle>
        </div>
      </div>

      {/* spacing */}
      <div className="my-12 aspect-square w-[90%] max-w-[310px] 2xl:max-w-[350px]" />

      {/* button */}
      <div className="relative z-1 flex justify-center">
        <Button variant={"black"}>REQUEST A DEMO</Button>
      </div>
    </section>
  );
}
