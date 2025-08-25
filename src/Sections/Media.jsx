import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlayCircle, X } from "lucide-react";

// ✅ Import only available videos
import video1 from "../assets/Session4.mp4";
import video2 from "../assets/Session1.mp4";
import video4 from "../assets/Session2.mp4";
import video5 from "../assets/Session5.mp4";

export default function Media() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    { id: 1, title: "Life at Our Company", src: video1 },
    { id: 2, title: "Team Collaboration", src: video2 },
    { id: 3, title: "Team Building Event", src: video4 },
    { id: 4, title: "Success Stories", src: video5 },
  ];

  return (
    <section
      id="media"
      className="
        relative scroll-mt-24
        min-h-[50vh] sm:min-h-screen   /* smaller min-height for mobile */
        py-10 sm:py-20 px-4 sm:px-6    /* tighter padding on mobile */
        overflow-hidden
      "
    >
      {/* 🔹 Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 via-purple-100 to-indigo-300 dark:from-slate-900 dark:via-indigo-900 dark:to-slate-950" />

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
      <div className="relative text-center mb-8 sm:mb-14">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white inline-block relative">
          🎥 Media & Careers at Our Company
          <motion.div
            className="absolute left-0 right-0 -bottom-2 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </h2>
      </div>

      {/* 🔹 Video Grid */}
      <div className="relative grid gap-5 sm:gap-8 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video, i) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-fuchsia-400/30 transition relative backdrop-blur-lg bg-white/60 dark:bg-white/10 border border-white/20 cursor-pointer"
            onClick={() => setSelectedVideo(video.src)}
          >
            <div className="relative">
              <video
                className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                preload="metadata"
                muted
                loop
                autoPlay
                playsInline
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support HTML video.
              </video>

              {/* Play Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
                <PlayCircle className="w-12 h-12 sm:w-16 sm:h-16 text-white drop-shadow-lg" />
              </div>
            </div>

            <div className="p-3 sm:p-5 bg-white/80 dark:bg-slate-900/50">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                {video.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🔹 Modal Video Player */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-3 right-3 text-white hover:text-red-400"
              >
                <X size={28} />
              </button>

              <video
                className="w-full max-h-[80vh] object-contain"
                controls
                autoPlay
              >
                <source src={selectedVideo} type="video/mp4" />
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
