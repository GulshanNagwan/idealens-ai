"use client";

import {
  LayoutDashboard,
  BrainCircuit,
  History,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-72 glass border-r border-white/10 p-6">
      
      <h1 className="text-3xl font-bold gradient-text mb-12">
        IdeaLens AI
      </h1>

      <nav className="flex flex-col gap-4">

        <button className="flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-500/20 hover:bg-blue-500/30 transition">
          <LayoutDashboard size={20} />
          Dashboard
        </button>

        <button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition">
          <BrainCircuit size={20} />
          AI Analysis
        </button>

        <button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition">
          <History size={20} />
          History
        </button>

        <button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition">
          <Settings size={20} />
          Settings
        </button>

      </nav>

      <div className="mt-auto glass p-5 rounded-2xl">
        <h3 className="font-semibold mb-2">
          AI Business Intelligence
        </h3>

        <p className="text-sm text-gray-400">
          Analyze startup ideas with real AI-powered insights.
        </p>
      </div>

    </aside>
  );
}