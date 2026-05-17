"use client";

import {
  LayoutDashboard,
  BrainCircuit,
  History,
  Settings,
} from "lucide-react";

export default function Sidebar() {

  return (
    <aside className="hidden md:flex flex-col w-72 bg-white/5 border-r border-white/10 backdrop-blur-xl p-8">

      <h1 className="text-3xl font-bold mb-12">
        IdeaLens AI
      </h1>

      <nav className="space-y-4">

        <button className="w-full flex items-center gap-4 bg-blue-500/20 hover:bg-blue-500/30 transition px-5 py-4 rounded-2xl">

          <LayoutDashboard />

          Dashboard

        </button>

        <button className="w-full flex items-center gap-4 hover:bg-white/10 transition px-5 py-4 rounded-2xl">

          <BrainCircuit />

          AI Analysis

        </button>

        <button className="w-full flex items-center gap-4 hover:bg-white/10 transition px-5 py-4 rounded-2xl">

          <History />

          History

        </button>

        <button className="w-full flex items-center gap-4 hover:bg-white/10 transition px-5 py-4 rounded-2xl">

          <Settings />

          Settings

        </button>

      </nav>

      <div className="mt-auto bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 rounded-3xl p-6">

        <h3 className="text-xl font-semibold mb-3">
          AI Startup Intelligence
        </h3>

        <p className="text-gray-300 text-sm">
          Analyze market demand, competitors, scalability and startup potential using AI.
        </p>

      </div>

    </aside>
  );
}
