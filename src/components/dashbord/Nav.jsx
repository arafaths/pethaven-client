'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { TiWeatherSunny } from 'react-icons/ti';
import { FiMoon } from 'react-icons/fi';

import {
  Menu,
  X,
  FileText,
  Heart,
  Plus,
  LogOut,
  NotebookTabs,
} from 'lucide-react';

import { Avatar } from '@heroui/react';

import { authClient } from '@/lib/auth-client';
import { useTheme } from '@/providers/ThemeProvider';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();

  const { data: session } = authClient.useSession();

  const user = session?.user;

  const menuItems = [
    {
      name: 'My Listings',
      href: '/dashboard/my-listings',
      icon: NotebookTabs,
    },
    {
      name: 'My Requests',
      href: '/dashboard/my-requests',
      icon: FileText,
    },
    {
      name: 'Favorites',
      href: '/dashboard/favorites',
      icon: Heart,
    },
    {
      name: 'Add Pet',
      href: '/dashboard/add-pet',
      icon: Plus,
    },
  ];

  const handleLogout = async () => {
    await authClient.signOut();
  };

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-52 bg-white dark:bg-[#0B0F19] border-b border-gray-200 dark:border-gray-800 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4 flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-3">
            {/* Mobile Sidebar Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden text-black dark:text-white"
            >
              <Menu size={26} />
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/PetHaven.png"
                alt="PetHaven"
                width={36}
                height={36}
                className="w-9 h-9"
              />

              <h2 className="text-xl font-bold text-black dark:text-white">
                Pet<span className="text-orange-500">Haven</span>
              </h2>
            </Link>
          </div>

          {/* Right */}
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

            {/* User */}
            {user && (
              <div className="hidden lg:flex items-center gap-3 dark:border-gray-800">
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

                <div>
                  <h3 className="text-sm font-semibold text-black dark:text-white">
                    {user?.name}
                  </h3>

                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {user?.email}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-52
          h-screen w-64
          bg-white dark:bg-[#0B0F19]
          border-r border-gray-200 dark:border-gray-800
          transform transition-transform duration-300
          lg:hidden

          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-200 dark:border-gray-800">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/PetHaven.png" alt="PetHaven" width={32} height={32} />

            <h2 className="text-lg font-bold text-black dark:text-white">
              Pet<span className="text-orange-500">Haven</span>
            </h2>
          </Link>

          <button
            onClick={() => setIsOpen(false)}
            className="text-black dark:text-white"
          >
            <X size={24} />
          </button>
        </div>

        {/* User */}
        {user && (
          <div className="flex items-center gap-3 p-4 border-b border-gray-200 dark:border-gray-800">
            <Avatar>
              <Avatar.Image
                referrerPolicy="no-referrer"
                alt="John Doe"
                src={user?.image}
                className="rounded-full h-8 w-8"
              />
              <Avatar.Fallback>{user?.name[0].toUpperCase()}</Avatar.Fallback>
            </Avatar>

            <div>
              <h3 className="text-sm font-semibold text-black dark:text-white">
                {user?.name}
              </h3>

              <p className="text-xs text-gray-500 dark:text-gray-400">
                {user?.email}
              </p>
            </div>
          </div>
        )}

        {/* Menu */}
        <div className="flex flex-col p-4 space-y-2">
          {menuItems.map(item => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-orange-500 hover:text-white transition-all duration-300"
            >
              <item.icon size={20} />

              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          ))}
        </div>

        {/* Logout */}
        <div className="absolute bottom-5 left-0 w-full px-4">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300"
          >
            <LogOut size={20} />

            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
