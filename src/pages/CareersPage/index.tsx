import CallToAction from "../../components/sections/CallToAction";
import Navbar from "../../components/sections/navbar/Navbar";
import CareersHero from "./components/CareersHero";
import LifeAtGaiant from "./components/LifeAtGaiant";
import DoYouFit from "./components/DoYouFit";
import WhatsInItForYou from "./components/WhatsInItForYou";
import OpenRoles from "./components/OpenRoles";

export default function CareersPage() {
  return (
    <>
      <Navbar transparentBg={false} />
      <main>
        <CareersHero />
        <LifeAtGaiant />
        <DoYouFit />
        <WhatsInItForYou />
        <OpenRoles />
        <CallToAction />
      </main>
    </>
  );
}
