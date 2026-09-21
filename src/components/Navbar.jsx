import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logo from "../assets/sparsha-logo.png";

const links = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Gallery", "/gallery"],
  ["About Us", "/about"],
  ["Contact Us", "/contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between gap-6">
        <Link to="/" onClick={close} className="flex min-w-0 items-center gap-3">
          <span className="whitespace-nowrap text-2xl font-black tracking-tight text-skybrand-600">Sparsha</span>
          <span className="hidden h-8 w-px bg-slate-200 sm:block" />
          <img src={logo} alt="Sparsha Logistics LLP" className="logo-clean h-14 w-36 object-contain object-left" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <NavLink
              key={href}
              to={href}
              className={({ isActive }) =>
                `text-sm font-semibold transition ${isActive ? "text-skybrand-600" : "text-slate-600 hover:text-skybrand-600"}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden items-center gap-2 rounded-full bg-skybrand-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-skybrand-500/20 transition hover:-translate-y-0.5 hover:bg-skybrand-600 lg:flex"
        >
          Get a Quote <ArrowUpRight size={17} />
        </Link>

        <button onClick={() => setOpen(!open)} className="rounded-xl border border-slate-200 p-2.5 text-slate-700 lg:hidden" aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 pb-5 pt-3 lg:hidden">
          <nav className="container-shell flex flex-col gap-1">
            {links.map(([label, href]) => (
              <NavLink key={href} to={href} onClick={close} className="rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-skybrand-50 hover:text-skybrand-600">
                {label}
              </NavLink>
            ))}
            <Link to="/contact" onClick={close} className="mt-2 rounded-xl bg-skybrand-500 px-4 py-3 text-center font-bold text-white">
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}