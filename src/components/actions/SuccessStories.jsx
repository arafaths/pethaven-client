import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Image from 'next/image';

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      name: 'Sarah M.',
      image:
        'https://i.pinimg.com/736x/38/b9/eb/38b9eb1060f0a888ded9918b10527e7b.jpg',
      quote:
        "Adopting Bella was the best decision I've ever made. She's my shadow and my joy.",
    },
    {
      id: 2,
      name: 'James T.',
      image:
        'https://i.pinimg.com/736x/c7/21/9d/c7219d347dda7b4d58652aa6daa7c180.jpg',
      quote:
        'Charlie came into our lives and filled our home with happiness and laughter.',
    },
    {
      id: 3,
      name: 'Priya K.',
      image:
        'https://i.pinimg.com/236x/79/53/e2/7953e2ba9e76b4c9bbea81d99a057fda.jpg',
      quote: "Milo is not just a pet, he's family. Thank you PawHaven!",
    },
  ];

  return (
    <section className="bg-[#F8FAFC] text-[#0F172A] dark:bg-[#121212] dark:text-white py-12 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-24 transition-colors duration-300 relative overflow-hidden">
      {/* Subtle Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Title Section */}
        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-bold tracking-wider uppercase mb-1">
            Updates
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] dark:text-white">
            Success <span className="text-orange-500">Stories</span>
          </h2>
        </div>

        {/* Slider Navigation Wrapper Container */}
        <div className="relative flex items-center group/slider">
          {/* Left Arrow Button Controls */}
          <button className="absolute -left-5 lg:-left-6 z-20 w-10 h-10 flex items-center justify-center bg-white dark:bg-[#1A1F2C] border border-slate-200 dark:border-zinc-800 rounded-full shadow-md hover:bg-slate-50 dark:hover:bg-zinc-800 text-orange-500 dark:text-orange-400 transition-all duration-200 active:scale-95 opacity-0 group-hover/slider:opacity-100 hidden md:flex">
            <ChevronLeft size={18} strokeWidth={2.5} />
          </button>

          {/* Cards Flex Grid Responsive Structure */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {stories.map(story => (
              <div
                key={story.id}
                className="flex items-stretch bg-white dark:bg-[#1A1F2C] border border-slate-200/80 dark:border-zinc-800/80 rounded-2xl overflow-hidden hover:border-orange-500/40 dark:hover:border-orange-500/30 shadow-sm hover:shadow-md dark:shadow-none transition-all duration-300 group"
              >
                {/* Profile Image Column Layer */}
                <div className="w-28 sm:w-32 min-h-[140px] relative overflow-hidden flex-shrink-0 bg-slate-100 dark:bg-zinc-900">
                  <Image
                    src={story.image}
                    alt={story.name}
                    fill
                    sizes="(max-w-7xl) 200px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Meta Description Text Content Box */}
                <div className="flex flex-col justify-center flex-1 p-4 sm:p-5 relative">
                  {/* Subtle quote background icon effect */}
                  <Quote className="absolute top-2 right-3 w-8 h-8 text-slate-100 dark:text-zinc-800/40 pointer-events-none transform rotate-180" />

                  <p className="text-slate-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed italic mb-2 line-clamp-3 font-medium relative z-10">
                    {story.quote}
                  </p>

                  <span className="text-slate-900 dark:text-zinc-200 font-bold text-xs sm:text-sm block">
                    — {story.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow Button Controls */}
          <button className="absolute -right-5 lg:-right-6 z-20 w-10 h-10 flex items-center justify-center bg-white dark:bg-[#1A1F2C] border border-slate-200 dark:border-zinc-800 rounded-full shadow-md hover:bg-slate-50 dark:hover:bg-zinc-800 text-orange-500 dark:text-orange-400 transition-all duration-200 active:scale-95 opacity-0 group-hover/slider:opacity-100 hidden md:flex">
            <ChevronRight size={18} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
