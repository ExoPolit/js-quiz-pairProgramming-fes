// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnxq5ynDZfADN5i4eBwKy_BzOV7rmtO4Y",
  authDomain: "myanimesite-5c7f0.firebaseapp.com",
  projectId: "myanimesite-5c7f0",
  storageBucket: "myanimesite-5c7f0.appspot.com",
  messagingSenderId: "727776872299",
  appId: "1:727776872299:web:815d08d7db983d527e2e2e",
  measurementId: "G-EY1H5ME5FZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();