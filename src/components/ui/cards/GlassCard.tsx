export default function GlassCard({
  title,
  subtitle,
  text,
  className,
  textClassName,
  animation,
}: {
  title: string;
  subtitle: string;
  text: string;
  className?: string;
  textClassName?: string;
  animation?: string;
}) {
  return (
    <div
      className={
        "relative h-full overflow-hidden bg-white p-3 xs:p-6 " +
        (className || "")
      }
    >
      {/* title & animation */}
      <div className="relative flex items-end justify-end gap-2">
        <p className="text-25 absolute bottom-0 left-0 z-[1] max-w-[300px]">{title}</p>

        <div
          className={
            "aspect-square w-[33%] min-w-[80px] " +
            (!animation && "rounded-full border-2 border-red")
          }
        >
          {animation && (
            <video
              src={animation}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-contain"
            />
          )}
        </div>
      </div>

      {/* text */}
      <div className="relative mt-8 space-y-2 xs:mt-10 xs:space-y-3 2xl:mt-16 2xl:space-y-4">
        <p className="font-ibm! text-[11px] leading-[15px] font-semibold text-teal xs:text-[12px]">
          {subtitle}
        </p>
        <p className={" text-[15px] leading-[21px] xs:text-[16px] " + textClassName}>
          {text.split("<br>").map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}