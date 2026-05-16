import Sidebar from "@/components/Sidebar";
import StartupForm from "@/components/StartupForm";
import DashboardCards from "@/components/DashboardCards";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-[#050816] text-white">
      
      <Sidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        
        <h1 className="text-4xl font-bold mb-2">
          Startup Dashboard
        </h1>

        <p className="text-gray-400 mb-8">
          Validate and analyze startup ideas using AI.
        </p>

        <DashboardCards />

        <div className="mt-10">
          <StartupForm />
        </div>

      </main>
    </div>
  );
}