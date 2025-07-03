'use client';

import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useInView } from '@/hooks/useInView';
import { motion } from 'framer-motion';
import HeroSection from '@/components/common/HeroSection';

export default function LandingPage() {
  const router = useRouter();
  const [benefitsRef, isBenefitsVisible] = useInView();
  const [techRef, isTechVisible] = useInView();
  const [stayConnectedRef, isStayConnectedVisible] = useInView();

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
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 flex flex-col">
      <Header />

      <HeroSection />
      
      {/* Career Opportunities Section */}
<section ref={techRef} className="bg-black py-16">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2
        className={`text-4xl md:text-5xl font-bold mb-4 opacity-0 ${
          isTechVisible ? 'animate-fade-up [animation-delay:200ms]' : ''
        }`}
      >
        <span className="text-white">Career Paths at </span>
        <span className="relative">
          <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Inreal
          </span>
          <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent animate-shimmer"></span>
        </span>
      </h2>
      <p
        className={`text-xl text-gray-400 max-w-3xl mx-auto opacity-0 ${
         isTechVisible ? 'animate-fade-up [animation-delay:400ms]' : ''
        }`}
      >
        Explore specialized roles across tech, design, cloud, and product development — built to grow your career.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          icon: "/career/software.jpg",
          title: "Software Engineering",
          description: "Work on scalable backend and full-stack systems that power real-world applications.",
          altText: "Software Engineering Image",
          tag: "Full Stack",
          bgColor: "from-blue-500/10 to-cyan-500/10",
        },
        {
          icon: "/career/uiux.jpg",
          title: "UI/UX Design",
          description: "Design human-centered experiences and interfaces users fall in love with.",
          altText: "UI/UX Design Image",
          tag: "Product Design",
          bgColor: "from-purple-500/10 to-pink-500/10",
        },
        {
          icon: "/career/webdev.jpg",
          title: "Web Development",
          description: "Create responsive web applications with modern tech stacks.",
          altText: "Web Development Image",
          tag: "Frontend/Backend",
          bgColor: "from-indigo-500/10 to-blue-500/10",
        },
        {
          icon: "/career/mobileapp.jpg",
          title: "Mobile Applications",
          description: "Build fast, reliable mobile apps for both iOS and Android platforms.",
          altText: "Mobile App Image",
          tag: "Flutter / React Native",
          bgColor: "from-emerald-500/10 to-teal-500/10",
        },
        {
          icon: "/career/datascientist.jpg",
          title: "Data Science",
          description: "Leverage AI and ML to turn data into valuable insights for business growth.",
          altText: "Data Science Image",
          tag: "ML / AI",
          bgColor: "from-yellow-500/10 to-orange-500/10",
        },
        {
          icon: "/career/devops.jpg",
          title: "DevOps & Cloud",
          description: "Maintain scalable infrastructure with CI/CD, Docker, and AWS.",
          altText: "DevOps Image",
          tag: "AWS / Docker / CI-CD",
          bgColor: "from-sky-500/10 to-indigo-500/10",
        },
      ].map((job, index) => (
        <div
          key={index}
          className={`opacity-0 ${
            isTechVisible
              ? `animate-fade-up [animation-delay:${600 + index * 200}ms]`
              : ''
          }`}
        >
          <div className="bg-black rounded-xl overflow-hidden group hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10">
            <div
              className={`h-64 bg-gradient-to-br ${job.bgColor} flex items-center justify-center p-8 relative overflow-hidden`}
            >
              <div className="absolute inset-0 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl transform -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl transform translate-y-1/2"></div>
              </div>
             <div className="h-48 w-full relative">
                <img
                 src={job.icon}
                 alt={job.altText}
                 className="w-full h-full object-cover"
                  />
                 <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition duration-300" />
                 </div>

            </div>
            <div className="p-8 backdrop-blur-sm">
              <span className="text-sm font-medium text-indigo-400">{job.tag}</span>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors duration-300">
                {job.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {job.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* Benefits Section */} 
    <section ref={benefitsRef} className="relative bg-gray-900 py-16 overflow-hidden">

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




      {/* Section 1: Normal Layout */}
      <section className="relative bg-gradient-to-b from-black via-gray-900 to-black py-24 overflow-hidden">
        {/* Blurred Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center md:justify-start"
          >
            <div className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/team-working-together-project (0).jpg"
                alt="Join InReal Team"
                width={800}
                height={1000}
                className="object-cover w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Build Your Career With InReal
              </span>
            </h2>
            <ul className="space-y-5 text-lg text-gray-300">
              {[
                'Explore exciting roles across tech, design, and product teams',
                'Be part of a fast-growing job-tech company',
                'Remote-friendly, inclusive, and innovative culture',
                'Grow your career with mentorship and real impact'
              ].map((text, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-blue-400 text-2xl">✓</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Reversed Layout */}
      <section className="relative bg-gradient-to-b from-black via-gray-900 to-black py-24 overflow-hidden">
        {/* Blurred Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center md:justify-start"
          >
            <div className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/team-working-together-project (1).jpg"
                alt="Work at InReal"
                width={800}
                height={1000}
                className="object-cover w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
                Work Where You Matter
              </span>
            </h2>
            <ul className="space-y-5 text-lg text-gray-300">
              {[
                'Impact millions of users through meaningful work',
                'Contribute to real-world innovation in job discovery',
                'Enjoy autonomy, trust, and a dynamic team',
                'Your growth is our mission—every day, every step'
              ].map((text, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-purple-400 text-2xl">✓</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
  

   <section ref={stayConnectedRef} className="bg-gray-900 py-16">
   <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2
        className={`text-4xl md:text-5xl font-bold mb-4 opacity-0 ${
          isStayConnectedVisible ? 'animate-fade-up [animation-delay:200ms]' : ''
        }`}
      >
        <span className="text-white">Stay </span>
        <span className="relative">
          <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Connected
          </span>
          <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent animate-shimmer"></span>
        </span>
      </h2>
      <p
        className={`text-xl text-gray-400 max-w-3xl mx-auto opacity-0 ${
          isStayConnectedVisible ? 'animate-fade-up [animation-delay:400ms]' : ''
        }`}
      >
        Discover opportunities and stay informed with career updates and insights.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: 'Explore Opportunities',
          description: 'Explore open roles that match your interests and skills.',
          buttonText: 'Search jobs',
          href: '/job-portal/job-listing',
          bgColor: 'from-indigo-500/10 to-purple-500/10'
        },
        {
          title: 'Join Us',
          description: 'Apply now and take the next step in your career journey.',
          buttonText: 'Learn more',
          href: '/job-portal/job-application',
          bgColor: 'from-cyan-500/10 to-blue-500/10'
        },
        {
          title: 'Get Job Alerts',
          description: 'Receive notifications when we have open roles and other career news.',
          buttonText: 'Register for job alerts',
          href: '/job-portal/sign-in',
          bgColor: 'from-green-500/10 to-emerald-500/10'
        }
      ].map((item, index) => (
        <div
          key={index}
          className={`opacity-0 ${
            isStayConnectedVisible ? `animate-fade-up [animation-delay:${600 + index * 200}ms]` : ''
          }`}
        >
          <div className="bg-black rounded-xl overflow-hidden group hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10">
            <div className={`h-64 bg-gradient-to-br ${item.bgColor} flex items-center justify-center p-8 relative`}>
              <div className="absolute inset-0 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl transform -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl transform translate-y-1/2"></div>
              </div>
              <h3 className="text-2xl font-bold text-white text-center z-10">
                {item.title}
              </h3>
            </div>
            <div className="p-8 backdrop-blur-sm">
              <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
                {item.description}
              </p>
              <a
                href={item.href}
                className="inline-block text-indigo-400 hover:text-indigo-300 font-medium transition-colors duration-300"
              >
                {item.buttonText} &rarr;
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

        
        
      <Footer />
    </div>
  );
}