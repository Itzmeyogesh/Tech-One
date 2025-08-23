import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "../assets/Logo.jpg";

const items = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "internships", label: "Internships" },
  { id: "media", label: "Media" },   // ✅ Added Media here
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all ${
        scrolled
          ? "backdrop-blur bg-white/5 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Technical One Logo"
            className="h-10 w-10 rounded-xl shadow-soft"
          />
          <span className="font-display text-xl tracking-wide">
            Technical <span className="gradient-text font-bold">One</span>
          </span>
          <span className="ml-3 px-2 py-0.5 text-xs rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/30">
            MSME Certified
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {items.map((item) => (
            <ScrollLink
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              duration={600}
              offset={-80}
              className="cursor-pointer text-sm text-white/80 hover:text-white transition"
              activeClass="text-white"
            >
              {item.label}
            </ScrollLink>
          ))}

          {/* Careers as SEPARATE PAGE */}
          <Link
            to="/careers"
            className="cursor-pointer rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-slate-900 hover:opacity-90 shadow-soft"
          >
            Careers
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 hover:bg-white/10 rounded-lg"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <FaBars />
        </button>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/80 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 py-4 grid gap-3">
            {items.map((item) => (
              <ScrollLink
                key={item.id}
                to={item.id}
                smooth={true}
                duration={600}
                offset={-80}
                onClick={() => setOpen(false)}
                className="block py-2 text-white/90"
              >
                {item.label}
              </ScrollLink>
            ))}

            {/* Careers as separate PAGE */}
            <Link
              to="/careers"
              onClick={() => setOpen(false)}
              className="block rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-4 py-2 text-slate-900 font-semibold text-center"
            >
              Careers
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
