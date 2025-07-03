'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Button from '@/components/ui/Button';
import { SignIn, useAuth } from '@clerk/nextjs';
import { darkMode } from '../../../../tailwind.config';

export default function JobPortalSignInPage() {
  const router = useRouter();
  const { isSignedIn } = useAuth();

  // Redirect if already signed in
  useEffect(() => {
    if (isSignedIn) {
      router.push('/job-portal');
    }
  }, [isSignedIn, router]);

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center py-16 px-4">
        <div className="max-w-md w-full bg-gray-900/80 border border-gray-800 rounded-2xl shadow-2xl p-8">
          <h1 className="text-3xl font-bold text-white mb-6 text-center">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Sign In to Job Portal
            </span>
          </h1>
          {/* Clerk SignIn component */}
          <SignIn
            appearance={{
              elements: {
                formButtonPrimary: "bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-bold py-3 hover:scale-105 transition-all duration-300"
              }
            }}
            redirectUrl="/job-portal"
          />
          <div className="flex flex-col gap-4 mt-4">
            <Button
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-bold py-3 hover:scale-105 transition-all duration-300"
              onClick={() => router.push('/job-portal')}
            >
              Back to Job Portal
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}