import { motion } from 'framer-motion'
import { FaCode, FaMobileAlt, FaPaintBrush } from 'react-icons/fa'

const cards = [
  {
    icon: <FaCode className="text-3xl text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />,
    title: 'Website Development',
    desc: 'High-performance, SEO-friendly websites with modern stacks and pixel-perfect UI.',
  },
  {
    icon: <FaMobileAlt className="text-3xl text-fuchsia-400 group-hover:text-fuchsia-300 transition-colors duration-300" />,
    title: 'App Development',
    desc: 'Android/iOS apps with smooth UX, APIs, auth, and analytics baked in.',
  },
  {
    icon: <FaPaintBrush className="text-3xl text-amber-400 group-hover:text-amber-300 transition-colors duration-300" />,
    title: 'Graphics Design',
    desc: 'Branding, logos, social creatives, and marketing assets that stand out.',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      {/* Subtle overlay for texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_40%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl font-bold text-center"
        >
          Professional <span className="gradient-text">Services</span>
        </motion.h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg hover:-translate-y-2 hover:bg-white/10 transition-transform duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-xl bg-white/10 shadow-inner">{c.icon}</div>
                <h3 className="font-semibold text-xl">{c.title}</h3>
              </div>
              <p className="mt-4 text-white/70">{c.desc}</p>

              {/* Gradient bar animation */}
              <div className="mt-6 h-1 w-full rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-400 animate-shine bg-[length:300%_100%]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
