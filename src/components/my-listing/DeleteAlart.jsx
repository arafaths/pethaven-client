'use client';

import { X } from 'lucide-react';

const DeleteModal = ({ isOpen, setIsOpen, handleDelete, selectedPet }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      {/* Modal Box */}
      <div className="w-full max-w-md bg-[#111827] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-slate-800 flex justify-between items-center">
          <h2 className="text-white font-bold text-base">Delete Pet</h2>

          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg bg-[#0B0F19] border border-slate-800 text-slate-400 hover:text-white"
          >
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="p-5">
          <p className="text-slate-300 text-sm">
            Are you sure you want to delete{' '}
            <span className="text-orange-500 font-semibold">
              {selectedPet?.petName}
            </span>
            ?
          </p>

          <p className="text-xs text-slate-500 mt-2">
            This action cannot be undone.
          </p>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 p-4 border-t border-slate-800">
          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 rounded-lg bg-[#0B0F19] border border-slate-800 text-slate-400 hover:text-white"
          >
            Cancel
          </button>

          <button
            onClick={() => handleDelete(selectedPet?._id)}
            className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
