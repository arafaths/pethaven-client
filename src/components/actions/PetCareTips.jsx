import { ArrowRight, BookOpen, Calendar } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const PetCareTips = () => {
  const tips = [
    {
      id: 1,
      category: 'Health',
      title: '10 Tips for Keeping Your Pet Healthy & Happy',
      date: 'May 12, 2025',
      readTime: '5 min read',
      image:
        'https://i.pinimg.com/736x/d7/e0/7e/d7e07ebb6c763561744426b96db0efd2.jpg',
    },
    {
      id: 2,
      category: 'Training',
      title: 'How to Train Your Dog with Positive Reinforcement',
      date: 'May 10, 2025',
      readTime: '4 min read',
      image:
        'https://i.pinimg.com/1200x/5b/8e/9f/5b8e9fb83cd744e02db168af43bd3884.jpg',
    },
    {
      id: 3,
      category: 'Nutrition',
      title: "Best Foods for Your Pet's Well-being",
      date: 'May 8, 2025',
      readTime: '6 min read',
      image:
        'https://i.pinimg.com/1200x/b2/07/80/b2078079946b067a992304a56d51f133.jpg',
    },
  ];

  return (
    <section className="bg-[#F8FAFC] text-[#0F172A] dark:bg-[#121212] dark:text-white py-12 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-24 transition-colors duration-300 relative overflow-hidden">
      {/* Subtle background blur accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Title Section */}
        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-bold tracking-wider uppercase mb-1">
            Resources
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] dark:text-white">
            Pet Care <span className="text-orange-500">Tips</span>
          </h2>
        </div>

        {/* Cards Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tips.map(item => (
            <div
              key={item.id}
              className="bg-white dark:bg-[#1A1F2C] border border-slate-200/80 dark:border-zinc-800/80 rounded-2xl overflow-hidden hover:border-orange-500/40 dark:hover:border-orange-500/30 shadow-sm hover:shadow-md dark:shadow-none transition-all duration-300 group flex flex-col h-full"
            >
              {/* Top Image Frame with Layout Fill fixes */}
              <div className="h-48 w-full relative overflow-hidden bg-slate-100 dark:bg-zinc-900 shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-w-7xl) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                />

                {/* Category Badge Layer over Image */}
                <span className="absolute top-4 left-4 text-[10px] font-extrabold uppercase tracking-wider bg-orange-500 text-white px-2.5 py-1 rounded-md shadow-md">
                  {item.category}
                </span>
              </div>

              {/* Bottom Info Content Layout Box */}
              <div className="p-5 flex flex-col justify-between flex-grow space-y-5">
                <div className="space-y-2.5">
                  <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors duration-200 line-clamp-2 leading-snug">
                    {item.title}
                  </h3>
                </div>

                {/* Card Footer Meta Data */}
                <div className="flex items-center justify-between text-xs font-semibold text-slate-400 dark:text-zinc-500 pt-3 border-t border-slate-100 dark:border-zinc-800/60">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400 dark:text-zinc-500" />
                    <span>{item.date}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5 text-slate-400 dark:text-zinc-500" />
                    <span>{item.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PetCareTips;
