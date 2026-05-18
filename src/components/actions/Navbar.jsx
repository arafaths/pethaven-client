'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';

    setTheme(newTheme);

    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  return (
    <nav className="bg-[#121212] text-white px-6 py-4 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-white"
        >
          <span className="text-orange-500 text-2xl">🐾</span>
          <span>
            Paw<span className="text-orange-500">Haven</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link
            href="/"
            className="hover:text-orange-500 transition-colors text-white border-b-2 border-orange-500 pb-1"
          >
            Home
          </Link>
          <Link
            href="/all-pets"
            className="hover:text-orange-500 transition-colors"
          >
            All Pets
          </Link>
          <Link
            href="/my-requests"
            className="hover:text-orange-500 transition-colors"
          >
            My Requests
          </Link>
          <Link
            href="/add-pet"
            className="hover:text-orange-500 transition-colors"
          >
            Add Pet
          </Link>
        </div>

        {/* Right Side Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Dark Mode Toggle Icon */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-gray-700 bg-gray-800/40 hover:bg-gray-800 transition-all duration-300"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              /* Sun Icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-5 h-5 text-yellow-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m0 13.5V21m8.25-9H21M3 12H5.25m11.364 6.364 1.591 1.591M4.636 4.636l1.591 1.591m0 11.546-1.591 1.591m14.728-14.728-1.591 1.591M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            ) : (
              /* Moon Icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-5 h-5 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            )}
          </button>

          {/* Login Button */}
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-5 py-2 rounded-full text-sm transition-colors">
            Login
          </button>

          {/* User Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center gap-2 bg-gray-800/50 hover:bg-gray-800 p-1.5 pr-3 rounded-full border border-gray-700 transition-colors focus:outline-none"
            >
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
                alt="Sarah Anderson"
                className="w-7 h-7 rounded-full object-cover"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-3 h-3 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>

            {/* Profile Dropdown Menu */}
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-800 rounded-xl shadow-xl py-2 z-50">
                <div className="px-4 py-2 border-b border-gray-800">
                  <p className="text-sm font-semibold text-white">
                    Sarah Anderson
                  </p>
                  <p className="text-xs text-gray-400">Pet Owner</p>
                </div>
                <Link
                  href="/dashboard"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                  Dashboard
                </Link>
                <Link
                  href="/settings"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                  Settings
                </Link>
                <button className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-800">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-gray-700 bg-gray-800/40 hover:bg-gray-800 transition-all duration-300"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              /* Sun Icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-5 h-5 text-yellow-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m0 13.5V21m8.25-9H21M3 12H5.25m11.364 6.364 1.591 1.591M4.636 4.636l1.591 1.591m0 11.546-1.591 1.591m14.728-14.728-1.591 1.591M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            ) : (
              /* Moon Icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-5 h-5 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            )}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-400 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-gray-800 space-y-3 flex flex-col">
          <Link
            href="/"
            className="text-orange-500 font-medium px-2 py-1 rounded"
          >
            Home
          </Link>
          <Link
            href="/all-pets"
            className="text-gray-300 hover:text-white px-2 py-1"
          >
            All Pets
          </Link>
          <Link
            href="/my-requests"
            className="text-gray-300 hover:text-white px-2 py-1"
          >
            My Requests
          </Link>
          <Link
            href="/add-pet"
            className="text-gray-300 hover:text-white px-2 py-1"
          >
            Add Pet
          </Link>
          <div className="pt-2 border-t border-gray-800 flex flex-col gap-2">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-full text-sm text-center">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
