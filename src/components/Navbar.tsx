import { Link, Outlet } from "react-router-dom";
import Button from "./shared/Button";

export default function Navbar() {
  return (
    <>
      <header className="fixed z-100 top-0 left-0 right-0 text-white flex justify-between items-center side-padding py-3">
        {/* logo */}
        <div className="w-32 translate-y-1">
          <img src="./gaiant-logo.svg" alt="Gaiant Logo" />
        </div>

        {/* links */}
        <div className="flex justify-between items-center gap-24">
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

        <Button>REQUEST A DEMO</Button>
      </header>
      <Outlet />
    </>
  );
}
