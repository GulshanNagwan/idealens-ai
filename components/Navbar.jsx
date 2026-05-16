"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="w-full flex justify-between items-center px-8 py-5 glass sticky top-0 z-50"
    >
      <h1 className="text-2xl font-bold gradient-text">
        IdeaLens AI
      </h1>

      <div className="flex gap-6 text-sm text-gray-300">
        <a href="#">Features</a>
        <a href="/dashboard">Dashboard</a>
        <a href="#">About</a>
      </div>

      <a
        href="/dashboard"
        className="px-5 py-2 rounded-full bg-blue-500 hover:bg-blue-600 transition"
      >
        Launch App
      </a>
    </motion.nav>
  );
}