import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBatY8zF9BwWxxqBaOS2GYcbY44kdD83d8",
  authDomain: "finance-app-1d3f9.firebaseapp.com",
  projectId: "finance-app-1d3f9",
  storageBucket: "finance-app-1d3f9.firebasestorage.app",
  messagingSenderId: "429883473968",
  appId: "1:429883473968:web:692f9403cc5dc0e5286df5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export const db = getFirestore();
