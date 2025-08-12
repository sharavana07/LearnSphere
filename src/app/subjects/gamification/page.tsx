// src/app/dashboard/gamification/page.tsx
"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function GamificationPage() {
  const comparisonData = [
    { day: "Mon", lastWeek: 4, thisWeek: 6 },
    { day: "Tue", lastWeek: 5, thisWeek: 7 },
    { day: "Wed", lastWeek: 6, thisWeek: 8 },
    { day: "Thu", lastWeek: 3, thisWeek: 5 },
    { day: "Fri", lastWeek: 4, thisWeek: 7 },
  ];

  const badges = [
    { title: "Quiz Master", unlocked: true },
    { title: "7-Day Streak", unlocked: false },
    { title: "Accuracy 90%", unlocked: true },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Gamification & Achievements</h1>

      {/* Streak Tracker */}
      <div className="bg-white shadow rounded-lg p-4 mb-6">
        <h2 className="text-lg font-semibold mb-2">Current Streak</h2>
        <p className="text-gray-700">🔥 5 days in a row</p>
      </div>

      {/* Badges */}
      <div className="bg-white shadow rounded-lg p-4 mb-6">
        <h2 className="text-lg font-semibold mb-4">Badges</h2>
        <div className="flex gap-4">
          {badges.map((badge) => (
            <div
              key={badge.title}
              className={`p-4 border rounded-lg w-40 text-center ${
                badge.unlocked ? "bg-indigo-100 border-indigo-400" : "bg-gray-100 border-gray-300"
              }`}
            >
              <p className="font-medium">{badge.title}</p>
              <p className="text-sm text-gray-500">
                {badge.unlocked ? "Unlocked" : "Locked"}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison Chart */}
      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-4">Last Week vs This Week</h2>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={comparisonData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="lastWeek" fill="#a5b4fc" name="Last Week" />
              <Bar dataKey="thisWeek" fill="#4f46e5" name="This Week" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
