import Navbar from "../../components/sections/navbar/Navbar";
import CallToAction from "../../components/sections/CallToAction";
import NextRead from "./components/NextRead";
import ArticleSection from "./components/ArticleSection";

export default function ArticlePage() {
  return (
    <>
      <Navbar transparentBg={false} />
      <main>
        <ArticleSection />
        <NextRead />
        <CallToAction />
      </main>
    </>
  );
}
