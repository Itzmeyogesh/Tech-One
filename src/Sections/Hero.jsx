import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import logo from '../assets/Logo.jpg'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Logo background watermark */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] blur-[1px] bg-no-repeat bg-center bg-contain"
        style={{ backgroundImage: `url(${logo})` }}
      />

      {/* Floating blobs */}
      <div className="absolute -top-20 -left-10 h-[28rem] w-[28rem] rounded-full bg-cyan-400/30 blur-3xl animate-blob" />
      <div className="absolute top-40 -right-10 h-[24rem] w-[24rem] rounded-full bg-fuchsia-400/30 blur-3xl animate-blob [animation-delay:3s]" />
      <div className="absolute bottom-0 left-1/3 h-[20rem] w-[20rem] rounded-full bg-amber-400/20 blur-3xl animate-blob [animation-delay:6s]" />

      <div className="relative mx-auto max-w-7xl px-6 py-28 sm:py-36 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
        >
          Build Your Future with <span className="gradient-text">Technical One</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mx-auto mt-4 max-w-3xl text-white/80"
        >
          MSME-certified online internships and professional services in Web/App Development,
          Graphics Design, Java, Power BI, and AI/ML.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-8 text-lg sm:text-xl text-white/90"
        >
          <span className="opacity-80">We specialize in</span>{' '}
          <span className="font-semibold">
            <Typewriter
              words={[
                'Web Development',
                'App Development',
                'Graphics Design',
                'Java',
                'Power BI',
                'AI/ML',
              ]}
              loop={0}
              cursor
              cursorStyle="▍"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1400}
            />
          </span>
        </motion.div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#internships"
            className="rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-6 py-3 font-semibold text-slate-900 shadow-soft hover:opacity-90"
          >
            Explore Internships
          </a>
          <a
            href="#services"
            className="rounded-xl border border-white/20 px-6 py-3 font-semibold hover:bg-white/10"
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  )
}
