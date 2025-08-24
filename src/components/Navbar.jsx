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
  { id: "media", label: "Media" },
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
          ? "backdrop-blur bg-slate-900/60 border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3"
        >
          <img
            src={logo}
            alt="Technical One Logo"
            className="h-10 w-10 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300"
          />
          <span className="font-display text-xl tracking-wide text-white">
            Technical{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent font-bold">
              One
            </span>
          </span>
          <span className="ml-3 px-2 py-0.5 text-xs rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/30">
            MSME Certified
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <ScrollLink
                to={item.id}
                spy={true}
                smooth={true}
                duration={600}
                offset={-80}
                className="relative cursor-pointer text-sm text-white/80 hover:text-white transition group"
                activeClass="text-white"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-fuchsia-500 transition-all group-hover:w-full"></span>
              </ScrollLink>
            </motion.div>
          ))}

          {/* Careers as SEPARATE PAGE */}
          <Link
            to="/careers"
            className="cursor-pointer rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-slate-900 hover:opacity-90 shadow-lg hover:scale-105 transition-transform"
          >
            Careers
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 hover:bg-white/10 rounded-lg text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="fixed top-0 right-0 w-64 h-full bg-slate-900/95 backdrop-blur-md shadow-lg md:hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6 text-white">
              {items.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <ScrollLink
                    to={item.id}
                    smooth={true}
                    duration={600}
                    offset={-80}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-lg hover:text-cyan-400 transition"
                  >
                    {item.label}
                  </ScrollLink>
                </motion.div>
              ))}

              {/* Careers Button */}
              <Link
                to="/careers"
                onClick={() => setOpen(false)}
                className="mt-6 block rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-4 py-3 text-slate-900 font-semibold text-center shadow-lg hover:scale-105 transition-transform"
              >
                Careers
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
