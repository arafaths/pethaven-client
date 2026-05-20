'use client';
import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { authClient } from '@/lib/auth-client';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    // const formData = new FormData(e.currentTarget);
    // const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email, // required
      password, // required
    });
console.log('data:', data, 'error:', error)
    if (data) {
      alert('Login successful');
      redirect('/');
    }
    if (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0C10] flex items-center justify-center p-4 selection:bg-[#FF7A00]/30">
      <div className="w-full max-w-md bg-[#12141C] border border-[#1F2431] rounded-2xl p-8 shadow-2xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white tracking-tight leading-tight">
            Welcome Back to
          </h1>
          <h2 className="text-3xl font-bold text-[#FF7A00] tracking-tight mt-1 mb-3">
            PetHaven
          </h2>
          <p className="text-gray-400 text-sm">
            Continue your journey to give pets a loving home.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
              <Mail size={18} />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
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
              placeholder="Password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full bg-[#1A1D26] border border-[#262B3C] rounded-xl pl-11 pr-12 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] transition-all"
            />
            {/* Toggle Password Visibility */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-gray-300 transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Login Button with Gradient & Icon */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#FF7A00] to-[#E05300] hover:opacity-95 text-white font-medium py-3.5 rounded-xl transition-all shadow-lg shadow-[#FF7A00]/10 flex items-center justify-center gap-2 mt-2"
          >
            <span>🐾</span>
            <span>Login to PawHaven</span>
          </button>
        </form>

        {/* Divider */}
        <div className="relative flex items-center justify-center my-6">
          <div className="w-full border-t border-[#262B3C]"></div>
          <span className="absolute bg-[#12141C] px-3 text-xs text-gray-500 whitespace-nowrap">
            or continue with
          </span>
        </div>

        {/* Google Login Button */}
        <button
          type="button"
          className="w-full bg-[#1A1D26] border border-[#262B3C] hover:bg-[#222635] text-white font-medium py-3.5 rounded-xl transition-all flex items-center justify-center gap-3"
        >
          {/* Custom SVG Google Icon */}
          <FcGoogle size={20} />
          <span className="text-sm">Continue with Google</span>
        </button>

        {/* Footer / Create Account Link */}
        <p className="text-center text-sm text-gray-400 mt-8">
          Don’t have an account?{' '}
          <Link
            href={'/signup'}
            className="text-[#FF7A00] hover:underline font-medium transition-colors"
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
