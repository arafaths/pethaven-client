'use client';
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
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';

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

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const password = user.password;
    const confirmPassword = user.confirmPassword;

    const isValidPassword =
      password.length >= 6 && /[A-Z]/.test(password) && /[a-z]/.test(password);

    const isMatch = password === confirmPassword;

    if (!isValidPassword) {
      return;
    }
    if (!isMatch) {
      return;
    }

    const { data, error } = await authClient.signUp.email({
      name: user.fullName, // required
      email: user.email, // required
      password: user.password, // required
      image: user.photoUrl,
    });

     if (data) {
       alert('SignUp successful');
       redirect('/');
     }
     if (error) {
       alert(error.message);
     }
  };

  const handleGoogle = async () => {
    const data = await authClient.signIn.social({
      provider: 'google',
    });
  }

  const password = formData.password;
  const confirmPassword = formData.confirmPassword;

  const rules = {
    length: password.length >= 6,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
  };

  const isConfirmMatch =
    confirmPassword.length > 0 && password === confirmPassword;

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
          {confirmPassword.length > 0 && !isConfirmMatch && (
            <p className="text-red-500 text-xs mt-1">Passwords do not match</p>
          )}

          {/* Requirements Checklist */}
          <div className="space-y-1.5 pt-2 text-xs text-gray-400">
            <div
              className={`flex items-center gap-2 ${rules.length ? 'text-green-500' : 'text-gray-400'}`}
            >
              <CheckCircle2 size={14} className="flex-shrink-0" />
              <span>At least 8 characters</span>
            </div>

            <div
              className={`flex items-center gap-2 ${rules.uppercase ? 'text-green-500' : 'text-gray-400'}`}
            >
              <CheckCircle2 size={14} className="flex-shrink-0" />
              <span>One uppercase letter</span>
            </div>

            <div
              className={`flex items-center gap-2 ${rules.lowercase ? 'text-green-500' : 'text-gray-400'}`}
            >
              <CheckCircle2 size={14} className="flex-shrink-0" />
              <span>One lowercase letter</span>
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
          onClick={handleGoogle}
          type="button"
          className="w-full bg-[#1A1D26] border border-[#262B3C] hover:bg-[#222635] text-white font-medium py-3.5 rounded-xl transition-all flex items-center justify-center gap-3"
        >
          <FcGoogle size={20} />
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
