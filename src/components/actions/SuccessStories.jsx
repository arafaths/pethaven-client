import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      name: 'Sarah M.',
      image:
        'https://i.pinimg.com/736x/38/b9/eb/38b9eb1060f0a888ded9918b10527e7b.jpg',
      quote:
        '"Adopting Bella was the best decision I\'ve ever made. She\'s my shadow and my joy."',
    },
    {
      id: 2,
      name: 'James T.',
      image:
        'https://i.pinimg.com/736x/c7/21/9d/c7219d347dda7b4d58652aa6daa7c180.jpg',
      quote:
        '"Charlie came into our lives and filled our home with happiness and laughter."',
    },
    {
      id: 3,
      name: 'Priya K.',
      image:
        'https://i.pinimg.com/236x/79/53/e2/7953e2ba9e76b4c9bbea81d99a057fda.jpg',
      quote: '"Milo is not just a pet, he\'s family. Thank you PawHaven!"',
    },
  ];

  return (
    <section className="bg-[#121212] text-white py-8 sm:py-16 px-3 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-2">
            <span className="text-[#FF7A00] text-xl">🐾</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Success Stories
            </h2>
          </div>
         
        </div>

        {/* Carousel / Slider Container */}
        <div className="relative flex items-center">
          {/* Left Arrow */}
          <button className="absolute -left-5 z-10 w-10 h-10 flex items-center justify-center bg-[#12141C] border border-[#262B3C] rounded-full shadow-lg hover:bg-[#1f2331] text-[#FF7A00] transition-colors hidden md:flex">
            <ChevronLeft size={20} />
          </button>

          {/* Cards Grid (Horizontal Layout like First Image) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {stories.map(story => (
              <div
                key={story.id}
                className="flex items-center gap-4 bg-[#12141C] border border-[#1F2431] rounded-2xl hover:border-[#FF7A00]/50 transition-all duration-300 group"
              >
                {/* Left Side: Profile Image */}
                <div className="w-35 h-full rounded-2xl overflow-hidden flex-shrink-0 bg-gray-800">
                  <Image
                    src={story.image}
                    alt={story.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Right Side: Content */}
                <div className="flex flex-col justify-center flex-1 p-5">
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed italic mb-2 line-clamp-3">
                    {story.quote}
                  </p>
                  <span className="text-gray-200 font-semibold text-xs sm:text-sm">
                    – {story.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button className="absolute -right-5 z-10 w-10 h-10 flex items-center justify-center bg-[#12141C] border border-[#262B3C] rounded-full shadow-lg hover:bg-[#1f2331] text-[#FF7A00] transition-colors hidden md:flex">
            <ChevronRight size={20} />
          </button>
        </div>

        
      </div>
    </section>
  );
};

export default SuccessStories;
