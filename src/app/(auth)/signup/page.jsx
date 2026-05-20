'use client'
import React, { useState } from 'react';
import {
  User,
  Mail,
  Image,
  Lock,
  Eye,
  EyeOff,
  CheckCircle2,
} from 'lucide-react';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    photoUrl: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // রেজিস্ট্রেশন সাবমিট লজিক এখানে হবে
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-[#0B0C10] flex items-center justify-center p-4 selection:bg-[#FF7A00]/30">
      <div className="w-full max-w-md bg-[#12141C] border border-[#1F2431] rounded-2xl p-8 shadow-2xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white tracking-tight leading-tight">
            Create Your
          </h1>
          <h2 className="text-3xl font-bold text-[#FF7A00] tracking-tight mt-1 mb-3">
            PawHaven Account
          </h2>
          <p className="text-gray-400 text-sm">
            Join a loving community helping pets find forever homes.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
              <User size={18} />
            </div>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full bg-[#1A1D26] border border-[#262B3C] rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] transition-all"
            />
          </div>

          {/* Email Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
              <Mail size={18} />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#1A1D26] border border-[#262B3C] rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] transition-all"
            />
          </div>

          {/* Photo URL Input (Optional) */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
              <Image size={18} />
            </div>
            <input
              type="url"
              name="photoUrl"
              placeholder="Photo URL (Optional)"
              value={formData.photoUrl}
              onChange={handleChange}
              className="w-full bg-[#1A1D26] border border-[#262B3C] rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] transition-all"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
              <Lock size={18} />
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-[#1A1D26] border border-[#262B3C] rounded-xl pl-11 pr-12 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-gray-300 transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Confirm Password Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
              <Lock size={18} />
            </div>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirm Password"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full bg-[#1A1D26] border border-[#262B3C] rounded-xl pl-11 pr-12 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] transition-all"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-gray-300 transition-colors"
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Password Strength Section */}
          <div className="pt-2">
            <div className="flex justify-between items-center text-xs mb-2">
              <span className="text-gray-400">Password strength:</span>
              <span className="text-green-500 font-semibold tracking-wide">
                Strong
              </span>
            </div>
            {/* Strength Bars */}
            <div className="grid grid-cols-4 gap-1.5">
              <div className="h-1 bg-green-500 rounded-full"></div>
              <div className="h-1 bg-green-500 rounded-full"></div>
              <div className="h-1 bg-green-500 rounded-full"></div>
              <div className="h-1 bg-green-500 rounded-full"></div>
            </div>
          </div>

          {/* Requirements Checklist */}
          <div className="space-y-1.5 pt-2 text-xs text-gray-400">
            <div className="flex items-center gap-2 text-green-500">
              <CheckCircle2 size={14} className="flex-shrink-0" />
              <span>At least 8 characters</span>
            </div>
            <div className="flex items-center gap-2 text-green-500">
              <CheckCircle2 size={14} className="flex-shrink-0" />
              <span>Includes a number</span>
            </div>
            <div className="flex items-center gap-2 text-green-500">
              <CheckCircle2 size={14} className="flex-shrink-0" />
              <span>Includes an uppercase letter</span>
            </div>
          </div>

          {/* Create Account Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#FF7A00] to-[#E05300] hover:opacity-95 text-white font-medium py-3.5 rounded-xl transition-all shadow-lg shadow-[#FF7A00]/10 flex items-center justify-center gap-2 pt-4"
          >
            <span>🐾</span>
            <span>Create Account</span>
          </button>
        </form>

        {/* Divider */}
        <div className="relative flex items-center justify-center my-6">
          <div className="w-full border-t border-[#262B3C]"></div>
          <span className="absolute bg-[#12141C] px-3 text-xs text-gray-500 whitespace-nowrap">
            or continue with
          </span>
        </div>

        {/* Google Sign Up Button */}
        <button
          type="button"
          className="w-full bg-[#1A1D26] border border-[#262B3C] hover:bg-[#222635] text-white font-medium py-3.5 rounded-xl transition-all flex items-center justify-center gap-3"
        >
          <FcGoogle size={20}/>
          <span className="text-sm">Sign up with Google</span>
        </button>

        {/* Already have an account */}
        <p className="text-center text-sm text-gray-400 mt-6">
          Already have an account?{' '}
          <Link
            href={'/login'}
            className="text-[#FF7A00] hover:underline font-medium transition-colors"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
