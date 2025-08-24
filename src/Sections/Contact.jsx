import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaCommentDots,
  FaCertificate,
  FaChalkboardTeacher,
  FaTasks,
  FaCodeBranch,
  FaBriefcase,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden"
    >
      {/* Floating background glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-fuchsia-500/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="mx-auto max-w-7xl px-6 py-20 relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl font-bold text-center"
        >
          Get in <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">Touch</span>
        </motion.h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative rounded-2xl border border-white/10 bg-white/10 backdrop-blur-lg p-6 shadow-xl overflow-hidden"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 opacity-30 blur-xl group-hover:opacity-60 transition duration-500"></div>
            <div className="relative z-10 grid gap-5">
              {/* Name */}
              <div className="relative">
                <FaUser className="absolute left-3 top-3 text-cyan-400" />
                <input
                  className="w-full rounded-lg bg-white/10 pl-10 pr-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400 placeholder-white/40"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-3 text-cyan-400" />
                <input
                  type="email"
                  className="w-full rounded-lg bg-white/10 pl-10 pr-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400 placeholder-white/40"
                  placeholder="you@example.com"
                />
              </div>

              {/* Message */}
              <div className="relative">
                <FaCommentDots className="absolute left-3 top-3 text-cyan-400" />
                <textarea
                  rows="5"
                  className="w-full rounded-lg bg-white/10 pl-10 pr-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400 placeholder-white/40"
                  placeholder="Tell us what you need…"
                />
              </div>

              {/* Button with animation */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-2 rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-6 py-3 font-semibold text-slate-900 shadow-lg transition-all"
              >
                Send Message 🚀
              </motion.button>
            </div>
          </motion.form>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-lg p-6 shadow-xl hover:shadow-cyan-500/20 transition"
          >
            <div className="font-semibold text-lg flex items-center gap-2">
              Why choose <span className="text-cyan-400">Technical One</span>?
            </div>
            <ul className="mt-4 space-y-3 text-white/80">
              <li className="flex items-center gap-2 hover:text-cyan-400 transition">
                <FaCertificate className="text-cyan-400" /> MSME-certified venture
              </li>
              <li className="flex items-center gap-2 hover:text-cyan-400 transition">
                <FaChalkboardTeacher className="text-cyan-400" /> Hands-on, mentor-led training
              </li>
              <li className="flex items-center gap-2 hover:text-cyan-400 transition">
                <FaTasks className="text-cyan-400" /> Clear weekly tasks and reviews
              </li>
              <li className="flex items-center gap-2 hover:text-cyan-400 transition">
                <FaCodeBranch className="text-cyan-400" /> Modern stacks & real-world projects
              </li>
              <li className="flex items-center gap-2 hover:text-cyan-400 transition">
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
  );
}
