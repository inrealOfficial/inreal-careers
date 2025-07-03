'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { SignedIn, SignedOut, useUser } from '@clerk/nextjs';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

const departments = ['all', 'Engineering', 'AI/ML', 'Infrastructure', 'Design'];
const jobTypes = ['all', 'Full-time', 'Contract', 'Internship'];

const jobs = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    location: 'Remote (Global)',
    type: 'Full-time',
    salary: '$120K - $180K USD',
    experience: '5+ years',
    department: 'Engineering',
    summary: 'Lead the development of scalable SaaS platforms using React, Node.js, and cloud technologies.',
    tags: ['React', 'Node.js', 'AWS', 'MongoDB', 'TypeScript'],
    posted: '2 days ago',
  },
  {
    id: 2,
    title: 'Frontend Developer',
    location: 'Remote/Hybrid',
    type: 'Full-time',
    salary: '$90K - $140K USD',
    experience: '3+ years',
    department: 'Engineering',
    summary: 'Craft beautiful, performant UIs with React and Tailwind CSS.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Next.js'],
    posted: '1 week ago',
  },
  {
    id: 3,
    title: 'Backend Engineer',
    location: 'Remote',
    type: 'Full-time',
    salary: '$100K - $160K USD',
    experience: '3+ years',
    department: 'Engineering',
    summary: 'Design and build scalable backend services and APIs.',
    tags: ['Node.js', 'Python', 'PostgreSQL', 'Redis'],
    posted: '3 days ago',
  },
  {
    id: 4,
    title: 'ML/LLM Engineer',
    location: 'Remote',
    type: 'Full-time',
    salary: '$130K - $190K USD',
    experience: '4+ years',
    department: 'AI/ML',
    summary: 'Build and deploy AI-powered features for next-gen SaaS products.',
    tags: ['Python', 'PyTorch', 'LangChain', 'AWS'],
    posted: 'Just now',
  },
  {
    id: 5,
    title: 'AI Research Scientist',
    location: 'Remote',
    type: 'Full-time',
    salary: '$140K - $200K USD',
    experience: '5+ years',
    department: 'AI/ML',
    summary: 'Lead research initiatives in machine learning and artificial intelligence.',
    tags: ['Deep Learning', 'NLP', 'Research', 'PyTorch'],
    posted: '5 days ago',
  },
  {
    id: 6,
    title: 'Senior DevOps Engineer',
    location: 'Remote',
    type: 'Full-time',
    salary: '$120K - $180K USD',
    experience: '5+ years',
    department: 'Infrastructure',
    summary: 'Lead our cloud infrastructure and DevOps practices.',
    tags: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD'],
    posted: '1 day ago',
  },
  {
    id: 7,
    title: 'Site Reliability Engineer',
    location: 'Remote',
    type: 'Full-time',
    salary: '$110K - $170K USD',
    experience: '3+ years',
    department: 'Infrastructure',
    summary: 'Ensure reliability and performance of our cloud infrastructure.',
    tags: ['Linux', 'Monitoring', 'AWS', 'Docker'],
    posted: '4 days ago',
  },
  {
    id: 8,
    title: 'Senior Product Designer',
    location: 'Remote',
    type: 'Full-time',
    salary: '$100K - $160K USD',
    experience: '5+ years',
    department: 'Design',
    summary: 'Shape the future of our product through innovative design solutions.',
    tags: ['Figma', 'UI/UX', 'Design Systems'],
    posted: '2 weeks ago',
  },
  {
    id: 9,
    title: 'React Native Developer',
    location: 'Remote',
    type: 'Contract',
    salary: '$80-100/hour',
    experience: '3+ years',
    department: 'Engineering',
    summary: 'Develop cross-platform mobile applications using React Native.',
    tags: ['React Native', 'iOS', 'Android', 'Redux'],
    posted: '3 days ago',
  },
  {
    id: 10,
    title: 'Software Development Intern',
    location: 'Remote',
    type: 'Internship',
    salary: 'Competitive',
    experience: 'Student/Recent Graduate',
    department: 'Engineering',
    summary: 'Learn and contribute to real-world projects using modern web technologies.',
    tags: ['React', 'JavaScript', 'Node.js'],
    posted: '1 week ago',
  },
  {
    id: 11,
    title: 'ML/AI Research Intern',
    location: 'Remote',
    type: 'Internship',
    salary: 'Competitive',
    experience: 'Student/Recent Graduate',
    department: 'AI/ML',
    summary: 'Work on cutting-edge AI/ML projects and research initiatives.',
    tags: ['Python', 'ML', 'Deep Learning'],
    posted: '3 days ago',
  },
  {
    id: 12,
    title: 'UI/UX Design Intern',
    location: 'Remote',
    type: 'Internship',
    experience: 'Student/Recent Graduate',
    department: 'Design',
    summary: 'Collaborate with the design team to create intuitive and visually appealing user experiences.',
    tags: ['Figma', 'UI/UX', 'Prototyping'],
  },
];

