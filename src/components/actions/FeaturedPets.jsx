import { Heart, ArrowRight } from 'lucide-react';
import PetCard from './PetCard';
import Link from 'next/link';

const FeaturedPets = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/all-pets`, {
    cache: 'no-store',
  });
  const pets = await res.json();

  return (
    <section className="min-h-screen bg-[#F8FAFC] text-[#0F172A] dark:bg-[#121212] dark:text-white py-12 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-24 relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-orange-500/10 dark:bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-amber-500/10 dark:bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/20 bg-white dark:bg-orange-500/5 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Heart className="w-3.5 h-3.5 fill-currentColor" />
            <span>They’re waiting for you</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-[#0F172A] dark:text-white">
            Meet Our{' '}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Featured Pets
            </span>
          </h2>

          <p className="text-slate-600 dark:text-zinc-400 text-base md:text-lg max-w-xl mx-auto font-medium">
            Find your perfect companion and give them a loving home.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pets.slice(0, 6).map(pet => (
            <PetCard key={pet._id} pet={pet} />
          ))}
        </div>

        <div className="flex flex-col items-center mt-16">
          <Link href={'/all-pets'}>
            <button className="px-8 py-3.5 rounded-full border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-200 bg-white dark:bg-zinc-900/40 hover:bg-slate-50 dark:hover:bg-zinc-900 transition-all duration-300 flex items-center gap-3 font-bold text-sm shadow-sm active:scale-98">
              <span>View All Pets</span>
              <ArrowRight className="w-4 h-4 text-orange-500" />
            </button>
          </Link>

          <p className="text-slate-500 dark:text-zinc-500 text-xs md:text-sm mt-6 flex items-center gap-2 font-medium">
            <Heart className="w-4 h-4 text-orange-500 fill-currentColor" />
            Every adoption changes two lives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPets;
