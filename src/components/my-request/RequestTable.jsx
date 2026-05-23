import { MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import toast from 'react-hot-toast';

const RequestTable = ({ row, setRequests }) => {
  const handleDelete = async id => {
    const res = await fetch(`${process.env.NEXT_URL}/my-requests/${id}`, {
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
    <tr className="hover:bg-[#1E293B]/20 transition duration-150 group">
      <td className="py-4 px-6 whitespace-nowrap">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-800 shrink-0 bg-slate-900">
            <Image
              width={50}
              height={50}
              src={row.img}
              alt={row.name}
              className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
            />
          </div>
          <span className="font-bold text-white tracking-wide text-base">
            {row.name}
          </span>
        </div>
      </td>

      <td className="py-4 px-4 text-slate-300 text-sm font-medium whitespace-nowrap">
        {row.species}
      </td>

      <td className="py-4 px-4 text-slate-400 text-sm font-medium whitespace-nowrap">
        <div className="flex items-center gap-1.5 text-slate-300">
          <MapPin size={15} className="text-slate-500" />
          <span>{row.location}</span>
        </div>
      </td>

      <td className="py-4 px-4 text-orange-500 font-bold text-base whitespace-nowrap">
        ${row.fee}
      </td>

      <td className="py-4 px-4 text-center whitespace-nowrap">
        <div className="flex justify-center">
          {row.status === 'pending' && (
            <span className="inline-flex items-center px-4 py-1.5 rounded-xl text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20 tracking-wider w-24 justify-center">
              Pending
            </span>
          )}
          {row.status === 'approved' && (
            <span className="inline-flex items-center px-4 py-1.5 rounded-xl text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 tracking-wider w-24 justify-center">
              Approved
            </span>
          )}
          {row.status === 'rejected' && (
            <span className="inline-flex items-center px-4 py-1.5 rounded-xl text-xs font-bold bg-rose-500/10 text-rose-400 border border-rose-500/20 tracking-wider w-24 justify-center">
              Rejected
            </span>
          )}
        </div>
      </td>

      <td className="py-4 px-4 text-slate-400 text-sm font-medium whitespace-nowrap">
        {row.pickupDate}
      </td>

      <td className="flex gap-2 py-4 px-6 text-center whitespace-nowrap">
        <Link
          href={`/all-pets/${row.petId}`}
          className="px-4 py-1.5 rounded-xl border border-amber-500/20 bg-transparent hover:bg-rose-500/10 text-orange-500 hover:text-orange-400 text-xs font-bold transition duration-150 active:scale-95"
        >
          View
        </Link>
        <button
          onClick={() => handleDelete(row._id)}
          className="px-4 py-1.5 rounded-xl border border-rose-500/30 bg-transparent hover:bg-rose-500/10 text-rose-500 hover:text-rose-400 text-xs font-bold transition duration-150 active:scale-95"
        >
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default RequestTable;