'use client';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "How do I apply for a job?",
    answer: "After sign in,please Browse open positions, click 'Apply Now', and fill out the application form. Our team will review your application and contact you if you’re shortlisted."
  },
  {
    question: "Can I apply for multiple positions?",
    answer: "Yes, you can apply for as many positions as you are qualified for. Please submit a separate application for each role."
  },
  {
    question: "What is the interview process like?",
    answer: "Our process typically includes an initial screening, a technical or skills assessment, and a final interview with the team."
  },
  {
    question: "Do you offer remote or hybrid roles?",
    answer: "Yes! Many of our positions are remote-friendly or offer flexible hybrid options."
  },
 
];

export default function JobPortalFAQPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <section className="relative bg-gradient-to-b from-gray-900 via-black to-black py-20 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-white">Job Portal </span>
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  FAQ
                </span>
                <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-shimmer"></span>
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Answers to common questions about applying, working, and growing with us.
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gray-900/60 border border-gray-800 rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="text-blue-400 text-2xl pt-1">?</div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">{faq.question}</h4>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}