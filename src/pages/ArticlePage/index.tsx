import Navbar from "../../components/sections/navbar/Navbar";
import CallToAction from "../../components/sections/CallToAction";
import NextRead from "./components/NextRead";
import ArticleSection from "./components/ArticleSection";
import { PageMeta } from "../../components/ui/PageMeta";
import { useHeroNoImage } from "../../lib/PreloaderContext";

export default function ArticlePage() {
  // Hide preloader immediately since this page has no hero image
  useHeroNoImage();

  return (
    <>
      <PageMeta
        title="Why Language is the Next Frontier of Business Intelligence | Gaiant Insights"
        description="Read Gaiant’s take on Language in Business Intelligence. Explore how AI is redefining work, accelerating decisions, and driving real-world impact across industries."
      />
      <Navbar transparentBg={false} />
      <main>
        <ArticleSection />
        <NextRead />
        <CallToAction />
      </main>
    </>
  );
}
