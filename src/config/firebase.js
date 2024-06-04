// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQNpCGpM8XC9EzC13QzN7VjyymKcSaVGQ",
  authDomain: "tecnicosenas.firebaseapp.com",
  projectId: "tecnicosenas",
  storageBucket: "tecnicosenas.appspot.com",
  messagingSenderId: "220710728730",
  appId: "1:220710728730:web:8959726a03ca08711a8da3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
