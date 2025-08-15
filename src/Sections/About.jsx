import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaClock, FaCertificate, FaUsers } from 'react-icons/fa';
import { MdOutlineAssignmentTurnedIn } from 'react-icons/md';
import { AiFillSchedule } from 'react-icons/ai';
import { BsLaptop, BsCodeSlash } from 'react-icons/bs';

export default function About() {
  const stats = [
    { icon: <FaUsers className="text-blue-400 text-4xl" />, k: '6+', v: 'Batches Completed' },
    { icon: <FaClock className="text-green-400 text-4xl" />, k: '2 Months', v: 'Internship Duration' },
    { icon: <AiFillSchedule className="text-purple-400 text-4xl" />, k: 'Mon–Fri', v: 'Live Sessions' },
    { icon: <FaCertificate className="text-yellow-400 text-4xl" />, k: 'MSME', v: 'Certified' },
  ];

  const points = [
    { icon: <MdOutlineAssignmentTurnedIn />, text: 'Weekly projects with trainer feedback in-session.' },
    { icon: <BsCodeSlash />, text: 'Practical, resume-ready deliverables and GitHub-first workflow.' },
    { icon: <BsLaptop />, text: 'Virtual & flexible—designed to fit academic schedules.' },
    { icon: <FaChalkboardTeacher />, text: 'Domains: Web Dev, App Dev, Graphics Design, Java, Power BI, AI/ML.' },
  ];

  return (
    <section id="about" className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* subtle background line divider */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl font-bold text-center"
        >
          About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Technical One</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-gray-300 leading-relaxed max-w-3xl mx-auto text-center"
        >
          Established in <strong>June 2024</strong>, Technical One delivers <strong>online internships</strong> and
          <strong> professional services</strong> across Web/App Development and Graphics Design, along with domain
          training in <strong>Java</strong>, <strong>Power BI</strong>, and <strong>AI/ML</strong>. We are <strong>MSME-certified</strong> and have
          successfully completed <strong>6 internship batches</strong> so far. Our internships run for <strong>2 months</strong> and include
          <strong> weekly project tasks</strong> that are reviewed in live sessions. Sessions are held <strong>Monday–Friday</strong>, designed for
          both <strong>undergraduate</strong> and <strong>graduate</strong> students. (Note: internships are <strong>unpaid</strong>.)
        </motion.p>

        {/* Stats Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((card, i) => (
            <motion.div
              key={card.k}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-soft flex flex-col items-center text-center hover:bg-white/10 transition-all duration-300"
            >
              {card.icon}
              <div className="font-display text-3xl mt-3">{card.k}</div>
              <div className="mt-1 text-gray-400">{card.v}</div>
            </motion.div>
          ))}
        </div>

        {/* Points List */}
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 grid gap-4 sm:grid-cols-2 max-w-4xl mx-auto"
        >
          {points.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1 text-blue-400 text-xl">{item.icon}</span>
              <p className="text-gray-300">{item.text}</p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
