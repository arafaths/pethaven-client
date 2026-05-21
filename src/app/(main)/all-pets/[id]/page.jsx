import Form from '@/components/petDetails/Form';
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
  PawPrint,
  Crown,
  Edit3,
  Trash2,
  Users,
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
    isAdopted,
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
  const isOwner = user?.email === ownerEmail;
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
          {isAdopted && (
            <div className="bg-[#0B0F19] flex items-center justify-center antialiased font-sans">
              {/* Main Container Card */}
              <div className="w-full max-w-md bg-[#0F172A]/40 border border-emerald-500/20 backdrop-blur-md rounded-[32px] p-8 md:p-10 text-center shadow-2xl shadow-emerald-950/10 flex flex-col items-center justify-center relative overflow-hidden group">
                {/* Subtle background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent pointer-events-none transition duration-500 group-hover:from-emerald-500/10" />

                {/* Glowing Paw Icon Wrapper */}
                <div className="relative w-24 h-24 rounded-full border border-emerald-500/30 flex items-center justify-center bg-emerald-950/30 shadow-[0_0_25px_rgba(16,185,129,0.15)] mb-6 transition duration-300 group-hover:shadow-[0_0_35px_rgba(16,185,129,0.25)] group-hover:border-emerald-500/50">
                  {/* Paw Print Custom SVG with Glow */}
                  <PawPrint size={25} className="text-emerald-500/30" />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 tracking-wide mb-3 drop-shadow-[0_0_12px_rgba(52,211,153,0.4)]">
                  Adopted
                </h2>

                <p className="text-emerald-400/80 font-medium text-sm md:text-base tracking-normal mb-6">
                  This pet has already been adopted
                </p>

                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent mb-6" />

                <div className="flex items-center gap-3 max-w-[280px] text-left">
                  <Heart className="w-6 h-6 text-emerald-400/60 shrink-0 stroke-[1.5]" />
                  <p className="text-xs md:text-sm text-emerald-500/70 font-medium leading-relaxed">
                    Thank you for helping pets find loving homes.
                  </p>
                </div>
              </div>
            </div>
          )}

          {isOwner && (
            <div className="bg-[#0B0F19] flex items-center justify-center antialiased font-sans">
              {/* Main Panel Card */}
              <div className="w-full max-w-2xl bg-[#111827] border border-slate-800/80 rounded-[28px] p-6 md:p-8 shadow-2xl shadow-black/60 relative overflow-hidden">
                {/* Left Side Glowing Edge Effect */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-orange-500/80 via-orange-600/40 to-transparent blur-[1px]" />

                {/* Header Section */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <Crown className="w-7 h-7 text-orange-500 fill-orange-500/20 stroke-[2]" />
                    <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                      Pet Owner Panel
                    </h2>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm md:text-base text-slate-400 font-normal leading-relaxed mb-6 max-w-xl">
                  You are the owner of this pet. Manage your listing and
                  requests easily from here.
                </p>
              </div>
            </div>
          )}

          {!isAdopted && !isOwner && (
            <Form pet={pet} user={user} />
          )}
        </div>
      </main>
    </div>
  );
};

export default PetDetails;
