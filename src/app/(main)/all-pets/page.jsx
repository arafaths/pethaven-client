'use client';
import { useEffect, useState } from 'react';
import PetCard from '@/components/actions/PetCard';
import { Search, ChevronDown, SlidersHorizontal } from 'lucide-react';
import Loading from '@/components/actions/Loading';

const AllPets = () => {
  const [pets, setPets] = useState([]);
  const [search, setSearch] = useState('');
  const [species, setSpecies] = useState('');
  const [sort, setSort] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const loadPets = async () => {
        try {
          setLoading(true);

          const res = await fetch(
            `http://localhost:5000/all-pets?search=${search}&species=${species}&sort=${sort}`,
          );

          const data = await res.json();
          setPets(data);
        } finally {
          setLoading(false);
        }
      };

      loadPets();
    }, 400);

    return () => clearTimeout(timer);
  }, [search, species, sort]);

  return (
    <section className="min-h-screen bg-[#121212] text-white px-4 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 rounded-3xl bg-[#181818] border border-gray-800 p-8 relative overflow-hidden">
          <div className="absolute top-0 right-20 w-64 h-64 bg-orange-500/10 blur-[100px] rounded-full" />

          <div className="relative z-10">
            <h1 className="text-4xl font-bold mb-3">All Available Pets</h1>

            <p className="text-gray-400 max-w-lg">
              Every pet deserves love, care, and a forever home. Find your
              perfect companion today. 🧡
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-10">
          <div className="md:col-span-2 relative">
            <Search className="absolute left-4 top-4 w-4 h-4 text-gray-500" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search pet name..."
              className="w-full bg-[#1a1a1a] border border-gray-800 rounded-xl py-3 pl-11 pr-4 text-white outline-none focus:border-orange-500"
            />
          </div>

          <select
            value={species}
            onChange={e => setSpecies(e.target.value)}
            className="bg-[#1a1a1a] border border-gray-800 rounded-xl px-4 py-3 text-gray-300 outline-none focus:border-orange-500"
          >
            <option value="">All Species</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Bird">Bird</option>
            <option value="Rabbit">Rabbit</option>
          </select>

          <select
            value={sort}
            onChange={e => setSort(e.target.value)}
            className="bg-[#1a1a1a] border border-gray-800 rounded-xl px-4 py-3 text-gray-300 outline-none focus:border-orange-500"
          >
            <option value="">Default</option>
            <option value="low">Low Price</option>
            <option value="high">High Price</option>
          </select>
        </div>

        {loading ? (
          <Loading />
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pets?.map(pet => (
              <PetCard key={pet._id} pet={pet} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllPets;
