// src/app/dashboard/page.tsx
//description: Dashboard page for students to view their learning progress and interact with AI tutor
//just frontend code, no backend logic

import ChatTutor from "@/components/ChatTutor";

export default function Dashboard() {
  return (
    <div className="flex">
      {/* Sidebar is rendered outside in layout */}

      {/* Main Dashboard Content */}
      <main className="flex-1 min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Enhanced Header */}
        <header className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-8 shadow-xl relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">Welcome back, Student! 👋</h1>
                <p className="text-lg opacity-90 font-medium">
                  Ready to continue your learning journey?
                </p>
              </div>
              <div className="hidden md:flex items-center space-x-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-sm font-semibold">Today: {new Date().toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto p-8">
          {/* Top Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Streak Card */}
            <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-orange-100 rounded-full p-3">
                  <span className="text-2xl">🔥</span>
                </div>
                <span className="text-3xl font-bold text-orange-600">5</span>
              </div>
              <h3 className="font-semibold text-gray-800">Learning Streak</h3>
              <p className="text-sm text-gray-600 mt-1">Days in a row</p>
            </div>

            {/* Quizzes Card */}
            <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-green-100 rounded-full p-3">
                  <span className="text-2xl">📝</span>
                </div>
                <span className="text-3xl font-bold text-green-600">12</span>
              </div>
              <h3 className="font-semibold text-gray-800">Quizzes Done</h3>
              <p className="text-sm text-gray-600 mt-1">This month</p>
            </div>

            {/* Time Card */}
            <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-blue-100 rounded-full p-3">
                  <span className="text-2xl">⏱️</span>
                </div>
                <span className="text-3xl font-bold text-blue-600">14h</span>
              </div>
              <h3 className="font-semibold text-gray-800">Study Time</h3>
              <p className="text-sm text-gray-600 mt-1">Total hours</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Enhanced Progress Section */}
            <div className="lg:col-span-3 space-y-6">
              {/* Main Progress Card */}
              <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Learning Path Progress</h2>
                  <div className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold">
                    65% Complete
                  </div>
                </div>
                
                {/* Enhanced Progress Bar */}
                <div className="relative">
                  <div className="w-full bg-gray-200 rounded-full h-6 shadow-inner">
                    <div
                      className="bg-gradient-to-r from-indigo-500 to-purple-600 h-6 rounded-full relative overflow-hidden"
                      style={{ width: "65%" }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="absolute -top-8 left-[65%] transform -translate-x-1/2">
                    <div className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      65%
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-800">8</div>
                    <div className="text-sm text-gray-600">Completed Modules</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-800">4</div>
                    <div className="text-sm text-gray-600">Remaining Modules</div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-4 p-3 bg-green-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Completed "Advanced React Hooks" quiz</span>
                    <span className="text-xs text-gray-500 ml-auto">2 hours ago</span>
                  </div>
                  <div className="flex items-center space-x-4 p-3 bg-blue-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Started "State Management" module</span>
                    <span className="text-xs text-gray-500 ml-auto">1 day ago</span>
                  </div>
                  <div className="flex items-center space-x-4 p-3 bg-purple-50 rounded-lg">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Achieved 5-day learning streak! 🎉</span>
                    <span className="text-xs text-gray-500 ml-auto">2 days ago</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Quick Actions */}
              <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    Continue Learning
                  </button>
                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-xl font-semibold transition-all duration-300">
                    Take Practice Quiz
                  </button>
                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-xl font-semibold transition-all duration-300">
                    Review Materials
                  </button>
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Achievements</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <span className="text-2xl">🏆</span>
                    <div>
                      <div className="font-semibold text-sm">Quiz Master</div>
                      <div className="text-xs text-gray-600">Completed 10+ quizzes</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                    <span className="text-2xl">⚡</span>
                    <div>
                      <div className="font-semibold text-sm">Speed Learner</div>
                      <div className="text-xs text-gray-600">5-day streak achieved</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced AI Chat Tutor */}
          <div className="mt-8">
            <div className="bg-white shadow-xl rounded-3xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-500 to-blue-600 p-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">AI Learning Assistant</h2>
                    <p className="text-white/90">Get personalized help and explanations</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <ChatTutor />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}