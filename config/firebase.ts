import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyChw-HanYd541O8zQHHcYo7xAVbQsGyUA4",
    authDomain: "trendish-ed216.firebaseapp.com",
    projectId: "trendish-ed216",
    storageBucket: "trendish-ed216.firebasestorage.app",
    messagingSenderId: "1084990971687",
    appId: "1:1084990971687:web:8afddbecd9b21bc7c3d302",
    measurementId: "G-ZXR2PG9TQK"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);