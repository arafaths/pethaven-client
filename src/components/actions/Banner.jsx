'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative bg-[#F8FAFC] text-[#0F172A] dark:bg-[#121212] dark:text-white min-h-[80vh] flex items-center overflow-hidden px-6 lg:px-16 py-12 transition-colors duration-300">
      
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[120px] pointer-events-none hidden lg:block"
      />

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-orange-500/10 dark:bg-orange-500/5 blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-amber-500/10 dark:bg-amber-500/5 blur-3xl"
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 space-y-6 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/80 dark:bg-[#1E1E1E]/60 border border-slate-200 dark:border-zinc-800 px-4 py-1.5 rounded-full text-xs font-semibold text-slate-600 dark:text-zinc-300 backdrop-blur-md shadow-sm"
          >
            <span>Their forever starts with you</span>
            ❤️
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-[#0F172A] dark:text-white"
          >
            A Better Life <br />
            Begins with <br />
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Adoption
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="text-slate-600 dark:text-zinc-400 text-sm sm:text-base max-w-md mx-auto lg:mx-0 leading-relaxed font-medium"
          >
            PawHaven connects loving hearts with pets who deserve a second
            chance. Find your new best friend today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/all-pets"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3.5 rounded-full text-sm shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20 transition-all duration-300"
              >
                <span>Adopt Now</span>
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="5" r="2.5" /><circle cx="5" cy="9" r="2.5" /><circle cx="19" cy="9" r="2.5" />
                  <path d="M12 10c-3.31 0-6 2.69-6 6 0 1.66 1.34 3 3 3s3-1.34 3-3V11h0z" />
                </svg>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/all-pets"
                className="inline-flex items-center gap-2 border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 hover:bg-slate-50 dark:hover:bg-zinc-900 text-slate-700 dark:text-zinc-200 font-bold px-7 py-3.5 rounded-full text-sm transition-all duration-300 shadow-sm"
              >
                <span>Explore Pets</span>
                <motion.svg
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-4 h-4 text-orange-500"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </motion.svg>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="flex items-center justify-center lg:justify-start gap-3 pt-4"
          >
            <div className="flex -space-x-2.5">
              {[
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100',
              ].map((img, i) => (
                <motion.img
                  key={i}
                  whileHover={{ y: -3 }}
                  className="w-8 h-8 rounded-full border-2 border-[#F8FAFC] dark:border-[#121212] object-cover shadow-sm transition-colors duration-300"
                  src={img}
                  alt="User"
                />
              ))}
            </div>

            <p className="text-xs font-semibold text-slate-500 dark:text-zinc-400">
              Join <span className="text-slate-800 dark:text-white font-bold">12K+</span> happy
              adopters
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="lg:col-span-7 relative flex justify-center items-center h-[350px] sm:h-[450px] lg:h-[550px]"
        >
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] rounded-full bg-gradient-to-b from-orange-500 to-amber-500 opacity-90 shadow-xl"
          />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 flex items-center justify-center z-10 select-none pointer-events-none scale-105"
          >
            <Image
              src="/bg-image.png"
              alt="Cat and Dog"
              height={520}
              width={520}
              priority
            />
          </motion.div>

          {/* Stats Card */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.02 }}
            className="hidden sm:block absolute right-2 sm:right-6 top-1/4 z-20 bg-white/80 dark:bg-black/40 backdrop-blur-md border border-slate-200 dark:border-white/10 p-4 rounded-2xl w-44 shadow-2xl transition-colors duration-300"
          >
            <span className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-zinc-400 block font-bold">
              Saved Lives
            </span>

            <span className="text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-white block mt-0.5">
              8,500+
            </span>

            <span className="text-[10px] text-slate-400 dark:text-zinc-500 block font-medium">
              And counting...
            </span>

            <div className="mt-3 h-6 w-full flex items-end">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 20">
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  d="M0,15 Q15,5 30,12 T60,3 T90,10 L100,2"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}