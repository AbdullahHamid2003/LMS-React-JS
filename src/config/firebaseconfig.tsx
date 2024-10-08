// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWzS1xp4MjW5d2Bhd3WQy3TRDCYEI1S98",
  authDomain: "learning-management-syst-6a0ea.firebaseapp.com",
  databaseURL: "https://learning-management-syst-6a0ea-default-rtdb.firebaseio.com",
  projectId: "learning-management-syst-6a0ea",
  storageBucket: "learning-management-syst-6a0ea.appspot.com",
  messagingSenderId: "407057400376",
  appId: "1:407057400376:web:d8e0f0e156e0234f871ccd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);