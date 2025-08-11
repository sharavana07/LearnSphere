export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      message: "Your JavaScript Essentials course has a new lesson available.",
      time: "2 hours ago",
    },
    {
      id: 2,
      message: "You completed the Tailwind CSS Mastery course. Congratulations!",
      time: "Yesterday",
    },
    {
      id: 3,
      message: "Your streak is now 7 days long. Keep it up!",
      time: "2 days ago",
    },
  ];

  return (
    <main className="flex-1 p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">Notifications</h1>
      <div className="bg-white rounded-lg shadow p-4 divide-y">
        {notifications.map((note) => (
          <div key={note.id} className="py-3">
            <p className="text-gray-800">{note.message}</p>
            <span className="text-sm text-gray-500">{note.time}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
