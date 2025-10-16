import GradientCircle from "../../ui/GradientCircle";
import { SectionSubTitle, SectionTitle } from "../../ui/Titles";

export default function Tools() {
  return (
    <section className="side-padding relative mt-[120px] flex flex-col items-center overflow-x-clip">
      {/* bg blur */}
      <div className="absolute top-1/2 left-0 -z-1 w-[40vw] -translate-1/2 opacity-70">
        <GradientCircle blur={"lg"} />
      </div>

      {/* titles */}
      <SectionSubTitle className="mb-5 text-center">
        PART OF YOUR WORKFLOW
      </SectionSubTitle>
      <SectionTitle big className="max-w-[766px] text-center">
        Works seamlessly with the tools you already use
      </SectionTitle>

      {/* icons */}
      <div className="relative mt-16 w-full">
        <div className="absolute right-1/2 flex w-max translate-x-1/2 flex-col items-center justify-between gap-[min(18px,2.5vw)] lg:flex-row">
          <div className="flex items-center justify-between gap-[min(18px,2.5vw)]">
            <Icon
              className="opacity-60 lg:opacity-20"
              src="/tools/Rectangle%20100.png"
            />
            <Icon
              className="opacity-80 max-lg:-translate-y-15/100 lg:opacity-40"
              src="/tools/Rectangle%20101.png"
            />
            <Icon
              className="max-lg:-translate-y-3/10 lg:opacity-60"
              src="/tools/Rectangle%2099.png"
            />
            <Icon
              className="max-lg:-translate-y-3/10"
              src="/tools/Rectangle%2098.png"
            />
            <Icon
              className="max-lg:-translate-y-15/100 max-lg:opacity-80"
              src="/tools/Rectangle%20104.png"
            />
            <Icon
              className="max-lg:opacity-60"
              src="/tools/Rectangle%20108.png"
            />
          </div>
          <div className="flex items-center justify-between gap-[min(18px,2.5vw)]">
            <Icon
              className="max-lg:opacity-60"
              src="/tools/Rectangle%20106.png"
            />
            <Icon
              className="max-lg:-translate-y-15/100 max-lg:opacity-80"
              src="/tools/Rectangle%20103.png"
            />
            <Icon
              className="max-lg:-translate-y-3/10"
              src="/tools/Rectangle%20107.png"
            />
            <Icon
              className="max-lg:-translate-y-3/10 lg:opacity-60"
              src="/tools/Rectangle%20102.png"
            />
            <Icon
              className="opacity-80 max-lg:-translate-y-15/100 lg:opacity-40"
              src="/tools/Rectangle%20105.png"
            />
            <Icon
              className="opacity-60 lg:opacity-20"
              src="/tools/Rectangle%20109.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Icon({ src, className = "" }: { src: string; className?: string }) {
  return (
    <img
      src={src}
      className={
        "aspect-square w-[16vw] max-w-[120px] rounded-lg xs:rounded-xl sm:w-[7.5vw] sm:min-w-[90px] " +
        className
      }
    />
  );
}
