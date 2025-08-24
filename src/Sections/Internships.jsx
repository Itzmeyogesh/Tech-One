import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaCode, FaJava, FaChartBar, FaRobot } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'

const tracks = [
  {
    name: 'Web Development',
    icon: <FaCode className="text-cyan-400 text-xl" />,
    points: ['HTML/CSS/JS', 'React fundamentals', 'API integration', 'Deployments'],
  },
  {
    name: 'Java',
    icon: <FaJava className="text-orange-400 text-xl" />,
    points: ['Core Java', 'OOP & Collections', 'JDBC/REST basics', 'Mini projects'],
  },
  {
    name: 'Power BI',
    icon: <FaChartBar className="text-yellow-400 text-xl" />,
    points: ['Data modeling', 'DAX basics', 'Dashboards', 'Sharing/Publishing'],
  },
  {
    name: 'AI/ML',
    icon: <FaRobot className="text-pink-400 text-xl" />,
    points: ['Python & NumPy', 'Pandas/Scikit-learn', 'ML workflows', 'Capstone'],
  },
]

function Counter({ end, duration = 1.6 }) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const stepTime = 1000 / 60
    const totalSteps = Math.round((duration * 1000) / stepTime)
    let step = 0
    const timer = setInterval(() => {
      step += 1
      const next = Math.round((end * step) / totalSteps)
      setValue(next)
      if (step >= totalSteps) clearInterval(timer)
    }, stepTime)
    return () => clearInterval(timer)
  }, [inView, end, duration])

  return (
    <motion.span 
      ref={ref} 
      animate={{ scale: value === end ? [1, 1.3, 1] : 1 }}
      transition={{ duration: 0.4 }}
    >
      {value}
    </motion.span>
  )
}

export default function Internships() {
  const [showForm, setShowForm] = useState(false)
  const [selectedTrack, setSelectedTrack] = useState('')

  const handleApplyClick = (trackName) => {
    setSelectedTrack(trackName)
    setShowForm(true)
  }

  return (
    <section id="internships" className="relative bg-gradient-to-b from-gray-900 to-black">
      <div className="mx-auto max-w-7xl px-6 py-20 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl font-bold text-center"
        >
          🚀 Virtual <span className="gradient-text">Internships</span> (2 Months)
        </motion.h2>

        <p className="mt-3 text-white/80 text-center max-w-2xl mx-auto">
          Weekly project tasks reviewed by trainers in live sessions, Monday to Friday.
          Open to undergraduate and graduate students. (No stipend.)
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {/* Program Snapshot */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-lg"
          >
            <h3 className="font-semibold text-xl">📌 Program Snapshot</h3>
            <ul className="mt-3 space-y-2 text-white/80">
              <li>• Duration: 8 weeks</li>
              <li>• Mode: 100% Virtual</li>
              <li>• Schedule: Monday–Friday</li>
              <li>• Reviews: Weekly project evaluations</li>
              <li>• Certificate: MSME-certified venture</li>
              <li>• Stipend: Not provided</li>
            </ul>

            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-xl bg-white/10 p-4">
                <div className="text-3xl font-display">
                  <Counter end={24} />+
                </div>
                <div className="text-xs text-white/70">Batches</div>
              </div>
              <div className="rounded-xl bg-white/10 p-4">
                <div className="text-3xl font-display">5+</div>
                <div className="text-xs text-white/70">Domains</div>
              </div>
              <div className="rounded-xl bg-white/10 p-4">
                <div className="text-lg font-display animate-pulse">Mon–Fri</div>
                <div className="text-xs text-white/70">Sessions</div>
              </div>
            </div>
          </motion.div>

          {/* Tracks */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 lg:col-span-2 backdrop-blur-md shadow-lg"
          >
            <h3 className="font-semibold text-xl">🎯 Tracks & Skills</h3>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              {tracks.map((track, i) => (
                <motion.div
                  key={track.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  className="rounded-xl bg-white/5 p-4 border border-white/10 
                             hover:bg-gradient-to-r hover:from-cyan-500/20 
                             hover:to-purple-500/20 transition group shadow-md"
                >
                  <div className="flex items-center gap-2 font-semibold">
                    {track.icon} {track.name}
                  </div>
                  <ul className="mt-2 text-white/75 text-sm space-y-1">
                    {track.points.map((p) => (
                      <li key={p}>• {p}</li>
                    ))}
                  </ul>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleApplyClick(track.name)}
                    className="mt-4 w-full py-2 rounded-lg bg-gradient-to-r 
                               from-cyan-500 to-purple-500 hover:opacity-90 
                               transition font-semibold shadow"
                  >
                    Apply Now
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal Form */}
      {showForm && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ type: "spring", stiffness: 120 }}
            className="bg-gray-900/90 backdrop-blur-lg rounded-xl p-6 max-w-lg w-full relative shadow-2xl border border-white/10"
          >
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-3 text-white text-2xl hover:rotate-90 transition"
            >
              <IoClose />
            </button>
            <h3 className="text-xl font-semibold mb-4 text-center">
              Apply for <span className="text-cyan-400">{selectedTrack}</span> Internship
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded bg-white/10 text-white border border-white/20 focus:border-cyan-400 outline-none transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded bg-white/10 text-white border border-white/20 focus:border-cyan-400 outline-none transition"
              />
              <input
                type="file"
                className="w-full p-3 rounded bg-white/10 text-white border border-white/20 focus:border-cyan-400 outline-none transition"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 rounded bg-white/10 text-white border border-white/20 focus:border-cyan-400 outline-none transition"
              ></textarea>
              <motion.button
                type="submit"
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 hover:opacity-90 transition font-semibold shadow-lg"
              >
                Submit Application
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
