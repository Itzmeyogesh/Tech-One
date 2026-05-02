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
      icon: <FaUsers className="text-secondary text-4xl" />,
      k: "24+",
      v: "Batches Completed",
    },
    {
      icon: <FaClock className="text-green-400 text-4xl" />,
      k: "2 Months",
      v: "Internship Duration",
    },
    {
      icon: <AiFillSchedule className="text-accent text-4xl" />,
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
      className="relative overflow-hidden bg-background text-text"
    >
      {/* Background glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-display text-3xl md:text-5xl font-extrabold text-center"
        >
          About{" "}
          <span className="gradient-text">
            Technical One
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-6 text-gray-300 max-w-3xl mx-auto text-center"
        >
          Established in <strong>June 2024</strong>, Technical One delivers
          online internships and professional services across Web/App Development,
          Graphics Design, Java, Power BI, and AI/ML.
        </motion.p>

        {/* Stats */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((card, i) => (
            <motion.div
              key={card.k}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl bg-primary p-6 text-center shadow-soft"
            >
              {card.icon}
              <div className="text-3xl mt-3">{card.k}</div>
              <div className="text-gray-400">{card.v}</div>
            </motion.div>
          ))}
        </div>

        {/* Points */}
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
          {points.map((item, i) => (
            <li
              key={i}
              className="flex gap-4 p-4 rounded-xl bg-primary hover:scale-105 transition"
            >
              <span className="text-secondary text-xl">{item.icon}</span>
              <p className="text-gray-300">{item.text}</p>
            </li>
          ))}
        </ul>

        {/* ✅ Founder Section (FIXED POSITION) */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">

          {/* Founder */}
          <div className="p-6 rounded-2xl bg-primary shadow-soft hover:scale-105 transition">
            <h3 className="text-xl font-bold text-secondary">Founder</h3>
            <p className="mt-2 text-text">
              Yogesh Maske is the Founder of Technical One, leading innovation
              in web development, app solutions, and internship programs.
            </p>
            <p className="mt-2 text-sm text-gray-400">
              📧 maskeyogeish@gmail.com <br />
              📞 9518568806
            </p>
          </div>

          {/* Co-Founder */}
          <div className="p-6 rounded-2xl bg-primary shadow-soft hover:scale-105 transition">
            <h3 className="text-xl font-bold text-accent">Co-Founder</h3>
            <p className="mt-2 text-text">
              Smita Nair is the Co-Founder of Technical One, contributing to
              strategic growth, training programs, and operations.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
