import Tabs from "@/components/Tabs";

const mockSyllabus = [
  { week: 1, title: "Foundations: Variables & Control Flow" },
  { week: 2, title: "Functions & Data Structures" },
  { week: 3, title: "OOP & Modules" },
  { week: 4, title: "Project: Build a Mini App" },
];

function LearningPathsPanel() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">AI-generated Learning Path</h3>
      <p className="text-sm text-gray-600">
        This syllabus adapts as you progress — weak topics get extra practice automatically.
      </p>

      <div className="mt-4 grid gap-3">
        {mockSyllabus.map((s) => (
          <div key={s.week} className="flex items-center justify-between bg-indigo-50 p-3 rounded">
            <div>
              <div className="font-semibold">Week {s.week}</div>
              <div className="text-sm text-gray-600">{s.title}</div>
            </div>
            <div className="text-sm text-indigo-600">Estimated time: 3–4 hrs</div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex gap-3">
        <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">Start Path</button>
        <button className="bg-white border px-4 py-2 rounded hover:bg-gray-100">Customize</button>
      </div>
    </div>
  );
}

function QuizPanel() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Adaptive Quiz</h3>
      <p className="text-sm text-gray-600">Quick practice to assess current mastery. Difficulty adapts by performance.</p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="p-4 bg-white rounded shadow">
          <div className="font-semibold">Topic: Functions</div>
          <div className="text-sm text-gray-500">Adaptive difficulty: Medium</div>
          <div className="mt-3 flex gap-2">
            <button className="px-3 py-1 bg-indigo-600 text-white rounded">Start Quiz</button>
            <button className="px-3 py-1 border rounded">Practice</button>
          </div>
        </div>

        <div className="p-4 bg-white rounded shadow">
          <div className="font-semibold">Mixed: 10 questions</div>
          <div className="text-sm text-gray-500">Time: 10 minutes</div>
          <div className="mt-3 flex gap-2">
            <button className="px-3 py-1 bg-indigo-600 text-white rounded">Start</button>
            <button className="px-3 py-1 border rounded">Preview</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResourcesPanel() {
  const resources = [
    { id: 1, title: "Intro Video: Variables", type: "Video", length: "8m" },
    { id: 2, title: "Cheat Sheet: Control Flow", type: "PDF", length: "1 page" },
    { id: 3, title: "Interactive Playground: Try it", type: "Tool", length: "Web" },
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold">Resources Library</h3>
      <p className="text-sm text-gray-600">Search and filter curated notes, videos and interactive examples.</p>

      <div className="mt-4 space-y-3">
        {resources.map((r) => (
          <div key={r.id} className="flex items-center justify-between bg-white p-3 rounded shadow">
            <div>
              <div className="font-medium">{r.title}</div>
              <div className="text-sm text-gray-500">{r.type} · {r.length}</div>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 border rounded">Open</button>
              <button className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded">Save</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SubjectsPage() {
  const tabs = [
    { title: "Learning Paths", panel: <LearningPathsPanel /> },
    { title: "Quiz", panel: <QuizPanel /> },
    { title: "Resources", panel: <ResourcesPanel /> },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Subjects</h1>
      <p className="text-sm text-gray-600 mb-6">Choose a subject and explore learning paths, quizzes and resources.</p>

      <Tabs tabs={tabs} />
    </div>
  );
}
