import React from 'react';

const WhyAdopt = () => {
  const features = [
    {
      id: 1,
      icon: '🐾',
      title: 'You Save a Life',
      description: 'Give a pet a second chance at a happy life.',
    },
    {
      id: 2,
      icon: '🛡️',
      title: 'Reduce Pet Overpopulation',
      description: 'Adoption helps reduce the number of homeless pets.',
    },
    {
      id: 3,
      icon: '😊',
      title: 'Unconditional Love',
      description: 'Adopted pets are loyal, loving and forever grateful.',
    },
    {
      id: 4,
      icon: '🏠',
      title: 'Build a Better Community',
      description: 'Stronger communities start with compassion.',
    },
  ];

  return (
    <section className="bg-[#121212] text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="flex items-center gap-2">
          <span className="text-orange-500 text-xl">🐾</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Why Adopt?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(feature => (
            <div
              key={feature.id}
              className="bg-[#1c1c1e]/60 border border-gray-800/80 p-6 rounded-2xl flex items-start gap-4 hover:border-orange-500/30 hover:bg-[#1c1c1e]/90 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <div className="space-y-1.5">
                <h3 className="font-semibold text-white text-base tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-normal">
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