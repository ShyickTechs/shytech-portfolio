"use client";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0016] via-[#1a002b] to-black text-white flex flex-col items-center justify-center p-8 overflow-x-hidden font-[Inter]">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-center mt-24"
      >
        <motion.h1
          className="text-6xl sm:text-7xl font-extrabold mb-4 leading-tight"
          animate={{ opacity: [0.6, 1, 0.8, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Hi, I’m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            Prince (Shyick)
          </span>
        </motion.h1>

        <motion.h2
          className="text-2xl mb-6 text-purple-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Full-Stack Developer ✨
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed"
        >
          I craft beautiful, responsive websites and mobile apps using{" "}
          <strong>Next.js</strong>, <strong>React</strong>,{" "}
          <strong>Flutter</strong>, and <strong>Firebase</strong>. My goal is to
          build elegant digital experiences that inspire and perform.
        </motion.p>

        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05, y: -3 }}
          className="inline-block mt-10 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-3 rounded-full shadow-lg text-white font-semibold transition-all duration-300"
        >
          🚀 View My Work
        </motion.a>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-5xl"
      >
        {[
          {
            title: "💻 Web Development",
            desc: "Building modern, fast, and responsive web apps using React & Next.js.",
          },
          {
            title: "📱 Mobile Apps",
            desc: "Creating cross-platform apps with Flutter, Firebase, and Supabase.",
          },
          {
            title: "☁️ Cloud & APIs",
            desc: "Integrating scalable APIs, cloud services, and backend logic seamlessly.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.08, rotate: 1 }}
            className="p-6 bg-gradient-to-b from-purple-800/40 to-purple-900/30 backdrop-blur-xl border border-purple-700/40 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
          >
            <h3 className="text-xl font-bold mb-2 text-purple-300">{item.title}</h3>
            <p className="text-gray-300 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Footer */}
      <footer className="mt-24 text-gray-500 text-sm pb-10">
        © {new Date().getFullYear()}{" "}
        <span className="text-purple-400 font-semibold">ShyickTech</span> — All
        rights reserved.
      </footer>
    </main>
  );
}
