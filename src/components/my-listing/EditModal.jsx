import { X } from 'lucide-react';
import React from 'react';
import toast from 'react-hot-toast';

const EditModal = ({ selectePet, setOpen, setPets }) => {
  const handleUpdate = async e => {
    e.preventDefault();

    const form = e.target;

    const updatedData = {
      petName: form.petName.value,
      breed: form.breed.value,
      age: form.age.value,
      species: form.species.value,
      location: form.location.value,
      adoptionFee: form.adoptionFee.value,
      imageUrl: form.imageUrl.value,
    };

    const res = await fetch(
      `http://localhost:5000/all-pets/${selectePet._id}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      },
    );

    const data = await res.json();

    if (data.modifiedCount > 0) {
      setPets(prev =>
        prev.map(p =>
          p._id === selectePet._id ? { ...p, ...updatedData } : p,
        ),
      );

      toast.success('Update successful', {
        style: {
          border: '1px solid #22C55E',
        },

        iconTheme: {
          primary: '#22C55E',
          secondary: '#fff',
        },
      });

      setOpen(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      {/* Modal Box */}
      <div className="w-full max-w-2xl bg-[#111827] border border-slate-800 rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-white">Edit Pet</h2>
            <p className="text-xs text-slate-400 mt-1">
              Update pet information
            </p>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-xl bg-[#0B0F19] border border-slate-800 text-slate-400 hover:text-white"
          >
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleUpdate} className="p-5 grid grid-cols-2 gap-1">
          <div>
            <label className="text-xs text-slate-400">Pet Name</label>
            <input
              name="petName"
              defaultValue={selectePet?.petName}
              className="w-full mt-1 px-3 py-2 rounded-xl bg-[#0B0F19] border border-slate-800 text-white outline-none focus:border-orange-500"
            />
          </div>

          <div>
            <label className="text-xs text-slate-400">Breed</label>
            <input
              name="breed"
              defaultValue={selectePet?.breed}
              className="w-full mt-1 px-3 py-2 rounded-xl bg-[#0B0F19] border border-slate-800 text-white outline-none focus:border-orange-500"
            />
          </div>

          <div>
            <label className="text-xs text-slate-400">Species</label>
            <input
              name="species"
              defaultValue={selectePet?.species}
              className="w-full mt-1 px-3 py-2 rounded-xl bg-[#0B0F19] border border-slate-800 text-white outline-none focus:border-orange-500"
            />
          </div>

          <div>
            <label className="text-xs text-slate-400">Age</label>
            <input
              name="age"
              type="number"
              defaultValue={selectePet?.age}
              className="w-full mt-1 px-3 py-2 rounded-xl bg-[#0B0F19] border border-slate-800 text-white outline-none focus:border-orange-500"
            />
          </div>

          <div>
            <label className="text-xs text-slate-400">Location</label>
            <input
              name="location"
              defaultValue={selectePet?.location}
              className="w-full mt-1 px-3 py-2 rounded-xl bg-[#0B0F19] border border-slate-800 text-white outline-none focus:border-orange-500"
            />
          </div>

          <div>
            <label className="text-xs text-slate-400">Adoption Fee</label>
            <input
              name="adoptionFee"
              type="number"
              defaultValue={selectePet?.adoptionFee}
              className="w-full mt-1 px-3 py-2 rounded-xl bg-[#0B0F19] border border-slate-800 text-white outline-none focus:border-orange-500"
            />
          </div>

          <div className="col-span-2">
            <label className="text-xs text-slate-400">Image URL</label>
            <input
              name="imageUrl"
              defaultValue={selectePet?.imageUrl}
              className="w-full mt-1 px-3 py-2 rounded-xl bg-[#0B0F19] border border-slate-800 text-white outline-none focus:border-orange-500"
            />
          </div>

          {/* Buttons */}
          <div className="col-span-2 flex justify-end gap-3 pt-3 border-t border-slate-800">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="px-4 py-2 rounded-xl bg-[#0B0F19] border border-slate-800 text-slate-400 hover:text-white"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600"
            >
              Update Pet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;