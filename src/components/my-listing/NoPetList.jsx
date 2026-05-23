import React from 'react';
import Link from 'next/link';

const NoPetList = () => {
  return (
    <div className="w-full bg-[#0B0F19] border border-dashed border-slate-800 rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 min-h-[280px]">
      {/* Left Side: Custom SVG Illustration (Dog & Cat silhouette) */}
      <div className="relative w-48 h-36 md:w-56 md:h-40 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent rounded-full blur-2xl opacity-60" />

        {/* Clean SVG Pet Illustration (No Emojis) */}
        <svg
          className="w-24 h-24 md:w-32 md:h-32 text-slate-700 opacity-80"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5c.67 0 1.35.09 2 .26a4 4 0 0 1 3 3.74c0 2-1.5 3.5-3.5 3.5H10.5C8.5 12.5 7 11 7 9a4 4 0 0 1 3-3.74c.65-.17 1.33-.26 2-.26z" />
          <path d="M18 14c.56 0 1.12.06 1.66.17a3 3 0 0 1 2.34 2.83c0 1.5-1 2.5-2.5 2.5h-1.5c-1.5 0-2.5-1-2.5-2.5a3 3 0 0 1 2.34-2.83c.54-.11 1.1-.17 1.66-.17z" />
          <circle cx="12" cy="2" r="1" />
        </svg>
      </div>

      {/* Right Side: Content & Action Button */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-5 max-w-sm">
        <div className="space-y-1.5">
          <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
            No pets listed yet
          </h3>
          <p className="text-sm text-slate-400 font-medium leading-relaxed">
            Add your first pet and help them find a forever home.
          </p>
        </div>

        {/* Add Pet Button with Orange Glow */}
        <Link
          href="/dashboard/add-pet"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm tracking-wide shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-200 active:scale-98 group"
        >
          {/* Paw Icon */}
          <svg
            className="w-4 h-4 transition-transform group-hover:rotate-12"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <circle cx="12" cy="5" r="2.5" />
            <circle cx="5" cy="9" r="2.5" />
            <circle cx="19" cy="9" r="2.5" />
            <path d="M12 10c-3.31 0-6 2.69-6 6 0 1.66 1.34 3 3 3s3-1.34 3-3V11h0zm0 0c3.31 0 6 2.69 6 6 0 1.66-1.34 3-3 3s-3-1.34-3-3V11h0z" />
          </svg>
          Add Pet
        </Link>
      </div>
    </div>
  );
};

export default NoPetList;
