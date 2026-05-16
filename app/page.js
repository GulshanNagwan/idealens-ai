"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 overflow-hidden">
      
      <div className="hero-glow"></div>
      <div className="hero-glow-2"></div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl md:text-7xl font-bold leading-tight max-w-5xl"
      >
        Validate Startup Ideas with
        <span className="gradient-text"> AI Intelligence</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-8 text-lg text-gray-300 max-w-2xl"
      >
        Analyze market demand, competitors, monetization,
        risks, and scalability using powerful AI-driven insights.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-10 flex gap-4"
      >
        <button className="px-8 py-4 rounded-full bg-blue-500 hover:bg-blue-600 transition text-lg">
          Start Analyzing
        </button>

        <button className="px-8 py-4 rounded-full glass hover:bg-white/10 transition text-lg">
          Watch Demo
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="glass mt-20 p-8 rounded-3xl w-full max-w-5xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="glass rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-2">
              Market Analysis
            </h3>
            <p className="text-gray-400">
              AI predicts startup demand and growth potential.
            </p>
          </div>

          <div className="glass rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-2">
              Competitor Insights
            </h3>
            <p className="text-gray-400">
              Discover existing competitors and opportunities.
            </p>
          </div>

          <div className="glass rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-2">
              AI Pitch Generator
            </h3>
            <p className="text-gray-400">
              Generate investor-ready startup pitches instantly.
            </p>
          </div>

        </div>
      </motion.div>
    </section>
  );
}