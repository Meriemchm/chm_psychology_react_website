// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "rameem-2024.firebaseapp.com",
  projectId: "rameem-2024",
  storageBucket: "rameem-2024.appspot.com",
  messagingSenderId: "380008552996",
  appId: "1:380008552996:web:2ec9f4941cc74e4dcc56b1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
