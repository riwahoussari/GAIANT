import { Link, Outlet } from "react-router-dom";
import Button from "../../ui/Button";

export default function Navbar() {
  return (
    <>
      <header className="my-container side-padding fixed top-0 right-0 left-0 z-100 flex items-center justify-between py-3 text-white">
        {/* logo */}
        <div className="lg:w-[160px]">
          <div className="w-24 translate-y-1 xs:w-32">
            <img src="/gaiant-logo.svg" alt="Gaiant Logo" />
          </div>
        </div>

        {/* links */}
        <div className="hidden items-center justify-between gap-24 lg:flex">
          <Link to="/products">
            <p className="text-sm">Products</p>
          </Link>
          <Link to="/solutions">
            <p className="text-sm">Solutions</p>
          </Link>
          <Link to="/company">
            <p className="text-sm">Company</p>
          </Link>
        </div>

        <div className="lg:w-[160px]">
          <Button>REQUEST A DEMO</Button>
        </div>
      </header>
      <Outlet />
    </>
  );
}
