import CallToAction from "../../components/sections/CallToAction";
import { TrustedBy } from "../../components/sections/TrustedBy";
import Navbar from "../../components/sections/navbar/Navbar";
import IndustryHero from "./components/IndustryHero";
import FeaturesSection from "./components/FeaturesSection";
import UseCases from "./components/UseCases";
import OurApproach from "./components/OurApproach";
import { PageMeta } from "../../components/ui/PageMeta";
import { INDUSTRIES } from "../../lib/data";
import { Navigate, useParams } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

export default function IndustryPage() {
  const { id } = useParams();
  const INDUSTRY = INDUSTRIES.find((ind) => ind.id === id);

  if (!INDUSTRY) return <Navigate to="/industries" />;

  return (
    <Fragment key={INDUSTRY.id}>
      <PageMeta
        title={`AI for ${INDUSTRY.name} | Gaiant`}
        description={INDUSTRY.description}
      />
      <Navbar transparentBg={false} />
      <main>
        <IndustryHero industry={INDUSTRY} />
        <FeaturesSection content={INDUSTRY.features} />
        <UseCases />
        <OurApproach />
        <TrustedBy />
        <CallToAction />
      </main>
    </Fragment>
  );
}
