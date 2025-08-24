import { motion } from "framer-motion";
import {
  FaChalkboardTeacher,
  FaClock,
  FaCertificate,
  FaUsers,
} from "react-icons/fa";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { AiFillSchedule } from "react-icons/ai";
import { BsLaptop, BsCodeSlash } from "react-icons/bs";

export default function About() {
  const stats = [
    {
      icon: <FaUsers className="text-blue-400 text-4xl" />,
      k: "24+",
      v: "Batches Completed",
    },
    {
      icon: <FaClock className="text-green-400 text-4xl" />,
      k: "2 Months",
      v: "Internship Duration",
    },
    {
      icon: <AiFillSchedule className="text-purple-400 text-4xl" />,
      k: "Mon–Fri",
      v: "Live Sessions",
    },
    {
      icon: <FaCertificate className="text-yellow-400 text-4xl" />,
      k: "MSME",
      v: "Certified",
    },
  ];

  const points = [
    {
      icon: <MdOutlineAssignmentTurnedIn />,
      text: "Weekly projects with trainer feedback in-session.",
    },
    {
      icon: <BsCodeSlash />,
      text: "Practical, resume-ready deliverables and GitHub-first workflow.",
    },
    {
      icon: <BsLaptop />,
      text: "Virtual & flexible—designed to fit academic schedules.",
    },
    {
      icon: <FaChalkboardTeacher />,
      text: "Domains: Web Dev, App Dev, Graphics Design, Java, Power BI, AI/ML.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      {/* Background glow orbs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      {/* Divider line */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-5xl font-extrabold text-center"
        >
          About{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
            Technical One
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-gray-300 leading-relaxed max-w-3xl mx-auto text-center text-lg"
        >
          Established in <strong>June 2024</strong>, Technical One delivers{" "}
          <strong>online internships</strong> and{" "}
          <strong>professional services</strong> across Web/App Development and
          Graphics Design, along with training in{" "}
          <strong>Java</strong>, <strong>Power BI</strong>, and{" "}
          <strong>AI/ML</strong>. We are <strong>MSME-certified</strong> and
          have successfully completed{" "}
          <span className="text-cyan-300 font-semibold">6 internship batches</span>.  
          Internships run for <strong>2 months</strong> with{" "}
          <strong>weekly projects</strong> reviewed in{" "}
          <strong>live Mon–Fri sessions</strong>.  
          (Note: internships are <strong>unpaid</strong>.)
        </motion.p>

        {/* Stats Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((card, i) => (
            <motion.div
              key={card.k}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg flex flex-col items-center text-center hover:bg-white/10 transition-all duration-300"
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
          className="mt-12 grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto"
        >
          {points.map((item, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.03, x: 5 }}
              className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-slate-900 text-xl shadow-md">
                {item.icon}
              </span>
              <p className="text-gray-300">{item.text}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
