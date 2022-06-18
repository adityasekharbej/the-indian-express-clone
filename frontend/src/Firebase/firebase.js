// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCV_aRDXyH3fR0jf3Vsz1uvlPBpSIGy1jM",
  authDomain: "signin-f12a6.firebaseapp.com",
  projectId: "signin-f12a6",
  storageBucket: "signin-f12a6.appspot.com",
  messagingSenderId: "489255089129",
  appId: "1:489255089129:web:aa78a8ca0280d41a61d178"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);