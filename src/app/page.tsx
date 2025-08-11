import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";



export default function HomePage() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gray-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            LearnSphere
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Your Personalized Learning Universe – Adaptive, Interactive, and AI-Driven.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700">
              Get Started
            </button>
            <button className="bg-white border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-gray-100">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Platform Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-600">Adaptive Learning</h3>
              <p className="mt-2 text-gray-600">
                AI-driven learning paths that adjust to your pace and style.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-600">AI Chat Tutor</h3>
              <p className="mt-2 text-gray-600">
                Get instant answers, explanations, and feedback from your AI tutor.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-600">Gamification</h3>
              <p className="mt-2 text-gray-600">
                Earn badges, track streaks, and compete on leaderboards.
              </p>
            </div>
            {/* Card 4 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-600">Community</h3>
              <p className="mt-2 text-gray-600">
                Join discussions, share knowledge, and learn together.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* How It Works Section */}
<section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
      How It Works
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      {/* Step 1 */}
      <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
        <div className="text-indigo-600 text-4xl font-bold mb-4">1</div>
        <h3 className="text-xl font-semibold mb-2">Sign Up & Personalize</h3>
        <p className="text-gray-600">
          Create your profile, choose subjects, and set your learning style.
        </p>
      </div>

      {/* Step 2 */}
      <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
        <div className="text-indigo-600 text-4xl font-bold mb-4">2</div>
        <h3 className="text-xl font-semibold mb-2">Learn with AI</h3>
        <p className="text-gray-600">
          Follow AI-powered lessons, quizzes, and interactive exercises.
        </p>
      </div>

      {/* Step 3 */}
      <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
        <div className="text-indigo-600 text-4xl font-bold mb-4">3</div>
        <h3 className="text-xl font-semibold mb-2">Track & Achieve</h3>
        <p className="text-gray-600">
          Monitor progress, earn badges, and celebrate achievements.
        </p>
      </div>
    </div>
  </div>
</section>
<Testimonials />
<Footer />

    </div>
  );
}
