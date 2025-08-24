import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../assets/Logo.jpg";

export default function Footer() {
  const icons = [
    {
      href: "mailto:hello@technicalone.example",
      label: "Email",
      icon: <FaEnvelope className="text-lg" />,
    },
    {
      href: "tel:+911234567890",
      label: "Phone",
      icon: <FaPhoneAlt className="text-lg" />,
    },
    {
      href: "https://goo.gl/maps/your-location",
      label: "Location",
      icon: <FaMapMarkerAlt className="text-lg" />,
    },
    {
      href: "https://instagram.com/technical_one",
      label: "Instagram",
      icon: <FaInstagram className="text-lg" />,
    },
    {
      href: "https://linkedin.com/company/your-linkedin",
      label: "LinkedIn",
      icon: <FaLinkedin className="text-lg" />,
    },
  ];

  return (
    <footer
      id="footer"
      className="relative mt-20 border-t border-white/10 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 backdrop-blur-lg overflow-hidden"
    >
      {/* Decorative Wave Shape */}
      <div className="absolute -top-8 left-0 w-full">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-12 fill-slate-900/80"
          preserveAspectRatio="none"
        >
          <path d="M0,128L48,144C96,160,192,192,288,213.3C384,235,480,245,576,218.7C672,192,768,128,864,117.3C960,107,1056,149,1152,165.3C1248,181,1344,171,1392,165.3L1440,160L1440,0L0,0Z"></path>
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-[auto,1fr,auto] items-center">
        {/* Logo + Company */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center gap-3"
        >
          <img
            src={logo}
            alt="Technical One Logo"
            className="h-12 w-12 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300"
          />
          <div>
            <div className="font-display text-lg text-white">
              Technical{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent animate-gradient font-bold">
                One
              </span>
            </div>
            <div className="text-xs text-white/60">
              © {new Date().getFullYear()} — All rights reserved
            </div>
          </div>
        </motion.div>

        {/* Company Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-white/70 text-sm md:text-center leading-relaxed"
        >
          Empowering learners through{" "}
          <span className="text-cyan-300 font-semibold">
            hands-on internships
          </span>{" "}
          in Web/App Development, Graphics Design, Java, Power BI, and AI/ML —
          with real-world projects and expert mentorship.
        </motion.p>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 justify-end"
        >
          {icons.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              aria-label={item.label}
              target={item.href.startsWith("http") ? "_blank" : "_self"}
              rel="noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg bg-white/5 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-fuchsia-500 hover:text-slate-900 transition-all shadow-md"
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}
