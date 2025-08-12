// src/app/dashboard/parent/page.tsx
"use client";

import { jsPDF } from "jspdf";
import Papa from "papaparse";

export default function ParentView() {
  const studentData = [
    { subject: "Math", quizzes: 10, accuracy: "85%", timeSpent: "6h" },
    { subject: "Science", quizzes: 8, accuracy: "78%", timeSpent: "5h" },
    { subject: "English", quizzes: 12, accuracy: "92%", timeSpent: "7h" },
  ];

  const downloadCSV = () => {
    const csv = Papa.unparse(studentData);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "student_report.csv";
    a.click();
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Student Performance Report", 14, 20);

    studentData.forEach((row, index) => {
      doc.text(
        `${row.subject} - Quizzes: ${row.quizzes}, Accuracy: ${row.accuracy}, Time Spent: ${row.timeSpent}`,
        14,
        40 + index * 10
      );
    });

    doc.save("student_report.pdf");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Parent / Teacher View</h1>

      {/* Summary Table */}
      <div className="bg-white shadow rounded-lg p-4 mb-6">
        <h2 className="text-lg font-semibold mb-4">Student Performance Summary</h2>
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Subject</th>
              <th className="border p-2">Quizzes Completed</th>
              <th className="border p-2">Accuracy</th>
              <th className="border p-2">Time Spent</th>
            </tr>
          </thead>
          <tbody>
            {studentData.map((row) => (
              <tr key={row.subject}>
                <td className="border p-2">{row.subject}</td>
                <td className="border p-2">{row.quizzes}</td>
                <td className="border p-2">{row.accuracy}</td>
                <td className="border p-2">{row.timeSpent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Download Buttons */}
      <div className="flex gap-4">
        <button
          onClick={downloadCSV}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Download CSV
        </button>
        <button
          onClick={downloadPDF}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
}
