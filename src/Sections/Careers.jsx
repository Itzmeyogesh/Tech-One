import { motion } from "framer-motion";
import {
  FaReact,
  FaJava,
  FaBrain,
  FaChartBar,
  FaPaintBrush,
  FaEnvelopeOpenText,
} from "react-icons/fa";

export default function Careers() {
  const roles = [
    {
      icon: <FaReact className="text-cyan-400 text-2xl drop-shadow-glow" />,
      title: "Web Development Mentor (React/Node)",
    },
    {
      icon: <FaJava className="text-orange-400 text-2xl drop-shadow-glow" />,
      title: "Java Trainer (Core + OOP)",
    },
    {
      icon: <FaChartBar className="text-yellow-400 text-2xl drop-shadow-glow" />,
      title: "Power BI Mentor",
    },
    {
      icon: <FaBrain className="text-pink-400 text-2xl drop-shadow-glow" />,
      title: "AI/ML Mentor",
    },
    {
      icon: (
        <FaPaintBrush className="text-green-400 text-2xl drop-shadow-glow" />
      ),
      title: "Graphics Designer (Brand & Social)",
    },
  ];

  return (
    <section
      id="careers"
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-950 text-white"
    >
      {/* Decorative blurred orbs */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-5xl font-extrabold text-center"
        >
          Careers at{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
            Technical One
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-white/80 max-w-3xl mx-auto text-center leading-relaxed"
        >
          We’re always looking for <span className="text-cyan-300">mentors</span>,{" "}
          <span className="text-fuchsia-300">trainers</span>, and{" "}
          <span className="text-purple-300">project contributors</span> across our
          domains. If you’re passionate about teaching and building, we’d love to
          hear from you.
        </motion.p>

        {/* Content Grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Current Needs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-lg shadow-lg hover:shadow-cyan-500/20 transition"
          >
            <div className="font-semibold text-xl mb-4 flex items-center gap-2">
              <FaEnvelopeOpenText className="text-cyan-400" /> Current Needs
            </div>
            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 },
                },
              }}
              className="mt-4 space-y-4"
            >
              {roles.map((role, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: { opacity: 1, x: 0 },
                  }}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition"
                >
                  {role.icon}
                  <span>{role.title}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* How to Apply */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-lg shadow-lg hover:shadow-fuchsia-500/20 transition"
          >
            <div className="font-semibold text-xl flex items-center gap-2">
              <FaEnvelopeOpenText className="text-pink-400" /> How to Apply
            </div>
            <p className="mt-3 text-white/80">
              Send your <span className="text-cyan-300">resume</span>,{" "}
              <span className="text-fuchsia-300">portfolio/GitHub</span>, and a
              brief note about your teaching approach.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-block rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-6 py-3 font-semibold text-slate-900 shadow-lg hover:scale-110 hover:shadow-fuchsia-400/40 transition-transform animate-pulse"
            >
              Apply via Contact
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
