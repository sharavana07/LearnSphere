
"use client";
import { useState } from 'react';
import { Bell, BookOpen, Trophy, Flame, X, Check, Clock, Star } from 'lucide-react';

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'course',
      title: "New Lesson Available",
      message: "Your JavaScript Essentials course has a new lesson: 'Async/Await Patterns'",
      time: "2 hours ago",
      unread: true,
      icon: BookOpen,
      color: "blue",
      action: "Start Learning"
    },
    {
      id: 2,
      type: 'achievement',
      title: "Course Completed!",
      message: "You completed the Tailwind CSS Mastery course. Amazing work!",
      time: "Yesterday",
      unread: true,
      icon: Trophy,
      color: "yellow",
      action: "View Certificate"
    },
    {
      id: 3,
      type: 'streak',
      title: "Streak Milestone",
      message: "Your learning streak is now 7 days long. Keep the momentum going!",
      time: "2 days ago",
      unread: false,
      icon: Flame,
      color: "orange",
      action: "Continue"
    },
    {
      id: 4,
      type: 'reminder',
      title: "Study Reminder",
      message: "You have 3 pending assignments due this week",
      time: "3 days ago",
      unread: false,
      icon: Clock,
      color: "purple",
      action: "View Tasks"
    }
  ]);

  const unreadCount = notifications.filter(n => n.unread).length;

  const markAsRead = (id) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, unread: false } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })));
  };

  const removeNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const getIconColor = (color, unread) => {
    const colors = {
      blue: unread ? 'text-blue-600 bg-blue-100' : 'text-blue-400 bg-blue-50',
      yellow: unread ? 'text-yellow-600 bg-yellow-100' : 'text-yellow-400 bg-yellow-50',
      orange: unread ? 'text-orange-600 bg-orange-100' : 'text-orange-400 bg-orange-50',
      purple: unread ? 'text-purple-600 bg-purple-100' : 'text-purple-400 bg-purple-50',
    };
    return colors[color];
  };

  const getActionColor = (color) => {
    const colors = {
      blue: 'bg-blue-600 hover:bg-blue-700',
      yellow: 'bg-yellow-600 hover:bg-yellow-700',
      orange: 'bg-orange-600 hover:bg-orange-700',
      purple: 'bg-purple-600 hover:bg-purple-700',
    };
    return colors[color];
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Bell className="w-8 h-8 text-slate-700" />
              {unreadCount > 0 && (
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {unreadCount}
                </div>
              )}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Notifications</h1>
              <p className="text-slate-600 mt-1">
                {unreadCount > 0 ? `${unreadCount} unread notifications` : 'All caught up!'}
              </p>
            </div>
          </div>
          
          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors font-medium"
            >
              <Check className="w-4 h-4" />
              Mark all as read
            </button>
          )}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <BookOpen className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-slate-600 text-sm">Active Courses</p>
                <p className="text-2xl font-bold text-slate-900">3</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Flame className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-slate-600 text-sm">Current Streak</p>
                <p className="text-2xl font-bold text-slate-900">7 days</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Trophy className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <p className="text-slate-600 text-sm">Completed</p>
                <p className="text-2xl font-bold text-slate-900">12</p>
              </div>
            </div>
          </div>
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {notifications.length === 0 ? (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-12 text-center">
              <Bell className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">No notifications</h3>
              <p className="text-slate-600">You're all caught up! Check back later for updates.</p>
            </div>
          ) : (
            notifications.map((notification) => {
              const IconComponent = notification.icon;
              return (
                <div
                  key={notification.id}
                  className={`bg-white rounded-xl shadow-sm border transition-all duration-200 hover:shadow-md ${
                    notification.unread 
                      ? 'border-l-4 border-l-blue-500 border-slate-200' 
                      : 'border-slate-200'
                  }`}
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className={`p-3 rounded-full ${getIconColor(notification.color, notification.unread)}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-semibold text-slate-900">{notification.title}</h3>
                              {notification.unread && (
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              )}
                            </div>
                            <p className="text-slate-600 mb-2">{notification.message}</p>
                            <p className="text-sm text-slate-500">{notification.time}</p>
                          </div>
                          
                          {/* Actions */}
                          <div className="flex items-center gap-2">
                            {notification.unread && (
                              <button
                                onClick={() => markAsRead(notification.id)}
                                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                                title="Mark as read"
                              >
                                <Check className="w-4 h-4" />
                              </button>
                            )}
                            <button
                              onClick={() => removeNotification(notification.id)}
                              className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                              title="Remove notification"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        
                        {/* Action Button */}
                        <div className="mt-4">
                          <button className={`px-4 py-2 text-white text-sm font-medium rounded-lg transition-colors ${getActionColor(notification.color)}`}>
                            {notification.action}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        {notifications.length > 0 && (
          <div className="mt-8 text-center">
            <p className="text-slate-500 text-sm">
              Showing {notifications.length} notification{notifications.length !== 1 ? 's' : ''}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}