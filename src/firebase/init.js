// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvJs6pKin8l1oKDdPz3nL50Gcmb4Fo_Mo",
  authDomain: "jsquiz-586c3.firebaseapp.com",
  projectId: "jsquiz-586c3",
  storageBucket: "jsquiz-586c3.appspot.com",
  messagingSenderId: "641959410374",
  appId: "1:641959410374:web:0e78a0270d02cb1339b5c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();