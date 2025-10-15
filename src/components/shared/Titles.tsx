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
        (big ? "text-[69px] leading-[76px]" : "text-[40px] leading-[47px]") +
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
  return <p className={"font-ibm! text-[12px]" + " " + className}>{children}</p>;
}
