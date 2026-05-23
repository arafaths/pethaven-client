'use client';
import React, { useEffect, useState } from 'react';
import {
  ClipboardList,
  Hourglass,
  CheckCircle2,
  XCircle,
  MapPin,
  Calendar,
  MessageSquare,
  Trash2,
} from 'lucide-react';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import RequestCard from '@/components/my-request/RequestCard';
import RequestTable from '@/components/my-request/RequestTable';
import NoRequest from '@/components/my-request/NoRequest';
import Loading from '@/components/actions/Loading';

const MyRequestsPage = () => {
  const [loading, setLoading] = useState(true);
  const [requests, setRequests] = useState([]);
  const { data: session } = authClient.useSession();
  const user = session?.user;
  useEffect(() => {
    const fetchRequests = async () => {
      setLoading(true);
      if (!user?.email) return;

      const res = await fetch(
        `${process.env.NEXT_URL}/my-requests?email=${user.email}`,
      );

      const data = await res.json();

      setRequests(data);
      setLoading(false);
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
        border: 'border-purple-500/20 dark:border-purple-500/20',
        glow: 'shadow-purple-950/5 dark:shadow-purple-950/20',
        text: 'text-purple-600 dark:text-purple-400',
        iconBg: 'bg-purple-50 dark:bg-purple-950/30',
      },
      yellow: {
        border: 'border-amber-500/20 dark:border-amber-500/20',
        glow: 'shadow-amber-950/5 dark:shadow-amber-950/20',
        text: 'text-amber-600 dark:text-amber-400',
        iconBg: 'bg-amber-50 dark:bg-amber-950/30',
      },
      green: {
        border: 'border-emerald-500/20 dark:border-emerald-500/20',
        glow: 'shadow-emerald-950/5 dark:shadow-emerald-950/20',
        text: 'text-emerald-600 dark:text-emerald-400',
        iconBg: 'bg-emerald-50 dark:bg-emerald-950/30',
      },
      red: {
        border: 'border-rose-500/20 dark:border-rose-500/20',
        glow: 'shadow-rose-950/5 dark:shadow-rose-950/20',
        text: 'text-rose-600 dark:text-rose-400',
        iconBg: 'bg-rose-50 dark:bg-rose-950/30',
      },
    };
    return classes[color];
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B0F19] text-slate-700 dark:text-[#E2E8F0] font-sans antialiased p-4 md:p-8 lg:p-12 selection:bg-orange-500 selection:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-5">
        <div className="space-y-1.5">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            My Adoption Requests
          </h1>
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
            Track all your pet adoption requests in one place
          </p>
        </div>
        {loading && <Loading />}

        {!loading && (
          <div className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, idx) => {
                const theme = getColorClasses(stat.color);
                return (
                  <div
                    key={idx}
                    className={`bg-white dark:bg-[#111827]/80 border ${theme.border} rounded-2xl p-5 shadow-xl ${theme.glow} relative overflow-hidden group transition-all duration-300 hover:brightness-105 dark:hover:brightness-110`}
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
                        <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                          {stat.label}
                        </p>
                        <p className="text-2xl font-bold text-slate-900 dark:text-white my-0.5">
                          {stat.count}
                        </p>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">
                          {stat.sub}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-[#F8FAFC] dark:bg-[#0B0F19] text-slate-700 dark:text-[#E2E8F0] p-4 md:p-8 font-sans antialiased flex items-center justify-center transition-colors duration-300">
              {totalRequests === 0 && <NoRequest />}
              {totalRequests > 0 && (
                <div className="w-full max-w-6xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-900 rounded-3xl overflow-hidden shadow-2xl shadow-black/5 dark:shadow-black/80 transition-colors duration-300">
                  <div className="overflow-x-auto hidden sm:block">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-slate-200 dark:border-slate-800/60 text-slate-500 dark:text-slate-400 text-sm font-semibold tracking-wide bg-slate-50 dark:bg-[#111827]">
                          <th className="py-5 px-6">Pet</th>
                          <th className="py-5 px-4">Species</th>
                          <th className="py-5 px-4">Location</th>
                          <th className="py-5 px-4">Adoption Fee</th>
                          <th className="py-5 px-4 text-center">Status</th>
                          <th className="py-5 px-4">Request Date</th>
                          <th className="py-5 px-6 text-center">Action</th>
                        </tr>
                      </thead>

                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800/40">
                        {requests.map(row => (
                          <RequestTable
                            key={row._id}
                            row={row}
                            setRequests={setRequests}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="grid grid-cols-1 space-y-2 sm:hidden">
                    {requests.map(row => (
                      <RequestCard
                        key={row._id}
                        row={row}
                        setRequests={setRequests}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyRequestsPage;
