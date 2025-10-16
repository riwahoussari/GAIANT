interface HeroProps {
  title: string;
  subtitle?: string;
  text: string;
  spacing?: "min" | "max";
  button: React.ReactNode;
  background?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export default function Hero({
  title,
  subtitle,
  text,
  spacing = "min",
  button,
  background,
  className,
  children,
}: HeroProps) {
  return (
    <section className={"relative text-white " + (className || "")}>
      {/* gradients bg */}
      <div className="absolute top-0 right-0 bottom-0 left-0 z-0 overflow-x-clip">
        {background}
      </div>

      {/* text content */}
      <div className="side-padding my-container relative pt-[200px] pb-[140px] xl:pt-[280px]">
        <p className="mb-5 font-ibm! text-[16px] xs:text-[18px]">{subtitle}</p>
        <div
          className={
            "flex flex-col lg:flex-row " +
            (spacing === "min"
              ? " lg:gap-[40px] xl:gap-[56px]"
              : " lg:gap-[60px] xl:gap-[80px]")
          }
        >
          <h1
            className={
              "text-[min(12vw,50px)] leading-[calc(min(12vw,50px)+7px)] xs:text-[58px] xs:leading-[65px] lg:w-6/10 xl:text-[69px] xl:leading-[76px] " +
              (spacing === "min"
                ? " max-w-[547px] xl:max-w-[660px]"
                : " max-w-[660px] xl:max-w-[800px]")
            }
          >
            {title}
          </h1>
          <div>
            <p
              className={
                "mt-[18px] text-[min(4.3vw,18px)] leading-[calc(min(4.3vw,18px)+6px)] xs:text-[20px] xs:leading-[28px] xl:text-[23px] xl:leading-[31px] " +
                (spacing === "min"
                  ? " max-w-[324px] xl:max-w-[360px]"
                  : " max-w-[440px] xl:max-w-[500px]")
              }
            >
              {text}
            </p>
            <div className="mt-[80px] xl:mt-[110px]">{button}</div>
          </div>
        </div>
      </div>

      {children}
    </section>
  );
}
