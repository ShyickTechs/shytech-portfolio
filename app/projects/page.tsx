"use client";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function Projects() {
  const projects = [
    {
      title: "ChattLa - Social App",
      desc: "A real-time global chat and content-sharing platform built with Flutter and supabse.",
      link: "https://github.com/yourusername/chattla",
      tech: ["Flutter", "Supabase", "Node.js"],
    },
    {
      title: "Portfolio Website",
      desc: "My personal portfolio built using Next.js, showcasing my skills and projects.",
      link: "https://your-portfolio-link.com",
      tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0016] via-[#1a002b] to-black text-white flex flex-col items-center justify-center p-8 font-[Inter]">
      <Navbar />

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mt-28 w-full max-w-6xl"
      >
        <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          My Projects
        </h1>

        <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
          Here are some of my favorite works. I love building creative,
          high-performance apps and websites with modern technologies.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-purple-900/20 border border-purple-800/40 rounded-2xl p-6 shadow-lg hover:shadow-purple-500/30 transition-all text-left"
            >
              <h2 className="text-2xl font-semibold mb-3 text-purple-300">
                {project.title}
              </h2>
              <p className="text-gray-300 mb-4">{project.desc}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-purple-800/50 px-3 py-1 rounded-full text-gray-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="inline-block mt-2 text-sm font-semibold text-purple-400 hover:text-pink-400 transition"
              >
                🔗 View Project
              </motion.a>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
