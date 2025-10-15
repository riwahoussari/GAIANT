import GreenBlueGradient from "../../assets/green-blue-gradient.jpg";
import Button from "../shared/Button";
import GradientCircle from "../shared/GradientCircle";

export default function Hero() {
  return (
    <section className="side-padding ">
      {/* gradients bg */}
      <div className="absolute left-0 right-0 top-0 z-0 overflow-x-clip">
        <div className="relative">
          <div className=" w-[120%]! -translate-[10%] blur-[100px]">
            <img src={GreenBlueGradient} />
          </div>

          <div className="absolute left-1/2 top-[140px] -translate-x-1/2 w-[40vw]">
            <GradientCircle />
          </div>
        </div>
      </div>

      {/* text content */}
      <div className="relative mt-[280px] text-white flex gap-[50px]">
        <h1 className="text-[69px] leading-[76px] max-w-[651px]">
          One AI work platform for any kind of work
        </h1>
        <div>
          <p className="text-[23px] leading-[31px] max-w-[360px] mt-[18px]">
            Gaiant is where powerful AI meets practical business solutions, so
            you can work smarter.{" "}
          </p>
          <Button arrow={"spaced"} className="mt-[110px]">
            REQUEST A DEMO
          </Button>
        </div>
      </div>

      {/* images */}
      <div className="relative mt-[140px] grid grid-cols-7 gap-8 ">
        {/* img 1 */}
        <div className="relative py-12 bg-white/50 col-span-5 rounded-xl flex items-center justify-center">
          {/* dashboard */}
          <img
            src="/patient-history-dashboard.svg"
            alt=""
            className="rounded-xl blur-xs max-h-[420px] "
          />
          {/* text */}
          <div className="absolute top-1/2 left-1/2 -translate-1/2 flex flex-col gap-16  w-8/10 ">
            <div className="flex">
              <p className="text-[20px] text-dark-green bg-white px-3 py-2 rounded-lg">
                Personalization
              </p>
            </div>
            <div className="flex justify-end">
              <p className="text-[20px] text-dark-green bg-white px-3 py-2 rounded-lg">
                Bite-sized Content
              </p>
            </div>
            <div className="flex ps-16">
              <p className="text-[20px] text-dark-green bg-white px-3 py-2 rounded-lg">
                Blending Physical & Digital
              </p>
            </div>
          </div>
        </div>

        {/* img 2 */}
        <div className=" bg-white/50 col-span-2 rounded-xl overflow-clip">
          <img
            src="/hero-img-1.jpg"
            alt=""
            className="object-cover h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}
