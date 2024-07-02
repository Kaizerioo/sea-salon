// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { addDoc, getFirestore, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAr_NStDVkJsVw5Uoa7kSjaP4D3fBYPM2U",
  authDomain: "sea-salon-ecdea.firebaseapp.com",
  projectId: "sea-salon-ecdea",
  storageBucket: "sea-salon-ecdea.appspot.com",
  messagingSenderId: "761701740055",
  appId: "1:761701740055:web:3f15a329f9dc141a6f3652",
  measurementId: "G-PLWG9KLS7R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {app, auth, db, addDoc, collection};