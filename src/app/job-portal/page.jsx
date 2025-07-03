'use client';

import React, { useState, useRef } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { useInView } from '@/hooks/useInView';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function JobPortalPage() {
  const [formStatus, setFormStatus] = useState('');
  const [benefitsRef, isBenefitsVisible] = useInView();
  const [positionsRef, isPositionsVisible] = useInView();
  const formRef = useRef(null);
  const router = useRouter();

  // Navigation handlers
  const goToJobs = () => router.push('/job-portal/job-listing');
  const goToFAQ = () => router.push('/job-portal/faq');
  const goToApply = () => router.push('/job-portal/job-application');
  const goToHome = () => router.push('/job-portal');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    await new Promise(resolve => setTimeout(resolve, 1000));
    setFormStatus('sent');
  };

  const benefits = [
    {
      icon: "🚀",
      title: "Innovation First",
      description: "Work on cutting-edge technologies and shape the future of digital solutions"
    },
    {
      icon: "💡",
      title: "Growth Opportunities",
      description: "Continuous learning with access to courses, workshops, and mentorship programs"
    },
    {
      icon: "🌟",
      title: "Work-Life Balance",
      description: "Flexible working hours and remote work options to maintain perfect harmony"
    },
    {
      icon: "🏆",
      title: "Recognition & Rewards",
      description: "Performance-based bonuses and regular recognition for outstanding work"
    },
    {
      icon: "🎯",
      title: "Career Development",
      description: "Clear career progression paths and leadership opportunities"
    },
    {
      icon: "🤝",
      title: "Collaborative Culture",
      description: "Work with passionate professionals in a supportive environment"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-[85vh] lg:min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-float-slow"></div>
        </div>
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl lg:text-7xl font-bold mb-6"
            >
              Welcome to the <span className="block mt-2 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">Job Portal</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto"
            >
              Explore open positions, apply for jobs, and learn more about working with us.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4 justify-center mb-8"
            >
              <Button onClick={goToJobs} className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-bold hover:scale-105 transition-all duration-300">
                View Jobs
              </Button>
              <Button onClick={goToApply} className="px-8 py-4 bg-white/5 border border-gray-700 text-white rounded-lg hover:bg-white/10 transition-all duration-300">
                Apply Now
              </Button>
              <Button onClick={goToFAQ} className="px-8 py-4 bg-white/5 border border-gray-700 text-white rounded-lg hover:bg-white/10 transition-all duration-300">
                FAQ
              </Button>
            </motion.div>
            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-12 pt-8 border-t border-gray-800"
            >
              <div className="flex flex-wrap justify-center items-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="text-3xl">📬</div>
                  <div className="text-sm text-gray-400">
                    <div className="font-bold text-white">24hr Response</div>
                    <div>Guaranteed reply</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-3xl">💼</div>
                  <div className="text-sm text-gray-400">
                    <div className="font-bold text-white">Trusted by Teams</div>
                    <div>across 15+ industries</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      

      {/* Centered Contact Form */}
      <section ref={formRef} className="bg-gradient-to-b from-black to-gray-900 py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl animate-fade-up [animation-delay:400ms] shadow-2xl border border-gray-800/50">
            <h3 className="text-2xl font-bold text-white mb-6">Apply for Position</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-400 mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-2">Position Type</label>
                <select 
                  required
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                >
                  <option value="">Select position type</option>
                  <option value="fulltime">Full-time</option>
                  <option value="intern">Internship</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-400 mb-2">Position Applying For</label>
                <select 
                  required
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                >
                  <option value="">Select a position</option>
                  <optgroup label="Full-time Positions">
                    <option value="fullstack">Senior Full Stack Developer</option>
                    <option value="frontend">Frontend Developer</option>
                    <option value="backend">Backend Developer</option>
                    <option value="devops">DevOps & Cloud Engineer</option>
                    <option value="ml">Generative AI Engineer</option>
                    <option value="llm">ML/LLM Engineer</option>
                    <option value="uiux">UI/UX Designer</option>
                  </optgroup>
                  <optgroup label="Internship Positions">
                    <option value="intern-dev">Software Development Intern</option>
                    <option value="intern-ml">ML/AI Intern</option>
                    <option value="intern-ui">UI/UX Design Intern</option>
                    <option value="intern-cloud">Cloud Engineering Intern</option>
                  </optgroup>
                </select>
              </div>
              <div>
                <label className="block text-gray-400 mb-2">Experience Level</label>
                <select 
                  required
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                >
                  <option value="">Select experience level</option>
                  <option value="student">Student</option>
                  <option value="fresher">Fresher</option>
                  <option value="0-2">0-2 years</option>
                  <option value="2-5">2-5 years</option>
                  <option value="5-8">5-10 years</option>
                  <option value="8+">10+ years</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-400 mb-2">Education</label>
                <select 
                  required
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                >
                  <option value="">Select education level</option>
                  <option value="pursuing">Currently Pursuing Degree</option>
                  <option value="bachelors">Bachelor's Degree</option>
                  <option value="masters">Master's Degree</option>
                  <option value="phd">PhD</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-400 mb-2">Resume/CV</label>
                <input
                  type="file"
                  required
                  accept=".pdf,.doc,.docx"
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-2">Cover Letter</label>
                <textarea
                  required
                  rows="4"
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Tell us about yourself and why you'd be a great fit"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg px-6 py-3 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 animate-glow disabled:opacity-50"
              >
                {formStatus === 'sending' ? 'Submitting...' : 'Submit Application'}
              </button>
              {formStatus === 'sent' && (
                <p className="text-green-500 text-center animate-fade-up">Application submitted successfully!</p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="relative bg-black py-24 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-5xl font-bold mb-4 opacity-0 ${
              isBenefitsVisible ? 'animate-fade-up [animation-delay:200ms]' : ''
            }`}>
              <span className="text-white">Why Join </span>
              <span className="relative">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Our Team?
                </span>
                <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-shimmer"></span>
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className={`group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl 
                  rounded-xl p-8 opacity-0 hover:scale-[1.02] transition-all duration-500 
                  hover:shadow-2xl hover:shadow-purple-500/10 border border-gray-800/50 
                  ${isBenefitsVisible ? `animate-fade-up [animation-delay:${200 * (index + 1)}ms]` : ''}`}
              >
                {/* Hover Effects */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
                </div>
                {/* Content */}
                <div className="relative">
                  <div className="text-4xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse"></div>
                      <span className="relative z-10">{benefit.icon}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 relative">
                    {benefit.description}
                    <span className="absolute bottom-0 left-0 w-full h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-500 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></span>
                  </p>
                </div>
                {/* Border Gradient on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
                  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                  <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-purple-500 to-transparent"></div>
                  <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="bg-gradient-to-b from-gray-900 via-black to-black py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Job Portal Quick Links</h2>
            <p className="text-gray-400">Navigate to all job portal features:</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Button onClick={goToJobs} className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-bold hover:scale-105 transition-all duration-300">
              View All Jobs
            </Button>
            <Button onClick={goToApply} className="px-6 py-3 bg-white/5 border border-gray-700 text-white rounded-lg hover:bg-white/10 transition-all duration-300">
              Apply Now
            </Button>
            <Button onClick={goToFAQ} className="px-6 py-3 bg-white/5 border border-gray-700 text-white rounded-lg hover:bg-white/10 transition-all duration-300">
              FAQ
            </Button>
            <Button onClick={goToHome} className="px-6 py-3 bg-white/5 border border-gray-700 text-white rounded-lg hover:bg-white/10 transition-all duration-300">
              Job Portal Home
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}