export default function JobListPage() {
  const router = useRouter();
  const [filter, setFilter] = useState('all');
  const [departmentFilter, setDepartmentFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);
  const [formStatus, setFormStatus] = useState('');
  const { user } = useUser();

  const [applyForm, setApplyForm] = useState({
    fullName: '',
    email: '',
    experience: '',
    education: '',
    resume: null,
    additionalInfo: '',
  });

  const goToSignIn = () => router.push('/job-portal/sign-in');

  const filteredJobs = jobs.filter((job) => {
    const matchesType = filter === 'all' || job.type === filter;
    const matchesDepartment = departmentFilter === 'all' || job.department === departmentFilter;
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesType && matchesDepartment && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950">
      <Header />

      <SignedIn>
        <main className="py-20">
          {/* Hero Section with Search */}
          <section className="relative py-12 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                    Join Our Team
                  </span>
                </h1>
                <div className="max-w-2xl mx-auto">
                  <input
                    type="text"
                    placeholder="Search for your dream role..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-6 py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
              </motion.div>

              {/* Enhanced Filters */}
              <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
                <select
                  value={departmentFilter}
                  onChange={(e) => setDepartmentFilter(e.target.value)}
                  className="px-6 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-purple-500 transition-colors"
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept === 'all' ? '🎯 All Teams' : dept}
                    </option>
                  ))}
                </select>

                <div className="flex flex-wrap gap-2 justify-center">
                  {jobTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setFilter(type)}
                      className={`px-6 py-3 rounded-xl font-medium transition-all ${
                        filter === type
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                          : 'bg-gray-900/50 text-gray-300 hover:bg-gray-800'
                      }`}
                    >
                      {type === 'all' ? '👥 All Types' : type}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Jobs Grid */}
          <section className="max-w-7xl mx-auto px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredJobs.map((job, idx) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative bg-gray-900/50 backdrop-blur-xl rounded-xl p-6 border border-gray-800/50 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />

                  <div className="relative">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {job.title}
                        </h2>
                        <p className="text-gray-400 text-sm">{job.department}</p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          job.type === 'Internship'
                            ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                            : job.type === 'Contract'
                            ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                            : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                        }`}
                      >
                        {job.type}
                      </span>
                    </div>

                    <p className="text-gray-300 mb-4">{job.summary}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-gray-800/50 rounded-md text-xs text-gray-300">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => router.push(`/job-portal/job-application?jobId=${job.id}`)}
                      className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium 
                        hover:from-blue-600 hover:to-purple-600 transform hover:scale-[1.02] transition-all duration-300
                        flex items-center justify-center gap-2"
                    >
                      <span>Apply Now</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </main>
      </SignedIn>

      <SignedOut>
        <div className="min-h-[80vh] flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Sign In Required</h2>
            <p className="text-gray-400 mb-8">Please sign in to view and apply for positions</p>
            <button
              onClick={goToSignIn}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold 
                hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
            >
              Sign In
            </button>
          </div>
        </div>
      </SignedOut>

      <Footer />
    </div>
  );
}