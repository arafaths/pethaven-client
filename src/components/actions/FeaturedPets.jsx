import {
  Heart,
  ArrowRight,
} from 'lucide-react';
import PetCard from './PetCard';
import Link from 'next/link';

const FeaturedPets = async () => {
  const res = await fetch('http://localhost:5000/all-pets', {
    cache: 'no-store',
  });
  const pets = await res.json();

  return (
    <section className="min-h-screen bg-[#121212] text-white py-16 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-orange-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-amber-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Badge */}
        <div className="flex justify-center mb-5">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-400 text-sm">
            <Heart className="w-4 h-4" />
            They’re waiting for you
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Meet Our{' '}
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Featured Pets
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Find your perfect companion and give them a loving home 🧡
          </p>
        </div>

        {/* Pet Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pets.slice(0, 6).map(pet => (
            <PetCard key={pet._id} pet={pet} />
          ))}
        </div>

        {/* View All Button */}
        <div className="flex flex-col items-center mt-14">
          <Link href={'/all-pets'}>
            <button className="px-8 py-3 rounded-full border border-gray-700 text-gray-200 hover:bg-[#1b2230] transition flex items-center gap-3">
              View All Pets
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>

          <p className="text-gray-500 text-sm mt-5 flex items-center gap-2">
            <Heart className="w-4 h-4 text-orange-400" />
            Every adoption changes two lives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPets;
