import { ArrowRight } from 'lucide-react';
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
    <section className="bg-[#121212] text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-2">
            <span className="text-[#FF7A00] text-xl">🐾</span>
            <h2 className="text-2xl font-bold tracking-tight">Pet Care Tips</h2>
          </div>
          <button className="text-sm font-medium border border-[#262B3C] rounded-full px-4 py-1.5 hover:bg-[#12141C] text-gray-300 transition-colors flex items-center gap-1 group">
            View All Articles
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>

        {/* Cards Grid (First Image Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tips.map(item => (
            <div
              key={item.id}
              className="bg-[#12141C] border border-[#1F2431] rounded-2xl overflow-hidden hover:border-[#FF7A00]/40 transition-all duration-300 group flex flex-col"
            >
              {/* Top Side: Full Width Image */}
              <div className="h-48 w-full relative overflow-hidden bg-gray-800">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Category Badge over Image */}
                <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider bg-[#FF7A00] text-white px-2.5 py-1 rounded-md shadow-md">
                  {item.category}
                </span>
              </div>

              {/* Bottom Side: Content Area */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  {/* Title */}
                  <h3 className="font-bold text-base text-gray-100 group-hover:text-[#FF7A00] transition-colors duration-200 line-clamp-2 leading-snug mb-4">
                    {item.title}
                  </h3>
                </div>

                {/* Card Footer: Date & Read Time */}
                <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-[#1F2431]/60">
                  <span>{item.date}</span>
                  <span className="flex items-center gap-1">
                    <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                    {item.readTime}
                  </span>
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