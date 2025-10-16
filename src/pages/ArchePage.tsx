import ArcheCallToAction from "../components/sections/ArchePage/ArcheCallToAction";
import ArcheFeatures from "../components/sections/ArchePage/ArcheFeatures";
import DiscoverArche from "../components/sections/ArchePage/DiscoverArche";
import TheArcheModel from "../components/sections/ArchePage/TheArcheModel";
import Hero from "../components/sections/common/Hero";
import { LandscapeBg } from "../components/ui/Backgrounds";
import Button from "../components/ui/Button";

export default function ArchePage() {
  return (
    <main>
      {/* <Hero
        spacing="max"
        subtitle="ARCHĒ"
        title="AI for business that turns complexity into clarity"
        text="Archē sets the standard for business performance by helping teams automate work and accelerate decisions that drive results — all in one scalable, secure workspace."
        button={<Button arrow={"spaced"}>REQUEST A DEMO</Button>}
        background={<LandscapeBg />}
      >
        <div className="side-padding my-container relative">
          <img
            src="/AiChatDemo3.svg"
            alt=""
            className="bg-linear-white-transparent mx-auto w-full max-w-[920px] rounded-xl object-contain backdrop-blur-[1000px] sm:w-9/10 lg:w-8/10"
          />
        </div>
      </Hero>

      <TheArcheModel />
      <DiscoverArche />
      <ArcheFeatures /> */}
      <ArcheCallToAction />
    </main>
  );
}
