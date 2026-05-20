'use client';

import { useState } from 'react';
import Link from 'next/link';
import { TiWeatherSunny } from 'react-icons/ti';
import { FiMoon } from 'react-icons/fi';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/providers/ThemeProvider';
import { authClient } from '@/lib/auth-client';
import { Avatar } from '@heroui/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();

  const pathname = usePathname();

  const navLinks = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'All Pets',
      path: '/all-pets',
    },
    {
      name: 'My Requests',
      path: '/my-requests',
    },
    {
      name: 'Add Pet',
      path: '/add-pet',
    },
  ];

  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch, //refetch the session
  } = authClient.useSession();
  const user = session?.user;
  
  const handleLogout = async() => {
    await authClient.signOut();
  }
  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-[#0B0F19] border-b border-gray-200 dark:border-gray-800 text-black dark:text-white px-6 py-4 backdrop-blur-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold text-black dark:text-white"
        >
          <span className="text-orange-500 text-3xl">🐾</span>

          <span>
            Pet<span className="text-orange-500">Haven</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
          {navLinks.map(item => (
            <Link
              key={item.path}
              href={item.path}
              className={`transition-all duration-300 hover:text-orange-500 ${
                pathname === item.path
                  ? 'text-orange-500 border-b-2 border-orange-500 pb-1'
                  : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
          >
            {theme === 'dark' ? (
              <TiWeatherSunny size={20} className="text-yellow-400" />
            ) : (
              <FiMoon size={20} className="text-gray-700" />
            )}
          </button>

          {user ? (
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-700 rounded-full p-1.5 pr-3 transition-all duration-300"
              >
                <Avatar>
                  <Avatar.Image
                    referrerPolicy="no-referrer"
                    alt="John Doe"
                    src={user?.image}
                    className="rounded-full h-8 w-8"
                  />
                  <Avatar.Fallback>
                    {user?.name[0].toUpperCase()}
                  </Avatar.Fallback>
                </Avatar>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 text-gray-500 dark:text-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>

              {/* Dropdown */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-3 w-52 bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl py-2 z-50">
                  <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-800">
                    <p className="text-sm font-semibold text-black dark:text-white">
                      {user?.name}
                    </p>

                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {user?.email}
                    </p>
                  </div>

                  <Link
                    href="/dashboard"
                    className="block px-4 py-2.5 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white transition-all duration-300"
                  >
                    Dashboard
                  </Link>

                  <Link
                    href="/settings"
                    className="block px-4 py-2.5 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white transition-all duration-300"
                  >
                    Settings
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all duration-300"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link href="/login">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-lg shadow-orange-500/20">
                Login
              </button>
            </Link>
          )}
        </div>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center gap-3">
          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-all duration-300"
          >
            <svg
              className="w-6 h-6"
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-gray-200 dark:border-gray-800 flex flex-col gap-3">
          {navLinks.map(item => (
            <Link
              key={item.path}
              href={item.path}
              className={`px-2 py-1 text-sm font-medium transition-all duration-300 ${
                pathname === item.path
                  ? 'text-orange-500'
                  : 'text-gray-600 dark:text-gray-300 hover:text-orange-500'
              }`}
            >
              {item.name}
            </Link>
          ))}

          <div className="pt-3 border-t border-gray-200 dark:border-gray-800">
            <Link href="/login">
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2.5 rounded-full text-sm font-medium transition-all duration-300">
                Login
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
