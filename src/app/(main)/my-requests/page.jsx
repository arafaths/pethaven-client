'use client'
import React, { useEffect, useState } from 'react';
import {
  ClipboardList,
  Hourglass,
  CheckCircle2,
  XCircle,
  MapPin,
} from 'lucide-react';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';

export default function AdoptionRequests() {
  // data
  const [requests, setRequests] = useState([]);
  const { data: session } = authClient.useSession();
  const user = session?.user;
  useEffect(() => {
    const fetchRequests = async () => {
      if (!user?.email) return;

      const res = await fetch(
        `http://localhost:5000/my-requests?email=${user.email}`,
      );

      const data = await res.json();

      setRequests(data);
    };

    fetchRequests();
  }, [user]);

  const totalRequests = requests.length;
  const pendingRequests = requests.filter(
    request => request.status === 'pending',
  ).length;
  const approvedRequests = requests.filter(
    request => request.status === 'approved',
  ).length;
  const rejectedRequests = requests.filter(
    request => request.status === 'rejected',
  ).length;

  const stats = [
    {
      label: 'Total Requests',
      count: totalRequests,
      sub: 'All time requests',
      color: 'purple',
      icon: ClipboardList,
    },
    {
      label: 'Pending',
      count: pendingRequests,
      sub: 'Awaiting response',
      color: 'yellow',
      icon: Hourglass,
      dot: true,
    },
    {
      label: 'Approved',
      count: approvedRequests,
      sub: 'Requests approved',
      color: 'green',
      icon: CheckCircle2,
    },
    {
      label: 'Rejected',
      count: rejectedRequests,
      sub: 'Requests declined',
      color: 'red',
      icon: XCircle,
    },
  ];

  const getColorClasses = color => {
    const classes = {
      purple: {
        border: 'border-purple-500/20',
        glow: 'shadow-purple-950/20',
        text: 'text-purple-400',
        iconBg: 'bg-purple-950/30',
      },
      yellow: {
        border: 'border-amber-500/20',
        glow: 'shadow-amber-950/20',
        text: 'text-amber-400',
        iconBg: 'bg-amber-950/30',
      },
      green: {
        border: 'border-emerald-500/20',
        glow: 'shadow-emerald-950/20',
        text: 'text-emerald-400',
        iconBg: 'bg-emerald-950/30',
      },
      red: {
        border: 'border-rose-500/20',
        glow: 'shadow-rose-950/20',
        text: 'text-rose-400',
        iconBg: 'bg-rose-950/30',
      },
    };
    return classes[color];
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-[#E2E8F0] font-sans antialiased p-4 md:p-8 lg:p-12 selection:bg-orange-500 selection:text-white">
      <div className="max-w-7xl mx-auto space-y-5">
        <div className="space-y-1.5">
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            My Adoption Requests
          </h1>
          <p className="text-xs md:text-sm text-slate-400">
            Track all your pet adoption requests in one place
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => {
            const theme = getColorClasses(stat.color);
            return (
              <div
                key={idx}
                className={`bg-[#111827]/80 border ${theme.border} rounded-2xl p-5 shadow-xl ${theme.glow} relative overflow-hidden group transition-all duration-300 hover:brightness-110`}
              >
                {stat.dot && (
                  <span className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                )}
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-xl ${theme.iconBg} ${theme.text}`}
                  >
                    <stat.icon size={22} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-bold text-white my-0.5">
                      {stat.count}
                    </p>
                    <p className="text-[11px] text-slate-400">{stat.sub}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-[#0B0F19] text-[#E2E8F0] p-4 md:p-8 font-sans antialiased flex items-center justify-center">
          <div className="w-full max-w-6xl bg-[#111827] border border-slate-900 rounded-3xl overflow-hidden shadow-2xl shadow-black/80">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800/60 text-slate-400 text-sm font-semibold tracking-wide bg-[#111827]">
                    <th className="py-5 px-6">Pet</th>
                    <th className="py-5 px-4">Species</th>
                    <th className="py-5 px-4">Location</th>
                    <th className="py-5 px-4">Adoption Fee</th>
                    <th className="py-5 px-4 text-center">Status</th>
                    <th className="py-5 px-4">Request Date</th>
                    <th className="py-5 px-6 text-center">Action</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-800/40">
                  {requests.map(row => (
                    <tr
                      key={row._id}
                      className="hover:bg-[#1E293B]/20 transition duration-150 group"
                    >
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
                          onClick={() => handleCancel(row.id)}
                          className="px-4 py-1.5 rounded-xl border border-amber-500/20 bg-transparent hover:bg-rose-500/10 text-orange-500 hover:text-orange-400 text-xs font-bold transition duration-150 active:scale-95"
                        >
                          View
                        </Link>
                        <button
                          onClick={() => handleCancel(row.id)}
                          className="px-4 py-1.5 rounded-xl border border-rose-500/30 bg-transparent hover:bg-rose-500/10 text-rose-500 hover:text-rose-400 text-xs font-bold transition duration-150 active:scale-95"
                        >
                          Cancel
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
