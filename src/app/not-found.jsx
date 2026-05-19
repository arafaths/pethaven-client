'use client'
import React from 'react';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B0C10] flex flex-col items-center justify-center p-6 text-white selection:bg-[#FF7A00]/30 relative overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] bg-[#FF7A00]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="text-center max-w-md z-10 flex flex-col items-center">
        {/* Large 404 with Paw Icon */}
        <div className="relative mb-4 animate-bounce duration-1000">
          <h1 className="text-[120px] sm:text-[150px] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#1F2431] to-[#12141C] tracking-tighter leading-none select-none">
            404
          </h1>
          {/* Paw Print Overlay */}
          <span className="absolute inset-0 flex items-center justify-center text-5xl sm:text-6xl text-[#FF7A00] drop-shadow-[0_0_15px_rgba(255,122,0,0.4)]">
            🐾
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-100 tracking-tight mb-3">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
          It looks like this page wandered off, just like a curious pup. Let’s
          get you back to safety!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          {/* Back to Home Button */}
          <Link
            href="/"
            className="bg-gradient-to-r from-[#FF7A00] to-[#E05300] hover:opacity-95 text-white font-medium px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-[#FF7A00]/10 flex items-center justify-center gap-2 text-sm"
          >
            <Home size={16} />
            Back to Home
          </Link>

          {/* Go Back Button */}
          <button
            onClick={() => window.history.back()}
            className="bg-[#1A1D26] border border-[#262B3C] hover:bg-[#222635] text-gray-300 font-medium px-6 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 text-sm"
          >
            <ArrowLeft size={16} />
            Go Back
          </button>
        </div>
      </div>

      {/* Mini Brand Footer */}
      <div className="absolute bottom-6 flex items-center gap-1.5 text-xs text-gray-600 select-none">
        <span>Pet</span>
        <span className="text-[#FF7A00]">Haven</span>
        <span>• Rescue & Care</span>
      </div>
    </div>
  );
}
