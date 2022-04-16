// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcyJuBK4yuUnBYMZfUPNNCJDm19pfmPVE",
  authDomain: "genius-car-services-5b37d.firebaseapp.com",
  projectId: "genius-car-services-5b37d",
  storageBucket: "genius-car-services-5b37d.appspot.com",
  messagingSenderId: "252694650685",
  appId: "1:252694650685:web:607868096a6fdf591c2f54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;