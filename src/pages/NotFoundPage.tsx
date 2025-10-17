import Navbar from "../components/sections/common/Navbar";

export default function NotFoundPage() {
  return (
    <>
      <Navbar transparentBg={false} />
      <main className="my-container side-padding min-h-[50vh] flex items-center justify-center">
        <h1 className="mt-60 text-center text-3xl">404 Page Not Found</h1>
      </main>
    </>
  );
}
