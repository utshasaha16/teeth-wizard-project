// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF5R0uHLmBMr1nuRa3vvsy5sam6qQu0oA",
  authDomain: "teeth-wizard-487a0.firebaseapp.com",
  projectId: "teeth-wizard-487a0",
  storageBucket: "teeth-wizard-487a0.firebasestorage.app",
  messagingSenderId: "54483161023",
  appId: "1:54483161023:web:564aa711d4c6be94af9b0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth