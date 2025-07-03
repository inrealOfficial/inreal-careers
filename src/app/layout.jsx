import { Geist, Geist_Mono } from "next/font/google";
import '../styles/index.css';
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { dark } from "@clerk/themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Inreal Careers",
  description: "Explore job opportunities at Inreal",
};

export default function RootLayout({ children }) {
  return (
      <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: "#6c47ff", // Optional customization
        },
      }}
    >
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <header>
          <SignedOut>
              <SignInButton />
              <SignUpButton>
                <button className="bg-[#6c47ff] text-black rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            
        </header>
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}