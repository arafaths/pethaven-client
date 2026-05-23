'use client';
import { authClient } from '@/lib/auth-client';
import {
  RotateCcw,
  Plus,
  Lock,
  ChevronDown,
  Dog,
  ShieldCheck,
  MapPin,
  Heart,
} from 'lucide-react';

import React from 'react';
import toast from 'react-hot-toast';

const AddPetPage = () => {
  // User data
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const pet = Object.fromEntries(formData.entries());

    const petData = {
      ...pet,
      ownerEmail: user?.email,
      ownerName: user?.name,
      status: 'available',
      isAdopted: false,
      createdAt: new Date(),
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/all-pets`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(petData),
    });
    const data = await res.json();
    if (data.acknowledged) {
      toast.success('Added pet successfully', {
        style: {
          border: '1px solid #22C55E',
        },

        iconTheme: {
          primary: '#22C55E',
          secondary: '#fff',
        },
      });
      e.target.reset();
    }
  };
  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B0F19] text-slate-700 dark:text-[#E2E8F0] p-4 md:p-8 flex items-center justify-center font-sans antialiased transition-colors duration-300">
      <div className="w-full max-w-4xl space-y-6">
        <div className="flex items-center gap-4">
          <div className="p-3.5 bg-orange-500/10 border border-orange-500/20 rounded-2xl text-orange-500 shadow-lg shadow-orange-500/5">
            <Plus size={28} className="stroke-[2.5]" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Add a New Pet
            </h1>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
              Help a loving pet find a forever home.
            </p>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl shadow-black/5 dark:shadow-black/50 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 relative overflow-hidden transition-colors duration-300"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 to-amber-500"></div>

          <div className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                Pet Name <span className="text-orange-500">*</span>
              </label>
              <input
                type="text"
                name="petName"
                required
                className="w-full bg-white dark:bg-[#1E293B]/60 border border-slate-200 dark:border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-orange-500 transition transition-colors duration-300"
                placeholder="Enter pet's name"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                Species <span className="text-orange-500">*</span>
              </label>
              <div className="relative">
                <select
                  name="species"
                  required
                  className="w-full bg-white dark:bg-[#1E293B]/60 border border-slate-200 dark:border-slate-700/80 rounded-xl pl-11 pr-10 py-2.5 text-sm text-slate-900 dark:text-white appearance-none focus:outline-none focus:border-orange-500 transition transition-colors duration-300"
                >
                  <option value="Dog" className="text-slate-900 dark:text-white bg-white dark:bg-[#111827]">Dog</option>
                  <option value="Cat" className="text-slate-900 dark:text-white bg-white dark:bg-[#111827]">Cat</option>
                  <option value="Bird" className="text-slate-900 dark:text-white bg-white dark:bg-[#111827]">Bird</option>
                  <option value="Rabbit" className="text-slate-900 dark:text-white bg-white dark:bg-[#111827]">Rabbit</option>
                  <option value="Other" className="text-slate-900 dark:text-white bg-white dark:bg-[#111827]">Other</option>
                </select>
                <Dog
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500"
                />
                <ChevronDown
                  size={16}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                Breed <span className="text-orange-500">*</span>
              </label>
              <input
                type="text"
                name="breed"
                required
                className="w-full bg-white dark:bg-[#1E293B]/60 border border-slate-200 dark:border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-orange-500 transition transition-colors duration-300"
                placeholder="e.g. Golden Retriever"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                Age <span className="text-orange-500">*</span>
              </label>
              <input
                type="text"
                name="age"
                required
                className="w-full bg-white dark:bg-[#1E293B]/60 border border-slate-200 dark:border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-orange-500 transition transition-colors duration-300"
                placeholder="e.g. 2 Years"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                Gender <span className="text-orange-500">*</span>
              </label>
              <div className="relative">
                <select
                  name="gender"
                  required
                  className="w-full bg-white dark:bg-[#1E293B]/60 border border-slate-200 dark:border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white appearance-none focus:outline-none focus:border-orange-500 transition transition-colors duration-300"
                >
                  <option value="Male" className="text-slate-900 dark:text-white bg-white dark:bg-[#111827]">Male</option>
                  <option value="Female" className="text-slate-900 dark:text-white bg-white dark:bg-[#111827]">Female</option>
                </select>
                <ChevronDown
                  size={16}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                Image URL <span className="text-orange-500">*</span>
              </label>
              <input
                type="url"
                name="imageUrl"
                required
                className="w-full bg-white dark:bg-[#1E293B]/60 border border-slate-200 dark:border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-orange-500 transition font-mono text-xs transition-colors duration-300"
                placeholder="https://example.com/pet.jpg"
              />
              <p className="text-[11px] text-slate-400 dark:text-slate-500 pl-1">
                Add a clear image URL (JPG, PNG, WebP)
              </p>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                Health Status <span className="text-orange-500">*</span>
              </label>
              <div className="relative">
                <select
                  name="healthStatus"
                  required
                  className="w-full bg-white dark:bg-[#1E293B]/60 border border-slate-200 dark:border-slate-700/80 rounded-xl pl-11 pr-10 py-2.5 text-sm text-emerald-600 dark:text-emerald-400 font-medium appearance-none focus:outline-none focus:border-orange-500 transition transition-colors duration-300"
                >
                  <option
                    value="Healthy"
                    className="text-emerald-600 dark:text-emerald-400 bg-white dark:bg-[#111827]"
                  >
                    Healthy
                  </option>
                  <option
                    value="Vaccinated"
                    className="text-emerald-600 dark:text-emerald-400 bg-white dark:bg-[#111827]"
                  >
                    Vaccinated
                  </option>
                  <option
                    value="Needs Treatment"
                    className="text-rose-600 dark:text-rose-400 bg-white dark:bg-[#111827]"
                  >
                    Needs Treatment
                  </option>
                  <option
                    value="Under Medical Treatment"
                    className="text-amber-600 dark:text-amber-400 bg-white dark:bg-[#111827]"
                  >
                    Under Treatment
                  </option>
                </select>
                <Heart
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500 fill-emerald-500/20"
                />
                <ChevronDown
                  size={16}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                />
              </div>
            </div>
          </div>

          <div className="space-y-5 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                  Vaccination Status <span className="text-orange-500">*</span>
                </label>
                <div className="relative">
                  <select
                    name="vaccinationStatus"
                    required
                    className="w-full bg-white dark:bg-[#1E293B]/60 border border-slate-200 dark:border-slate-700/80 rounded-xl pl-11 pr-10 py-2.5 text-sm text-emerald-600 dark:text-emerald-400 font-medium appearance-none focus:outline-none focus:border-orange-500 transition transition-colors duration-300"
                  >
                    <option
                      value="Up to Date"
                      className="text-emerald-600 dark:text-emerald-400 bg-white dark:bg-[#111827]"
                    >
                      Up to Date
                    </option>
                    <option
                      value="Partially Vaccinated"
                      className="text-amber-600 dark:text-amber-400 bg-white dark:bg-[#111827]"
                    >
                      Partially Vaccinated
                    </option>
                    <option
                      value="Not Vaccinated"
                      className="text-rose-600 dark:text-rose-400 bg-white dark:bg-[#111827]"
                    >
                      Not Vaccinated
                    </option>
                  </select>
                  <ShieldCheck
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500"
                  />
                  <ChevronDown
                    size={16}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                  Location <span className="text-orange-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="location"
                    required
                    className="w-full bg-white dark:bg-[#1E293B]/60 border border-slate-200 dark:border-slate-700/80 rounded-xl pl-11 pr-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-orange-500 transition transition-colors duration-300"
                    placeholder="City, State"
                  />
                  <MapPin
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                  Adoption Fee ($) <span className="text-orange-500">*</span>
                </label>
                <input
                  type="number"
                  name="adoptionFee"
                  required
                  className="w-full bg-white dark:bg-[#1E293B]/60 border border-slate-200 dark:border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-orange-500 transition transition-colors duration-300"
                  placeholder="0"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <label className="text-slate-600 dark:text-slate-300">
                    Description <span className="text-orange-500">*</span>
                  </label>
                  
                </div>
                <textarea
                  maxLength={500}
                  name="description"
                  required
                  minLength={20}
                  placeholder="Tell us about the pet's personality, behavior, history..."
                  rows={4}
                  className="w-full bg-white dark:bg-[#1E293B]/60 border border-slate-200 dark:border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-orange-500 transition resize-none transition-colors duration-300"
                />
              </div>
            </div>

            <div className="space-y-1.5 pt-2">
              <label className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                Owner Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="ownerEmail"
                  value={user?.email || 'Your Email'}
                  disabled
                  className="w-full bg-slate-50 dark:bg-[#1E293B]/30 border border-slate-200 dark:border-slate-800/80 text-slate-400 dark:text-slate-500 rounded-xl pl-4 pr-11 py-2.5 text-sm cursor-not-allowed transition-colors duration-300"
                />
                <Lock
                  size={14}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-600"
                />
              </div>
              <p className="text-[11px] text-slate-400 dark:text-slate-600 pl-1">
                This is the email associated with your account.
              </p>
            </div>
          </div>

          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800/60 mt-2">
            <button
              type="reset"
              className="sm:col-span-1 px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#1E293B]/50 font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/80 transition flex items-center justify-center gap-2 active:scale-[0.98] transition-colors duration-300"
            >
              <RotateCcw size={16} /> Reset Form
            </button>

            <button
              type="submit"
              className="sm:col-span-2 py-3 px-6 rounded-xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 text-white transition hover:brightness-110 shadow-lg shadow-orange-500/10 flex items-center justify-center gap-2 active:scale-[0.98]"
            >
              <Plus size={18} className="stroke-[2.5]" /> Add Pet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPetPage;