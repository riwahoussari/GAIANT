import Button from "../shared/Button";

export default function Feature() {
  return (
    <section className="side-padding relative mt-[300px]">
      {/* bg */}
      <div className="absolute left-0 right-0 top-0 z-0 overflow-x-clip">
        <div className=" w-[120%]! -translate-[5%] blur-[35px]">
          <img src="/landing-page-banner.jpg" />
        </div>
      </div>

      {/* content */}
      <div className="flex justify-between items-stretch py-16 gap-16 relative text-white">
        <div className=" flex flex-col justify-between w-[40%]">
          <img src="/arche-logo.svg" className="w-[154px]" alt="" />
          <div>
            <p className="text-[46px] leading-[47px]">
              Your complete AI solution for seamless workflows
            </p>
            <p className="text-[20px] leading-[28px] mt-5">
              From messy systems to one smart flow — Archē unifies it all so
              progress feels effortless.
            </p>
            <Button className="mt-[50px]" arrow={"spaced"} size={"lg"}>
              LEARN MORE
            </Button>
          </div>
        </div>
        <div className="w-[50vw]">
          <img src="/AiChatDemo.svg" alt="" />
        </div>
      </div>
    </section>
  );
}
