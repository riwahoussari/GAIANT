import { Link, Outlet } from "react-router-dom";
import Button from "./shared/Button";

export default function Navbar() {
  return (
    <>
      <header className="my-container fixed z-100 top-0 left-0 right-0 text-white flex justify-between items-center side-padding py-3">
        {/* logo */}
        <div className="lg:w-[160px]">
          <div className="w-24 xs:w-32 translate-y-1">
            <img src="/gaiant-logo.svg" alt="Gaiant Logo" />
          </div>
        </div>

        {/* links */}
        <div className="justify-between items-center gap-24 hidden lg:flex">
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
