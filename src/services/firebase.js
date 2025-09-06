

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEqvZqx-M2ig7MDyiaRloasIaaf8WNwlk",
  authDomain: "photogallery-ab11f.firebaseapp.com",
  projectId: "photogallery-ab11f",
  storageBucket: "photogallery-ab11f.firebasestorage.app",
  messagingSenderId: "447878531271",
  appId: "1:447878531271:web:56f23937d78cfb45ae16e2",
  measurementId: "G-4223BWE7D8"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getDatabase(app);

export const signUp = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
};

export const login = (email, password)=>{
    return signInWithEmailAndPassword(auth ,email, password)
}


export const logout = ()=>signOut(auth);


