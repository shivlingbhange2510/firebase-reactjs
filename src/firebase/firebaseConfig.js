// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAleSc5w-SSmllpQpoe5_SqgwuFKQDgRM",
  authDomain: "react-redux-social-media-57816.firebaseapp.com",
  projectId: "react-redux-social-media-57816",
  storageBucket: "react-redux-social-media-57816.firebasestorage.app",
  messagingSenderId: "247175195959",
  appId: "1:247175195959:web:09950e3b3fe79d5ab8feb2",
  measurementId: "G-W3V34PJZ2Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app