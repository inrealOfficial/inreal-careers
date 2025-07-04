'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Button from '@/components/ui/Button';
import { SignIn, useAuth } from '@clerk/nextjs';

export default function JobPortalSignInPage() {
  const router = useRouter();
  const { isSignedIn, isLoaded } = useAuth();

  // Pre-load protected routes
  useEffect(() => {
    router.prefetch('/job-portal/job-listing');
    router.prefetch('/job-portal/job-application');
  }, [router]);

  // Handle instant redirects for signed-in users
  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.replace('/job-portal/job-listing', { scroll: false });
    }
  }, [isSignedIn, isLoaded, router]);

  // Show nothing during auth check or transition
  if (!isLoaded || isSignedIn) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-blue-950">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-950 flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center py-16 px-4">
        <div className="max-w-md w-full bg-gray-900/80 backdrop-blur-xl border border-gray-800/50 rounded-2xl shadow-2xl p-8">
          <h1 className="text-3xl font-bold text-white mb-6 text-center">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Sign In to Job Portal
            </span>
          </h1>
          <SignIn
            appearance={{
              elements: {
                formButtonPrimary: "bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-bold py-3 hover:scale-105 transition-all duration-300",
                card: "bg-transparent shadow-none",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
                formFieldInput: "bg-gray-900/90 border border-gray-700",
                formFieldLabel: "text-gray-400",
                footerAction: "text-gray-400",
                identityPreviewText: "text-gray-400",
                identityPreviewEditButton: "text-blue-400"
              }
            }}
            afterSignInUrl="/"
            redirectUrl="/"
          />
          <div className="flex flex-col gap-4 mt-4">
            <Button
              className="w-full bg-gray-800/50 text-gray-300 border border-gray-700/50 rounded-lg font-bold py-3 hover:bg-gray-700/50 transition-all duration-300"
              onClick={() => router.replace('/')}
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