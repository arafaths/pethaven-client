import { X } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const AdoptionRequestsModal = ({ selectePet, requests, setIsModalOpen }) => {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-all duration-300">
      {/* Modal Container Box */}
      <div className="w-full max-w-2xl bg-[#111827] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl shadow-black relative animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-[#111827]">
          <div>
            <h2 className="text-lg font-bold text-white tracking-wide">
              Adoption Requests
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Pet:{' '}
              <span className="text-orange-500 font-bold">
                {selectePet?.name} ({selectePet?.breed})
              </span>
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(false)}
            className="p-2 rounded-xl bg-[#0B0F19] border border-slate-800 text-slate-400 hover:text-white transition"
          >
            <X size={16} />
          </button>
        </div>

        {/* Modal Content Table */}
        <div className="overflow-x-auto max-h-[380px]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800/60 text-slate-500 text-[11px] font-bold uppercase tracking-wider bg-[#0B0F19]/50">
                <th className="py-3 px-5">Requester</th>
                <th className="py-3 px-4">Pickup Date</th>
                <th className="py-3 px-4">Message</th>
                <th className="py-3 px-4 text-center">Status</th>
                <th className="py-3 px-5 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/40">
              {requests.map(req => (
                <tr
                  key={req._id}
                  className="hover:bg-[#1E293B]/10 transition duration-150"
                >
                  {/* Requester Profile */}
                  <td className="py-3 px-5 whitespace-nowrap">
                    <div className="flex items-center gap-2.5">
                      <Image
                        src={req.img}
                        alt={req.name}
                        width={40}
                        height={40}
                        className="w-8 h-8 rounded-full object-cover border border-slate-800"
                      />
                      <div>
                        <p className="text-xs font-bold text-white">
                          {req.name}
                        </p>
                        <p className="text-[10px] text-slate-500">
                          {req.requesterEmail}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Pickup Date */}
                  <td className="py-3 px-4 text-xs text-slate-400 font-medium whitespace-nowrap">
                    {new Date(req.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </td>

                  {/* Message Content */}
                  <td
                    className="py-3 px-4 text-xs text-slate-400 max-w-[160px] truncate"
                    title={req.message}
                  >
                    {req.message}
                  </td>

                  {/* Status pill */}
                  <td className="py-3 px-4 text-center whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 rounded-lg text-[10px] font-bold border tracking-wider w-20 justify-center
                          ${req.status === 'pending' && 'bg-amber-500/10 text-amber-400 border-amber-500/10'}
                          ${req.status === 'approved' && 'bg-emerald-500/10 text-emerald-400 border-emerald-500/10'}
                          ${req.status === 'rejected' && 'bg-rose-500/10 text-rose-400 border-rose-500/10'}`}
                    >
                      {req.status}
                    </span>
                  </td>

                  {/* Approve / Reject Actions buttons */}
                  <td className="py-3 px-5 whitespace-nowrap text-center">
                    <div className="flex items-center justify-center gap-1.5">
                      <button
                        onClick={() => handleApprove(req._id)}
                        disabled={req.status !== 'pending'}
                        className={`px-3 py-1 rounded-lg text-[10px] font-bold border transition
                              ${
                                req.status === 'pending'
                                  ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-white'
                                  : 'bg-[#1E293B]/20 border-slate-800/80 text-slate-600 cursor-not-allowed'
                              }`}
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleReject(req._id)}
                        disabled={req.status !== 'pending'}
                        className={`px-3 py-1 rounded-lg text-[10px] font-bold border transition
                              ${
                                req.status === 'pending'
                                  ? 'bg-rose-500/10 border-rose-500/20 text-rose-400 hover:bg-rose-500 hover:text-white'
                                  : 'bg-[#1E293B]/20 border-slate-800/80 text-slate-600 cursor-not-allowed'
                              }`}
                      >
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdoptionRequestsModal;