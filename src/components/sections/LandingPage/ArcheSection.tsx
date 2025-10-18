import { Link } from "react-router-dom";
import { BlurredLandscapeBg } from "../../ui/Backgrounds";
import Button from "../../ui/Button";

export default function ArcheSection() {
  return (
    <section className="relative mt-[300px]">
      {/* bg */}
      <BlurredLandscapeBg />

      {/* content */}
      <div className="my-container side-padding relative items-stretch justify-between gap-5 py-16 text-white lg:flex xl:gap-16">
        {/* text */}
        <div className="flex w-full flex-col items-start justify-between gap-10 xs:gap-20 md:flex-row lg:w-[40%] lg:flex-col">
          {/* arche */}
          <img
            src="/arche-logo.svg"
            className="w-[120px] md:w-[154px]"
            alt=""
          />
          {/* text */}
          <div className="max-xs:max-w-[357px]! max-lg:max-w-[450px]">
            <p className="text-[31px] leading-[34px] xs:text-[38px] xs:leading-[42px] xl:text-[46px] xl:leading-[47px]">
              Your complete AI solution for seamless workflows
            </p>
            <p className="mt-4 text-[15px] leading-[20px] max-lg:w-9/10 xs:mt-5 xs:text-[17px] xs:leading-[24px] xl:text-[22px] xl:leading-[28px]">
              From messy systems to one smart flow — Archē unifies it all so
              progress feels effortless.
            </p>
            <Link to="/arche">
              <Button
                className="mt-[30px] xs:mt-[40px] xl:mt-[50px]"
                arrow={"spaced"}
                size={"lg"}
              >
                LEARN MORE
              </Button>
            </Link>
          </div>
        </div>

        {/* dashboard */}
        <img
          src="/AiChatDemo.svg"
          className="mt-14 w-full xs:mt-20 lg:mt-0 lg:w-[60%] xl:w-[55%]"
        />
      </div>
    </section>
  );
}
