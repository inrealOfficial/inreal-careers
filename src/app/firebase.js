import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBV4ZumWT1MKTMbKQ0TrbEvnxVkb3zOk2I",
  authDomain: "inreal-cd9de.firebaseapp.com",
  projectId: "inreal-cd9de",
  storageBucket: "inreal-cd9de.appspot.com",
  messagingSenderId: "297668791578",
  appId: "1:297668791578:web:0ad5414ae33c61f23a70a3"
};

// Initialize Firebase
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);