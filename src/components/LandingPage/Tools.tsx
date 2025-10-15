import GradientCircle from "../shared/GradientCircle";
import { SectionSubTitle, SectionTitle } from "../shared/Titles";

export default function Tools() {
  return (
    <section className="mt-[120px] flex flex-col items-center relative">
      {/* bg blur */}
      <div className="absolute -z-1 left-0 top-1/2 -translate-1/2 w-[40vw] opacity-70">
        <GradientCircle blur={"lg"} />
      </div>

      {/* titles */}
      <SectionSubTitle className="text-center mb-5">
        PART OF YOUR WORKFLOW
      </SectionSubTitle>
      <SectionTitle big className="text-center max-w-[766px]">
        Works seamlessly with the tools you already use
      </SectionTitle>

      {/* icons */}
      <div className="relative overflow-x-cli w-full overflow-x-clip mt-16">
        <div className="flex justify-between items-center gap-4 absolute w-max right-1/2 translate-x-1/2">
          <img
            src="/tools/Rectangle%20100.png"
            className="w-[7.5vw] aspect-square rounded-xl opacity-20"
          />
          <img
            src="/tools/Rectangle%20101.png"
            className="w-[7.5vw] aspect-square rounded-xl opacity-40"
          />
          <img
            src="/tools/Rectangle%2099.png"
            className="w-[7.5vw] aspect-square rounded-xl opacity-60"
          />
          <img
            src="/tools/Rectangle%2098.png"
            className="w-[7.5vw] aspect-square rounded-xl"
          />
          <img
            src="/tools/Rectangle%20104.png"
            className="w-[7.5vw] aspect-square rounded-xl"
          />
          <img
            src="/tools/Rectangle%20108.png"
            className="w-[7.5vw] aspect-square rounded-xl"
          />
          <img
            src="/tools/Rectangle%20106.png"
            className="w-[7.5vw] aspect-square rounded-xl"
          />
          <img
            src="/tools/Rectangle%20103.png"
            className="w-[7.5vw] aspect-square rounded-xl"
          />
          <img
            src="/tools/Rectangle%20107.png"
            className="w-[7.5vw] aspect-square rounded-xl"
          />
          <img
            src="/tools/Rectangle%20102.png"
            className="w-[7.5vw] aspect-square rounded-xl opacity-60"
          />
          <img
            src="/tools/Rectangle%20105.png"
            className="w-[7.5vw] aspect-square rounded-xl opacity-40"
          />
          <img
            src="/tools/Rectangle%20109.png"
            className="w-[7.5vw] aspect-square rounded-xl opacity-20"
          />
        </div>
      </div>
    </section>
  );
}
