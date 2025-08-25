import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import logo from '../assets/Logo.jpg'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden flex items-center min-h-[35vh] sm:min-h-screen"
    >
      {/* Logo background watermark */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] blur-[1px] bg-no-repeat bg-center bg-contain"
        style={{ backgroundImage: `url(${logo})` }}
      />

      {/* Floating blobs (smaller on mobile) */}
      <div className="absolute -top-20 -left-10 h-60 w-60 sm:h-[28rem] sm:w-[28rem] rounded-full bg-cyan-400/30 blur-3xl animate-blob" />
      <div className="absolute top-40 -right-10 h-52 w-52 sm:h-[24rem] sm:w-[24rem] rounded-full bg-fuchsia-400/30 blur-3xl animate-blob [animation-delay:3s]" />
      <div className="absolute bottom-0 left-1/3 h-44 w-44 sm:h-[20rem] sm:w-[20rem] rounded-full bg-amber-400/20 blur-3xl animate-blob [animation-delay:6s]" />

      {/* Extra glowing rings - hide on small */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="hidden sm:block w-[30rem] h-[30rem] md:w-[40rem] md:h-[40rem] rounded-full border border-cyan-400/10 animate-pulse" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-3xl sm:text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-400 bg-clip-text text-transparent animate-gradient"
        >
          Build Your Future with Technical One
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mx-auto mt-4 max-w-xl sm:max-w-3xl text-sm sm:text-base md:text-lg text-white/80"
        >
          MSME-certified online internships and professional services in Web/App Development,
          Graphics Design, Java, Power BI, and AI/ML.
        </motion.p>

        {/* Typewriter effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-white/90"
        >
          <span className="opacity-80">We specialize in </span>
          <span className="font-semibold text-cyan-400">
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

        {/* Buttons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.3, staggerChildren: 0.15 } }
          }}
          className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <motion.a
            href="#internships"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(34,211,238,0.6)" }}
            className="rounded-lg sm:rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-4 sm:px-6 py-2.5 sm:py-3 font-semibold text-slate-900 shadow-soft transition text-sm sm:text-base"
          >
            Explore Internships
          </motion.a>
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(255,255,255,0.3)" }}
            className="rounded-lg sm:rounded-xl border border-white/20 px-4 sm:px-6 py-2.5 sm:py-3 font-semibold hover:bg-white/10 text-sm sm:text-base"
          >
            View Services
          </motion.a>
        </motion.div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 -z-10">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 5}s`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </section>
  )
}
