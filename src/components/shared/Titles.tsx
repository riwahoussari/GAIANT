export function SectionTitle({
  children,
  className,
  big = false,
}: {
  children: string;
  className?: string;
  big?: boolean;
}) {
  return (
    <h2
      className={
        (big
          ? "text-[69px] leading-[76px]"
          : "text-[32px] leading-[39px] xs:text-[40px] xs:leading-[47px]") +
        " " +
        className
      }
    >
      {children}
    </h2>
  );
}
export function SectionSubTitle({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <p className={"font-ibm! text-[11px] xs:text-[12px]" + " " + className}>
      {children}
    </p>
  );
}
