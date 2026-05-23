import React from 'react';
import { ShieldCheck, Heart, Home, HeartHandshake } from 'lucide-react';

const WhyAdopt = () => {
  const features = [
    {
      id: 1,
      icon: <HeartHandshake className="w-5 h-5 text-orange-500" />,
      title: 'You Save a Life',
      description: 'Give a pet a second chance at a happy life.',
    },
    {
      id: 2,
      icon: <ShieldCheck className="w-5 h-5 text-orange-500" />,
      title: 'Reduce Overpopulation',
      description: 'Adoption helps reduce the number of homeless pets.',
    },
    {
      id: 3,
      icon: <Heart className="w-5 h-5 text-orange-500" />,
      title: 'Unconditional Love',
      description: 'Adopted pets are loyal, loving and forever grateful.',
    },
    {
      id: 4,
      icon: <Home className="w-5 h-5 text-orange-500" />,
      title: 'Build a Community',
      description: 'Stronger communities start with compassion.',
    },
  ];

  return (
    <section className="bg-[#F8FAFC] text-[#0F172A] dark:bg-[#121212] dark:text-white py-12 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-24 transition-colors duration-300 relative overflow-hidden">
      {/* Subtle Background Glow behind the cards */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Section Header Title */}
        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-bold tracking-wider uppercase mb-1">
            Benefits
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] dark:text-white">
            Why <span className="text-orange-500">Adopt?</span>
          </h2>
        </div>

        {/* Features Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(feature => (
            <div
              key={feature.id}
              className="bg-white dark:bg-[#1A1F2C] border border-slate-200/80 dark:border-zinc-800/80 p-6 rounded-2xl flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:border-orange-500/40 dark:hover:border-orange-500/30 shadow-sm hover:shadow-md dark:shadow-none transition-all duration-300 group"
            >
              {/* Icon Holder Frame */}
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-500/10 dark:bg-orange-500/5 border border-orange-500/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Text Meta Content */}
              <div className="space-y-1.5">
                <h3 className="font-bold text-slate-900 dark:text-white text-base tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAdopt;
