import React from "react";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

// ✅ Import videos
import video1 from "../assets/Media.mp4";
import video2 from "../assets/Session1.mp4";
import video3 from "../assets/session.mp4";
import video4 from "../assets/Session2.mp4";
import video5 from "../assets/Session5.mp4";
import video6 from "../assets/Session4.mp4";
import video8 from "../assets/Session6.mp4";

export default function Media() {
  const videos = [
    { id: 1, title: "Life at Our Company", src: video1 },
    { id: 2, title: "Team Collaboration", src: video2 },
    { id: 3, title: "Innovation in Action", src: video3 },
    { id: 4, title: "Team Building Event", src: video4 },
    { id: 5, title: "Training Session", src: video6 },
    { id: 6, title: "Success Stories", src: video5 },
    { id: 7, title: "Future Vision", src: video8 },
  ];

  return (
    <section
      id="media"
      className="relative scroll-mt-24 min-h-screen py-20 px-6 overflow-hidden"
    >
      {/* 🔹 Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 via-purple-100 to-indigo-300 dark:from-slate-900 dark:via-indigo-900 dark:to-slate-950" />

      {/* 🔹 Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/dot-grid.png')] opacity-10 dark:opacity-5" />

      {/* 🔹 Floating Blobs */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-purple-300/30 dark:bg-purple-600/30 blur-3xl"
        animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-pink-200/30 dark:bg-pink-500/30 blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🔹 Section Title */}
      <h2 className="relative text-4xl font-bold text-center mb-14 text-gray-900 dark:text-white">
        🎥 Media & Careers at Our Company
      </h2>

      {/* 🔹 Video Grid */}
      <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video, i) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition relative backdrop-blur-lg bg-white/60 dark:bg-white/10 border border-white/20"
          >
            <div className="relative">
              <video
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                preload="metadata"
                controls
                poster="https://via.placeholder.com/600x400.png?text=Loading+Video"
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support HTML video.
              </video>

              {/* Play Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition">
                <PlayCircle className="w-16 h-16 text-white drop-shadow-lg" />
              </div>
            </div>

            <div className="p-5 bg-white/80 dark:bg-slate-900/50">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                {video.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
