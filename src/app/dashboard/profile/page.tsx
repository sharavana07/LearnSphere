// src/app/dashboard/profile/page.tsx
export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-indigo-600">My Profile</h1>

        {/* Profile Info */}
        <div className="flex items-center space-x-6 mb-6">
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            className="w-24 h-24 rounded-full border"
          />
          <div>
            <h2 className="text-xl font-semibold">David waston</h2>
            <p className="text-gray-500">davidwaston@example.com</p>
          </div>
        </div>

        {/* Editable Fields */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              defaultValue="John Doe"
              className="mt-1 block w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              defaultValue="johndoe@example.com"
              className="mt-1 block w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Bio
            </label>
            <textarea
              defaultValue="Passionate learner exploring the world of tech!"
              className="mt-1 block w-full border rounded p-2"
            ></textarea>
          </div>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
            Save Changes
          </button>
        </form>
      </div>
    </main>
  );
}
