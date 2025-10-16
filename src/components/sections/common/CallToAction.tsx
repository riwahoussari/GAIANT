import Button from "../../ui/Button";
import { SectionSubTitle, SectionTitle } from "../../ui/Titles";

export default function CallToAction() {
  return (
    <section className="my-container side-padding mt-[120px]">
      {/* titles */}
      <div className="mx-auto space-y-5 text-center">
        <SectionSubTitle>ARE YOU READY?</SectionSubTitle>
        <SectionTitle big>See how simple AI can really be</SectionTitle>
      </div>

      {/* circle */}
      <div className="mx-auto my-12 aspect-square w-[90%] max-w-[310px] rounded-full border-2 border-red-500" />

      {/* button */}
      <div className="flex justify-center">
        <Button variant={"black"}>REQUEST A DEMO</Button>
      </div>
    </section>
  );
}
