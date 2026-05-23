'use client';
import { Alert, CloseButton } from '@heroui/react';
import { Shield } from 'lucide-react';
import React from 'react';
import toast from 'react-hot-toast';

const Form = ({ pet, user }) => {
  const { petName, ownerEmail, imageUrl, species, location, adoptionFee } = pet;
  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formInfo = Object.fromEntries(formData.entries());

    const form = e.currentTarget;

    const adoptData = {
      petId: pet._id,
      name: petName,
      type: species,
      location,
      fee: adoptionFee,
      img: imageUrl,
      requesterEmail: user?.email,
      ownerEmail,
      message: formInfo.message,
      pickupDate: formInfo.date,
    };

    const res = await fetch('http://localhost:5000/adopt-request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(adoptData),
    });

    const data = await res.json();

    if (data.success) {
      toast.success('Adoption request sent successfully', {
        style: {
          border: '1px solid #22C55E',
        },
        iconTheme: {
          primary: '#22C55E',
          secondary: '#fff',
        },
      });
      form.reset();
    } else {
      toast('Pet already adopted', {
        icon: '⚠️',
        style: {
          border: '1px solid #FACC15',
          background: '#0B0F19',
          color: '#fff',
        },
      });
    }
  };
  return (
    <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 space-y-5 shadow-xl shadow-black/5 dark:shadow-black/40 relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r align-super from-orange-600 to-amber-500"></div>

      <div className="space-y-1">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          Adoption Request
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Please fill out the form below to send an adoption request for{' '}
          {petName}.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            Pet Name
          </label>
          <div className="relative">
            <input
              type="text"
              value={petName}
              disabled
              className="w-full bg-slate-50 dark:bg-[#1E293B]/50 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-500 dark:text-slate-400 cursor-not-allowed opacity-80 transition-colors duration-300"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            Your Name
          </label>
          <input
            type="text"
            value={user?.name}
            disabled
            className="w-full bg-slate-50 dark:bg-[#1E293B]/50 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-500 dark:text-slate-400 cursor-not-allowed opacity-80 transition-colors duration-300"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            Your Email
          </label>
          <input
            type="email"
            value={user?.email}
            disabled
            className="w-full bg-slate-50 dark:bg-[#1E293B]/50 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-500 dark:text-slate-400 cursor-not-allowed opacity-80 transition-colors duration-300"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
            Pickup Date
          </label>
          <input
            type="date"
            name="date"
            required
            min={
              pet?.createdAt
                ? new Date(pet.createdAt).toISOString().split('T')[0]
                : undefined
            }
            className="w-full bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-orange-500 transition [color-scheme:light] dark:[color-scheme:dark]"
          />
        </div>

        <div className="space-y-1.5">
          <div className="flex justify-between text-xs font-semibold">
            <label className="text-slate-700 dark:text-slate-300">
              Message
            </label>
          </div>
          <textarea
            maxLength={500}
            name="message"
            required
            placeholder={`Tell us why you would be a great home for ${petName}...`}
            rows={4}
            className="w-full bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-orange-500 transition resize-none transition-colors duration-300"
          />
        </div>

        <button className="w-full py-3 px-4 rounded-xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white transition shadow-lg shadow-orange-500/10 active:scale-[0.99]">
          Adopt Now
        </button>
      </form>

      <p className="text-[11px] text-center text-slate-400 dark:text-slate-500 flex items-center justify-center gap-1">
        <Shield size={12} /> Your information is safe with us.
      </p>
    </div>
  );
};

export default Form;
