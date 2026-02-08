import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Logo.jpg";

const items = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "internships", label: "Internships" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full">
      {/* Gradient Glow Line */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-indigo-500" />

      <nav
        className={`mx-auto max-w-7xl px-6 py-3 flex items-center justify-between rounded-2xl mt-3 transition-all duration-300
        ${
          scrolled
            ? "bg-slate-900/70 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(99,102,241,0.25)]"
            : "bg-slate-900/40 backdrop-blur-lg"
        }`}
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img
            src={logo}
            alt="Technical One"
            className="h-11 w-11 rounded-xl ring-2 ring-cyan-400/40 shadow-lg"
          />

          <div className="leading-tight">
            <h1 className="text-lg font-bold tracking-wide text-white">
              Technical{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
                One
              </span>
            </h1>
            <span className="text-[11px] text-emerald-400 tracking-wide">
              MSME Certified
            </span>
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {items.map((item) => (
            <ScrollLink
              key={item.id}
              to={item.id}
              smooth
              spy
              offset={-90}
              duration={600}
              activeClass="!text-cyan-400"
              className="relative cursor-pointer text-sm font-medium text-white/80 hover:text-white transition group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-fuchsia-500 transition-all duration-300 group-hover:w-full" />
            </ScrollLink>
          ))}

          {/* Careers Button */}
          <Link
            to="/careers"
            className="relative overflow-hidden rounded-xl px-5 py-2 text-sm font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-fuchsia-500 shadow-lg hover:shadow-cyan-400/40 transition"
          >
            Careers
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white"
        >
          {open ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 70, damping: 18 }}
              className="fixed top-0 right-0 z-50 h-full w-72 bg-slate-900/95 backdrop-blur-xl border-l border-white/10 p-6"
            >
              <div className="flex flex-col gap-6 mt-10">
                {items.map((item) => (
                  <ScrollLink
                    key={item.id}
                    to={item.id}
                    smooth
                    offset={-90}
                    duration={600}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium text-white/80 hover:text-cyan-400 transition"
                  >
                    {item.label}
                  </ScrollLink>
                ))}

                <Link
                  to="/careers"
                  onClick={() => setOpen(false)}
                  className="mt-6 rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-4 py-3 text-center font-semibold text-slate-900 shadow-lg"
                >
                  Careers
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
