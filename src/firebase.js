import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAP-5jwbKUHTwOYVnb5mRizG7MngB-5MOk",
  authDomain: "chatapp-1a3d6.firebaseapp.com",
  projectId: "chatapp-1a3d6",
  storageBucket: "chatapp-1a3d6.appspot.com",
  messagingSenderId: "17437772068",
  appId: "1:17437772068:web:aea383333e3f5407568bb1",
  measurementId: "G-BGZQLHHV8V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
