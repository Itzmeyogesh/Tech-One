import { motion } from 'framer-motion'
import { FaReact, FaJava, FaBrain, FaChartBar, FaPaintBrush, FaEnvelopeOpenText } from 'react-icons/fa'

export default function Careers() {
  const roles = [
    { icon: <FaReact className="text-cyan-400 text-2xl drop-shadow-glow" />, title: "Web Development Mentor (React/Node)" },
    { icon: <FaJava className="text-orange-400 text-2xl drop-shadow-glow" />, title: "Java Trainer (Core + OOP)" },
    { icon: <FaChartBar className="text-yellow-400 text-2xl drop-shadow-glow" />, title: "Power BI Mentor" },
    { icon: <FaBrain className="text-pink-400 text-2xl drop-shadow-glow" />, title: "AI/ML Mentor" },
    { icon: <FaPaintBrush className="text-green-400 text-2xl drop-shadow-glow" />, title: "Graphics Designer (Brand & Social)" },
  ]

  return (
    <section
      id="careers"
      className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-950 text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl font-bold"
        >
          Careers at <span className="text-cyan-400">Technical One</span>
        </motion.h2>

        {/* Subtitle */}
        <p className="mt-3 text-white/80 max-w-3xl">
          We’re always looking for mentors, trainers, and project contributors across our domains.
          If you’re passionate about teaching and building, we’d love to hear from you.
        </p>

        {/* Content Grid */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* Current Needs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-lg shadow-lg hover:shadow-cyan-500/20 transition"
          >
            <div className="font-semibold text-lg mb-4 flex items-center gap-2">
              <FaEnvelopeOpenText className="text-cyan-400" /> Current Needs
            </div>
            <ul className="mt-3 text-white/80 space-y-3">
              {roles.map((role, index) => (
                <li key={index} className="flex items-center gap-3">
                  {role.icon}
                  {role.title}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* How to Apply */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-lg shadow-lg hover:shadow-fuchsia-500/20 transition"
          >
            <div className="font-semibold text-lg flex items-center gap-2">
              <FaEnvelopeOpenText className="text-pink-400" /> How to Apply
            </div>
            <p className="mt-2 text-white/80">
              Send your resume, portfolio/GitHub, and a brief note about your teaching approach.
            </p>
            <a
              href="#contact"
              className="mt-4 inline-block rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-6 py-3 font-semibold text-slate-900 shadow-lg hover:scale-105 transition-transform"
            >
              Apply via Contact
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
