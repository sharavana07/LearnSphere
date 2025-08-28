// app/community/page.tsx
"use client";
import { useState } from "react";
import Link from "next/link";

// Mock data (replace with API call later)
const categoriesData = [
  { 
    id: 1, 
    name: "General Discussion", 
    description: "Talk about anything related to learning and connect with fellow learners.", 
    postCount: 234,
    icon: "💬",
    color: "from-blue-500 to-blue-600"
  },
  { 
    id: 2, 
    name: "Tech & Development", 
    description: "Discuss coding, frameworks, and share your latest projects.", 
    postCount: 189,
    icon: "⚡",
    color: "from-purple-500 to-purple-600"
  },
  { 
    id: 3, 
    name: "Study Resources", 
    description: "Share books, tutorials, and guides that helped you learn.", 
    postCount: 156,
    icon: "📚",
    color: "from-green-500 to-green-600"
  },
  { 
    id: 4, 
    name: "Career Advice", 
    description: "Get guidance on jobs, internships, and skill development.", 
    postCount: 98,
    icon: "🚀",
    color: "from-orange-500 to-orange-600"
  },
];

const recentPostsData = [
  {
    id: 101,
    title: "Best resources to learn TypeScript?",
    author: "Alex",
    authorAvatar: "A",
    category: "Tech & Development",
    categoryColor: "bg-purple-100 text-purple-700",
    date: "2025-08-12",
    replies: 12,
    likes: 24,
    excerpt: "I'm looking for comprehensive resources to master TypeScript. Any recommendations for someone with JavaScript background?"
  },
  {
    id: 102,
    title: "Share your favorite productivity hacks",
    author: "Maya",
    authorAvatar: "M",
    category: "General Discussion",
    categoryColor: "bg-blue-100 text-blue-700",
    date: "2025-08-11",
    replies: 8,
    likes: 31,
    excerpt: "What are your go-to techniques for staying productive while learning new skills? Let's share some tips!"
  },
  {
    id: 103,
    title: "Looking for a study partner in AI/ML",
    author: "Ravi",
    authorAvatar: "R",
    category: "Study Partners",
    categoryColor: "bg-green-100 text-green-700",
    date: "2025-08-10",
    replies: 15,
    likes: 18,
    excerpt: "Anyone interested in studying machine learning together? I'm working through Andrew Ng's course."
  },
  {
    id: 104,
    title: "Junior developer job market insights",
    author: "Sarah",
    authorAvatar: "S",
    category: "Career Advice",
    categoryColor: "bg-orange-100 text-orange-700",
    date: "2025-08-09",
    replies: 22,
    likes: 45,
    excerpt: "Recent graduate sharing my experience job hunting and what I learned about the current market."
  },
];

const trendingTopics = [
  { name: "React 19", posts: 45 },
  { name: "System Design", posts: 38 },
  { name: "Remote Work", posts: 29 },
  { name: "Open Source", posts: 24 },
  { name: "Interview Prep", posts: 19 },
];

export default function CommunityPage() {
  const [categories, setCategories] = useState(categoriesData);
  const [recentPosts, setRecentPosts] = useState(recentPostsData);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  // Filter posts based on search and category
  const filteredPosts = recentPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === "all" || 
                         post.category.toLowerCase().includes(selectedFilter.toLowerCase());
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to Our Learning Community
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Connect, learn, and grow together. Share knowledge, ask questions, and discover new opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/community/create"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                ✨ Create Your First Post
              </Link>
              <div className="flex items-center space-x-6 text-sm opacity-80">
                <span>👥 12.4K Members</span>
                <span>📝 2.1K Posts</span>
                <span>💬 8.7K Comments</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-6">
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-400">🔍</span>
              </div>
              <input
                type="text"
                placeholder="Search posts, topics, or users..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white min-w-[160px]"
            >
              <option value="all">All Categories</option>
              <option value="general">General</option>
              <option value="tech">Tech & Dev</option>
              <option value="resources">Resources</option>
              <option value="career">Career</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Categories Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="mr-2">📂</span>
                Explore Categories
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {categories.map((cat) => (
                  <div
                    key={cat.id}
                    className="group relative bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
                  >
                    <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${cat.color} opacity-10 rounded-full transform translate-x-6 -translate-y-6`}></div>
                    <div className="relative">
                      <div className="flex items-start justify-between mb-3">
                        <span className="text-3xl mb-2 block">{cat.icon}</span>
                        <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                          {cat.postCount} posts
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                        {cat.name}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{cat.description}</p>
                      <Link
                        href={`/community/category/${cat.id}`}
                        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                      >
                        Explore Posts
                        <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Recent Posts Section */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold flex items-center">
                  <span className="mr-2">🔥</span>
                  Latest Discussions
                </h2>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <span>{filteredPosts.length} posts found</span>
                </div>
              </div>
              <div className="space-y-4">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-200 border border-gray-100 group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm shrink-0">
                        {post.authorAvatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${post.categoryColor}`}>
                            {post.category}
                          </span>
                          <span className="text-sm text-gray-500">
                            by {post.author} • {post.date}
                          </span>
                        </div>
                        <Link
                          href={`/community/post/${post.id}`}
                          className="block group-hover:text-blue-600 transition-colors"
                        >
                          <h3 className="text-xl font-bold mb-2 leading-tight">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed mb-4">
                            {post.excerpt}
                          </p>
                        </Link>
                        <div className="flex items-center space-x-6 text-sm text-gray-500">
                          <span className="flex items-center hover:text-blue-600 transition-colors cursor-pointer">
                            <span className="mr-1">💬</span>
                            {post.replies} replies
                          </span>
                          <span className="flex items-center hover:text-red-500 transition-colors cursor-pointer">
                            <span className="mr-1">❤️</span>
                            {post.likes} likes
                          </span>
                          <span className="flex items-center hover:text-blue-600 transition-colors cursor-pointer">
                            <span className="mr-1">🔗</span>
                            Share
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-80">
            {/* Trending Topics */}
            <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <span className="mr-2">📈</span>
                Trending Topics
              </h3>
              <div className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div key={topic.name} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <span className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </span>
                      <span className="font-medium text-gray-700">{topic.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">{topic.posts} posts</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="text-lg font-bold mb-4 text-gray-800">Quick Actions</h3>
              <div className="space-y-3">
                <Link 
                  href="/community/create"
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                >
                  ✍️ Start a Discussion
                </Link>
                <Link 
                  href="/community/ask"
                  className="block w-full bg-white text-blue-600 text-center py-3 rounded-xl font-semibold border-2 border-blue-200 hover:bg-blue-50 transition-colors"
                >
                  ❓ Ask a Question
                </Link>
                <Link 
                  href="/community/resources"
                  className="block w-full bg-green-600 text-white text-center py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors"
                >
                  📚 Share Resources
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}