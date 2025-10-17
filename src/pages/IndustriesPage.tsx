import CallToAction from "../components/sections/common/CallToAction";
import { IndustryCard } from "../components/ui/Cards";
import Hero from "../components/sections/common/Hero";
import ArrowSvg from "../components/ui/ArrowSvg";
import Button from "../components/ui/Button";
import GradientCircle from "../components/ui/GradientCircle";
import { TitleBlock2 } from "../components/ui/Titles";
import { INDUSTRIES } from "../lib/constants";

export default function IndustriesPage() {
  return (
    <main>
      <Hero
        className="text-black!"
        spacing="max"
        subtitle="INDUSTRIES"
        title="Solutions designed for any industry need"
        text="Every organization faces unique challenges. Our AI adapts, scales, and delivers value across fields — streamlining operations and enabling smarter decisions, all while fitting the way you work."
        button={
          <Button variant={"black"} arrow={"spaced"}>
            REQUEST A DEMO
          </Button>
        }
        background={
          <div className="absolute top-[240px] left-0 w-[500px] -translate-x-1/4 opacity-70 lg:w-[40vw] lg:min-w-[550px]">
            <GradientCircle blur={"lg"} />
          </div>
        }
      />

      {/* Cards */}
      <section className="side-padding my-container grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {INDUSTRIES.map((industry, i) => (
          <IndustryCard
            key={i}
            className="aspect-11/9!"
            title={industry.name}
            text={industry.description}
            button={!!industry.description}
            imgSrc={industry.img}
          />
        ))}
      </section>

      <TestimonialSection />
      <CallToAction />
    </main>
  );
}

function TestimonialSection() {
  return (
    <section className="my-container side-padding relative mt-[130px]">
      <div className="absolute top-1/2 left-1/2 z-0 -translate-1/2 opacity-40">
        <GradientCircle
          className="scale-y-200 -rotate-90 blur-[max(3vw,30px)]! max-sm:scale-x-200"
          colorr={"teal"}
        />
      </div>

      <div className="relative mb-8">
        <TitleBlock2
          title="Hear from our customers"
          subtitle="Industry leaders trust Gaiant to deliver better customer experiences"
        />
      </div>

      <div className="bg-linear-white-transparent-70 relative mx-auto flex max-w-[1100px] flex-col items-center justify-center gap-8 rounded-[20px] max-sm:bg-none! sm:p-12">
        {/* text */}
        <div className="bg-linear-white-transparent-70 flex min-h-[250px] max-w-[800px] flex-col justify-between gap-8 rounded-[20px] p-8">
          <p className="text-[19px] leading-[25px] xs:text-[21px] xs:leading-[27px]">
            “Gaiant transformed how we work — reports that used to take days now
            take minutes. Accuracy is solid, integrations were painless, and our
            team actually trusts the insights. ROI within two months”.
          </p>

          <div className="flex items-center gap-3">
            <img
              src="/industries/woman-profile.jpg"
              className="aspect-square w-11 rounded-sm"
            />
            <div className="leading-[19px]">
              <p className="text-16">Maya Hage</p>
              <p className="text-[13px] text-[#838383] xs:text-[14px]">
                Head of Operations, NovaHealth
              </p>
            </div>
          </div>
        </div>
        {/* pagination */}
        <div className="flex w-full max-w-[800px] items-center justify-between max-sm:px-8">
          <div className="flex gap-6 sm:gap-8">
            <div className="aspect-square w-2.5 rounded-full bg-black" />
            <div className="aspect-square w-2.5 rounded-full bg-black/30" />
            <div className="aspect-square w-2.5 rounded-full bg-black/30" />
          </div>
          <div className="flex items-center gap-8">
            <ArrowSvg className="w-6 rotate-180" color="black" />
            <ArrowSvg className="w-6" color="black" />
          </div>
        </div>
      </div>
    </section>
  );
}
