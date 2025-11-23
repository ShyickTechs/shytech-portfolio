// app/about/page.tsx
"use client";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0016] via-[#1a002b] to-black text-white flex flex-col items-center justify-center p-8">
      <Navbar />

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="mt-28 max-w-3xl text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          About Me
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed">
          I’m Prince (Shyick), a Full-Stack Developer focused on building fast,
          accessible, and polished web and mobile experiences. I work with
          Next.js, React, Flutter, Firebase, and Supabase to deliver practical
          solutions that scale.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/projects"
            className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 font-semibold shadow"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="px-6 py-2 rounded-full border border-purple-700/30"
          >
            Contact
          </a>
        </div>
      </motion.section>
    </main>
  );
}
``