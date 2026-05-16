"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function StartupForm() {

  const [loading, setLoading] = useState(false);

  const handleAnalyze = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="glass rounded-3xl p-8"
    >
      <div className="flex items-center gap-3 mb-8">
        <Sparkles className="text-blue-400" />
        <h2 className="text-3xl font-bold">
          Startup Idea Analyzer
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <input
          type="text"
          placeholder="Startup Name"
          className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none"
        />

        <input
          type="text"
          placeholder="Industry"
          className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none"
        />

        <input
          type="text"
          placeholder="Target Audience"
          className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none"
        />

        <input
          type="text"
          placeholder="Estimated Budget"
          className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none"
        />

      </div>

      <textarea
        placeholder="Describe your startup idea..."
        rows={6}
        className="w-full mt-6 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none"
      />

      <button
        onClick={handleAnalyze}
        className="mt-8 px-8 py-4 rounded-2xl bg-blue-500 hover:bg-blue-600 transition flex items-center gap-3"
      >
        <Sparkles size={18} />
        Analyze with AI
      </button>

      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-10 glass p-6 rounded-2xl"
        >
          <div className="flex items-center gap-4">

            <div className="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>

            <p className="text-lg">
              AI is analyzing your startup idea...
            </p>

          </div>

          <div className="mt-5 space-y-3">

            <div className="h-4 rounded bg-white/10 animate-pulse"></div>

            <div className="h-4 rounded bg-white/10 animate-pulse w-4/5"></div>

            <div className="h-4 rounded bg-white/10 animate-pulse w-3/5"></div>

          </div>
        </motion.div>
      )}

    </motion.div>
  );
}