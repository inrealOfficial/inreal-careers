'use client';

import React, { useState, useRef, useCallback } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { SignedIn, SignedOut, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { db } from '@/app/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';


export default function JobPortalPage() {
  const [formStatus, setFormStatus] = useState('');
  const router = useRouter();
  const { user } = useUser();
  const fileInputRef = useRef();

   // Navigation handlers
  const goToJobs = () => router.push('/job-portal/job-listing');
  const goToFAQ = () => router.push('/job-portal/faq');
  const goToApply = () => router.push('/job-portal/job-application');
  const goToHome = () => router.push('/job-portal');

  // Update the form state
const [formData, setFormData] = useState({
  fullName: '',
  email: '',
  phone: '',
  positionType: 'fulltime',
  role: '',
  experience: '',
  resumeLink: '', // Changed from resume to resumeLink
  additionalInfo: '',
});

  const [resumeName, setResumeName] = useState('');

  const goToSignIn = () => router.push('/job-portal/sign-in');

  // Update the file validation function
const validateFile = (file) => {
  const validTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ];
  const maxSize = 10 * 1024 * 1024; // 10MB

  if (!file) {
    throw new Error('Please select a file');
  }

  if (!validTypes.includes(file.type)) {
    throw new Error('Please upload a PDF or DOC file');
  }

  if (file.size > maxSize) {
    throw new Error('File size should be less than 10MB');
  }

  return true;
};

  // Update the validation function
const validateResumeLink = (link) => {
  if (!link) {
    throw new Error('Please provide a resume link');
  }

  // Improved Google Drive link validation
  const drivePatterns = [
    /^https:\/\/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/,
    /^https:\/\/drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/,
    /^https:\/\/docs\.google\.com\/document\/d\/([a-zA-Z0-9_-]+)/
  ];

  const isValidLink = drivePatterns.some(pattern => pattern.test(link));
  if (!isValidLink) {
    throw new Error('Please provide a valid Google Drive link');
  }

  // Check if the link is public/shareable
  if (!link.includes('?usp=sharing')) {
    console.warn('Warning: Link might not be publicly accessible');
  }

  return true;
};

  // Update the handleChange function for better file handling
const handleChange = (e) => {
  const { name, value } = e.target;
  
  if (name === 'resumeLink') {
    try {
      if (validateResumeLink(value)) {
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      }
    } catch (error) {
      console.error('Link validation error:', error);
      alert(error.message);
    }
  } else {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }
};

  // Update the handleSubmit function
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (!formData.resumeLink) {
      alert('Please provide your resume link');
      return;
    }

    setFormStatus('submitting');

    try {
      // Create candidate data
      const candidateData = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        positionType: formData.positionType,
        role: formData.role,
        experience: formData.experience,
        resumeLink: formData.resumeLink,
        additionalInfo: formData.additionalInfo,
        // Add metadata
        userId: user?.id || null,
        userEmail: user?.primaryEmailAddress?.emailAddress || null,
        status: 'new',
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      };

      // Add to candidates collection
      const docRef = await addDoc(collection(db, 'candidates'), candidateData);
      console.log('Application submitted with ID:', docRef.id);

      // Just update form status without alert
      setFormStatus('success');
      
      // Reset form after delay
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          positionType: 'fulltime',
          role: '',
          experience: '',
          resumeLink: '',
          additionalInfo: '',
        });
        setFormStatus('');
      }, 2000);

    } catch (error) {
      console.error('Submission error:', error);
      setFormStatus('error');
      alert('Failed to submit application. Please try again.');
    }
  }, [formData, user]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950">
      <Header />

      <SignedIn>
        <main className="pt-20 pb-16">
          {/* Hero Section */}
          <section className="relative py-16 overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-6xl font-bold text-white mb-6"
                >
                  Join Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Tech Team</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl text-gray-300 max-w-3xl mx-auto"
                >
                  Build the future of technology with us. We're looking for exceptional talent to join our innovative team.
                </motion.p>
              </div>
            </div>
          </section>

          {/* Application Form Section */}
          <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-800/50 shadow-xl"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Personal Details */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-white">Personal Details</h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                      <input
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        type="text"
                        required
                        className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        required
                        className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        type="tel"
                        required
                        className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="Your contact number"
                      />
                    </div>
                  </div>

                  {/* Professional Details */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-white">Professional Details</h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Position Type</label>
                      <select
                        name="positionType"
                        value={formData.positionType}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                      >
                        <option value="fulltime">Full-time</option>
                        <option value="intern">Internship</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Role</label>
                      <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                      >
                        <option value="">Select a position</option>
                        <optgroup label="Engineering">
                          <option value="fullstack">Senior Full Stack Developer</option>
                          <option value="frontend">Frontend Developer</option>
                          <option value="backend">Backend Developer</option>
                          <option value="devops">DevOps Engineer</option>
                        </optgroup>
                        <optgroup label="AI/ML">
                          <option value="ml">AI Engineer</option>
                          <option value="llm">ML/LLM Engineer</option>
                        </optgroup>
                        <optgroup label="Design">
                          <option value="uiux">UI/UX Designer</option>
                        </optgroup>
                        <optgroup label="Internships">
                          <option value="intern-dev">Development Intern</option>
                          <option value="intern-ml">AI/ML Intern</option>
                          <option value="intern-design">Design Intern</option>
                        </optgroup>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Experience Level</label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                      >
                        <option value="">Select experience level</option>
                        <option value="intern">Internship</option>
                        <option value="entry">Entry Level (0-2 years)</option>
                        <option value="mid">Mid Level (2-5 years)</option>
                        <option value="senior">Senior Level (5+ years)</option>
                        <option value="lead">Lead/Architect (8+ years)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Resume Upload */}
                <div className="space-y-6">
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Resume/CV Link (Google Drive)
                    </label>
                    <div className="relative">
                      <input
                        name="resumeLink"
                        value={formData.resumeLink}
                        onChange={handleChange}
                        type="url"
                        required
                        placeholder="https://drive.google.com/file/d/..."
                        className={`w-full bg-gray-800/50 border ${
                          formData.resumeLink 
                            ? validateResumeLink(formData.resumeLink) 
                              ? 'border-green-500' 
                              : 'border-red-500' 
                            : 'border-gray-700'
                        } rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors`}
                      />
                      {formData.resumeLink && (
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          {validateResumeLink(formData.resumeLink) ? (
                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          )}
                        </div>
                      )}
                    </div>
                    <p className="mt-2 text-sm text-gray-400">
                      Please share your resume via Google Drive and paste the shareable link here. Make sure the link is accessible.
                    </p>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Additional Information</label>
                    <textarea
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      rows={4}
                      required
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="Tell us about your relevant experience and why you'd be a great fit..."
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting' || !formData.resumeLink}
                    className={`
                      px-8 py-3 rounded-lg font-semibold text-white
                      bg-gradient-to-r from-purple-600 to-blue-600
                      hover:from-purple-700 hover:to-blue-700
                      focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900
                      transition-all duration-300
                      disabled:opacity-50 disabled:cursor-not-allowed
                      min-w-[150px]
                    `}
                  >
                    {formStatus === 'submitting' ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 008-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : formStatus === 'success' ? (
                      <span className="flex items-center justify-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Submitted!
                      </span>
                    ) : (
                      'Submit Application'
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </section>
        </main>
      </SignedIn>

      <SignedOut>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Please Sign In</h2>
            <p className="text-gray-400 mb-8">You need to be signed in to access the job portal.</p>
            <button
              onClick={goToSignIn}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
            >
              Sign In
            </button>
          </div>
        </div>
      </SignedOut>

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