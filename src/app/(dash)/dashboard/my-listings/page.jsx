'use client'
import React, { useEffect, useState } from 'react';
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
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import EditModal from '@/components/my-listing/EditModal';
import toast from 'react-hot-toast';

const MyListingsPage = () => {
  // Modal Open/Close এবং Selected Pet Track করার স্টেট
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectePet, setSelectePet] = useState(null);
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  const { data: session } = authClient.useSession();
  const user = session?.user;

   useEffect(() => {
     const fetchPets = async () => {
       try {
         if (!user?.email) return;

         setLoading(true);

         const res = await fetch(
           `http://localhost:5000/my-pets?email=${user.email}`,
         );

         const data = await res.json();

         setPets(data);
       } catch (error) {
         console.log(error);
       } finally {
         setLoading(false);
       }
     };

     fetchPets();
   }, [user]);
  
  const total = pets.length;
  const adopted = pets.filter(p => p.isAdopted).length;
  const available = pets.filter(p => !p.isAdopted).length;
  
  // Top Statistics Data
  const stats = [
    {
      label: 'Total Pets',
      count: total,
      color: 'text-orange-500',
      icon: PawPrint,
    },
    {
      label: 'Available Pets',
      count: available,
      color: 'text-emerald-500',
      icon: PawPrint,
    },
    {
      label: 'Adopted Pets',
      count: adopted,
      color: 'text-rose-500',
      icon: Heart,
    },

  ];

  // Modal 
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    if (!selectedPet?._id) return;

    fetch(`http://localhost:5000/pet-requests/${selectedPet._id}`)
      .then(res => res.json())
      .then(data => setRequests(data));
  }, [selectedPet]);
  

  const handleEdit = pet => {
    setSelectePet(pet);
    setOpen(true);
  };

  const openRequestsModal = pet => {
    setSelectedPet(pet);
    setIsModalOpen(true);
  };
  

  const handleDelete = async id => {

    const res = await fetch(`http://localhost:5000/all-pets/${id}`, {
      method: 'DELETE',
    });

    const data = await res.json();

    if (data.deletedCount > 0) {
      setPets(prev => prev.filter(p => p._id !== id));

      toast.success('Login successful', {
        style: {
          border: '1px solid #22C55E',
        },

        iconTheme: {
          primary: '#22C55E',
          secondary: '#fff',
        },
      });
    } else {
      toast.error('Failed to delete pet');
    }
  };

  // Aprov
  const handleApprove = async requestId => {
    const res = await fetch(
      `http://localhost:5000/adoption-request/${requestId}`,
      {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          status: 'approved',
          petId: selectedPet._id,
        }),
      },
    );

    const data = await res.json();

    if (data.modifiedCount > 0) {
      toast.success('Request approved');

      // modal refresh
      const reqRes = await fetch(
        `http://localhost:5000/pet-requests/${selectedPet._id}`,
      );

      const reqData = await reqRes.json();

      setRequests(reqData);
    }
  };

  // reject
  const handleReject = async requestId => {
    const res = await fetch(
      `http://localhost:5000/adoption-request/${requestId}`,
      {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          status: 'rejected',
          petId: selectedPet._id,
        }),
      },
    );

    const data = await res.json();

    if (data.modifiedCount > 0) {
      toast.success('Request rejected');

      const reqRes = await fetch(
        `http://localhost:5000/pet-requests/${selectedPet._id}`,
      );

      const reqData = await reqRes.json();

      setRequests(reqData);
    }
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
          <Link
            href={'/dashboard/add-pet'}
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition shadow-lg shadow-orange-500/10"
          >
            <Plus size={16} className="stroke-[2.5]" /> Add New Pet
          </Link>
        </div>
      </div>

      {/* 1. TOP STATS CARDS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 mb-8">
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
              {pets.map(pet => (
                <tr
                  key={pet._id}
                  className="hover:bg-[#1E293B]/10 transition duration-150 group"
                >
                  <td className="py-3.5 px-5 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <Image
                        src={pet.imageUrl}
                        alt={pet.petName}
                        width={50}
                        height={50}
                        className="w-10 h-10 rounded-xl object-cover border border-slate-800 bg-slate-900"
                      />
                      <div>
                        <p className="font-bold text-white text-sm tracking-wide">
                          {pet.petName}
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
                    {pet.adoptionFee}
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold border tracking-wide
                      ${
                        pet.status === 'available'
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
                    {new Date(pet.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </td>

                  {/* ACTIONS BUTTON CONTROLS */}
                  <td className="py-3.5 px-5 whitespace-nowrap">
                    <div className="flex items-center justify-center gap-1.5">
                      <Link
                        href={`/all-pets/${pet._id}`}
                        title="View Details"
                        className="p-2 rounded-lg bg-slate-800/40 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition"
                      >
                        <Eye size={14} />
                      </Link>
                      <button
                        onClick={() => handleEdit(pet)}
                        title="Edit Listing"
                        className="p-2 rounded-lg bg-slate-800/40 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition"
                      >
                        <Edit2 size={14} />
                      </button>
                      <button
                        onClick={() => handleDelete(pet._id)}
                        title="Delete Listing"
                        className="p-2 rounded-lg bg-rose-950/10 border border-rose-950/20 text-rose-500 hover:bg-rose-950/30 transition"
                      >
                        <Trash2 size={14} />
                      </button>

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

      {/* Edit modal */}
      {open && (
        <EditModal
          selectePet={selectePet}
          setOpen={setOpen}
          setPets={setPets}
        />
      )}

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
                    {selectePet?.name} ({selectedPet?.breed})
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
      )}
    </div>
  );
};;

export default MyListingsPage;