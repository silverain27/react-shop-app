// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwl7Q2vxfTU7dXU1NBCKAJStT1cQH7zso",
  authDomain: "react-shop-app-3c500.firebaseapp.com",
  projectId: "react-shop-app-3c500",
  storageBucket: "react-shop-app-3c500.appspot.com",
  messagingSenderId: "531547958292",
  appId: "1:531547958292:web:8a8696f5cd1cfa5ab70b01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app