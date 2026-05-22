'use client'
import React, { useState } from 'react';
import {
  Plus,
  Search,
  Eye,
  Edit2,
  Trash2,
  Users,
  X,
  ChevronDown,
  MapPin,
  TrendingUp,
  PawPrint,
  Heart,
  Bell,
} from 'lucide-react';

const MyListingsPage = () => {
  // Modal Open/Close এবং Selected Pet Track করার স্টেট
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);

  // Top Statistics Data
  const stats = [
    {
      label: 'Total Pets',
      count: 12,
      color: 'text-orange-500',
      icon: PawPrint,
    },
    {
      label: 'Available Pets',
      count: 8,
      color: 'text-emerald-500',
      icon: PawPrint,
    },
    {
      label: 'Adopted Pets',
      count: 3,
      color: 'text-rose-500',
      icon: Heart,
    },
    {
      label: 'Total Requests',
      count: 15,
      color: 'text-amber-500',
      icon: Users,
    },
  ];

  // Table Row Listings
  const petListings = [
    {
      id: 1,
      name: 'Buddy',
      breed: 'Golden Retriever',
      species: 'Dog',
      age: '2 Years',
      location: 'New York, USA',
      fee: '$250',
      status: 'Available',
      date: 'May 20, 2025',
      img: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=150',
    },
    {
      id: 2,
      name: 'Luna',
      breed: 'British Shorthair',
      species: 'Cat',
      age: '1 Year',
      location: 'Austin, USA',
      fee: '$180',
      status: 'Available',
      date: 'May 18, 2025',
      img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=150',
    },
    {
      id: 3,
      name: 'Cinnamon',
      breed: 'Holland Lop',
      species: 'Rabbit',
      age: '8 Months',
      location: 'Seattle, USA',
      fee: '$120',
      status: 'Available',
      date: 'May 15, 2025',
      img: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&q=80&w=150',
    },
    {
      id: 4,
      name: 'Sunny',
      breed: 'Cockatiel',
      species: 'Bird',
      age: '1 Year',
      location: 'Miami, USA',
      fee: '$90',
      status: 'Adopted',
      date: 'May 10, 2025',
      img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=150',
    },
    {
      id: 5,
      name: 'Max',
      breed: 'Border Collie',
      species: 'Dog',
      age: '3 Years',
      location: 'Denver, USA',
      fee: '$200',
      status: 'Available',
      date: 'May 08, 2025',
      img: 'https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?auto=format&fit=crop&q=80&w=150',
    },
  ];

  // Modal এর ভেতরের রিকোয়েস্ট ডেটা
  const adoptionRequests = [
    {
      id: 1,
      name: 'Emily Johnson',
      email: 'emily.johnson@email.com',
      date: 'May 28, 2025',
      message: 'Hi! I am very interested in Buddy.',
      status: 'Pending',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
    },
    {
      id: 2,
      name: 'Michael Brown',
      email: 'michael.brown@email.com',
      date: 'May 30, 2025',
      message: 'I have experience with dogs...',
      status: 'Approved',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
    },
    {
      id: 3,
      name: 'Sophia Williams',
      email: 'sophia.williams@email.com',
      date: 'Jun 02, 2025',
      message: 'We have a big backyard...',
      status: 'Rejected',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100',
    },
    {
      id: 4,
      name: 'Daniel Martinez',
      email: 'daniel.martinez@email.com',
      date: 'Jun 05, 2025',
      message: 'Buddy will be in good hands.',
      status: 'Rejected',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100',
    },
  ];

  const openRequestsModal = pet => {
    setSelectedPet(pet);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-[#E2E8F0] p-4 md:p-8 font-sans antialiased relative">
      {/* TOP HEADER & TOP BAR */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            My Pet Listings
          </h1>
          <p className="text-xs md:text-sm text-slate-400 mt-1">
            Manage all pets you added for adoption.
          </p>
        </div>

        {/* Actions & Profile Area */}
        <div className="flex items-center gap-4 self-end md:self-auto">
          <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition shadow-lg shadow-orange-500/10">
            <Plus size={16} className="stroke-[2.5]" /> Add New Pet
          </button>
        </div>
      </div>

      {/* 1. TOP STATS CARDS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-[#111827] border border-slate-800/80 rounded-2xl p-5 shadow-xl relative overflow-hidden group"
          >
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-2xl font-bold text-white">
                  {stat.count}
                </span>
                <p className="text-xs text-slate-400 font-medium">
                  {stat.label}
                </p>
              </div>
              <div
                className={`p-3 rounded-xl bg-[#1E293B]/60 border border-slate-800 ${stat.color}`}
              >
                <stat.icon size={20} />
              </div>
            </div>
            
          </div>
        ))}
      </div>

      {/* 3. LISTINGS TABLE */}
      <div className="max-w-7xl mx-auto bg-[#111827] border border-slate-900 rounded-3xl overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800/80 text-slate-400 text-xs font-semibold uppercase tracking-wider bg-[#111827]">
                <th className="py-4 px-5">Pet</th>
                <th className="py-4 px-4">Species</th>
                <th className="py-4 px-4">Breed</th>
                <th className="py-4 px-4">Age</th>
                <th className="py-4 px-4">Location</th>
                <th className="py-4 px-4">Adoption Fee</th>
                <th className="py-4 px-4">Status</th>
                <th className="py-4 px-4">Created At</th>
                <th className="py-4 px-5 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {petListings.map(pet => (
                <tr
                  key={pet.id}
                  className="hover:bg-[#1E293B]/10 transition duration-150 group"
                >
                  <td className="py-3.5 px-5 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <img
                        src={pet.img}
                        alt={pet.name}
                        className="w-10 h-10 rounded-xl object-cover border border-slate-800 bg-slate-900"
                      />
                      <div>
                        <p className="font-bold text-white text-sm tracking-wide">
                          {pet.name}
                        </p>
                        <p className="text-[10px] text-slate-500 mt-0.5">
                          {pet.breed}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-xs font-medium text-slate-300">
                    {pet.species}
                  </td>
                  <td className="py-3.5 px-4 text-xs font-medium text-slate-400">
                    {pet.breed}
                  </td>
                  <td className="py-3.5 px-4 text-xs font-medium text-slate-400">
                    {pet.age}
                  </td>
                  <td className="py-3.5 px-4 text-xs text-slate-300">
                    <div className="flex items-center gap-1">
                      <MapPin size={12} className="text-slate-500" />{' '}
                      {pet.location}
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-sm font-bold text-orange-500">
                    {pet.fee}
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold border tracking-wide
                      ${
                        pet.status === 'Available'
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                          : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                      }`}
                    >
                      <span
                        className={`w-1 h-1 rounded-full ${pet.status === 'Available' ? 'bg-emerald-500' : 'bg-rose-500'}`}
                      />
                      {pet.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-xs text-slate-500 font-medium">
                    {pet.date}
                  </td>

                  {/* ACTIONS BUTTON CONTROLS */}
                  <td className="py-3.5 px-5 whitespace-nowrap">
                    <div className="flex items-center justify-center gap-1.5">
                      <button
                        title="View Details"
                        className="p-2 rounded-lg bg-slate-800/40 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition"
                      >
                        <Eye size={14} />
                      </button>
                      <button
                        title="Edit Listing"
                        className="p-2 rounded-lg bg-slate-800/40 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition"
                      >
                        <Edit2 size={14} />
                      </button>
                      <button
                        title="Delete Listing"
                        className="p-2 rounded-lg bg-rose-950/10 border border-rose-950/20 text-rose-500 hover:bg-rose-950/30 transition"
                      >
                        <Trash2 size={14} />
                      </button>

                      {/* REQUEST MODAL TRIGGER BUTTON (৪ নম্বর বাটন) */}
                      <button
                        onClick={() => openRequestsModal(pet)}
                        title="View Adoption Requests"
                        className="p-2 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 hover:bg-orange-500 hover:text-white transition relative shadow-sm"
                      >
                        <Users size={14} />
                        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-orange-500 shadow-md shadow-orange-500/50" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. INTERACTIVE ADOPTION REQUESTS MODAL BACKDROP */}
      {isModalOpen && (
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
                    {selectedPet?.name} ({selectedPet?.breed})
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
                  {adoptionRequests.map(req => (
                    <tr
                      key={req.id}
                      className="hover:bg-[#1E293B]/10 transition duration-150"
                    >
                      {/* Requester Profile */}
                      <td className="py-3 px-5 whitespace-nowrap">
                        <div className="flex items-center gap-2.5">
                          <img
                            src={req.avatar}
                            alt={req.name}
                            className="w-8 h-8 rounded-full object-cover border border-slate-800"
                          />
                          <div>
                            <p className="text-xs font-bold text-white">
                              {req.name}
                            </p>
                            <p className="text-[10px] text-slate-500">
                              {req.email}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Pickup Date */}
                      <td className="py-3 px-4 text-xs text-slate-400 font-medium whitespace-nowrap">
                        {req.date}
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
                          ${req.status === 'Pending' && 'bg-amber-500/10 text-amber-400 border-amber-500/10'}
                          ${req.status === 'Approved' && 'bg-emerald-500/10 text-emerald-400 border-emerald-500/10'}
                          ${req.status === 'Rejected' && 'bg-rose-500/10 text-rose-400 border-rose-500/10'}`}
                        >
                          {req.status}
                        </span>
                      </td>

                      {/* Approve / Reject Actions buttons */}
                      <td className="py-3 px-5 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center gap-1.5">
                          <button
                            disabled={req.status !== 'Pending'}
                            className={`px-3 py-1 rounded-lg text-[10px] font-bold border transition
                              ${
                                req.status === 'Pending'
                                  ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-white'
                                  : 'bg-[#1E293B]/20 border-slate-800/80 text-slate-600 cursor-not-allowed'
                              }`}
                          >
                            Approve
                          </button>
                          <button
                            disabled={req.status !== 'Pending'}
                            className={`px-3 py-1 rounded-lg text-[10px] font-bold border transition
                              ${
                                req.status === 'Pending'
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
      )}
    </div>
  );
};;

export default MyListingsPage;