'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart, FileText, LogOut, Plus, NotebookTabs } from 'lucide-react';
import { authClient } from '@/lib/auth-client';

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    {
      name: 'My Requests',
      icon: FileText,
      href: '/dashboard/my-requests',
    },
    { name: 'My Listings', icon: NotebookTabs, href: '/dashboard/my-listings' },
    
    { name: 'Add Pet', icon: Plus, href: '/dashboard/add-pet' },
  ];

    const handleLogout = async () => {
      await authClient.signOut();
    };

  return (
    <aside className="fixed top-0 left-0 z-50 w-64 min-h-screen bg-[#0B0F19] border-r border-slate-900 hidden lg:flex flex-col justify-between py-6">
      {/* Menu */}
      <div className="space-y-1.5 flex-1 pt-20">
        {menuItems.map((item, idx) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={idx}
              href={item.href}
              className={`w-full flex items-center justify-between py-3.5 px-6 text-sm relative transition-all
                ${
                  isActive
                    ? 'text-orange-500 bg-[#1E293B]/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-[#1E293B]/10'
                }`}
            >
              <div className="flex items-center gap-4">
                <item.icon
                  size={20}
                  className={isActive ? 'text-orange-500' : 'text-slate-400'}
                />
                <span>{item.name}</span>
              </div>

              {isActive && (
                <div className="absolute right-0 top-0 bottom-0 w-[3px] bg-orange-500" />
              )}
            </Link>
          );
        })}
      </div>

      {/* Logout */}
      <div className="pt-4 border-t border-slate-900/60">
        <button onClick={handleLogout} className="w-full flex items-center gap-4 py-3.5 px-6 text-slate-400 hover:text-rose-400">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
}
