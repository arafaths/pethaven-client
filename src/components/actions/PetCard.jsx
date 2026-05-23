'use client';

import {
  Calendar,
  MapPin,
  ArrowRight,
  Dog,
  Cat,
  Bird,
  Rabbit,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const PetCard = ({ pet }) => {
  const isAdopted = pet.status === 'adopted';

  return (
    <div className="group bg-white dark:bg-[#1A1F2C] border border-slate-200/80 dark:border-zinc-800/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl dark:shadow-none hover:-translate-y-1 hover:border-orange-500/40 dark:hover:border-orange-500/30 transition-all duration-500 ease-out flex flex-col h-full">
      <div className="relative aspect-[2/1] w-full overflow-hidden isolate bg-slate-100 dark:bg-zinc-900">
        <Image
          src={pet.imageUrl || '/placeholder-pet.png'}
          alt={pet.petName}
          width={600}
          height={400}
          priority
          className="w-full h-full object-cover transform-gpu transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
        />

        <div className="absolute bottom-4 left-4">
          {isAdopted ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-500/90 dark:bg-rose-500/10 text-white dark:text-rose-400 border dark:border-rose-500/30 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-white dark:bg-rose-500" />
              Adopted
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/90 dark:bg-emerald-500/10 text-white dark:text-emerald-400 border dark:border-emerald-500/30 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-white dark:bg-emerald-500" />
              Available
            </span>
          )}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-2.5">
          <div className="flex justify-between items-center gap-2">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-wide truncate">
              {pet.petName}
            </h3>

            <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center gap-1 shrink-0">
              {pet.species?.toLowerCase() === 'dog' && (
                <Dog className="w-3 h-3" />
              )}
              {pet.species?.toLowerCase() === 'cat' && (
                <Cat className="w-3 h-3" />
              )}
              {pet.species?.toLowerCase() === 'bird' && (
                <Bird className="w-3 h-3" />
              )}
              {pet.species?.toLowerCase() === 'rabbit' && (
                <Rabbit className="w-3 h-3" />
              )}
              <span className="capitalize">{pet.species}</span>
            </span>
          </div>

          <p className="text-slate-600 dark:text-zinc-400 text-sm line-clamp-2 leading-relaxed font-medium">
            {pet.description}
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm font-semibold text-slate-500 dark:text-zinc-400 border-t border-b border-slate-100 dark:border-zinc-800/60 py-2.5">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-orange-500" />
              <span>{pet.age}</span>
            </div>

            <div className="hidden sm:flex items-center gap-1 max-w-[150px]">
              <MapPin className="w-4 h-4 text-orange-500 shrink-0" />
              <span className="truncate">{pet.location}</span>
            </div>

            <div className="text-orange-600 dark:text-orange-500 font-bold text-base">
              ${pet.adoptionFee}
            </div>
          </div>

          <div className="flex sm:hidden items-center gap-1 text-sm font-semibold text-slate-500 dark:text-zinc-400 pb-1">
            <MapPin className="w-4 h-4 text-orange-500 shrink-0" />
            <span className="truncate">{pet.location}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-1">
          <Link
            href={`/all-pets/${pet._id}`}
            className="py-2.5 px-3 rounded-xl border border-slate-200 dark:border-zinc-800 text-xs font-bold text-slate-700 dark:text-zinc-300 bg-white dark:bg-zinc-900/40 hover:bg-slate-50 dark:hover:bg-zinc-800 hover:text-slate-900 dark:hover:text-white transition-all duration-200 text-center flex items-center justify-center shadow-sm"
          >
            View Details
          </Link>

          {isAdopted ? (
            <button
              disabled
              className="py-2.5 px-3 rounded-xl text-xs font-bold bg-slate-100 dark:bg-zinc-800 text-slate-400 dark:text-zinc-500 cursor-not-allowed text-center"
            >
              Unavailable
            </button>
          ) : (
            <Link
              href={`/all-pets/${pet._id}`}
              className="py-2.5 px-3 rounded-xl text-xs font-bold bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center gap-1.5 transition-all duration-200 active:scale-98 shadow-md shadow-orange-500/10 hover:shadow-orange-500/20"
            >
              <span>Adopt Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default PetCard;
