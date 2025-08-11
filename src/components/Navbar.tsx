"use client";

import { useState } from "react";
import Link from "next/link";
import Modal from "./Modal";

export default function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <nav className="bg-white w-full z-10 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 font-bold text-indigo-600 text-xl">
            <Link href="/">LearnSphere</Link>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4">
            <Link
              href="/dashboard"
              className="bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200"
            >
              Dashboard
            </Link>
            <button
              onClick={() => setIsLoginOpen(true)}
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            >
              Login / Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)}>
        <h2 className="text-2xl font-bold text-center mb-4">Welcome Back</h2>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded"
          />
          <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
            Login
          </button>
        </form>
        <p className="text-center mt-4 text-sm text-gray-500">
          Don’t have an account?{" "}
          <a href="#" className="text-indigo-600 hover:underline">
            Sign Up
          </a>
        </p>
      </Modal>
    </nav>
  );
}
