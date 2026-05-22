import React from 'react';
import Link from 'next/link';

const NoRequest = () => {
  return (
    <div className="w-full bg-[#0B0F19] border border-dashed border-slate-800 rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 min-h-[280px]">
      {/* Left Side: Illustration Container */}
      <div className="relative w-48 h-36 md:w-56 md:h-40 flex items-center justify-center">
        {/* আপনি যদি পরে ইমেজ বা ইলাস্ট্রেশন বসাতে চান, তবে এই ডিব-এর ভেতরে বসালে ঠিকঠাক পজিশন পেয়ে যাবে */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent rounded-full blur-2xl opacity-60" />
        <span className="text-6xl md:text-7xl select-none filter drop-shadow-md">
          🐶🐱
        </span>
      </div>

      {/* Right Side: Text & CTA Button Content */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-5 max-w-sm">
        <div className="space-y-1.5">
          <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
            No adoption requests yet
          </h3>
          <p className="text-sm text-slate-400 font-medium leading-relaxed">
            Start your journey to find your perfect companion
          </p>
        </div>

        {/* Browse Pets CTA Button with Orange Glow */}
        <Link
          href="/all-pets"
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
          Browse Pets
        </Link>
      </div>
    </div>
  );
};

export default NoRequest;
