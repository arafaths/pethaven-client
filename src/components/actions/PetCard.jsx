'use client';

import {
  Heart,
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
    <div className="group bg-[#131926] border border-gray-800/80 rounded-3xl overflow-hidden shadow-lg hover:-translate-y-1 hover:border-[#FF7A00]/40 hover:shadow-2xl transition-all duration-500 ease-out flex flex-col">
      {/* Image */}
      <div className="relative aspect-[2/1] w-full overflow-hidden rounded-t-3xl isolate">
        <Image
          src={pet.imageUrl}
          alt={pet.petName}
          width={600}
          height={400}
          className="w-full h-full object-cover transform-gpu transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
        />

        {/* Status Badge */}
        <div
          className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${
            isAdopted
              ? 'bg-red-500/90 text-white'
              : 'bg-green-500/90 text-white'
          }`}
        >
          {isAdopted ? 'Adopted' : 'Available'}
        </div>

        {/* Wishlist Button */}
        <button className="absolute top-4 right-4 p-2 rounded-full bg-white/70 backdrop-blur-md hover:bg-white hover:scale-110 transition-all duration-300 ease-out">
          <Heart className="w-5 h-5 text-gray-500 hover:text-orange-500 hover:fill-orange-500 transition-all duration-300" />
        </button>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-2xl font-bold text-white">{pet.petName}</h3>

          <span className="text-xs px-3 py-1 rounded-full bg-orange-100 text-orange-500 flex items-center gap-1">
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
            {pet.species}
          </span>
        </div>

        <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
          {pet.description}
        </p>

        <div className="flex justify-between text-sm text-gray-400 mb-5">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4 text-orange-400" />
            {pet.age}
          </div>

          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4 text-orange-400" />
            {pet.location}
          </div>

          <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full font-semibold">
            ${pet.adoptionFee}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-auto">
          <Link
            href={`/all-pets/${pet._id}`}
            className="py-2 px-4 rounded-xl border border-gray-700 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300 text-center"
          >
            View Details
          </Link>

          <Link
            href={`/all-pets/${pet._id}`}
            disabled={isAdopted}
            className={`py-2 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
              isAdopted
                ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:opacity-90'
            }`}
          >
            {isAdopted ? 'Unavailable' : 'Adopt Now'}
            {!isAdopted && <ArrowRight className="w-4 h-4" />}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
