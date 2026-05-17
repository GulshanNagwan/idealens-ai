"use client";

import { useState } from "react";

export default function StartupForm() {

  const [formData, setFormData] = useState({
    startupName: "",
    industry: "",
    audience: "",
    budget: "",
    idea: "",
  });

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState(null);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleAnalyze = async () => {

    setLoading(true);

    try {

      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      console.log(data);

      setResult(data);

    } catch (error) {

      console.log(error);

    }

    setLoading(false);
  };

  return (
    <div className="max-w-6xl mx-auto">

      <div className="bg-white/10 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

        <h2 className="text-3xl font-bold mb-8 text-white">
          Startup Idea Analyzer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <input
            type="text"
            name="startupName"
            placeholder="Startup Name"
            onChange={handleChange}
            className="bg-black/30 text-white border border-white/10 rounded-2xl px-5 py-4 outline-none"
          />

          <input
            type="text"
            name="industry"
            placeholder="Industry"
            onChange={handleChange}
            className="bg-black/30 text-white border border-white/10 rounded-2xl px-5 py-4 outline-none"
          />

          <input
            type="text"
            name="audience"
            placeholder="Target Audience"
            onChange={handleChange}
            className="bg-black/30 text-white border border-white/10 rounded-2xl px-5 py-4 outline-none"
          />

          <input
            type="text"
            name="budget"
            placeholder="Estimated Budget"
            onChange={handleChange}
            className="bg-black/30 text-white border border-white/10 rounded-2xl px-5 py-4 outline-none"
          />

        </div>

        <textarea
          rows={6}
          name="idea"
          placeholder="Describe your startup idea..."
          onChange={handleChange}
          className="w-full mt-6 bg-black/30 text-white border border-white/10 rounded-2xl px-5 py-4 outline-none"
        />

        <button
          onClick={handleAnalyze}
          className="mt-8 bg-blue-500 hover:bg-blue-600 transition px-8 py-4 rounded-2xl text-lg font-semibold text-white"
        >
          Analyze with AI
        </button>

      </div>

      {loading && (

        <div className="mt-8 bg-white/10 border border-white/10 rounded-3xl p-6 text-white">

          <div className="flex items-center gap-4">

            <div className="w-6 h-6 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>

            <p className="text-lg">
              AI is analyzing your startup...
            </p>

          </div>

        </div>

      )}

      {result && (

        <div className="mt-10 space-y-8">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-white/10 border border-white/10 rounded-3xl p-6 text-center">

              <p className="text-gray-400">
                Innovation
              </p>

              <h2 className="text-5xl font-bold mt-4 text-white">
                {result.innovationScore}/10
              </h2>

            </div>

            <div className="bg-white/10 border border-white/10 rounded-3xl p-6 text-center">

              <p className="text-gray-400">
                Scalability
              </p>

              <h2 className="text-5xl font-bold mt-4 text-white">
                {result.scalabilityScore}/10
              </h2>

            </div>

            <div className="bg-white/10 border border-white/10 rounded-3xl p-6 text-center">

              <p className="text-gray-400">
                Investment Potential
              </p>

              <h2 className="text-5xl font-bold mt-4 text-white">
                {result.investmentPotential}/10
              </h2>

            </div>

          </div>

          <div className="bg-white/10 border border-white/10 rounded-3xl p-8">

            <h3 className="text-3xl font-bold mb-5 text-white">
              Market Demand
            </h3>

            <p className="text-gray-300 leading-8">
              {result.marketDemand}
            </p>

          </div>

          <div className="bg-white/10 border border-white/10 rounded-3xl p-8">

            <h3 className="text-3xl font-bold mb-5 text-white">
              Competitors
            </h3>

            <div className="flex flex-wrap gap-4">

              {result.competitors?.map((item, index) => (

                <span
                  key={index}
                  className="px-5 py-3 bg-blue-500/20 rounded-full text-white"
                >
                  {item}
                </span>

              ))}

            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-green-500/10 border border-green-500/20 rounded-3xl p-6">

              <h3 className="text-2xl font-bold mb-4 text-white">
                Strengths
              </h3>

              <ul className="space-y-3 text-gray-200">

                {result.strengths?.map((item, index) => (

                  <li key={index}>
                    • {item}
                  </li>

                ))}

              </ul>

            </div>

            <div className="bg-red-500/10 border border-red-500/20 rounded-3xl p-6">

              <h3 className="text-2xl font-bold mb-4 text-white">
                Weaknesses
              </h3>

              <ul className="space-y-3 text-gray-200">

                {result.weaknesses?.map((item, index) => (

                  <li key={index}>
                    • {item}
                  </li>

                ))}

              </ul>

            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-3xl p-6">

              <h3 className="text-2xl font-bold mb-4 text-white">
                Opportunities
              </h3>

              <ul className="space-y-3 text-gray-200">

                {result.opportunities?.map((item, index) => (

                  <li key={index}>
                    • {item}
                  </li>

                ))}

              </ul>

            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-3xl p-6">

              <h3 className="text-2xl font-bold mb-4 text-white">
                Threats
              </h3>

              <ul className="space-y-3 text-gray-200">

                {result.threats?.map((item, index) => (

                  <li key={index}>
                    • {item}
                  </li>

                ))}

              </ul>

            </div>

          </div>

          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10 rounded-3xl p-8">

            <h3 className="text-3xl font-bold mb-5 text-white">
              AI Startup Pitch
            </h3>

            <p className="text-lg text-gray-200 leading-8">
              {result.startupPitch}
            </p>

          </div>

        </div>

      )}

    </div>
  );
}