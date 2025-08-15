import { motion } from 'framer-motion'
import { FaUser, FaEnvelope, FaCommentDots, FaCertificate, FaChalkboardTeacher, FaTasks, FaCodeBranch, FaBriefcase } from 'react-icons/fa'

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl font-bold text-center"
        >
          Get in <span className="gradient-text">Touch</span>
        </motion.h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-lg p-6 shadow-xl"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-4">
              <div>
                <label className="text-sm text-white/70 flex items-center gap-2">
                  <FaUser className="text-cyan-400" /> Name
                </label>
                <input
                  className="mt-1 w-full rounded-lg bg-white/10 px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="text-sm text-white/70 flex items-center gap-2">
                  <FaEnvelope className="text-cyan-400" /> Email
                </label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-lg bg-white/10 px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="text-sm text-white/70 flex items-center gap-2">
                  <FaCommentDots className="text-cyan-400" /> Message
                </label>
                <textarea
                  rows="5"
                  className="mt-1 w-full rounded-lg bg-white/10 px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="Tell us what you need…"
                />
              </div>
              <button className="mt-2 rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-6 py-3 font-semibold text-slate-900 shadow-lg hover:opacity-90 transition">
                Send Message
              </button>
            </div>
          </motion.form>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-lg p-6 shadow-xl"
          >
            <div className="font-semibold text-lg">Why choose Technical One?</div>
            <ul className="mt-4 space-y-3 text-white/80">
              <li className="flex items-center gap-2">
                <FaCertificate className="text-cyan-400" /> MSME-certified venture
              </li>
              <li className="flex items-center gap-2">
                <FaChalkboardTeacher className="text-cyan-400" /> Hands-on, mentor-led training
              </li>
              <li className="flex items-center gap-2">
                <FaTasks className="text-cyan-400" /> Clear weekly tasks and reviews
              </li>
              <li className="flex items-center gap-2">
                <FaCodeBranch className="text-cyan-400" /> Modern stacks & real-world projects
              </li>
              <li className="flex items-center gap-2">
                <FaBriefcase className="text-cyan-400" /> Strong focus on employability
              </li>
            </ul>
            <div className="mt-6 text-sm text-white/60">
              Prefer email? Write to:{" "}
              <span className="text-white/90 font-medium">Techieszonintern@gmail.com</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
