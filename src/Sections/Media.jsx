import React from "react";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

// Import videos from assets
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
    { id: 3, title: "Office Tour", src: video3 },
    { id: 4, title: "Team Building Event", src: video4 },
    { id: 5, title: "Training Session", src: video6 },
    { id: 6, title: "Success Stories", src: video5 },
    { id: 7, title: "Innovation at Work", src: video8 },
  ];

  return (
    <section
      id="media"
      className="min-h-screen bg-gradient-to-r from-indigo-50 via-white to-indigo-50 py-20 px-6"
    >
      <h2 className="text-4xl font-bold text-center mb-14 text-gray-900">
        🎥 Media & Careers at Our Company
      </h2>

      {/* Responsive Masonry Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video, i) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition relative"
          >
            <div className="relative">
              <video
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                preload="metadata"
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

            <div className="p-5 bg-white">
              <h3 className="text-lg font-semibold text-gray-800">{video.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
