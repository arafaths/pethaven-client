import React from 'react';

const FindPerfectCompanion = () => {
  const cards = [
    {
      id: 1,
      title: 'Active Lifestyle',
      subTitle: 'Energetic Dogs',
      desc: 'Perfect for active individuals who love adventure, outdoor activities, and loyal companions.',
      bgImage:
        'https://i.pinimg.com/1200x/68/9f/e6/689fe6a8918a77c69bf14cd744f7b84c.jpg',
      icon: (
        <svg
          className="w-5 h-5 text-orange-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Family Home',
      subTitle: 'Friendly Companions',
      desc: 'Great with kids and families. Loving pets that bring joy, cuddles, and unforgettable moments.',
      bgImage:
        'https://i.pinimg.com/736x/62/18/69/6218693885d351b1a6c3279e598eb674.jpg',
      icon: (
        <svg
          className="w-5 h-5 text-orange-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 0 0 1 1h3m10-11l2 2m-2-2v10a1 1 0 0 1-1 1h-3m-6 0a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Apartment Living',
      subTitle: 'Small Pets',
      desc: 'Ideal for cozy spaces. Small pets with big hearts that fit perfectly in your apartment life.',
      bgImage:
        'https://i.pinimg.com/736x/88/8e/b9/888eb9c3e57353ba0ff5eadc243ae80a.jpg',
      icon: (
        <svg
          className="w-5 h-5 text-orange-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Calm Lifestyle',
      subTitle: 'Relaxed Cats',
      desc: 'Independent, gentle, and low-maintenance companions perfect for peaceful living.',
      bgImage:
        'https://i.pinimg.com/1200x/f2/8e/d7/f28ed7bc8123cc1c507bd1d3e37355a5.jpg',
      icon: (
        <svg
          className="w-5 h-5 text-orange-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-[#F8FAFC] dark:bg-[#121212] py-8 sm:py-16 px-3 sm:px-6 md:px-12 lg:px-24 relative overflow-hidden text-center transition-colors duration-300">
      {/* Top Main Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-bold text-orange-600 dark:text-orange-400 tracking-wider uppercase mb-5 shadow-sm backdrop-blur-sm">
        <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="5" r="2.5" />
          <circle cx="5" cy="9" r="2.5" />
          <circle cx="19" cy="9" r="2.5" />
          <path d="M12 10c-3.31 0-6 2.69-6 6 0 1.66 1.34 3 3 3s3-1.34 3-3V11h0z" />
        </svg>
        PawHaven
      </div>

      {/* Main Section Header */}
      <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
        Find Your <span className="text-orange-500">Perfect</span> Companion
      </h2>
      <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-medium max-w-xl mx-auto mb-16">
        Discover the pet that best matches your lifestyle.
      </p>

      {/* Grid Layout Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 relative z-10">
        {cards.map(card => (
          <div
            key={card.id}
            className="w-full h-[420px] bg-white dark:bg-[#0B0F19]/60 border border-slate-200 dark:border-slate-900 rounded-3xl overflow-hidden relative group flex flex-col justify-between p-6 backdrop-blur-md shadow-2xl hover:border-orange-500/30 transition-all duration-300"
          >
            {/* Background Image Layer with Dark Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-25 dark:opacity-45 group-hover:scale-105 transition-transform duration-500 z-0"
              style={{ backgroundImage: `url(${card.bgImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-[#0B0F19] dark:via-[#0B0F19]/40 z-0" />

            {/* Top Row Content (Icon & Badge Title) */}
            <div className="flex items-start gap-3 relative z-10 text-left">
              <div className="w-10 h-10 rounded-full bg-orange-500/10 dark:bg-orange-950/20 border border-orange-500/20 flex items-center justify-center shrink-0">
                {card.icon}
              </div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-bold text-lg leading-tight">
                  {card.title}
                </h4>
                <p className="text-orange-600 dark:text-orange-500 font-bold text-xs mt-0.5">
                  {card.subTitle}
                </p>
              </div>
            </div>

            {/* Bottom Row Content (Description & Arrow) */}
            <div className="relative z-10 text-left flex items-end justify-between gap-4 pt-10">
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                {card.desc}
              </p>

              {/* Floating Action Arrow */}
              <button className="w-9 h-9 rounded-full border border-slate-200 bg-white/80 dark:border-slate-800 dark:bg-slate-950/60 flex items-center justify-center shrink-0 text-slate-500 dark:text-slate-400 group-hover:text-white group-hover:border-orange-500/40 group-hover:bg-orange-500 transition-all duration-300">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Informative Bar Bottom Layout */}
      <div className="max-w-7xl mx-auto bg-white dark:bg-[#0B0F19]/50 border border-slate-200 dark:border-slate-900 rounded-3xl p-5 grid grid-cols-1 md:grid-cols-4 gap-6 items-center backdrop-blur-md transition-all">
        {/* Call to Action Text Block */}
        <div className="flex items-center gap-3 text-left md:border-r border-slate-200 dark:border-slate-800/60 pr-4">
          <div className="w-11 h-11 rounded-full bg-orange-500/10 dark:bg-orange-900/20 flex items-center justify-center shrink-0 border border-orange-500/20 shadow-inner">
            <svg
              className="w-5 h-5 text-orange-600 dark:text-orange-500 fill-currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 14c-3.31 0-6 2.69-6 6 0 1.66 1.34 3 3 3s3-1.34 3-3V11h0zm0 0c3.31 0 6 2.69 6 6 0 1.66-1.34 3-3 3s-3-1.34-3-3V11h0z" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              Every pet deserves a loving home.
            </p>
            <p className="text-xs font-bold text-orange-600 dark:text-orange-500 mt-0.5 cursor-pointer hover:underline">
              Let us help you find your perfect match.
            </p>
          </div>
        </div>

        {/* Feature Point 1: Verified Pets */}
        <div className="flex items-center gap-3 text-left pl-0 md:pl-2">
          <svg
            className="w-5 h-5 text-orange-600 dark:text-orange-500 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
          <div>
            <h5 className="text-xs font-bold text-slate-900 dark:text-white">
              Verified Pets
            </h5>
            <p className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">
              All pets are health checked and verified.
            </p>
          </div>
        </div>

        {/* Feature Point 2: Trusted Shelter */}
        <div className="flex items-center gap-3 text-left">
          <svg
            className="w-5 h-5 text-orange-600 dark:text-orange-500 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <div>
            <h5 className="text-xs font-bold text-slate-900 dark:text-white">
              Trusted Shelter
            </h5>
            <p className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">
              Partnered with trusted rescue organizations.
            </p>
          </div>
        </div>

        {/* Feature Point 3: Lifetime Support */}
        <div className="flex items-center gap-3 text-left">
          <svg
            className="w-5 h-5 text-orange-600 dark:text-orange-500 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
          <div>
            <h5 className="text-xs font-bold text-slate-900 dark:text-white">
              Lifetime Support
            </h5>
            <p className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">
              We re here for you even after adoption.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindPerfectCompanion;
