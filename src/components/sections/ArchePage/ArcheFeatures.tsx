import { SectionTitle } from "../../ui/Titles";

export default function ArcheFeatures() {
  return (
    <section className="side-padding my-container flex flex-col items-center gap-y-8 overflow-x-clip sm:gap-y-14">
      {/* title */}
      <div className="text-center">
        <SectionTitle>Make AI work for you</SectionTitle>
        <p className="text-16">
          No matter the role or industry, Archē handles the repetitive work so
          your people can focus on the big picture
        </p>
      </div>
      {/* tabs */}
      <div className="grid grid-cols-2 items-center justify-items-stretch gap-2 rounded-full px-3 py-2.5 text-center max-sm:flex-wrap xs:grid-cols-3 sm:flex sm:justify-between sm:border-1 lg:gap-8">
        <p className="rounded-full bg-black px-5 py-2 text-[16px] text-white xs:text-[17px]">
          Vault
        </p>
        <p className="rounded-full px-5 py-2 text-[16px] text-black max-sm:border-1 xs:text-[17px]">
          Legal
        </p>
        <p className="rounded-full px-5 py-2 text-[16px] text-black max-sm:border-1 xs:text-[17px]">
          Sales
        </p>
        <p className="rounded-full px-5 py-2 text-[16px] text-black max-sm:border-1 xs:text-[17px]">
          Finance
        </p>
        <p className="rounded-full px-5 py-2 text-[16px] text-black max-sm:border-1 xs:text-[17px]">
          Operations
        </p>
        <p className="rounded-full px-5 py-2 text-[16px] text-black max-sm:border-1 xs:text-[17px]">
          HR
        </p>
      </div>
      {/* image */}
      <div className="relative">
        <img
          src="/doctorTyping.jpg"
          className="absolute top-0 right-0 w-[85%] md:w-[52%]"
          alt=""
        />
        <img src="/AIWorking.svg" className="relative w-full max-md:hidden" />
        <img src="/AIWorkingMobile.svg" className="relative w-full md:hidden" />
      </div>
    </section>
  );
}
