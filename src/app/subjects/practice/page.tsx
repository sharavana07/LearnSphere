"use client";

import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function PracticePage() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [showHint, setShowHint] = useState(false);

  // Dummy performance data
  const performanceData = [
    { attempt: 1, accuracy: 60 },
    { attempt: 2, accuracy: 75 },
    { attempt: 3, accuracy: 80 },
    { attempt: 4, accuracy: 90 },
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning) {
      timer = setInterval(() => setTime((prev) => prev + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      {/* Problem Section */}
      <div className="flex-1 p-6 bg-white shadow-md">
        <h1 className="text-2xl font-bold mb-4">Practice Problem</h1>
        <p className="mb-4 text-gray-700">
          Solve: If f(x) = 2x + 3, find f(5).
        </p>

        {/* Timer */}
        <div className="flex items-center space-x-4 mb-4">
          <span className="text-lg font-semibold">Time: {formatTime(time)}</span>
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            {isRunning ? "Pause" : "Start"}
          </button>
          <button
            onClick={() => { setTime(0); setIsRunning(false); }}
            className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Reset
          </button>
        </div>

        {/* Hint */}
        <button
          onClick={() => setShowHint(!showHint)}
          className="mb-4 px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          {showHint ? "Hide Hint" : "Show Hint"}
        </button>
        {showHint && (
          <div className="p-3 bg-yellow-100 border border-yellow-400 rounded mb-4">
            Recall: f(x) = 2x + 3 means multiply x by 2 and then add 3.
          </div>
        )}

        {/* Answer Input */}
        <input
          type="text"
          placeholder="Enter your answer"
          className="border p-2 rounded w-full mb-4"
        />
        <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Submit
        </button>
      </div>

      {/* Analytics Section */}
      <div className="lg:w-1/3 p-6 bg-white shadow-md">
        <h2 className="text-xl font-bold mb-4">Performance Analytics</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="attempt" label={{ value: "Attempts", position: "insideBottom", offset: -5 }} />
            <YAxis domain={[0, 100]} label={{ value: "Accuracy (%)", angle: -90, position: "insideLeft" }} />
            <Tooltip />
            <Line type="monotone" dataKey="accuracy" stroke="#4f46e5" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
