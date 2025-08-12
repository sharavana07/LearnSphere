
"use client";

import React, { useState } from 'react';
import { User, Mail, FileText, Camera, Edit3, Check, X } from 'lucide-react';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'David Watson',
    email: 'davidwaston@example.com',
    bio: 'Passionate learner exploring the world of tech and innovation!'
  });
  const [tempData, setTempData] = useState(profileData);
  const [isSaving, setIsSaving] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
    setTempData(profileData);
  };

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setProfileData(tempData);
    setIsEditing(false);
    setIsSaving(false);
  };

  const handleCancel = () => {
    setTempData(profileData);
    setIsEditing(false);
  };

  const handleInputChange = (field, value) => {
    setTempData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Profile</h1>
          <p className="text-gray-600">Manage your account information and preferences</p>
        </div>

        {/* Main Profile Card */}
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
          {/* Header Section with Gradient */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 h-32 relative">
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          {/* Profile Content */}
          <div className="px-6 sm:px-8 pb-8">
            {/* Profile Picture and Basic Info */}
            <div className="relative -mt-16 mb-8">
              <div className="flex flex-col sm:flex-row sm:items-end sm:space-x-6">
                <div className="relative mb-4 sm:mb-0">
                  <img
                    src="https://via.placeholder.com/120"
                    alt="Profile"
                    className="w-32 h-32 rounded-2xl border-4 border-white shadow-lg object-cover"
                  />
                  <button className="absolute bottom-2 right-2 bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full shadow-lg transition-colors">
                    <Camera size={16} />
                  </button>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{profileData.name}</h2>
                      <p className="text-gray-600 flex items-center mt-1">
                        <Mail size={16} className="mr-2" />
                        {profileData.email}
                      </p>
                    </div>
                    
                    {!isEditing && (
                      <button
                        onClick={handleEdit}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl font-medium transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl"
                      >
                        <Edit3 size={16} />
                        <span>Edit Profile</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Editable Form */}
            <div className="space-y-6">
              {/* Full Name */}
              <div className="group">
                <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                  <User size={16} className="mr-2 text-indigo-600" />
                  Full Name
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={tempData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-0 transition-colors bg-gray-50 focus:bg-white"
                    placeholder="Enter your full name"
                  />
                ) : (
                  <div className="w-full px-4 py-3 bg-gray-50 rounded-xl text-gray-900 font-medium">
                    {profileData.name}
                  </div>
                )}
              </div>

              {/* Email Address */}
              <div className="group">
                <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                  <Mail size={16} className="mr-2 text-indigo-600" />
                  Email Address
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    value={tempData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-0 transition-colors bg-gray-50 focus:bg-white"
                    placeholder="Enter your email address"
                  />
                ) : (
                  <div className="w-full px-4 py-3 bg-gray-50 rounded-xl text-gray-900 font-medium">
                    {profileData.email}
                  </div>
                )}
              </div>

              {/* Bio */}
              <div className="group">
                <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                  <FileText size={16} className="mr-2 text-indigo-600" />
                  Bio
                </label>
                {isEditing ? (
                  <textarea
                    value={tempData.bio}
                    onChange={(e) => handleInputChange('bio', e.target.value)}
                    rows="4"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-0 transition-colors bg-gray-50 focus:bg-white resize-none"
                    placeholder="Tell us about yourself..."
                  />
                ) : (
                  <div className="w-full px-4 py-3 bg-gray-50 rounded-xl text-gray-700 leading-relaxed">
                    {profileData.bio}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              {isEditing && (
                <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-100">
                  <button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
                  >
                    {isSaving ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Saving...</span>
                      </>
                    ) : (
                      <>
                        <Check size={18} />
                        <span>Save Changes</span>
                      </>
                    )}
                  </button>
                  
                  <button
                    onClick={handleCancel}
                    disabled={isSaving}
                    className="flex-1 sm:flex-initial bg-gray-100 hover:bg-gray-200 disabled:bg-gray-50 text-gray-700 disabled:text-gray-400 px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 disabled:cursor-not-allowed"
                  >
                    <X size={18} />
                    <span>Cancel</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Additional Settings Card */}
        <div className="mt-6 bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button className="p-4 border-2 border-gray-200 hover:border-indigo-300 rounded-xl text-left transition-colors group">
              <div className="font-medium text-gray-900 group-hover:text-indigo-600">Change Password</div>
              <div className="text-sm text-gray-500 mt-1">Update your account security</div>
            </button>
            <button className="p-4 border-2 border-gray-200 hover:border-indigo-300 rounded-xl text-left transition-colors group">
              <div className="font-medium text-gray-900 group-hover:text-indigo-600">Privacy Settings</div>
              <div className="text-sm text-gray-500 mt-1">Manage your privacy preferences</div>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}