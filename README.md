# Inreal Careers Portal

A modern job portal built with Next.js, featuring job listings, applications, and user authentication.

## 🚀 Features

- **Job Listings:** Browse available positions across different departments
- **Job Applications:** Submit applications with resume links
- **User Authentication:** Secure sign-in/sign-up via Clerk
- **FAQ Section:** Common questions and answers about the application process
- **Responsive Design:** Mobile-friendly interface with modern UI
- **Real-time Database:** Firebase integration for application storage

## 🛠️ Tech Stack

- [Next.js 14](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Firebase](https://firebase.google.com/)
- [Clerk](https://clerk.dev/)
- [Framer Motion](https://www.framer.com/motion/)

## 📋 Prerequisites

- Node.js 18+ 
- npm/yarn/pnpm
- Firebase account
- Clerk account

## ⚙️ Configuration

### Firebase Setup

1. Create a new Firebase project
2. Replace the Firebase config in `src/app/firebase.js`:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### Clerk Setup

1. Create a Clerk account and project
2. Add Clerk env variables to `.env.local`:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
```

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/inreal-careers.git
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser

## 📂 Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── job-portal/     # Job portal pages
│   ├── firebase.js     # Firebase configuration
│   └── layout.jsx      # Root layout
├── components/         # Reusable components
├── hooks/             # Custom hooks
└── styles/            # Global styles
```

## 🔐 Authentication

The app uses Clerk for authentication. Protected routes require sign-in:
- `/job-portal/job-application`
- `/job-portal/job-listing`

## 📝 Database

Job applications are stored in Firebase Firestore with the following structure:
- Collection: `candidates`
- Document fields:
  - fullName
  - email
  - phone
  - positionType
  - role
  - experience
  - resumeLink
  - additionalInfo

## 🌐 Deployment

Deploy on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/inreal-careers)


