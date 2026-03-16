import { SlideUpSelf } from "../../../components/ui/Anims";
import { TitleBlock } from "../../../components/ui/Titles";
import { HORION_PAGE_DATA } from "../../../lib/data";

export default function Steps() {
  const steps = HORION_PAGE_DATA.STEPS.steps;
  return (
    <section className="my-container side-padding relative z-2">
      <div className="mb-6 justify-center max-lg:flex max-lg:text-center sm:mb-10 lg:mb-12">
        <TitleBlock {...HORION_PAGE_DATA.STEPS} />
      </div>

      <div className="flex grid-cols-3 flex-col gap-x-9 gap-y-12 max-lg:items-center lg:grid">
        {steps.map((s, i) => (
          <SlideUpSelf
            className="max-lg:max-w-[400px]"
            initial={{ y: "50px" }}
            transition={{ delay: 0.1 * i }}
          >
            <StepCard key={i} number={i + 1} {...s} />
          </SlideUpSelf>
        ))}
      </div>
    </section>
  );
}

function StepCard({
  imgFront,
  imgBack,
  title,
  text,
  number,
}: {
  imgFront?: string;
  imgBack: string;
  title: string;
  text: string;
  number: number;
}) {
  return (
    <div className="w-full space-y-0 max-lg:text-center sm:space-y-3 lg:space-y-5">
      <div className="lg-rounded relative aspect-square w-full overflow-clip">
        <img
          src={imgBack}
          aria-hidden
          alt={`Illustration of ${title} step`}
          className="h-full w-full object-contain"
        />
        {imgFront && (
          <img
            src={imgFront}
            aria-hidden
            alt={`Illustration of ${title} step`}
            className="absolute inset-0 h-full w-full object-contain"
          />
        )}
      </div>

      <div className="flex gap-5 max-lg:justify-center">
        <p className="text-[25px] leading-[47px] max-lg:hidden">{number}</p>
        <div>
          <h3 className="text-[25px] leading-[47px] whitespace-pre ">
            <span className="lg:hidden">{number}  </span>
            {title}{"  "}
          </h3>
          <p className="mt-1 max-w-[300px] text-[17px] leading-[21px]">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
