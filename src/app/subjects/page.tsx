// src/app/subjects/page.tsx
"use client";

import { useState } from "react";

export default function SubjectsPage() {
  const tabs = ["Learning Paths", "Quiz", "Resources"];
  const [activeTab, setActiveTab] = useState("Learning Paths");

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-6 text-indigo-600">Subjects</h1>

      {/* Tabs */}
      <div className="flex space-x-4 border-b mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 px-4 ${
              activeTab === tab
                ? "border-b-2 border-indigo-600 text-indigo-600 font-semibold"
                : "text-gray-500 hover:text-indigo-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white shadow rounded-lg p-6">
        {activeTab === "Learning Paths" && (
          <div>
            <h2 className="text-lg font-semibold mb-4">AI-Generated Syllabus</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Introduction to Subject</li>
              <li>Core Concepts & Fundamentals</li>
              <li>Advanced Topics & Projects</li>
              <li>Revision & Final Assessment</li>
            </ul>
          </div>
        )}

        {activeTab === "Quiz" && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Available Quizzes</h2>
            <ul className="space-y-2 text-gray-700">
              <li>Beginner Quiz – 10 Questions</li>
              <li>Intermediate Quiz – 20 Questions</li>
              <li>Mixed Quiz – Random Difficulty</li>
            </ul>
          </div>
        )}

        {activeTab === "Resources" && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Resources Library</h2>
            <input
              type="text"
              placeholder="Search resources..."
              className="w-full p-2 border rounded mb-4"
            />
            <ul className="space-y-2 text-blue-600">
              <li>
                <a href="#" className="hover:underline">Lecture Notes – PDF</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Video Tutorial – YouTube</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Example Projects – GitHub</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
