import ChatTutor from "@/components/ChatTutor";

export default function Dashboard() {
  return (
    <div className="flex">
      {/* Sidebar is rendered outside in layout */}

      {/* Main Dashboard Content */}
      <main className="flex-1 min-h-screen bg-gray-50">
        <header className="bg-indigo-600 text-white p-6 shadow-md">
          <h1 className="text-2xl font-bold">Welcome back, Student!</h1>
          <p className="text-sm opacity-90">
            Here’s your learning progress at a glance
          </p>
        </header>

        <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Progress Card */}
          <div className="bg-white shadow rounded-lg p-4 col-span-2">
            <h2 className="text-lg font-semibold mb-4">Learning Path Progress</h2>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-indigo-500 h-4 rounded-full"
                style={{ width: "65%" }}
              ></div>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              You have completed 65% of your current learning path.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">Quick Stats</h2>
            <ul className="space-y-2 text-sm">
              <li>
                Streak: <span className="font-bold">5 days</span>
              </li>
              <li>
                Quizzes Completed: <span className="font-bold">12</span>
              </li>
              <li>
                Time Spent: <span className="font-bold">14 hrs</span>
              </li>
            </ul>
          </div>

          {/* AI Chat Tutor Widget */}
          <div className="bg-white shadow rounded-lg p-4 col-span-3">
            <h2 className="text-lg font-semibold mb-4">AI Chat Tutor</h2>
            <ChatTutor />
          </div>
        </div>
      </main>
    </div>
  );
}
