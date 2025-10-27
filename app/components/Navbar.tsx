"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation"; // ✅ Added this line

export default function Navbar() {
  const pathname = usePathname(); // ✅ Get the current page path
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-lg border-b border-purple-800/50 z-50"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo / Brand Name */}
        <motion.h1
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
        >
          Shyick<span className="text-purple-300">Tech</span>
        </motion.h1>

        {/* Navigation Links */}
        <div className="flex space-x-8">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href; // ✅ Check if current page matches link
            return (
              <motion.div key={index} whileHover={{ scale: 1.1 }}>
                <Link
                  href={item.href}
                  className={`${
                    isActive
                      ? "text-purple-400 font-semibold border-b-2 border-purple-500" // ✅ Highlight active link
                      : "text-gray-300 hover:text-purple-400"
                  } transition-colors pb-1`}
                >
                  {item.name}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
