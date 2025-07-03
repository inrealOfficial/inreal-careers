'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const tags = [
  'Engineering',
  'Design',
  'Marketing',
  'Sales',
  'Product',
  'Support',
  'Data Science',
  'HR & Operations',
];


const HeroSection = () => {

    const goToJobs = () => router.push('/job-portal/job-listing');
    const router = useRouter();
  return (

    <section
      className="relative min-h-screen bg-black text-white flex items-center px-6 py-20 overflow-hidden"
      style={{
        backgroundImage: `url('/ch.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60" /> {/* Overlay for readability */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Column */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
          >
            Build your future <br /> with Inreal.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-300 mb-6 max-w-xl"
          >
            Discover open roles, grow your career, and make your impact at one of the fastest-growing tech companies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap gap-2 mb-6"
          >
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full border border-gray-500 text-sm hover:bg-white/10 transition"
              >
                {tag}
              </span>
            ))}
          </motion.div>

         <motion.button
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.6, duration: 0.6 }}
  onClick={goToJobs}
  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-bold hover:scale-105 transition-all duration-300"
>
    Browse Open Roles
</motion.button>


          <p className="text-xs text-gray-400 mt-2">
            * We're hiring across departments. Remote options available.
          </p>
        </div>

        {/* Right Column (optional image or empty space) */}
        <div className="hidden lg:block" />
      </div>
    </section>
  );
};

export default HeroSection;
