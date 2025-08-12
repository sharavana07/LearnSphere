import Link from "next/link";

export default function SubjectsSidebar() {
  return (
    <nav className="flex flex-col p-4 space-y-2 bg-white h-full">
      <h2 className="text-lg font-semibold mb-4">Subjects</h2>
      <Link
        href="/subjects/gamification"
        className="text-gray-700 hover:text-indigo-600 hover:underline"
      >
        Gamification
      </Link>
      <Link
        href="/subjects/parent"
        className="text-gray-700 hover:text-indigo-600 hover:underline"
      >
        Parent
      </Link>
      <Link
        href="/subjects/practice"
        className="text-gray-700 hover:text-indigo-600 hover:underline"
      >
        Practice
      </Link>
    </nav>
  );
}
