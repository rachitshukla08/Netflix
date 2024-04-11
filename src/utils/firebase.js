// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTyxcM7CLTBKtII9LwTTrcQ_VHqHsrd5s",
  authDomain: "netflixgpt-48b70.firebaseapp.com",
  projectId: "netflixgpt-48b70",
  storageBucket: "netflixgpt-48b70.appspot.com",
  messagingSenderId: "794177248352",
  appId: "1:794177248352:web:7b39376e666b325cc5f705",
  measurementId: "G-PTTVC2TX7L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
