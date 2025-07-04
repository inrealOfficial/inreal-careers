'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

const HeroSection = () => {
  const router = useRouter();

  const handleBrowseRolesClick = () => {
    router.push('/job-portal/job-listing');
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-float-slow"></div>
        </div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-8"
            >
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
                Join Our Team
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl lg:text-7xl font-bold mb-6"
            >
              Build your future 
              <span className="block mt-2 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                with Inreal.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-gray-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Discover open roles, grow your career, and make your impact at one of the fastest-growing tech companies.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button 
                onClick={handleBrowseRolesClick}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:scale-105 transition-all duration-300"
              >
                Browse Open Roles
              </Button>
            </motion.div>

            {/* Department Tags */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-10 flex flex-wrap gap-3 justify-center lg:justify-start text-sm text-white/70"
            >
              {[
                'Engineering', 'Design', 'Marketing', 'Sales',
                'Product', 'Support', 'Data Science', 'HR & Operations'
              ].map((dept) => (
                <span
                  key={dept}
                  className="px-3 py-1 border border-white/10 rounded-full bg-white/5"
                >
                  {dept}
                </span>
              ))}
            </motion.div>

            {/* Hiring Note */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-6 text-sm text-gray-500"
            >
              * We're hiring across departments. Remote options available.
            </motion.div>
          </motion.div>

          {/* Right Content - Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="flex-1 relative"
          >
            <div className="relative w-full aspect-square max-w-xl mx-auto">
              <iframe
                src="https://lottie.host/embed/438a2f9e-bad0-4607-b878-49cdb75b02a0/cReHgQgcyq.lottie"
                style={{ marginTop: '8rem', width: '100%', height: '400px', border: 'none' }}
                title="Careers at Inreal"
                allowFullScreen
              />

              <div className="absolute top-1/4 -left-8 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-float"></div>
              <div className="absolute bottom-1/4 -right-8 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-float-delayed"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
