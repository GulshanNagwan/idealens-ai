import Sidebar from "@/components/Sidebar";
import StartupForm from "@/components/StartupForm";

export default function DashboardPage() {

  return (
    <div className="min-h-screen bg-[#050816] text-white flex">

      <Sidebar />

      <main className="flex-1 p-10 overflow-y-auto">

        <div className="max-w-6xl mx-auto">

          <div className="mb-10">

            <h1 className="text-5xl font-bold">
              IdeaLens AI
            </h1>

            <p className="text-gray-400 mt-3 text-lg">
              AI-powered startup validation platform
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

            <div className="bg-white/10 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

              <p className="text-gray-400">
                Startups Analyzed
              </p>

              <h2 className="text-4xl font-bold mt-3">
                1,284
              </h2>

            </div>

            <div className="bg-white/10 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

              <p className="text-gray-400">
                AI Accuracy
              </p>

              <h2 className="text-4xl font-bold mt-3">
                92%
              </h2>

            </div>

            <div className="bg-white/10 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

              <p className="text-gray-400">
                Market Trends
              </p>

              <h2 className="text-4xl font-bold mt-3">
                248
              </h2>

            </div>

          </div>

          <StartupForm />

        </div>

      </main>

    </div>
  );
}