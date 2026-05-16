"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "Ideas Analyzed",
    value: "1,284",
  },
  {
    title: "AI Accuracy",
    value: "92%",
  },
  {
    title: "Market Trends",
    value: "248",
  },
  {
    title: "Startup Reports",
    value: "532",
  },
];

export default function DashboardCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="glass rounded-3xl p-6"
        >
          <h3 className="text-gray-400 text-sm">
            {card.title}
          </h3>

          <p className="text-4xl font-bold mt-3">
            {card.value}
          </p>
        </motion.div>
      ))}
    </div>
  );
}