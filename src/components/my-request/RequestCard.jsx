import { Calendar, MapPin, Trash2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import toast from 'react-hot-toast';

const RequestCard = ({ row, setRequests }) => {
  const handleDelete = async id => {
    const res = await fetch(`http://localhost:5000/my-requests/${id}`, {
      method: 'DELETE',
    });

    const data = await res.json();
    console.log(data);
    if (data.success) {
      setRequests(prev => prev.filter(item => item._id !== id));

      toast.success('Delete successfully', {
        style: {
          border: '1px solid #22C55E',
        },

        iconTheme: {
          primary: '#22C55E',
          secondary: '#fff',
        },
      });
    }
  };
  return (
    <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-900 rounded-3xl overflow-hidden shadow-xl hover:border-slate-300 dark:hover:border-slate-800 transition-all duration-300 flex flex-col justify-between group transition-colors duration-300">
      {/* 1. Image and Floating Status Badge */}
      <div className="h-52 w-full relative overflow-hidden bg-slate-100 dark:bg-slate-900">
        <Image
          fill
          src={row.img || '/placeholder-pet.png'}
          alt={row.name}
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Dynamic Status Badges */}
        <div className="absolute top-4 left-4">
          {row.status?.toLowerCase() === 'pending' && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-amber-500 text-black shadow-lg shadow-amber-500/10">
              <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
              Pending ⏳
            </span>
          )}
          {row.status?.toLowerCase() === 'approved' && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500 text-white shadow-lg shadow-emerald-500/10">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              Approved
            </span>
          )}
          {row.status?.toLowerCase() === 'rejected' && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-rose-600 text-white shadow-lg shadow-rose-600/10">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              Rejected
            </span>
          )}
        </div>
      </div>

      {/* 2. Card Content Data */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Name and Fee */}
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-wide">
              {row.name}
            </h3>
            <span className="text-lg font-extrabold text-orange-500">
              ${row.fee}
            </span>
          </div>

          {/* Species Label */}
          <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-1">
            {row.type}
          </p>

          {/* Location and Date */}
          <div className="space-y-2 mt-4">
            <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
              <MapPin
                size={14}
                className="text-slate-400 dark:text-slate-500 shrink-0"
              />
              <span className="truncate">{row.location}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <Calendar
                size={14}
                className="text-slate-400 dark:text-slate-500 shrink-0"
              />
              <span>{row.pickupDate || row.date || 'N/A'}</span>
            </div>
          </div>

          {/* User Optional Message Comment */}
          {row.message && (
            <p className="text-xs text-slate-500 dark:text-slate-400 italic bg-slate-50 dark:bg-[#0B0F19]/60 p-2.5 rounded-xl border border-slate-100 dark:border-slate-900 mt-4 line-clamp-2">
              {row.message}
            </p>
          )}
        </div>

        {/* 3. Bottom Action Buttons */}
        <div className="grid grid-cols-1 gap-2">
          <Link
            href={`/all-pets/${row.petId}`}
            className="w-full inline-flex items-center justify-center py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold tracking-wide shadow-md transition-all duration-150 active:scale-98"
          >
            View Details
          </Link>
          <button
            onClick={() => handleDelete(row._id)}
            className="flex items-center justify-center gap-1.5 py-2 rounded-xl border border-rose-200 dark:border-rose-950/40 bg-rose-50 dark:bg-rose-950/10 text-xs font-bold text-rose-600 dark:text-rose-500 hover:bg-rose-100 dark:hover:bg-rose-950/30 transition active:scale-95 transition-colors duration-300"
          >
            <Trash2 size={13} /> Cancel Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
