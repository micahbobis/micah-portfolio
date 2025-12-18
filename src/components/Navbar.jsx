import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from "react";

export default function Navbar() {
  const sections = ["home","about","projects","skills","experience","contact"];
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 mx-auto max-w-6xl px-4 py-2 backdrop-blur bg-white/70 rounded-xl shadow-md transition-all duration-300">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="font-bold text-2xl text-gray-800 cursor-pointer" onClick={() => scroll.scrollToTop()}>
          Micah Avrill
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-4">
          {sections.map(s => (
            <li key={s}>
              <Link
                to={s}
                smooth
                duration={500}
                offset={-80}
                className={`px-4 py-1 rounded-full cursor-pointer transition-colors ${
                  active === s
                    ? "bg-accentLight text-gray-900 font-semibold shadow-sm"
                    : "hover:bg-accentLight hover:text-gray-900"
                }`}
                onSetActive={() => setActive(s)}
              >
                {s.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            className="text-gray-800 text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden mt-2 rounded-xl overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-2 bg-sectionDark p-4 text-gray-800">
          {sections.map(s => (
            <li key={s}>
              <Link
                to={s}
                smooth
                duration={500}
                offset={-80}
                onClick={() => setOpen(false)}
                className="block px-4 py-2 rounded hover:bg-accentLight hover:text-gray-900 transition-colors"
              >
                {s.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
