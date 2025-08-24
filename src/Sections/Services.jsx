import { motion } from "framer-motion"
import { FaCode, FaMobileAlt, FaPaintBrush } from "react-icons/fa"
import Tilt from "react-parallax-tilt"

const cards = [
  {
    icon: <FaCode className="text-4xl text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />,
    title: "Website Development",
    desc: "High-performance, SEO-friendly websites with modern stacks and pixel-perfect UI.",
  },
  {
    icon: <FaMobileAlt className="text-4xl text-fuchsia-400 group-hover:text-fuchsia-300 transition-colors duration-300" />,
    title: "App Development",
    desc: "Android/iOS apps with smooth UX, APIs, auth, and analytics baked in.",
  },
  {
    icon: <FaPaintBrush className="text-4xl text-amber-400 group-hover:text-amber-300 transition-colors duration-300" />,
    title: "Graphics Design",
    desc: "Branding, logos, social creatives, and marketing assets that stand out.",
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-hidden"
    >
      {/* ✨ Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="animate-pulse absolute top-20 left-1/4 w-2 h-2 bg-cyan-400 rounded-full blur-sm opacity-80" />
        <div className="animate-ping absolute bottom-40 right-1/3 w-3 h-3 bg-fuchsia-500 rounded-full blur-md opacity-70" />
        <div className="animate-pulse absolute top-1/2 left-10 w-1.5 h-1.5 bg-amber-400 rounded-full blur-sm opacity-90" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl font-bold text-center"
        >
          Professional <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-400 bg-clip-text text-transparent">Services</span>
        </motion.h2>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 * i }}
            >
              {/* Tilt effect */}
              <Tilt glareEnable={true} glareMaxOpacity={0.3} scale={1.05} transitionSpeed={2500}>
                <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg hover:-translate-y-2 hover:bg-white/10 transition-all duration-300 backdrop-blur-md relative overflow-hidden">
                  
                  {/* 🔥 Glow ring effect on hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-400 blur-xl" />

                  <div className="relative flex items-center gap-4">
                    <div className="p-4 rounded-xl bg-black/40 backdrop-blur-md shadow-inner border border-white/10">
                      {c.icon}
                    </div>
                    <h3 className="font-semibold text-xl">{c.title}</h3>
                  </div>

                  <p className="mt-4 text-white/70 relative z-10">{c.desc}</p>

                  {/* Gradient bar with pulse animation */}
                  <div className="mt-6 h-1 w-full rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-400 animate-gradient-move bg-[length:300%_100%]" />
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ✨ Custom animation keyframes */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-move {
          animation: gradientMove 4s linear infinite;
        }
      `}</style>
    </section>
  )
}
