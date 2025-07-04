'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { SignedIn, SignedOut, useUser } from '@clerk/nextjs';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

const departments = ['all', 'Engineering', 'AI/ML', 'Infrastructure', 'Design'];
const jobTypes = ['all', 'Full-time', 'Internship'];

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
    description: `As a Senior Full Stack Developer, you will lead the development of scalable SaaS platforms using React, Node.js, and cloud technologies.`,
    requirements: [
      '5+ years experience in full stack development',
      'Expertise in React, Node.js and Next.js',
      'Experience with AWS and MongoDB',
      'Strong TypeScript skills',
      'Leadership and mentoring experience'
    ]
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
    description: `As a Frontend Developer, you will craft beautiful, performant UIs with React and Tailwind CSS.`,
    requirements: [
      '3+ years experience in frontend development',
      'Proficient in React and TypeScript',
      'Experience with Tailwind CSS and Next.js',
      'Strong eye for design and UX'
    ]
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
    description: `As a Backend Engineer, you will design and build scalable backend services and APIs.`,
    requirements: [
      '3+ years experience in backend development',
      'Strong Node.js and Python skills',
      'Experience with PostgreSQL and Redis',
      'API design and implementation experience'
    ]
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
    description: `As an ML/LLM Engineer, you will build and deploy AI-powered features for next-gen SaaS products.`,
    requirements: [
      '4+ years experience in ML/AI',
      'Proficient in Python and PyTorch',
      'Experience with LangChain and AWS',
      'LLM deployment experience'
    ]
  },
  {
    id: 5,
    title: 'AI Engineer',
    location: 'Remote',
    type: 'Full-time',
    salary: '$140K - $200K USD',
    experience: '5+ years',
    department: 'AI/ML',
    summary: 'Lead research initiatives in machine learning and artificial intelligence.',
    tags: ['Deep Learning', 'NLP', 'Research', 'PyTorch'],
    posted: '5 days ago',
    description: `As an AI Research Scientist, you will lead research initiatives in machine learning and artificial intelligence.`,
    requirements: [
      '5+ years experience in AI research',
      'Deep Learning and NLP expertise',
      'Strong publication record',
      'Experience with PyTorch'
    ]
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
    description: `As a Senior DevOps Engineer, you will lead our cloud infrastructure and DevOps practices.`,
    requirements: [
      '5+ years experience in DevOps',
      'Expertise in AWS and Kubernetes',
      'Experience with Terraform and CI/CD pipelines'
    ]
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
    description: `As a Site Reliability Engineer, you will ensure reliability and performance of our cloud infrastructure.`,
    requirements: [
      '3+ years experience in SRE or DevOps',
      'Strong Linux and AWS skills',
      'Experience with Docker and monitoring tools'
    ]
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
    description: `As a Senior Product Designer, you will shape the future of our product through innovative design solutions.`,
    requirements: [
      '5+ years experience in product design',
      'Expertise in Figma and UI/UX',
      'Experience with design systems'
    ]
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
    description: `As a Software Development Intern, you will learn and contribute to real-world projects using modern web technologies.`,
    requirements: [
      'Currently pursuing a degree in Computer Science or related field',
      'Familiarity with React and Node.js',
      'Eagerness to learn and grow'
    ]
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
    description: `As an ML/AI Research Intern, you will work on cutting-edge AI/ML projects and research initiatives.`,
    requirements: [
      'Currently pursuing a degree in Computer Science, AI, or related field',
      'Familiarity with Python and ML concepts',
      'Interest in research and innovation'
    ]
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
    posted: '2 weeks ago',
    description: `As a UI/UX Design Intern, you will collaborate with the design team to create intuitive and visually appealing user experiences.`,
    requirements: [
      'Currently pursuing a degree in Design or related field',
      'Familiarity with Figma and UI/UX principles',
      'Strong portfolio or sample work'
    ]
  },
];

export default function JobListPage() {
  const router = useRouter();
  const [filter, setFilter] = useState('all');
  const [departmentFilter, setDepartmentFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [modalJob, setModalJob] = useState(null);

  const filteredJobs = jobs.filter((job) => {
    const matchesType = filter === 'all' || job.type === filter;
    const matchesDepartment = departmentFilter === 'all' || job.department === departmentFilter;
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesType && matchesDepartment && matchesSearch;
  });

  const goToSignIn = () => router.push('/job-portal/sign-in');

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
                      onClick={() => setModalJob(job)}
                      className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium 
                        hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300
                        flex items-center justify-center gap-2 shadow-lg"
                    >
                      <span>View Description</span>
                   
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                     
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Modal Overlay */}
          <AnimatePresence>
            {modalJob && (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  initial={{ scale: 0.95, y: 40, opacity: 0 }}
                  animate={{ scale: 1, y: 0, opacity: 1 }}
                  exit={{ scale: 0.95, y: 40, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  className="relative w-full max-w-xl mx-auto bg-gradient-to-br from-gray-900 via-gray-800 to-blue-950 rounded-2xl shadow-2xl p-8 border border-purple-700"
                >
                  <button
                    onClick={() => setModalJob(null)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors text-2xl"
                    aria-label="Close"
                  >
                    &times;
                  </button>
                  <div className="mb-4 flex items-center gap-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {modalJob.type}
                    </span>
                    <span className="text-gray-400 text-sm">{modalJob.location}</span>
                    <span className="text-gray-400 text-sm">{modalJob.salary}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">{modalJob.title}</h2>
                  <p className="text-purple-300 font-medium mb-2">{modalJob.department}</p>
                  <p className="text-gray-300 mb-4">{modalJob.description}</p>
                  <h4 className="font-semibold text-white mb-1">Requirements:</h4>
                  <ul className="list-disc list-inside mb-4 text-gray-200">
                    {modalJob.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {modalJob.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gray-800/50 rounded-md text-xs text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => router.push(`/job-portal/job-application?jobId=${modalJob.id}`)}
                    className="w-full px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 mt-2"
                  >
                    Apply Now
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
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