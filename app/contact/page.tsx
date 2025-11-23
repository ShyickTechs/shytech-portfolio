"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCopy,
  FaCheck,
} from "react-icons/fa";
import Navbar from "../components/Navbar";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("yourmail@example.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0016] via-[#1a002b] to-black text-white flex flex-col items-center justify-center p-8 font-[Inter]">
      <Navbar />

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mt-28 w-full max-w-2xl"
      >
        <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          Contact Me
        </h1>

        <p className="text-gray-300 mb-10">
         Let&apos;s connect! Feel free to reach out through any of the platforms below.
        </p>

        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-6 text-lg">
          <a href="https://www.facebook.com/share/17SQB6VmZf/" target="_blank" className="flex items-center gap-3 bg-purple-900/20 hover:bg-purple-800/40 transition p-4 rounded-xl">
            <FaFacebook className="text-blue-500 text-2xl" />
            Facebook
          </a>

          <a href="https://instagram.com/yourusername" target="_blank" className="flex items-center gap-3 bg-purple-900/20 hover:bg-purple-800/40 transition p-4 rounded-xl">
            <FaInstagram className="text-pink-500 text-2xl" />
            Instagram
          </a>

          <a href="https://x.com/shyickDev?t=nW73s8QuZ8iJDe7vWhLY1Q&s=09" target="_blank" className="flex items-center gap-3 bg-purple-900/20 hover:bg-purple-800/40 transition p-4 rounded-xl">
            <FaTwitter className="text-sky-400 text-2xl" />
            Twitter
          </a>

          <a href="https://github.com/ShyickTechs" target="_blank" className="flex items-center gap-3 bg-purple-900/20 hover:bg-purple-800/40 transition p-4 rounded-xl">
            <FaGithub className="text-gray-300 text-2xl" />
            GitHub
          </a>

          <a href="https://wa.me/2348103811500" target="_blank" className="flex items-center gap-3 bg-purple-900/20 hover:bg-purple-800/40 transition p-4 rounded-xl">
            <FaWhatsapp className="text-green-500 text-2xl" />
            WhatsApp
          </a>

          {/* Email + Copy Button */}
          <div className="flex items-center justify-between gap-3 bg-purple-900/20 hover:bg-purple-800/40 transition p-4 rounded-xl w-full sm:w-auto">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-yellow-400 text-2xl" />
              <span>yourmail@example.com</span>
            </div>
            <button
              onClick={handleCopy}
              className="ml-3 bg-purple-600 hover:bg-purple-700 p-2 rounded-lg text-white"
            >
              {copied ? <FaCheck /> : <FaCopy />}
            </button>
          </div>

          <div className="flex items-center gap-3 bg-purple-900/20 hover:bg-purple-800/40 transition p-4 rounded-xl cursor-default">
            <FaMapMarkerAlt className="text-red-400 text-2xl" />
            Lagos, Nigeria
          </div>
        </div>
      </motion.section>
    </main>
  );
}
