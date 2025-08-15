import { FaInstagram, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'
import logo from '../assets/Logo.jpg'

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative mt-20 border-t border-white/10 bg-gradient-to-r from-slate-900/80 via-slate-800/80 to-slate-900/80 backdrop-blur-lg"
    >
      <div className="mx-auto max-w-7xl px-6 py-10 grid gap-8 md:grid-cols-[auto,1fr,auto] items-center">
        
        {/* Logo + Company */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Technical One Logo" className="h-12 w-12 rounded-xl shadow-lg" />
          <div>
            <div className="font-display text-lg">
              Technical <span className="gradient-text font-bold">One</span>
            </div>
            <div className="text-xs text-white/60">
              © {new Date().getFullYear()} — All rights reserved
            </div>
          </div>
        </div>

        {/* Company Description */}
        <p className="text-white/70 text-sm md:text-center leading-relaxed">
          Empowering learners through hands-on internships in Web/App Development, Graphics Design,
          Java, Power BI, and AI/ML — with real-world projects and expert mentorship.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-3 justify-end">
          <a
            href="mailto:hello@technicalone.example"
            aria-label="Email"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition"
          >
            <FaEnvelope className="text-lg" />
          </a>
          <a
            href="tel:+911234567890"
            aria-label="Phone"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition"
          >
            <FaPhoneAlt className="text-lg" />
          </a>
          <a
            href="https://goo.gl/maps/your-location"
            aria-label="Location"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition"
          >
            <FaMapMarkerAlt className="text-lg" />
          </a>
          <a
            href="https://instagram.com/technical_one"
            aria-label="Instagram"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition"
          >
            <FaInstagram className="text-lg" />
          </a>
          <a
            href="https://linkedin.com/company/your-linkedin"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition"
          >
            <FaLinkedin className="text-lg" />
          </a>
        </div>
      </div>
    </footer>
  )
}
