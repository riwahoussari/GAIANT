import { SlideUpAnim } from "../../ui/Anims";
import GradientCircle from "../../ui/GradientCircle";
import ImagesLayout from "../../ui/ImagesLayout";
import { TitleBlock } from "../../ui/Titles";

export default function TheArcheModel() {
  return (
    <section className="relative mt-[120px] overflow-x-clip">
      <div className="absolute top-0 right-0 z-0 translate-x-1/2 opacity-80">
        <GradientCircle colorr={"beige"} blur={"lg"} />
      </div>

      <div className="side-padding my-container">
        {/* text */}
        <div className="mb-10 grid items-end sm:gap-y-5 lg:grid-cols-7">
          <div className="col-span-5">
            <TitleBlock
              title="More mindspace, \n less mayhem"
              subtitle="THE ARCHĒ MODEL"
            />
          </div>
          <div className="col-span-2 lg:ms-2">
            <p className="text-16 max-w-[400px]">
              No matter the industry, Archē handles the repetitive work so your
              people can focus on the big picture.
            </p>
          </div>
        </div>

        {/* images */}
        <ImagesLayout
          img1={
            <img
              src="/woman-on-laptop.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          }
          img2={
            <img
              src="/watered-leaf.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          }
        />
      </div>
    </section>
  );
}
