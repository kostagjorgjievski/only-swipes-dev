// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDja74ZHT-NKXjhDn2Yg3VVaQAHzVgrfv4",
  authDomain: "only-swipes-dev.firebaseapp.com",
  projectId: "only-swipes-dev",
  storageBucket: "only-swipes-dev.appspot.com",
  messagingSenderId: "63642447850",
  appId: "1:63642447850:web:e120bda5b2c0e00de58c93"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);