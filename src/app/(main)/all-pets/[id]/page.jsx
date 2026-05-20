import { auth } from '@/lib/auth';
import {
  ArrowLeft,
  Heart,
  Shield,
  CheckCircle,
  Calendar,
  Info,
  User,
  Mail,
  MessageSquare,
  MapPin,
  Activity,
  ShieldCheck,
  DollarSign,
} from 'lucide-react';
import { headers } from 'next/headers';
import Image from 'next/image';

const PetDetails = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/all-pets/${id}`);
  const pet = await res.json();
  const {
    imageUrl,
    petName,
    description,
    species,
    breed,
    age,
    gender,
    location,
    healthStatus,
    vaccinationStatus,
    adoptionFee,
    ownerEmail,
    createdAt,
  } = pet;

  const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // User data
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const user = session?.user;

  return (
    <div className="min-h-screen bg-[#0B0F19] text-[#E2E8F0] font-sans antialiased selection:bg-orange-500 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1E293B] border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition">
          <ArrowLeft size={18} />
          <span>Back</span>
        </button>
      </div>

      {/* Main Grid Layout */}
      <main className="max-w-7xl mx-auto px-4 pb-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Pet Image Banner */}
          <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-[#111827] aspect-[16/10]">
            <Image
              src={imageUrl}
              width={1100}
              height={1100}
              alt="Bella"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#0B0F19]/80 backdrop-blur-md px-4 py-2 rounded-full border border-green-500/30">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-medium text-green-400">
                Available for Adoption
              </span>
            </div>
          </div>

          <section className="bg-[#111827] border border-slate-800/60 rounded-3xl p-6 md:p-8 space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-white">
              <Heart className="text-orange-500 fill-orange-500" size={24} />{' '}
              About {petName}
            </h2>
            <div className="text-slate-400 space-y-3 leading-relaxed">
              <p>{description}</p>
            </div>
          </section>

          <section className="bg-[#111827] border border-slate-800/60 rounded-3xl p-6 md:p-8 space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-white">
              <Info className="text-orange-500" size={24} /> Pet Information
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {/* Info Cards */}
              {[
                { label: 'Pet Name', value: `${petName}`, icon: Heart },
                { label: 'Species', value: `${species}`, icon: Activity },
                {
                  label: 'Breed',
                  value: `${breed}`,
                  icon: ShieldCheck,
                },
                { label: 'Age', value: `${age}`, icon: Calendar },
                { label: 'Gender', value: `${gender}`, icon: User },
                { label: 'Location', value: `${location}`, icon: MapPin },
                {
                  label: 'Health Status',
                  value: `${healthStatus}`,
                  icon: Activity,
                  highlight: 'text-green-400',
                },
                {
                  label: 'Vaccination Status',
                  value: `${vaccinationStatus}`,
                  icon: Shield,
                  highlight: 'text-green-400',
                },
                {
                  label: 'Adoption Fee',
                  value: `${adoptionFee}`,
                  icon: DollarSign,
                  highlight: 'text-orange-400 font-bold',
                },
              ].map((info, idx) => (
                <div
                  key={idx}
                  className="bg-[#1E293B]/40 border border-slate-800 p-4 rounded-2xl flex items-center gap-3"
                >
                  <div className="p-2.5 rounded-xl bg-slate-850 border border-slate-700/50 text-orange-500">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">{info.label}</p>
                    <p
                      className={`text-sm font-medium ${info.highlight || 'text-slate-200'}`}
                    >
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800/60 text-xs text-slate-500">
              <p>
                Owner Email:{' '}
                <span className="text-slate-400 font-medium">{ownerEmail}</span>
              </p>
              <p className="sm:text-right">
                Posted Date:{' '}
                <span className="text-slate-400 font-medium">
                  {formattedDate}
                </span>
              </p>
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <div className="bg-[#111827] border border-slate-800 rounded-3xl p-6 space-y-5 shadow-xl shadow-black/40 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r align-super from-orange-600 to-amber-500"></div>

            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                Adoption Request
              </h3>
              <p className="text-xs text-slate-400">
                Please fill out the form below to send an adoption request for
                Bella.
              </p>
            </div>

            <form className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-400">
                  Pet Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={petName}
                    disabled
                    className="w-full bg-[#1E293B]/50 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-400 cursor-not-allowed opacity-80"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-400">
                  Your Name
                </label>
                <input
                  type="text"
                  value={user?.name}
                  disabled
                  className="w-full bg-[#1E293B]/50 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-400 cursor-not-allowed opacity-80"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-400">
                  Your Email
                </label>
                <input
                  type="email"
                  value={user?.email}
                  disabled
                  className="w-full bg-[#1E293B]/50 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-400 cursor-not-allowed opacity-80"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  Pickup Date
                </label>
                <input
                  type="date"
                  min={
                    pet?.createdAt
                      ? new Date(pet.createdAt).toISOString().split('T')[0]
                      : undefined
                  }
                  className="w-full bg-[#1E293B] border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500 transition [color-scheme:dark]"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <label className="text-slate-300">Message</label>
                  <span className="text-slate-500">/500</span>
                </div>
                <textarea
                  maxLength={500}
                  placeholder="Tell us why you would be a great home for Bella..."
                  rows={4}
                  className="w-full bg-[#1E293B] border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition resize-none"
                />
              </div>

              {/* Warning Notice */}
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-3 flex gap-3">
                <div className="text-amber-500 shrink-0 mt-0.5">
                  <Info size={16} />
                </div>
                <div className="text-xs text-amber-400/90 leading-normal">
                  <span className="font-bold block text-amber-400">
                    Important
                  </span>
                  You cannot adopt your own pet.
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full py-3 px-4 rounded-xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white transition shadow-lg shadow-orange-500/10 active:scale-[0.99]">
                Adopt Now
              </button>
            </form>

            <p className="text-[11px] text-center text-slate-500 flex items-center justify-center gap-1">
              <Shield size={12} /> Your information is safe with us.
            </p>
          </div>

          {/* Why Adopt section */}
          <div className="bg-[#111827] border border-slate-800 rounded-3xl p-6 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Why Adopt from PawHaven?
            </h4>
            <ul className="space-y-3">
              {[
                'Verified shelters & pets',
                'Health checked & vaccinated',
                'Safe & transparent process',
                'Lifetime support',
              ].map((perk, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2.5 text-sm text-slate-300"
                >
                  <CheckCircle
                    size={16}
                    className="text-emerald-500 shrink-0"
                  />
                  <span>{perk}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PetDetails;
