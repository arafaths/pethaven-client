import React from 'react';

const HowAdoptionWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Browse Pets',
      desc: 'Explore available pets and view detailed profiles.',
      icon: (
        <svg
          className="w-6 h-6 text-orange-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      ),
      bottomIcon: (
        <svg
          className="w-4 h-4 text-orange-500/60 dark:text-orange-400/40"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Submit Request',
      desc: 'Send an adoption request with your information.',
      icon: (
        <svg
          className="w-6 h-6 text-orange-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="M9 15l2 2 4-4" />
        </svg>
      ),
      bottomIcon: (
        <svg
          className="w-4 h-4 text-orange-500/60 dark:text-orange-400/40"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Meet Your Pet',
      desc: 'Arrange a meeting and get to know your future companion.',
      icon: (
        <svg
          className="w-6 h-6 text-orange-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ),
      bottomIcon: (
        <svg
          className="w-4 h-4 text-orange-500/60 dark:text-orange-400/40"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Complete Adoption',
      desc: 'Finalize the adoption and welcome your new family member.',
      icon: (
        <svg
          className="w-6 h-6 text-orange-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12 s4.477 10 10 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
      bottomIcon: (
        <svg
          className="w-4 h-4 text-orange-500/60 dark:text-orange-400/40"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-[#F8FAFC] dark:bg-[#121212] text-[#0F172A] dark:text-white py-12 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-24 relative overflow-hidden text-center transition-colors duration-300">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Feature Tag Badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-orange-500/10 text-xs font-bold text-orange-600 dark:text-orange-400 tracking-wider uppercase mb-4 shadow-sm">
        PROCESS
      </div>

      {/* Main Heading Text Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-[#0F172A] dark:text-white">
        How <span className="text-orange-500">Adoption</span> Works
      </h2>
      <p className="text-sm md:text-base text-slate-600 dark:text-zinc-400 font-medium max-w-xl mx-auto mb-16">
        Adopting your new best friend is simple, transparent, and stress-free.
      </p>

      {/* Responsive Steps Process Cards Grid Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {steps.map((step, idx) => (
          <div
            key={step.id}
            className="relative group flex flex-col items-center w-full"
          >
            {/* Desktop Horizontal Process Dynamic Connecting Line Link */}
            {idx !== steps.length - 1 && (
              <div className="hidden lg:block absolute top-16 left-[65%] w-[70%] h-[2px] bg-slate-200 dark:bg-zinc-800/80 z-0" />
            )}

            {/* Main Interactive Step Box Info Frame */}
            <div className="w-full bg-white dark:bg-[#1A1F2C] border border-slate-200/80 dark:border-zinc-800/80 rounded-3xl p-6 pt-10 flex flex-col items-center space-y-5 shadow-sm hover:shadow-md dark:shadow-none hover:border-orange-500/40 dark:hover:border-orange-500/30 transition-all duration-300 relative z-10 min-h-[280px] justify-between">
              {/* Abs Floating Step Tag Counter Index Indicator */}
              <div className="absolute top-4 left-4 w-6 h-6 rounded-full bg-orange-500 text-white font-bold text-xs flex items-center justify-center shadow-md shadow-orange-500/20">
                {step.id}
              </div>

              {/* Central Dynamic Circle Icon Container Frame */}
              <div className="w-14 h-14 rounded-full bg-orange-500/10 dark:bg-orange-500/5 border border-orange-500/10 flex items-center justify-center relative group-hover:scale-105 transition-transform duration-300">
                {step.icon}
              </div>

              {/* Context Block Text Content Area */}
              <div className="space-y-2 flex-1 flex flex-col justify-center">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white tracking-wide">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-medium max-w-[210px] mx-auto">
                  {step.desc}
                </p>
              </div>

              {/* Subtle Bottom Status System Meta Icon Wrapper */}
              <div className="pt-1 opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                {step.bottomIcon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Banner Info Support Box */}
      <div className="max-w-xl mx-auto mt-16 bg-white dark:bg-[#1A1F2C] border border-slate-200 dark:border-zinc-800/60 rounded-2xl py-3.5 px-5 flex items-center justify-center gap-3 shadow-sm">
        <svg
          className="w-4 h-4 text-orange-500 shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
        <p className="text-xs text-slate-600 dark:text-zinc-400 font-semibold text-left sm:text-center leading-relaxed">
          Every adoption is backed by our commitment to{' '}
          <span className="text-orange-600 dark:text-orange-500">
            responsible pet care and lifelong support.
          </span>
        </p>
      </div>
    </section>
  );
};

export default HowAdoptionWorks;
