import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-slate-900"
        >
          Short<span className="text-indigo-600">ify</span>
        </Link>

        <div className="flex items-center gap-2">
          <Link
            to="/"
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              location.pathname === "/"
                ? "bg-indigo-50 text-indigo-600"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            Shorten URL
          </Link>

          <Link
            to="/analytics"
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              location.pathname === "/analytics"
                ? "bg-indigo-50 text-indigo-600"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            Analytics
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;