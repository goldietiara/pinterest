// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIZRJakVWmvNAPKnQe9QAxh59TXC6Mlk0",
  authDomain: "pinterest-clone-641ba.firebaseapp.com",
  projectId: "pinterest-clone-641ba",
  storageBucket: "pinterest-clone-641ba.appspot.com",
  messagingSenderId: "775152138220",
  appId: "1:775152138220:web:8a72411417211ce2b672c9",
  measurementId: "G-YS4VVFJH4X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
