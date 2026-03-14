import { SlideUpSelf } from "../../../components/ui/Anims";
import { CenteredTitleBlock } from "../../../components/ui/Titles";
import { HORION_PAGE_DATA } from "../../../lib/data";

export default function Comparison() {
  return (
    <section className="relative z-2 overflow-x-clip mt-[120px]">
      <div className="my-container side-padding flex max-w-[1200px]! flex-col items-center">
        <CenteredTitleBlock {...HORION_PAGE_DATA.COMPARISON} />

        <div className="relative z-1 w-full mt-6 sm:mt-10 lg:mt-12">
          <SlideUpSelf initial={{ y: "60px" }}>
            <div className="lg-rounded flex gap-y-6 sm:gap-y-8 gap-x-5 lg:gap-x-9 w-full overflow-clip max-md:flex-col mx-auto max-md:max-w-[500px]">
              <div className="w-full md:w-1/2">
                <div className="sr-only">
                  <h3>Other AI Meeting Assistants</h3>
                  <p>No actionable feedback</p>
                  <p>Only records or trasncribes meetings</p>
                </div>
                <img
                  aria-hidden
                  className={"aspect-249/224 w-full"}
                  {...HORION_PAGE_DATA.COMPARISON.others}
                />
              </div>
              <div className="w-full md:w-1/2">
                <div className="sr-only">
                  <h3>Horion</h3>
                  <p>Live feedback on tone and pace</p>
                  <p>Emotional awareness to improve impact</p>
                </div>
                <img
                  aria-hidden
                  className={"aspect-249/224 w-full"}
                  {...HORION_PAGE_DATA.COMPARISON.horion}
                />
              </div>
            </div>
          </SlideUpSelf>
        </div>
      </div>
    </section>
  );
}
