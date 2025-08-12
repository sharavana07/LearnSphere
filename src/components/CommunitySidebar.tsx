// src/components/CommunitySidebar.tsx
import Link from "next/link";

export default function CommunitySidebar() {
  return (
    <nav className="flex flex-col p-4 space-y-3 bg-white h-full">
      <h2 className="text-lg font-semibold mb-4">Community</h2>
      
      <Link
        href="/community/category"
        className="text-gray-700 hover:text-indigo-600 hover:underline"
      >
        Categories
      </Link>

      <Link
        href="/community/peers"
        className="text-gray-700 hover:text-indigo-600 hover:underline"
      >
        Peers
      </Link>

      <Link
        href="/community/post"
        className="text-gray-700 hover:text-indigo-600 hover:underline"
      >
        Posts
      </Link>
   </nav>
  );
}
