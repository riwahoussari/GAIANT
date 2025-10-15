import GreenBlueGradient from "../../assets/green-blue-gradient.jpg";
import Button from "../shared/Button";
import GradientCircle from "../shared/GradientCircle";

export default function Hero() {
  return (
    <section className="side-padding my-container">
      {/* gradients bg */}
      <div className="absolute top-0 right-0 bottom-0 left-0 z-0 overflow-x-clip">
        <div className="relative h-full">
          <div className="h-full w-[120vw]! -translate-x-[10vw] -translate-y-[10%] blur-[6vw] lg:h-[950px] xl:h-[1000px] 2xl:h-[1100px]">
            <img
              src={GreenBlueGradient}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute top-[140px] left-1/2 w-[500px] -translate-x-1/2 lg:w-[40vw] lg:min-w-[550px]">
            <GradientCircle />
          </div>
        </div>
      </div>

      {/* text content */}
      <div className="relative mt-[200px] flex flex-col text-white lg:flex-row lg:gap-[40px] xl:mt-[280px] xl:gap-[56px]">
        <h1 className="max-w-[547px] text-[min(12vw,50px)] leading-[calc(min(12vw,50px)+7px)] xs:text-[58px] xs:leading-[65px] xl:max-w-[651px] xl:text-[69px] xl:leading-[76px]">
          One AI work platform for any kind of work
        </h1>
        <div>
          <p className="mt-[18px] max-w-[324px] text-[min(4.3vw,18px)] leading-[calc(min(4.3vw,18px)+6px)] xs:text-[20px] xs:leading-[28px] xl:max-w-[360px] xl:text-[23px] xl:leading-[31px]">
            Gaiant is where powerful AI meets practical business solutions, so
            you can work smarter.{" "}
          </p>
          <Button arrow={"spaced"} className="mt-[80px] xl:mt-[110px]">
            REQUEST A DEMO
          </Button>
        </div>
      </div>

      {/* images */}
      <div className="relative mt-[140px] grid lg:grid-cols-7">
        {/* img 1 */}
        <div className="relative col-span-5 flex items-center justify-center rounded-xl bg-white/50 p-2 py-4 xs:p-6 lg:me-5 lg:aspect-5/3! lg:px-0 lg:py-12">
          <img
            src="/patient-history-dashboard.svg"
            alt=""
            className="h-full object-contain"
          />
        </div>

        {/* img 2 */}
        <div className="absolute right-0 bottom-full col-span-2 overflow-clip rounded-md bg-white/50 max-xs:hidden max-lg:w-[min(25vw,160px)] max-lg:-translate-y-6 lg:static lg:ms-2 lg:aspect-2/3! lg:rounded-xl">
          <img
            src="/hero-img-1.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
