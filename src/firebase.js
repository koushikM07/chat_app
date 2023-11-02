import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2ZT8qzo2LtxX5HBNSy4oHrltGDzfy7NI",
  authDomain: "chatapp-27338.firebaseapp.com",
  projectId: "chatapp-27338",
  storageBucket: "chatapp-27338.appspot.com",
  messagingSenderId: "976169651508",
  appId: "1:976169651508:web:6544a5673209cd02cfe961",
  measurementId: "G-W4G44549CJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
