export default function SettingsPage() {
  return (
    <main className="flex-1 p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      <div className="bg-white rounded-lg shadow p-6 max-w-2xl space-y-6">
        {/* Theme Settings */}
        <section>
          <h2 className="text-lg font-semibold mb-2">Theme</h2>
          <select className="w-full border border-gray-300 rounded-md p-2 focus:border-indigo-500 focus:ring-indigo-500">
            <option>Light</option>
            <option>Dark</option>
            <option>System Default</option>
          </select>
        </section>

        {/* Notification Settings */}
        <section>
          <h2 className="text-lg font-semibold mb-2">Notifications</h2>
          <label className="flex items-center space-x-2">
            <input type="checkbox" defaultChecked className="rounded" />
            <span>Email Notifications</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" defaultChecked className="rounded" />
            <span>Push Notifications</span>
          </label>
        </section>

        {/* Security */}
        <section>
          <h2 className="text-lg font-semibold mb-2">Security</h2>
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
            Change Password
          </button>
        </section>

        {/* Save Button */}
        <div>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            Save Changes
          </button>
        </div>
      </div>
    </main>
  );
}
