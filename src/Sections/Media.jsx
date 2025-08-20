import React from "react";

// Import videos from assets folder
import video1 from "../assets/Media.mp4";
import video2 from "../assets/session.mp4";
import video3 from "../assets/session.mp4";

export default function Media() {
  const videos = [
    {
      id: 1,
      title: "Life at Our Company",
      src: video1,
    },
    {
      id: 2,
      title: "Team Collaboration",
      src: video2,
    },
    {
      id: 3,
      title: "Office Tour",
      src: video3,
    },
  ];

  return (
    <section id="media" className="min-h-screen bg-gray-50 py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Media & Careers at Our Company
      </h2>

      {/* Responsive Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <div
            key={video.id}
            className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
          >
            <video
              controls
              className="w-full h-60 object-cover"
              preload="none"
              poster="https://via.placeholder.com/500x300.png?text=Loading+Video"
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support HTML video.
            </video>
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold text-gray-700">
                {video.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
