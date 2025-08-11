export default function CoursesPage() {
  const courses = [
    {
      id: 1,
      title: "JavaScript Essentials",
      description: "Learn the basics of JavaScript and start building dynamic websites.",
      progress: 75,
    },
    {
      id: 2,
      title: "React for Beginners",
      description: "A step-by-step guide to building modern React applications.",
      progress: 40,
    },
    {
      id: 3,
      title: "Tailwind CSS Mastery",
      description: "Style your websites faster with Tailwind’s utility-first classes.",
      progress: 100,
    },
  ];

  return (
    <main className="flex-1 p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">My Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow rounded-lg p-4 border hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold mb-2">{course.title}</h2>
            <p className="text-gray-600 text-sm mb-4">{course.description}</p>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-indigo-500 h-3 rounded-full"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              {course.progress}% completed
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
