// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVvYRIx163cY4LyK9w89QeKIkJN5XUifI",
  authDomain: "fujj-afe8a.firebaseapp.com",
  projectId: "fujj-afe8a",
  storageBucket: "fujj-afe8a.firebasestorage.app",
  messagingSenderId: "57034883396",
  appId: "1:57034883396:web:b71372f95e1f4fdad69711",
  measurementId: "G-8EE5SR7HFF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
