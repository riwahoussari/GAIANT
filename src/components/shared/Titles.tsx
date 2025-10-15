import Button from "./Button";

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
          ? "text-[46px] leading-[53px] xs:text-[69px] xs:leading-[76px]"
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

export function TitleBlock({
  title,
  subtitle,
  button,
}: {
  title: string;
  subtitle: string;
  button?: string;
}) {
  return (
    <div className="items-start justify-between sm:flex">
      <div className="max-sm:mb-6">
        <SectionSubTitle>{subtitle}</SectionSubTitle>
        <SectionTitle>{title}</SectionTitle>
      </div>
      {button && (
        <Button arrow={"normal"} variant={"secondary"}>
          {button}
        </Button>
      )}
    </div>
  );
}
