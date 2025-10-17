import Button from "../components/ui/Button";
import ShareIcon from "../assets/share-icon.svg";

export default function NewsArticlePage() {
  return (
    <main>
      <Article />
    </main>
  );
}

function Article() {
  return (
    <section className="my-container side-padding">
      <div className="relative mt-[100px]">
        {/* back button */}
        <div className="absolute top-0 left-0">
          <Button
            arrow={"back"}
            className="bg-transparent! px-0!"
            variant={"secondary"}
          >
            BACK TO BLOG
          </Button>
        </div>

        {/* article */}
        <div className="mx-auto max-w-[680px]">
          {/* title */}
          <div className="space-y-2.5">
            <p className="text-[40px] leading-[44px]">
              Why Language is the Next Frontier of Business Intelligence
            </p>
            <p className="text-[22px] leading-[27px]">
              Data alone is no longer enough—understanding and harnessing
              language is becoming the decisive edge for modern businesses.
            </p>

            <div className="my-8 flex items-center justify-between text-teal">
              <p className="font-ibm">GAIANT TEAM - SEP 19, 2025</p>

              <div className="flex gap-2">
                <p className="font-bold">SHARE</p>
                <img src={ShareIcon} />
              </div>
            </div>
          </div>

          {/* image */}
          <div
            className="relative aspect-2/1!"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 80%, 90% 100%, 0 100%)",
            }}
          >
            <img
              src="/people-walking.jpg"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
