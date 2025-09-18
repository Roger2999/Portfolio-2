import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDSqvLcwOhj92m4WgFRecKz_GEbXBmxJfA",
  authDomain: "portfolio-8bc91.firebaseapp.com",
  projectId: "portfolio-8bc91",
  storageBucket: "portfolio-8bc91.firebasestorage.app",
  messagingSenderId: "80973093496",
  appId: "1:80973093496:web:9f97ad94d7d1c980d62b8d",
  measurementId: "G-0D7HV03F9D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
